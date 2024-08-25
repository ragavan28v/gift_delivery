/* Existing styles */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #FF9A8B, #FF6A88, #FF99A8, #FFC94B, #FFF54E, #A8FF76, #70FFFF); 
    color: #2D3142;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
    max-width: 600px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.header h1 {
    margin: 0;
    font-size: 2em;
    color: #3F72AF;
}

.header p {
    margin-top: 10px;
    font-size: 1.2em;
    color: #112D4E;
}

/* Add styles for the birthday wish */
.birthday-wish {
    margin: 20px 0;
    font-family: 'Dancing Script', cursive;
    font-size: 1.8em;
    color: #E63946; /* Beautiful red for the wish text */
}

.image-grid {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.image-box {
    position: relative;
    width: 30%;
    cursor: pointer;
}

.gift-image,
.hidden-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 2px solid #3F72AF;
}

.hidden-image {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
}

#reveal-button {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 16px;
    background-color: #D8A47F;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#reveal-button:hover {
    background-color: #EE6C4D;
}
