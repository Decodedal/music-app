                
        import { useState } from 'react'
        function SearchBar(props) {
        

            return (
                <form>
                    <input type="text" placeholder="Enter a search term here"
                    onChange={(e)=>props.handleSearch(e,e.target.value)} />
                    <input type="submit" />
                    <input type="submit" value= "clear" onSubmit={(e)=>
                        props.handleSearch(e,'')
                    }/>
                </form>
            )
        }

        export default SearchBar
    