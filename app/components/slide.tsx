
import { DndContext } from '@dnd-kit/core';
export default function Slide({id}: {id: string}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <DndContext>

      </DndContext>
    </div>
  );
}