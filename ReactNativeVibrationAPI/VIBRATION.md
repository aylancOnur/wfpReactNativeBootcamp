## Vibration ( Titreşim ) Kullanımı

---

**Vibration**, farklı zaman aralıkları ile cihazınızın titreşim özelliğini tetikleyebileceğiniz bir methodtur.

_( Titreşimi desteklemeyen cihazlar üzerinde hiçbir etkisi olmayacaktır, örn. simülatör. )_

Gerekli importları gerçekleştirerek başlayabiliriz.

```JS
import React from "react";
import { Button, Platform, Vibration, View } from "react-native";
```

Şimdi sıra geldi gerekli tanımlamaları yapmaya.

```JS
const App = () => {

  const ONE_SECOND_IN_MS = 1000;
  // Methodumuz milisaniye cinsinden parametre kabul ediyor.
}
```


Şimdi örnek kullanımlara bir bakalım.

**Vibration.vibrate()** methodumuza bir parametre geçmediğimiz için varsayılan olarak 400ms kadar titreyecek.

```JS
return (
      <View>
        <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
      </View>
);
```


**Vibration.vibrate(10 \* ONE_SECOND_IN_MS)** cihaz 10 saniye boyunca titreyecektir.
_IOS cihazlar için varsayılan değeri değiştiremediğimiz için sadece Anroid cihazlarda gözükecektir._
```JS
{Platform.OS == "android"
        ? [
            <View>
              <Button
                title="Vibrate for 10 seconds"
                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
              />
            </View>,
          ]
: null}
```

Peki burada gördüğümüz **Platform.OS** nedir?
**Platform** modülü ile cihazımınınz işletim sistemini ( operating system ) öğrenebiliriz.

```JS
Platform.OS
```

Parametre olarak bir Number Array'de geçebiliriz.
Aşağıda sırasıyla cihaz 1 saniye bekleyecek sonra 2 saniye titreyecek ve sonunda da 3 saniye daha bekleyecek.

```JS
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS
    ];

const App = () => {
    return (
        <View>
            <Button
                title="Vibrate with pattern"
                onPress={() => Vibration.vibrate(PATTERN)}
            />
        </View>
    )
  }

```

Bu işlemin sonsuza kadar devam etmesini istiyorsak ikinci parametresine de bir boolean değer verebiliriz.Bu değer varsayılan olarak **false** 'tur

```JS
    <View>
        <Button
            title="Vibrate with pattern"
            onPress={() => Vibration.vibrate(PATTERN, true)}
        />
    </View>
```

Bu titreşimleri anlık olarak durdurmak istiyorsak **Vibration.cancel()** dememiz yeterli olacaktır.

```JS
    <View>
        <Button
            title="Vibrate with pattern"
            onPress={() => Vibration.cancel()}
        />
    </View>
```

Tüm Bunları kendi cihazınızda da deneyimleyebilirsiniz.
Bunun için öncelikle uygulama marketinizden **Expo Go** uygulamasını indirmelisiniz.
Sonrasında https://reactnative.dev/docs/vibration adresine gidip karşınıza çıkan örnek kod bloğunun sağında bulunan ön izleme kısmından **My Device** seçeneğini seçip **Expo Go** uygulamasında bulunan **Scan QR code** ile karşınıza çıkan Qr Kodu okutabilirsiniz.