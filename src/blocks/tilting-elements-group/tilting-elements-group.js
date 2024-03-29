import { registerBlockType } from '@wordpress/blocks'
import { Logo } from './svg'
import Edit from './edit'
import save from './save'
import metadata from './block.json'

registerBlockType( metadata.name, {
	...metadata,
	icon: Logo,
	edit: Edit,
	save,
} )
