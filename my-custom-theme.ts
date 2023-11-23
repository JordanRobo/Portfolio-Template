
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-500)",
		"--on-secondary": "var(--color-surface-500)",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-primary-500)",
		// =~= Theme Colors  =~=
		// primary | #fbbfe5 
		"--color-primary-50": "254 245 251", // #fef5fb
		"--color-primary-100": "254 242 250", // #fef2fa
		"--color-primary-200": "254 239 249", // #feeff9
		"--color-primary-300": "253 229 245", // #fde5f5
		"--color-primary-400": "252 210 237", // #fcd2ed
		"--color-primary-500": "251 191 229", // #fbbfe5
		"--color-primary-600": "226 172 206", // #e2acce
		"--color-primary-700": "188 143 172", // #bc8fac
		"--color-primary-800": "151 115 137", // #977389
		"--color-primary-900": "123 94 112", // #7b5e70
		// secondary | #3cc6e9 
		"--color-secondary-50": "226 246 252", // #e2f6fc
		"--color-secondary-100": "216 244 251", // #d8f4fb
		"--color-secondary-200": "206 241 250", // #cef1fa
		"--color-secondary-300": "177 232 246", // #b1e8f6
		"--color-secondary-400": "119 215 240", // #77d7f0
		"--color-secondary-500": "60 198 233", // #3cc6e9
		"--color-secondary-600": "54 178 210", // #36b2d2
		"--color-secondary-700": "45 149 175", // #2d95af
		"--color-secondary-800": "36 119 140", // #24778c
		"--color-secondary-900": "29 97 114", // #1d6172
		// tertiary | #138698 
		"--color-tertiary-50": "220 237 240", // #dcedf0
		"--color-tertiary-100": "208 231 234", // #d0e7ea
		"--color-tertiary-200": "196 225 229", // #c4e1e5
		"--color-tertiary-300": "161 207 214", // #a1cfd6
		"--color-tertiary-400": "90 170 183", // #5aaab7
		"--color-tertiary-500": "19 134 152", // #138698
		"--color-tertiary-600": "17 121 137", // #117989
		"--color-tertiary-700": "14 101 114", // #0e6572
		"--color-tertiary-800": "11 80 91", // #0b505b
		"--color-tertiary-900": "9 66 74", // #09424a
		// success | #10ca89 
		"--color-success-50": "219 247 237", // #dbf7ed
		"--color-success-100": "207 244 231", // #cff4e7
		"--color-success-200": "195 242 226", // #c3f2e2
		"--color-success-300": "159 234 208", // #9fead0
		"--color-success-400": "88 218 172", // #58daac
		"--color-success-500": "16 202 137", // #10ca89
		"--color-success-600": "14 182 123", // #0eb67b
		"--color-success-700": "12 152 103", // #0c9867
		"--color-success-800": "10 121 82", // #0a7952
		"--color-success-900": "8 99 67", // #086343
		// warning | #e2d90b 
		"--color-warning-50": "251 249 218", // #fbf9da
		"--color-warning-100": "249 247 206", // #f9f7ce
		"--color-warning-200": "248 246 194", // #f8f6c2
		"--color-warning-300": "243 240 157", // #f3f09d
		"--color-warning-400": "235 228 84", // #ebe454
		"--color-warning-500": "226 217 11", // #e2d90b
		"--color-warning-600": "203 195 10", // #cbc30a
		"--color-warning-700": "170 163 8", // #aaa308
		"--color-warning-800": "136 130 7", // #888207
		"--color-warning-900": "111 106 5", // #6f6a05
		// error | #f44004 
		"--color-error-50": "253 226 217", // #fde2d9
		"--color-error-100": "253 217 205", // #fdd9cd
		"--color-error-200": "252 207 192", // #fccfc0
		"--color-error-300": "251 179 155", // #fbb39b
		"--color-error-400": "247 121 79", // #f7794f
		"--color-error-500": "244 64 4", // #f44004
		"--color-error-600": "220 58 4", // #dc3a04
		"--color-error-700": "183 48 3", // #b73003
		"--color-error-800": "146 38 2", // #922602
		"--color-error-900": "120 31 2", // #781f02
		// surface | #252b33 
		"--color-surface-50": "222 223 224", // #dedfe0
		"--color-surface-100": "211 213 214", // #d3d5d6
		"--color-surface-200": "201 202 204", // #c9cacc
		"--color-surface-300": "168 170 173", // #a8aaad
		"--color-surface-400": "102 107 112", // #666b70
		"--color-surface-500": "37 43 51", // #252b33
		"--color-surface-600": "33 39 46", // #21272e
		"--color-surface-700": "28 32 38", // #1c2026
		"--color-surface-800": "22 26 31", // #161a1f
		"--color-surface-900": "18 21 25", // #121519
		
	}
}