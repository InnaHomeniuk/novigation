const city = prompt('Уведіть назву міста (Київ, Дніпро, Запоріжжя, Полтава, Харків):');
switch (city) {
    case 'Київ':
        const latitudeKyiv = 50.450100;
        const longitudeKyiv = 30.523399;
        alert(`Координати міста Київ: 
        широта ${latitudeKyiv}, довгота ${longitudeKyiv}`);
        console.log(`Координати міста Київ: 
        широта ${latitudeKyiv}, довгота ${longitudeKyiv}`);
        break;
    case 'Дніпро':
        const latitudeDnipro = 48.326019;
        const longitudeDnipro = 34.948330;
        alert(`Координати міста Дніпро: 
        широта ${latitudeDnipro}, довгота ${longitudeDnipro}`);
        console.log(`Координати міста Дніпро: 
        широта ${latitudeDnipro}, довгота ${longitudeDnipro}`);
        break;
    case 'Запоріжжя':
        const latitudeZaporizhzhia = 47.837680;
        const longitudeZaporizhzhia = 35.113043;
        alert(`Координати міста Запоріжжя: 
        широта ${latitudeZaporizhzhia}, довгота ${longitudeZaporizhzhia}`);
        console.log(`Координати міста Запоріжжя: 
        широта ${latitudeZaporizhzhia}, довгота ${longitudeZaporizhzhia}`);
        break;
    case 'Полтава':
        const latitudePoltava = 49.566197;
        const longitudePoltava = 34.641855;
        alert(`Координати міста Полтава: 
        широта ${latitudePoltava}, довгота ${longitudePoltava}`);
        console.log(`Координати міста Полтава: 
        широта ${latitudePoltava}, довгота ${longitudePoltava}`);
        break;
    case 'Харків':
        const latitudeKharkiv = 49.977722;
        const longitudeKharkiv = 36.184863;
        alert(`Координати міста Харків: 
        широта ${latitudeKharkiv}, довгота ${longitudeKharkiv}`);
        console.log(`Координати міста Харків: 
        широта ${latitudeKharkiv}, довгота ${longitudeKharkiv}`);
        break;
    default:
        alert('Зазначене місто відсутнє в списку')
        console.log('Зазначене місто відсутнє в списку')
}
