## Merge Sort Projesi
`[16,21,11,8,12,22]` -> Merge Sort

 - Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
 -  Big-O gösterimini yazınız.
## Cevaplar
**1.** Burada bir problem birden fazla alt probleme bölünür. Her alt problem ayrı ayrı çözülür. Son olarak, nihai çözümü oluşturmak için alt problemlerin çözümü birleştirilir.
 - `[16,21,11,8,12,22]`
 - `[16,21,11]` | `[8,12,22]`
 - `[16]` | `[21,11]` | `[8]` | `[12,22]`
 - `[16]` | `[21]` | `[11]` | `[8]` | `[12]` | `[22]`
 - `[16]` | `[11,21]` | `[8]` | `[12,22]`
 - `[11,16,21]` | `[8,12,22]`
 - `[8,11,12,16,21,22]`

**2.** Big O:   O(n*log n)
