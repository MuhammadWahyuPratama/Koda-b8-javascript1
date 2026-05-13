# Flowchart

## Flowchart algoritma

Membuat Flowchart berdasarkan alur program yang d buat

```mermaid
flowchart LR
a@{shape: circle, label: "Start"}
b@{shape: lean-r, label: "r" }
c@{shape: lean-r, label: 'phi="22/7"'}
d@{shape: rect, label: "pI * r * r"}
e@{shape: rect, label: "2 * phi * r"}
f@{shape: lean-r, label: "Luas Lingkaran"}
g@{shape: lean-r, label: "Keliling lingkaran"}
h@{shape: dbl-circ, label: "stop"}

a-->b
b-->c
c-->d
d-->e
e-->f
f-->g
g-->h


```
