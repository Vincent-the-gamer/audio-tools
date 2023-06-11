module.exports = {
    packagerConfig: {
        name: 'Nemassler',
        executableName: 'Nemassler',
        icon: "./buildicon",
        extraResource: ["./public"]
    },
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "Nemassler",
            }
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: [
                "darwin"
            ]
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}
        }
    ]

}