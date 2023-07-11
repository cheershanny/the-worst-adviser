const tasksArr = [
'Eating',
'Drinking',
'Driving',
'Swimming',
'Dancing',
'Singing',
'Crying',
'Hugging',
'Jogging',
'Lying down',
'Speaking softly',
'Salsa dancing',
'Harmonizing',
'Sobbing',
'Climbing',
'Scratching',
'Stretching arms',
'Brushing teeth',
'Combing hair',
'Shaving',
'Applying makeup',
'Blow-drying hair',
'Ironing clothes',
'Washing dishes',
'Dusting',
'Mopping',
'Vacuuming',
'Sweeping',
'Gardening',
'Painting'
]

const locationsArr = [
    'Night market',
    'Antique market',   
    'Street food market',   
    'Chinatown',    
    'Little Italy', 
    'Red light district',   
    'Amusement park',   
    'Carnival', 
    'Film festival',    
    'Food festival',    
    'Beer festival',    
    'Wine festival',    
    'Fashion show', 
    'Comic convention', 
    'Gaming convention',    
    'Music concert',    
    'Comedy club',  
    'Cabaret show', 
    'Ballet performance',   
    'Contemporary dance performance',   
    'Jazz club',    
    'Karaoke bar',  
    'Nightclub',    
    'Rooftop bar',  
    'Irish pub',    
    'Sushi bar',    
    'Wine bar', 
    'Coffee shop',  
    'Magical forest filled with towering trees and glowing flowers',    
    'Secluded island with crystal clear waters and white sandy beaches',    
    'Underwater city with colorful fish and coral reefs',   
    'Floating city in the clouds with airships and flying creatures',   
    'Medieval castle with drawbridges, turrets, and secret passages',   
    'Futuristic city with towering skyscrapers and advanced technology',    
    'Haunted mansion with creaky floorboards and spooky ghosts',    
    'Space station orbiting distant planet',    
]

const benefitsArr = [
    'will make you happier',
    'will make you healthier',
    'will give you better sex life',
    'will make your arm strong',
    'will give you a piece of mind',
    'can make your hair blacker',
    'is the best therapy',
    'can solve your daddy issue',
    'automatically makes your skin brighter',
    'might feel better than your ex-boyfriends'
]

const message = () => {
    let taskIndex = Math.floor(Math.random() * (tasksArr.length));
    let benefitIndex = Math.floor(Math.random() * (benefitsArr.length));
    let locationIndex = Math.floor(Math.random() * (locationsArr.length));
    return `Do you know, ${tasksArr[taskIndex].toLowerCase()} in the new ${locationsArr[locationIndex].toLowerCase()} ${benefitsArr[benefitIndex]}.`;
}

console.log(message());
