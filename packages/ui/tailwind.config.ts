import sharedconfig from '@repo/config-tailwindcss'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	presets: [sharedconfig],
}

export default config
