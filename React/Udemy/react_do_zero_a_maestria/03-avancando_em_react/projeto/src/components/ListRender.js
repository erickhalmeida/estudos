import {useState} from 'react'

const ListRender = () => {

    const [list] =  useState(["Matheus", "Pedro", "Josias", "Maria"]); 

    const [users] = useState([
      { id: 1, nome: "João"},
      { id: 2, nome: "Fernando"},
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.nome}</li>
          ))}
        </ul>
    </div>
  );
};

export default ListRender;