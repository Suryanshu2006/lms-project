export default function Input({ label, id, error, className='', ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label htmlFor={id} className="mb-1 text-sm font-medium">{label}</label>}
      <input id={id} className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
