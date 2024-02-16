import { LucideIcon } from "lucide-react"
import { Doc, Id } from "../../convex/_generated/dataModel"

export interface UserAvatarProps {
	src?: string
	className?: string
}

export interface ItemProps {
	id?: Id<"documents">
	documentIcon?: string
	active?: boolean
	expanded?: boolean
	isSearch?: boolean
	level?: number
	onExpand?: () => void
	label: string
	onClick?: () => void
	icon: LucideIcon
}

export interface DocumentListProps {
	parentDocumentId?: Id<"documents">
	level?: number
	data?: Doc<"documents">[]
}

export interface ConfirmModalProps {
	children: React.ReactNode
	onConfirm: () => void
}

export interface SearchStoreProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
	toggle: () => void
}

export interface SettingsStoreProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export interface NavbarProps {
	isCollapsed: boolean
	onResetWidth: () => void
}

export interface TitleProps {
	initialData: Doc<"documents">
}

export interface BannerProps {
	documentId: Id<"documents">
}

export interface MenuProps {
	documentId: Id<"documents">
}

export interface DocumentIdPageProps {
	params: {
		documentId: Id<"documents">
	}
}

export interface ToolbarProps {
	initialData: Doc<"documents">
	preview?: boolean
}

export interface IconPickerProps {
	onChange: (icon: string) => void
	children: React.ReactNode
	asChild?: boolean
}

export type CoverImageStore = {
	url?: string
	isOpen:  boolean
	onOpen: () => void
	onClose: () => void
	onReplace: (url: string) => void
}

export interface CoverImageProps {
	url?: string
	preview?: boolean
}

export interface EditorProps {
	onChange: (value: string) => void
	initialContent?: string
	editable?: boolean
}

export interface PublishProps {
	initialData: Doc<"documents">
}


