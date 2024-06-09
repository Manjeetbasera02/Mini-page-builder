# Mini Page Builder

This project is a mini page builder created using React and Vite. It includes a blank page with a sidebar containing Label, Input, and Button elements that can be dragged and dropped onto the canvas. The project features drag-and-drop functionality, a configuration modal, auto-filled coordinates, element selection, updating, deleting, and local storage persistence. Additionally, it supports exporting functionality and responsive design.

## Features

- **Drag and Drop**: Elements can be dragged from the sidebar and dropped onto the canvas.
- **Configuration Modal**: When an element is dropped, a modal allows you to configure its properties.
- **Element Selection**: Click on an element to select it. Press 'Enter' to edit or 'Delete' to remove it.
- **Auto-filled Coordinates**: Elements are positioned at the mouse cursor when dropped.
- **Element Update and Delete**: Elements can be updated and deleted using the modal or keyboard shortcuts.
- **Local Storage Persistence**: The state of the elements is saved to local storage and restored on page load.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Manjeetbasera02/mini-page-builder.git
    cd mini-page-builder
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

## Running the Project

1. **Start the development server:**
    ```sh
    npm run dev
    ```

2. **Open your browser and navigate to:**
    ```
    http://localhost:5173
    ```

## Project Structure

- **`src`**: Contains the source code.
  - **`components`**: Contains all the React components.
    - **`Sidebar.jsx`**: The sidebar containing draggable items.
    - **`Canvas.jsx`**: The canvas where elements are dropped and displayed.
    - **`DraggableElement.jsx`**: The individual draggable elements on the canvas.
    - **`Modal.jsx`**: The modal for configuring elements.
  - **`contexts`**: Contains the context for managing elements.
    - **`ElementsContext.jsx`**: Provides the elements context and manages state.
  - **`App.jsx`**: The main application component.

## How It Works

1. **Sidebar**: The sidebar contains draggable items (Label, Input, Button). When an item is dragged, its type is stored in the data transfer object.

2. **Canvas**: The canvas listens for drag-and-drop events. When an item is dropped, a new element is created with initial coordinates and displayed on the canvas.

3. **DraggableElement**: Each element on the canvas is draggable and can be clicked to select. When selected, pressing 'Enter' opens the configuration modal, and pressing 'Delete' removes the element.

4. **Modal**: The configuration modal allows you to set the properties of the element, including its position, text, font size, and font weight. The changes are saved to the element's configuration.

5. **ElementsContext**: The elements context manages the state of all elements. It provides functions to add, update, and delete elements. The state is persisted to local storage, so elements are restored on page load.

## Additional Information

- **Local Storage**: The elements' state is saved to local storage whenever it changes. This ensures that the elements are preserved even if the page is refreshed.

- **Keyboard Shortcuts**: 
  - **Enter**: When an element is selected, pressing 'Enter' opens the configuration modal.
  - **Delete**: When an element is selected, pressing 'Delete' removes it.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
