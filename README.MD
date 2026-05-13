# Flowchart

## Flowchart algoritma

Membuat Flowchart berdasarkan alur program yang d buat

```mermaid
flowchart LR
a@{shape: circle, label: "Start"}
b@{shape: lean-r, label: "r" }
c@{shape: lean-r, label: "pi=3.14"}
d@{shape: rect, label: luasLingkaran ="pi * r * r"}
e@{shape: rect, label: kelilingLingkaran = "2 * pI * r"}
f@{shape: lean-r, label: '"{luasLingkaran}"'}
g@{shape: lean-r, label: '"{kelilingLingkaran}"'}
h@{shape: dbl-circ, label: "stop"}

a-->b-->c-->d-->e-->f-->g-->h



```
