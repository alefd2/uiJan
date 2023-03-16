import { NodeResizer } from "@reactflow/node-resizer"
import { NodeProps, Handle, Position } from 'reactflow'

import '@reactflow/node-resizer/dist/style.css'

export const Square = ({ selected }: NodeProps) => {
    return (
        <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]">
            <NodeResizer
                minWidth={200}
                minHeight={200}
                lineClassName="boder-bluee-400"
                handleClassName="h-3 w-3 bg-white boder-2 rounded border-blue-400"
                isVisible={selected}
            />
            <Handle
                position={Position.Right}
                id="right"
                type={'source'}
                className="-right-5 w-3 h-3 bg-blue-400/30"
            />

            <Handle
                position={Position.Left}
                id="left"
                type={'source'}
                className="-left-5 w-3 h-3 bg-blue-400/30"

            />

            <Handle
                position={Position.Top}
                id="top"
                type={'source'}
                className="-top-5 w-3 h-3 bg-blue-400/30"
            />

            <Handle
                position={Position.Bottom}
                id="bottom"
                type={'source'}
                className="-bottom-5 w-3 h-3 bg-blue-400/30"

            />
        </div>
    )
}