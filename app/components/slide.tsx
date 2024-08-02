
import { DndContext } from '@dnd-kit/core';
interface SlideProps {
  json: Record<string, any>;
}
export default function Slide({json}: SlideProps) {
  const {slideProperties, pageElements, pageProperties} = json
  console.log(pageElements)
  return (
    <div className="border border-gray-200 p-4 min-w-[800px] min-h-[600px]">
      <DndContext>

      </DndContext>
    </div>
  );
}