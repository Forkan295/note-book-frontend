import React from 'react';
import Layout from '../../src/includes/noteapp/layout'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const Index = () => {
    const onDragEndHandle = () => {
        alert('asdf');
    }

    const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <Layout>
            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <DragDropContext onDragEnd={onDragEndHandle}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}

                                    {...provided.droppableProps}

                                    className="flex flex-col w-full"

                                    data-testid="droppable"

                                    style={{
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '4px',
                                        padding: '20px',
                                        width: '100%',
                                        height: '100%',
                                        overflow: 'auto',
                                        position: 'relative'
                                    }}
                                >
                                    {arrr.map(item =>
                                        <Draggable draggableId={'id_' + item} index={item}>
                                            {(provideds) => (
                                                <h1
                                                    ref={provideds.innerRef}
                                                    {...provideds.draggableProps}
                                                    {...provideds.dragHandleProps}
                                                    className="text-2xl font-semibold text-gray-900">Dashboard
                                                </h1>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                </div>

                            )}
                        </Droppable>
                    </DragDropContext>

                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Replace with your content */}
                    <div className="py-4">
                        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                    </div>
                    {/* /End replace */}
                </div>
            </div>
        </Layout>
    );
}

export default Index;
