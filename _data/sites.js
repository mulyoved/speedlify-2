module.exports = {
    testrtc: {
		name: "testrtc", // optional, falls back to object key
		description: "testrtc",
		options: {
			frequency: 60 * 1, // 24 hours
			freshChrome: "site",
		},
		urls: [
            "https://staging-networktest.testrtc.com/",
            "https://app.testrtc.com/",
		]
	},
};
