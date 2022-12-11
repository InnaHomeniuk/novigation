let city = prompt('Уведіть назву міста (Київ, Дніпро, Запоріжжя, Полтава, Харьків):');
let latitude;
let longitude;
switch (city) {
    case 'Київ':
        latitude = 50.450100;
        longitude = 30.523399;
        alert(`Координати міста Київ: 
        широта ${latitude}, довгота ${longitude}`);
        console.log(`Координати міста Київ: 
        широта ${latitude}, довгота ${longitude}`);
        break;
    case 'Дніпро':
        latitude = 48.326019;
        longitude = 34.948330;
        alert(`Координати міста Дніпро: 
        широта ${latitude}, довгота ${longitude}`);
        console.log(`Координати міста Дніпро: 
        широта ${latitude}, довгота ${longitude}`);
        break;
    case 'Запоріжжя':
        latitude = 47.837680;
        longitude = 35.113043;
        alert(`Координати міста Запоріжжя: 
        широта ${latitude}, довгота ${longitude}`);
        console.log(`Координати міста Запоріжжя: 
        широта ${latitude}, довгота ${longitude}`);
        break;
    case 'Полтава':
        latitude = 49.566197;
        longitude = 34.641855;
        alert(`Координати міста Полтава: 
        широта ${latitude}, довгота ${longitude}`);
        console.log(`Координати міста Полтава: 
        широта ${latitude}, довгота ${longitude}`);
        break;
    case 'Харків':
        latitude = 49.977722;
        longitude = 36.184863;
        alert(`Координати міста Харків: 
        широта ${latitude}, довгота ${longitude}`);
        console.log(`Координати міста Харків: 
        широта ${latitude}, довгота ${longitude}`);
        break;
    default:
        alert('Зазначене місто відсутнє в списку')
        console.log('Зазначене місто відсутнє в списку')
}
