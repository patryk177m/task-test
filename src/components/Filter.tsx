import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../utils/SearchHelper";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input 
            type="search"
            value={searchParams.get('name') || ''}
            onChange={(e) => {
              const nextParams = getSearchWith(searchParams, {
                name: e.target.value || null,
                
              });

              setSearchParams(new URLSearchParams(nextParams));
            }}
            />
          </th>
          <th>
            <input 
            type="search"
            value={searchParams.get('email') || ''}
            onChange={(e) => {
              const nextParams = getSearchWith(searchParams, {
                email: e.target.value || null,
                
              });

              setSearchParams(new URLSearchParams(nextParams));
            }}/>
          </th>
          <th>
            <input
            type="search"
            value={searchParams.get('phone') || ''}
            onChange={(e) => {
              const nextParams = getSearchWith(searchParams, {
                phone: e.target.value || null,
                
              });

              setSearchParams(new URLSearchParams(nextParams));
            }}
            />
          </th>
        </tr>
      </thead>
    </table>
  )
}
