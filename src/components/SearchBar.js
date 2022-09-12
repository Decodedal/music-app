                
        import { useContext} from 'react'
        import{SearchContext} from '../context/SearchContext'

        function SearchBar() {
        
            const {term, handleSearch} = useContext(SearchContext)

            return (
                <form>
                    <input ref={term} type="text" placeholder="Enter a search term here"
                    onChange={(e)=>props.handleSearch(e, term)} />
                    <input type="submit" />
                    <input type="submit" value= "clear" onSubmit={(e)=>
                        props.handleSearch(e,'')
                    }/>
                </form>
            )
        }

        export default SearchBar
    