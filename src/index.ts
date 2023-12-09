export function durandil() {
	return {
		name: 'durandil-css-vite',
		async configResolved() {
			console.log('@durandil/css run ! = configResolved');
		},
		async configureServer(server: any) {
			server.watcher.add('./');
			console.log('@durandil/css run ! = configureServer');
		}
	};
}
