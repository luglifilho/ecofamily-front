import { Form } from "react-router-dom";

export default function CategoryForm({
  createCategory,
  handleCategory,
}: {
  createCategory: React.FormEventHandler<HTMLFormElement>;
  handleCategory: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <Form
      onSubmit={createCategory}
      className="w-full flex flex-col items-center justify-center"
    >
      <input
        onChange={handleCategory}
        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:drop-shadow-md transition-all focus-visible:outline-0 focus-visible:border-blue-500 peer"
        placeholder="Nova categoria"
        type="text"
        name="descricao"
        id="descricao"
        required
        autoFocus
      />
      <button
        type="submit"
        className="mt-6 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Criar
      </button>
    </Form>
  );
}
