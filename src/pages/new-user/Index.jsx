import React, { useState } from "react";

const NewUser = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = { name, phone, email };

    try {
      const response = await fetch('https://aliakbar-fake-api.netlify.app/.netlify/functions/server/create-user', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      if (response.ok) {
        const result = await response.json();
        setMessage(`Пользователь ${result.name} успешно добавлен!`);
        // Очистка полей формы
        setName('');
        setPhone('');
        setEmail('');
      } else {
        setMessage("Ошибка при добавлении пользователя");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setMessage("Ошибка при отправке данных");
    }
  };

  return (
    <section className="new-user">
      <div className="container">
        <div className="headText">
          <h2>Add New User</h2>
          <hr />
        </div>
        {message && <p>{message}</p>}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Add User</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewUser;
