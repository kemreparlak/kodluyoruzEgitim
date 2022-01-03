# Insertion Sort Projesi

`[22,27,16,2,18,6]` -> Insertion Sort

 **1.** Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
 **2.** Big-O gösterimini yazınız.
 **3.** Time Complexity: Average case: Aradığımız sayının ortada olması, Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
 **4.** Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
 **5.** `[7,3,5,8,2,9,4,15,6]` dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

 
### 1. Sorunun Cevabı
Dizideki ilk elemanın sıralandığı varsayılarak, ikinci elemanı alıp işaretçimizde tutuyoruz. İşaretçiyi ilk elemanla karşılaştırıp, ilk eleman işaretçiden büyükse, işaretçi ilk elemanın önüne yerleştirilir. Şimdi, ilk iki öğe sıralandı.

Üçüncü öğeyi alıp ve solundaki öğelerle karşılaştırıyoruz. Kendisinden daha küçük olan elemanın hemen arkasına yerleştiriyoruz. Ondan daha küçük bir eleman yoksa, onu dizinin başına yerleştiriyoruz. Benzer şekilde, sıralanmamış her öğeyi doğru konumuna yerleştiriyoruz.

### 2. Sorunun Cevabı

Big O: O(n2)

### 3. Sorunun Cevabı

#### En Kötü Durum Karmaşıklığı: O(n2)
Dizinin büyükten küçüğe doğru sıralı olduğunu ve onu küçükten büyüğe sıralamak istediğimizi varsayalım. Bu durum, en kötü durum karmaşıklığı ortaya çıkarır.

Her eleman diğer elemanların her biri ile karşılaştırılmalıdır, böylece her n'inci eleman için (n-1) sayıda karşılaştırma yapılmalıdır.

Sonuç olarak, toplam karşılaştırma sayısı = n*(n-1) ~ n2

#### En İyi Durum Karmaşıklığı: O(n)

Dizi zaten sıralandığında, dış döngü n kez çalışır, oysa iç döngü hiç çalışmaz. Yani, sadece n sayıda karşılaştırma var. Dolayısıyla karmaşıklık lineerdir.

#### Ortalama Durum Karmaşıklığı: O(n2)
Bir dizinin elemanları karışık sırada (büyükten küçüğe veya küçükten büyüğe) olduğunda oluşur.

### 4. Sorunun Cevabı

`[2,6,16,18,22,27]` Şeklinde sıralandığında 18'in konumunu göz önüne alırısak "Ortalama Durum Karmaşıklığı" diyebiliriz.

### 5.Sorunun Cevabı

Dizi: `[7,3,5,8,2,9,4,15,6]`

 1. Adım: 7'yi sıralandığını varsayarak yeni dizimizde tutuyoruz. Ve 3'ü 7 ile karşılaştırarak büyükse arkasına küçükse önüne yerleştiriyoruz.
 2. Adım: Şimdi, ilk iki eleman sıralandı. `[3,7]` 5'i alıp solundaki elamanlarla karşılaştırarak, kendisinden daha küçük olan elemanın hemen arkasına yerleştiriyoruz. Ondan daha küçük bir eleman yoksa, onu dizinin başına yerleştiriyoruz.
 3. Adım: `[3,5,7]`
 4. Adım: `[3,5,7,8]`

