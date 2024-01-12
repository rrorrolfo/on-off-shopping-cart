import "./searchInput.sass"

interface ISearchInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ value, onChange, ...props }: ISearchInputProps) => {
  return (
    <input
      type="text"
      id="product-search-input"
      data-testid="product-search-input"
      name="product-search-input"
      onChange={onChange}
      value={value}
      placeholder="Name"
      className="search-input"
      {...props}
    />
  )
}

export default SearchInput
