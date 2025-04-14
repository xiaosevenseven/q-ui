

export const buttonTypes = [
    "default",
    "primary",
    "success",
    "warning",
    "info",
    "danger",
    "text",
    ""
] as const;


export const buttonNativeTypes = ["button", "submit", "reset"] as const;

export const buttonProps = buildProps({
    
})

export const buttonEmits = {
    click: (event: MouseEvent) => event instanceof MouseEvent
}
export type ButtonEmits = typeof buttonEmits