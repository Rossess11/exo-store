// ====================================================================
// EXODUS STORE - MOTOR PRINCIPAL DE LA APLICACIÓN
// ====================================================================

const app = {
    currentCategory: 'all',
    searchQuery: '',
    discordUser: {
        username: 'Rossos',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Rossos',
        badge: 'Desarrollador'
    },

    init() {
        this.loadDiscordUser();
        this.renderStats();
        this.renderHomeFeatured();
        this.renderCatalog();
        this.setupKeyboardListeners();
    },

    // ----------------------------------------------------------------
    // NAVEGACIÓN ENTRE VISTAS (SPA)
    // ----------------------------------------------------------------
    showView(viewName) {
        // Ocultar todas las secciones
        const sections = document.querySelectorAll('.view-section');
        sections.forEach(sec => sec.classList.remove('active'));

        // Desactivar todos los botones de nav
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => btn.classList.remove('active'));

        // Mostrar sección elegida
        const targetView = document.getElementById(`view${viewName.charAt(0).toUpperCase() + viewName.slice(1)}`);
        const targetTab = document.getElementById(`tab${viewName.charAt(0).toUpperCase() + viewName.slice(1)}`);

        if (targetView) {
            targetView.classList.add('active');
        }
        if (targetTab) {
            targetTab.classList.add('active');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ----------------------------------------------------------------
    // RENDERIZADO DE ESTADÍSTICAS
    // ----------------------------------------------------------------
    renderStats() {
        const countAll = document.getElementById('countAll');
        const statScripts = document.getElementById('statScripts');
        if (countAll) countAll.textContent = EXODUS_SCRIPTS.length;
        if (statScripts) statScripts.textContent = EXODUS_SCRIPTS.length;
    },

    // ----------------------------------------------------------------
    // RENDERIZADO DE CARDS EN INICIO
    // ----------------------------------------------------------------
    renderHomeFeatured() {
        const container = document.getElementById('homeFeaturedGrid');
        if (!container) return;

        // Mostramos los 3 más relevantes en inicio
        const featured = EXODUS_SCRIPTS.slice(0, 3);
        container.innerHTML = featured.map(script => this.createCardHTML(script)).join('');
    },

    // ----------------------------------------------------------------
    // RENDERIZADO DEL CATÁLOGO COMPLETO
    // ----------------------------------------------------------------
    renderCatalog() {
        const container = document.getElementById('catalogGrid');
        if (!container) return;

        let filtered = EXODUS_SCRIPTS;

        // Filtro por categoría
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(s => s.category === this.currentCategory);
        }

        // Filtro por texto de búsqueda
        if (this.searchQuery.trim() !== '') {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(s => {
                return s.title.toLowerCase().includes(query) ||
                       s.shortDesc.toLowerCase().includes(query) ||
                       s.categoryLabel.toLowerCase().includes(query) ||
                       s.frameworks.some(f => f.toLowerCase().includes(query)) ||
                       s.commands.some(c => c.toLowerCase().includes(query));
            });
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; background:#fff; border:var(--border-retro); border-radius:var(--radius-box); padding:40px; text-align:center; box-shadow:var(--shadow-retro);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size:42px; margin-bottom:14px; color:#555;"></i>
                    <h3 style="font-family:'Bebas Neue', sans-serif; font-size:28px;">NO SE ENCONTRARON SCRIPTS</h3>
                    <p style="color:var(--gray-mid); font-weight:600;">No hay resultados para el filtro actual. Prueba con otro término de búsqueda.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(script => this.createCardHTML(script)).join('');
    },

    // ----------------------------------------------------------------
    // GENERADOR HTML DE CARD DE SCRIPT
    // ----------------------------------------------------------------
    createCardHTML(script) {
        const frameworksHtml = script.frameworks
            .map(fw => `<span class="fw-pill">${fw}</span>`)
            .join('');

        const hasImage = script.image && script.image.trim() !== '';

        return `
            <article class="script-card">
                <div class="card-banner" style="background: ${script.bannerGrad};">
                    ${hasImage ? `
                        <img src="${script.image}" class="card-banner-img" alt="${script.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="card-banner-fallback" style="display:none;">
                            <i class="${script.accentIcon} card-banner-icon"></i>
                        </div>
                        <div class="card-banner-overlay"></div>
                    ` : `
                        <div class="card-banner-bg"></div>
                        <i class="${script.accentIcon} card-banner-icon"></i>
                    `}
                    <span class="card-tag">${script.tag}</span>
                    <span class="card-resmon">${script.resmon}</span>
                </div>

                <div class="card-body">
                    <span class="card-category-label">${script.categoryLabel}</span>
                    <h3 class="card-title">${script.title}</h3>
                    <p class="card-desc">${script.shortDesc}</p>

                    <div class="card-frameworks-row">
                        ${frameworksHtml}
                    </div>

                    <div class="card-footer">
                        <span class="card-status-badge">
                            <i class="fa-solid fa-circle"></i> DISPONIBLE
                        </span>
                        <button class="card-btn" onclick="app.openScriptModal('${script.id}')">
                            <i class="fa-solid fa-eye"></i> VER DETALLES
                        </button>
                    </div>
                </div>
            </article>
        `;
    },

    // ----------------------------------------------------------------
    // FILTROS Y BÚSQUEDA
    // ----------------------------------------------------------------
    filterByCategory(category) {
        this.currentCategory = category;

        // Actualizar visual de botones de filtro
        const pills = document.querySelectorAll('.filter-pill');
        pills.forEach(p => {
            if (p.getAttribute('data-cat') === category) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });

        // Asegurarse de estar en la vista de catálogo
        this.showView('catalog');
        this.renderCatalog();
    },

    handleSearch(query) {
        this.searchQuery = query;
        this.renderCatalog();
    },

    // ----------------------------------------------------------------
    // MODAL DE DETALLE DE SCRIPT
    // ----------------------------------------------------------------
    openScriptModal(scriptId) {
        const script = EXODUS_SCRIPTS.find(s => s.id === scriptId);
        if (!script) return;

        document.getElementById('modalScriptTitle').textContent = script.title;
        document.getElementById('modalTag').textContent = script.tag;
        document.getElementById('modalResmon').textContent = `RESMON: ${script.resmon}`;
        document.getElementById('modalFullDesc').textContent = script.fullDesc;

        // Preview image in modal
        const bannerWrap = document.getElementById('modalBannerWrap');
        const bannerImg = document.getElementById('modalBannerImg');
        if (script.image && script.image.trim() !== '') {
            bannerImg.src = script.image;
            bannerImg.onerror = () => {
                if (bannerWrap) bannerWrap.style.display = 'none';
            };
            bannerImg.onload = () => {
                if (bannerWrap) bannerWrap.style.display = 'block';
            };
        } else {
            if (bannerWrap) bannerWrap.style.display = 'none';
        }

        // Frameworks
        const fwContainer = document.getElementById('modalFrameworks');
        fwContainer.innerHTML = script.frameworks
            .map(f => `<span class="fw-pill">${f}</span>`)
            .join('');

        // Features
        const featuresContainer = document.getElementById('modalFeaturesList');
        featuresContainer.innerHTML = script.features
            .map(feat => `<li><i class="fa-solid fa-check"></i> <span>${feat}</span></li>`)
            .join('');

        // Tech specs / commands
        const techSpecs = document.getElementById('modalTechSpecs');
        techSpecs.innerHTML = `
            <strong>// COMANDOS DE CONSOLA / JUGADOR:</strong><br>
            ${script.commands.map(cmd => `> ${cmd}`).join('<br>')}<br><br>
            <strong>// DEPENDENCIAS REQUERIDAS:</strong><br>
            ${script.dependencies.map(dep => `* ${dep}`).join('<br>')}
        `;

        document.getElementById('scriptModalOverlay').classList.add('active');
    },

    closeScriptModal() {
        document.getElementById('scriptModalOverlay').classList.remove('active');
    },

    // ----------------------------------------------------------------
    // PERFIL DE DESARROLLADOR POR DEFECTO
    // ----------------------------------------------------------------
    loadDiscordUser() {
        this.discordUser = {
            username: 'Rossos',
            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Rossos',
            badge: 'Desarrollador'
        };
        this.updateDiscordPillUI();
    },

    updateDiscordPillUI() {
        const nameEl = document.getElementById('userName');
        const badgeEl = document.getElementById('userBadge');
        const avatarEl = document.getElementById('userAvatar');

        if (nameEl) nameEl.textContent = this.discordUser.username;
        if (badgeEl) badgeEl.innerHTML = `<i class="fa-brands fa-discord"></i> ${this.discordUser.badge}`;
        if (avatarEl) avatarEl.src = this.discordUser.avatar;
    },

    // ----------------------------------------------------------------
    // UTILIDADES: COPIAR AL PORTAPAPELES Y SCROLL
    // ----------------------------------------------------------------
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('¡IP de conexión copiada al portapapeles!');
        }).catch(() => {
            prompt('Copia este comando:', text);
        });
    },

    scrollToPolicy(id) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            el.style.transform = 'translate(-4px, -4px)';
            el.style.boxShadow = '8px 8px 0px #000';
            setTimeout(() => {
                el.style.transform = '';
                el.style.boxShadow = '';
            }, 1200);
        }
    },

    setupKeyboardListeners() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeScriptModal();
            }
        });
    }
};

// Arrancar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

