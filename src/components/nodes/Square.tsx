import { NodeProps, Handle, Position } from 'reactflow'

export const Square = (props: NodeProps) => {
    return (
        <div className="bg-violet-500 rounded w-[200px] h-[200px]">
            <Handle
                position={Position.Right}
                id="right"
                type={'source'}
                className="-right-5 w-3 h-3 bg-transparent bg-blue-400/50"
            />

            <Handle
                position={Position.Left}
                id="left"
                type={'source'}
                className="-left-5 w-3 h-3 bg-transparent bg-blue-400/50"

            />

            <Handle
                position={Position.Top}
                id="top"
                type={'source'}
                className="-top-5 w-3 h-3 bg-transparent bg-blue-400/50"
            />

            <Handle
                position={Position.Bottom}
                id="bottom"
                type={'source'}
                className="-bottom-5 w-3 h-3 bg-transparent bg-blue-400/50"

            />
        </div>
    )
}