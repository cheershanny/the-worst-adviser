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

// end message: 
// Do you know? <Doing something> <give you the benefit>

const message = () => {
    let taskIndex = Math.floor(Math.random() * (tasksArr.length));
    let benefitIndex = Math.floor(Math.random() * (benefitsArr.length));
    return `Do you know, ${tasksArr[taskIndex]} ${benefitsArr[benefitIndex]}.`;
}

console.log(message());