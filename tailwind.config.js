module.exports = {
    content: [
        "src/**/*.html"
    ],
    theme: {
        colors: {
            white: "#ffffff",
            transparent: "transparent",
            background: {
                dark: {
                    DEFAULT: "#1e272e",
                    light: "#242e37",
                    lighter: "#29343d"
                }
            },
            txt: {
                dark: {
                    DEFAULT: "#95a5a6"
                }
            }
        },
        fontSize: {
            "md": "13px"
        },
        extend: {
            padding: {
                "20px": "20px",
                "50px": "50px"
            },
            width: {
                "30px": "30px"
            },
            inset: {
                "18px": "18px"
            }
        },
    },
    plugins: [],
}
