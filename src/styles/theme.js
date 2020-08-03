import '../styles/global.css'

export default {
    colors: {
        // Brand Colours
        primary: "#00BED2",
        secondary: "#FF3C7D",
        teritary: "#FFBE3C",
        // Text Colours
        text: "#333333",
        textInvert: "#ffffff",
        // Neutral Colours
        black: "#000000",
        white: "#ffffff",
        offWhite: "#EBEDF5",
        grey100: "#E6E6E6",
        grey200: "#878787",
        grey300: "#333333",
        none: "rgba(0,0,0,0)",
        // Status Colours
        success: "#529E66",
        successHover: "#367B48",
        danger: "#EB5050",
        dangerHover: "#D72D2D",
        warning: "#FFBE3C",
        warningHover: "#E8A620"
    },
    breakpoints: ["575px", "770px", "990px", "1200px"],
    shadows: {
        small: { boxShadow: `0 8px 15px rgba(51, 51, 51, 0.46)` },
        button: {
            boxShadow: `0 1px 1px rgba(4,2,34,.08),
                        0 0 1px rgba(4,2,34,.12),
                        inset 0 -1px 3px rgba(4,2,34,.08),
                        inset 0 -2px 4px rgba(4,2,34,.12)`
        },
    },

    variants: {
        shadowWithHover: {
            transition: `ease-in-out .3s`,
            boxShadow: `0 4px 14px rgba(51, 51, 51, 0.1)`,
            "&:hover": {
                boxShadow: `0 4px 14px rgba(51, 51, 51, 0.3)`,
            },
        },
        link: {
            color: "secondary",
            fontFamily: `"eina-regular", sans-serif`,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "20px",
            cursor: 'pointer',
            borderBottom: `1px solid secondary`
        }
    },
    buttons: {
        boxShadow: `0 4px 14px rgba(51, 51, 51, 0.1)`,
    },
    text: {
        h1: {
            color: "text",
            fontFamily: `"eina-semibold", sans-serif`,
            fontSize: ["51px", "51px", "51px", "68px"],
            lineHeight: '93px',
        },
        h2: {
            color: "text",
            fontFamily: `"eina-semibold", sans-serif`,
            fontSize: ["38px", "38px", "38px", "51px"],
            letterSpacing: "0.02em",
            lineHeight: '70px',
        },
        h3: {
            color: "text",
            fontFamily: `"eina-semibold", sans-serif`,
            fontSize: ["28px", "28px", "28px", "38px"],
            letterSpacing: "0.02em",
            lineHeight: '52px',
        },
        h4: {
            color: "text",
            fontFamily: `"eina-semibold", sans-serif`,
            fontSize: ["22px", "22px", "22px", "28px"],
            letterSpacing: "0.02em",
            lineHeight: '39px',
        },
        h5: {
            color: "text",
            fontFamily: `"eina-semibold", sans-serif`,
            fontSize: ["20px", "20px", "20px", "21px"],
            letterSpacing: "0.02em",
            lineHeight: '29px',
        },
        p1: {
            color: "text",
            fontFamily: `"eina-regular", sans-serif`,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "22px",
        },
        p2: {
            color: "textInvert",
            fontFamily: `"eina-regular", sans-serif`,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "22px",
        },
        helper: {
            color: "text",
            fontFamily: `"eina-regular", sans-serif`,
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "19px",
        },
        copyright: {
            color: "text",
            fontFamily: `"eina-regular", sans-serif`,
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "19px",
        },
        navLink: {
            color: "textInvert",
            fontFamily: `"eina-semibold", sans-serif`,
            fontSize: "16px",
            lineHeight: "19px",
            textDecoration: "none",
            cursor: "pointer",
        },
        link: {
            fontFamily: `"eina-regular", sans-serif`,
            fontSize: "16px",
            lineHeight: "19px",
            textDecoration: "none",
            transition: ".15s ease-in-out",
            color: 'secondary',
            "&:hover": {
                color: "primary",
            },
        },
    },
}