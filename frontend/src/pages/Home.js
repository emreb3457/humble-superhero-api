import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [superheroes, setSuperheroes] = useState([]);
    const [newHero, setNewHero] = useState({
        name: '',
        super_power: '',
        humility_score: ''
    });
    const [sortBy, setSortBy] = useState('humility_score');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        fetchSuperheroes();
    }, [sortOrder]);

    const fetchSuperheroes = async () => {
        try {
            const response = await axios.get('http://localhost:3001/superheroes', {
                params: {
                    sort_by: sortBy,
                    sort_order: sortOrder
                }
            });
            setSuperheroes(response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewHero(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/superheroes', {
                name: newHero.name,
                super_power: newHero.super_power,
                humility_score: Number(newHero.humility_score)
            });

            setNewHero({ name: '', super_power: '', humility_score: '' });
            fetchSuperheroes();
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
            <div style={{ width: "30%", }}>
                <h2>Add New Superhero</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newHero.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Super Power:</label>
                        <input
                            type="text"
                            id="super_power"
                            name="super_power"
                            value={newHero.super_power}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Humility Score (1-10):</label>
                        <input
                            type="number"
                            id="humility_score"
                            name="humility_score"
                            min="1"
                            max="10"
                            value={newHero.humility_score}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit">Add New</button>
                </form>
            </div>

            <div style={{ width: "50%" }}>
                <h2>List of Superheroes</h2>

                <div style={{ maxWidth: "16em", marginBottom: "20px" }}>
                    <button onClick={toggleSortOrder}>
                        Sort by Humility Score ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                    </button>
                </div>
                <div className="heroes-list">
                    {superheroes.map((hero, index) => (
                        <div key={index} className="hero-card">
                            <h3>{hero.name}</h3>
                            <p><strong>Super Power:</strong> {hero.super_power}</p>
                            <p><strong>Humility Score:</strong> {hero.humility_score}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;