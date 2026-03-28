module.exports = {
  content: [
    './views/**/*.{twig,html}',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8D48B',
        'gold-dark': '#A88B3A',
        'dark-bg': '#0A0A0F',
        'dark-card': '#12121A',
        'dark-card-hover': '#1A1A25',
        'dark-border': '#1E1E2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        primary: ['Tajawal', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Cairo', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      boxShadow: {
        gold: '0 0 30px rgba(201, 168, 76, 0.15)',
        card: '0 4px 24px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 40px rgba(0, 0, 0, 0.4)',
        xl: '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.6)' },
        },
      },
      gradientColorStops: {
        gold: {
          '0%': '#C9A84C',
          '50%': '#E8D48B',
          '100%': '#C9A84C',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'animate-fade-in-up',
    'animate-fade-in-down',
    'animate-fade-in-left',
    'animate-fade-in-right',
    'animate-slide-in-right',
    'animate-float',
  ],
};
