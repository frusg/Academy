import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButtons,IonButton,IonCardContent,IonCard,IonCardHeader, IonCardTitle, IonCardSubtitle, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,IonCardContent,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle],
})
export class HomePage {
  a: 1 = 1;
  b: 2 = 2;


  constructor(private router:Router,private navCtrl:NavController) {}


  cursos = [
    {
      titulo: 'Curso de Desarrollo Web',
      autor: 'Francisco Rus',
      imagen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwklEQVR4nO1baahVVRjd33umzxGzUtMcUpu0ArUS5DVjSg5NNBBmRWBKUJpZ2ISFDdpAPyJEkQglRBoMsjCb0H5o5lCvtgbNBNmfsDSaXfHd8w69ezv7nnOu9/Fxj2vB9+ex7z7nrPVNe3jOEQRBEARBEARBEARBEEQA8A40F+Sg0x2H5LuqDkgBvG2EUgBPAY7oGuFYAxwFsPZCMALsiQBTkD0ZMDDWAE8BzL0QjAB7IsAUZE8GDIw1wFMAcy8EI8CeCDAF2ZMBA2MN8BTA3AvBCLAnAkxB9mTAwFgDPAUw90IwAuyJAFOQPRkwMNYATwHMvRCMAHsiwBRkTwYMjDXAUwBzLwQjwJ4IMAV1Vo6VRLtmimT6/VdvOSy5w+GiCYIhAwXdWwTdugoGHis47yzBfbcK/OusAai3APu3Odx0haBLc/LvO5qI4LpLBT9+wCKMegjw9SaHkUPSia+0YYMEezfkjdCC/4eMyynAL9sdThuRn/zYhg/OFwkUwJcTsmh27eTHNu2CbPWFAvhyMn7b5dCrR5jYwQMEV10iuHKSYOjxyWO0Ztx9i+DvNgqAvClow/Lw+FmXSUmgeOxfbQ5LF7hSAY7HjB8j2PUKawBqrQFP35M8XtvOgzuSiX1grqBHi+DJhZEo+WsUizBiMu6fE+5uQgT+8XHUNdXeJFAAxGQsuys5ApqaauvxKYDPl4LWPhUeP7lVSi0qBfCdtw74YXN5UU3q8V98wmXucBgBPv9CbOr56X2+rpKfWRRtV1AAX78IUNv5skPXo7ItuHr3FMy/UfDdu4wA1EsAtecerJ6KKq2lm2DBzVJTRLAL8snELF+cPRJiO2GAYNMqCoDDjYDYdrzkMG50PhF0K+L5RxgBqIcAav986rB6qcOYUdlFaG7OHglMQT4bUYc+i/aKprRGBzBZ0tHvuykADjcCkqztNYeZ09OFWLWEAqAzBIht82pXOicOPUO3rY/oFPTrztoF0JSj+T/tGbpuCEWCrpwLK8A3bztcfrFg69rwmM/fCAugKST0O11Y6d7Po/OyvUvoCLNn9wIK8OcnDo/Nd6U9eP3IUUMF37+XPHbNsrAA82ZJoteveMihT6//zgHUw9Pe6eThyc/Q07VCCfD+Cw6jRyaH+vpnIwI7er/+PSTA43eWz/3tOw6TJv5/nN7/+XJj+J2+2BhOQaecWCAB9EObmqp3Hcf0FUwcKzh1RNSLVxu7ZU35/GefHh7bv5+UoqnyxEsdotoNiuunFUgAtRtmZF8MVbOj+0jpJKvj3G+uSN//6dtb0DpOcO74qM9Pe45GZaEE2L+ttgtTlbb4tuT5b59ZH4HVzjlDMnVRDSUA2lPRoP61E3PSMMHPHybPrSlGr53UI8J0sZblexpOALS3iXk3yeKCuiflIq2KoHv8ebajK5+xfV32b2lIAdChHdW8nEaKkjnjQsG+Ldnn1wI74cx8ZwJzrhX8tDXfdzSsAGi3Ax85rHzY4erJ0VGhLn6UDL3FpsXy3tnZ00GS7X41uvujCzO9nqJrBN1yPq6flHZItTHQs4O8xBdGADS4UQBPAcy9EIwAeyLAFGRPBgyMNcBTAHMvBCPAnggUNQURBEEQBEEQBEEQBEEQrlHxL7KMkj2EG5owAAAAAElFTkSuQmCC',
      descripcion: 'Aprende a crear sitios web increíbles con HTML, CSS y JavaScript.',
      video: 'url_al_video_del_curso'
    },
    {
      titulo: 'Curso de React Avanzado',
      autor: 'Francisco Rus',
      imagen: 'data:image/webp;base64,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',
      descripcion: 'Profundiza en React y construye aplicaciones web modernas y escalables.',
      video: 'url_al_video_del_curso'
    },
    {
      titulo: 'Desarrollo de Aplicaciones con Angular',
      autor: 'Francisco Rus',
      imagen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QYCAwALOoB6awAAAAZiS0dEAAAAAAAA+UO7fwAAJylJREFUeNrtnQd8VFX2x0MTFVAREQvgKiiyrgophF5FmgEUUEBAkKaAlD+6ogIiyFoQRIFdFBUVBFZBsCCIgggpEBIIEEqAlJmUSZlJZiaTKZly/vfcDGykJjN3Zl45v4/n84khmbx33zvf2849JywsiAKAOswaMmvOLJzZeGZvMvuGWRyzZGYGIJGUKYP3HY/zvvNven0g3OsT6Bt1wpQmdlN3MevCbBKzT5klMfPQ+0AicXm8PvGp10fQVxrL3elrM/uH94Y2MDvHzEnPmkS6qpxeX1nr9R30odpycvxazNowW8IsgVkxPVMSyScVe31oidenaknd+W9ntpxZFjMbPT8SSYhsXp9C37pdij1+E2YveS+SRCIFTlleX2sS8hEBu4C6zPox+4mZnZ4NiRQU2b0+h75XN1TO34DZK8zS6HmQSCFRmtcHGwTb+ZsyW8HMRM+ARAqpTF5fbBos52/FbAvQIh+JJBXZvD7ZKtCLfVHMdlF7k0iS1C6vj9YKBADwg+OojUkkSQt9NCoQw37q+Ukk+YwEWolc8NtCbUoiyUros01FbPWtAFrwI5HkJpvXdxv4E+SDe4y01UciyVPou7OhusFCULHij1FGFORDIslbqcx6Q3V2BqAizvgnajsSSRFCX25SHQBMB4rtJ5GUIvTl6dU50kun+kgkZQl9+vaqzP2XU1uRSIrU8quuBUBF1hHq/Ukk5Y4C2lwth98HQHv+JJJSZfP6eO3LAQCTDyZQG5FIihb6+D8uB4DJQAk8SSSlC3188uXy9m+gtiGRVKG1ULnuAFQUIjhH7UIiqULo610ql+vC4T8V7SCR1CGn1+frIABuZbaG2oREUpXQ529FAGBRwmRqDxJJVUKfb44AwMqkVKiTRFKX0OfDEQATqC1IJFVqAgJgAbWDyuRygePwKTBv2gkGZqXsaw/7Hkl1WoAAoP1/lcip0UHpN79A0aRFkNNuFGQ9NASOP/QUpLR7Fs5OWgiFm3aAQ1dEDaUebUAAUKpvhff2ttgU0M9cAjnhIyDr9l6QUTsS0sPaQsZdveHIXY/B/rBHIbZ2OBxo0gOORI6A9Jnvgyn2CI0KlK84BMBhagflyOMoB1eBgQ/xjcvWgfb+QRUOXzOcO31lqwyAv1jNNhwIh+6PgVz2GRb2WeXsM/GzSYrSYQSAgdpB7r28G1w6PdgSjoFp5X8hr88UyLyp8yUOX2UAXGTxN3WE1D4vQt7KTWBmf6Oc/S0P+5sk2csQRm0g496+zAb2g8fBtGITFIyZB9rWT13T6X0BQGVLbv0kpI15A3JXbAQz+9vuMjo9LmcRAOTY4efrwfzJZigY9QbkRIysUm8vCgCVRwVHIobD6VGvg45dS3k+LR4SAEgB7e2tO+KgcOJCyG4zHLIadWfz+gifHF8EAP63XtAWEhp1hcNtnoYzE9+C4h2xbFRgpQdGACD57u3sP7uD9fQGsB84DoY3VoK2ZcwVF/NCCoBLFg8j4FDLJyDrjRVgZtdezkYrbnYvFGtKACBdS04X36u37k0C47L1kNt9ImRcHy3M4QMOgIss7vooONZ9POQsWwfGvYfArskDj5O2FgkApL/IXWIG2/7DYFz+DeQPeRk09/QPmNMHEwCVLfGevnBqyGzIZfdoYvfqZPdMIgCou8M/lw2mFRshf9g/IfuRpyGzfqegOH4oAHBh8bB+Bzj8yDA4NewVvpNgO6elF4EAoKLpvcUKlq17oGDka3zbLrNhV6HzeqkDoPJ6QULDLpDcejCcHjkH9KxN3BZaPCQAKMrbPeCx2vm2nfX3g1A05V+gadYXMupEQXqN0Di9ZABQ2Wq0gdg6EZDYrA+cm7IYjKyt+OIhaztsQxIBQF5yuaCcDW2tuxKgZPFnkNt5HKTXigi5w0sWABdZbK22cLTzc6BdvAZKWBviNIHOJRAApO/3+Qaw7j4IJUu+Al2/aZB1x2OSc3o5AKCyHbyjJ6T2mwLZS76Ekt0VIwMSAUBSvb0jJQ2MS9fxFfxsNq/PqNtO0o4vJwBcGBXUjeJhyCeHzIacpV+DJeU0jQoIAKETbt1Zvt0Fuiemg7blQMi8uYvfkXkEgCqAoGZbiL+5Ew82OvHES1D07a/goi1FAkDAF/PKbODMKYCybX/wGPysJr0ks5inJgBcbvHwQJOekDbqdTBs2wMO9ox4KDItHhIA/PZ7eznfqy/bEQuGuasgJ/JZ2Tq7IgFwGcOEJllzV/IzCTb27HgYMokAUL3FPD2U/fgnFL/1CegGvARZt/VQlOMrGQDnLeG2bpA6YBpo3loNhh/3goMWDwkAV+3trXawxaXwbbv8wbNAe+8TF1JnKdUyW8ZACptLKxEAF9YMMLPRvf3h5OCZoGXP1sSeMY8vIBEAeG9fVALmL7ZBXq9JoGFOn9mgk6zn9VXu/a9rB0XT3oX0ae9A7HWRiobA+fWC+AYdOAyO9ZoI+eyZO9mzJwCoauneA26zhZ+4s2z+HXSDZvJQXLkv5vli2lZP8gNIJb8l8BV1xQPgMouHCQ07w8lBM6Bo829gZ++Ei70b+I4QAJQ2vLdYoTwtC8p+3sd7Pe2DT6rK2S8xNrUpHDOXL3K6mWGKLxwqqwoCF1nSg4P4aMjA3hEre1dcKjmXoGgAOLPz+V694bUVkPfYZNbbd1O345+f+9/UmYcpn1fJrnie4kvNALiweNiwCxx/bBJkvvYxFLF3x87eIQKAnEb5JgtYfzsAxfNW8XBczd2PSzIOP5SW9/iLfNHzQpuxr48//gIB4C/nEcLh4N29eRhyFnuXcKrkMpUSACTb22fk8IQaeY+9AJrm/SDjxg7k7Few0vW/XNJ+heu3k+NfKbPRjdGQ2LwPHxnkLl8PdvauEQBCvZhnLOVOX7pxJ+gGzeIOr8bFvOpaTvRocBebLgUo+15K9LPk8FVYPEQgHO89GYo27gAbewed7F2U6+KhrACATu84kQ4WDMcdO5/39OTU1dj6Y4A0frgePA7npQuljnLI+XAdf8HJ2auR6oyNDM6MnQf6bXugjL2bHAYEAJEb9RVn60s3/Qr6WR9AbufnIeOG9uTQPhimE3eknrtiU5exf8P03uTYPkwTbmgHRzuPhfRZS6Bw007Z5DCQLACwRyrbvp8XtczrNRmy7uwtu9N2kur9a0fy9OJuc9mVWWu28HTeat8S9LdOwsE7e8HxXhN5kVXD9n3glnBNRckCwJVTwDPpYMQaObCAwJ8HBoP11/irn5Jj/1bMfibpgYHkyCJ2Eq6L5KMCPKFIAKj2EMDDy1mT8wqwWhFQOGEh3yK9JnjZz5yd8BZPy0VOLOB0YvhwSR9NlvQagK7vVFrVF2BYZwBPN1ZVeHoO8/iTA/u/a5DadwqtAfiqQtYThSpltpJ6f13MDH7oqaoqLyqGEzHTaRQgIPX52QkLCAC+quTtNRTF5+/iX72OYP5sa7XbPv+z7yG+XntyYj+zG2vf/pQA4KtMq79jAIgkR/Zn8a/1Uzx+otqRlex3kloPJkf2M5xYt/pbAoCvsu5JrIjuI0f2zWqEg2nFJp/bP2/FRj6PJWf2EQB1IsDI3mECgI9yHD9LAPCn9285EFy5hb63P/vdxL/1I2f2AwBlJ9MJAD6H/posFAfgh2FOQzzz73P72x2Q9frH5My+RgdeFyn5pKSSDwXG9NvkzD5s/bWIAVv8Uf/2oNnvmuNT4FCLAeTQPtiBJj0oFNhf5USNIof2wTDzkdtg8rv9nQYjnJv2Djm0D5YSNZIA4HcwUMx0cmhfAn9++pP14CIiMgEM7LMoMKj6diLmJQKAv9LPWkJOXR2rGQEFI14Dl05cHnwH+6zTI17lZbnIsatuGbPeJwD4HQz03lpy6moYrpmY1/4g/Dnkr93G57Tk2FW37Pe+IAD4K8uGHeTY1dj3x3wJzgCcPrOzz8STbRQXUHUr3PALAcDv4WdKGjl2VcN+b+gAxqVfA7jdwp+Dh30mluWOuyGanLuKhiXMCQB+qvxcNs9jTw5ehcW/Zv3AlVcUuGfBPjuxWR9y7iqWJMOsQAQAf7ehtPk8oo0cvCqBP6sD/jw0b/2HHLwKhtWW7Np8AoC/wh4tpx3FAlxz8a9xTyg/nRnw52Flf+NA4+7k5NeKAWg3EhwBHI2pBwBFJaAbPIuc/BqGuRM8VlvAn4eb/Y0zExaQk1/DTg6eAeUyKD4qeQC4S8xQOO5NcvKrlvrqUlHqKxipp9jfqCgl1okc/Sp27sXFsqgkJHkAYAkrnhiEHP2KW3+FY+eDK98QvIXZfD2kjZ1HW4JXMe3iNbzkGgHAXwCUO8H8yWZy9CvN/W/rAaXrtrO5kjt4z4T9rYJ1P0PCbd3I2a9guk++4+8uAUCAyn7YS85+BcPEqbhVGmzhFhcmvCRnv7wZfvhDDq4lDwBYdx/kPR05/EVz/5u78FDpUPQ0+Dcx1DX+ZloLuOQYMBsZlbB3lgAgqreJPQKaeweQ019c6DNiZEh6/wsjsxPn4PCjw8jpL44BuLc/mNg7SwAQJEwNltvxOXL6ymG/daPBMOej0BadcHsgc85yiKsbRY5fyY71mADWUxkEAGGrzmy+qes/jRy/ctjv3X3AmZ4d+tEZu4aDd/cmx69kqf2nyiIMWDYAcBUY+FYXOX6lwJ9xb0rm+ZwZN58cv5JhufDyAgMBQNhI02QB/QxKDFJ5+G8/fEoyz6eUXUssTQMuWPqM93iNRQKAMAK4oXgRBQNd2PqLmQEei9X/3ZXkk9z8HqGxa8FSYuT83iCgRZ8G5Ei2egHAZFz+De/5VN/7X9cOyrbv5wtwfjHVYALDO59DPjNM/OnvYqBh+z5eDlv1x4DZSCh3+Xq5uJV8AFC6YQdk3fEY9f6s93dqdH5u4nvAnpgK2b0mweleE6GUfe3vboKdXRONAh6Fg3f0gkL2rhIARO85/7Jf9XkBMut3BNPqzeBxuvzzf0c5lLz7BWTc1RuO3PUYZLOv8Xt+fSa7Jt3q7yC+fgfV5wEoZu8qAUD0dtP+w5D9yNOqBkBu53HgOJrm/5JKsRmyHx52AQDJDw8FJ/uev7Kwa+N5A1UMgMOPDAXT/mQCgPBYgDMayOs+QdVzf8MrH/rdU3NH3fw7L7t+HgBYxrpo829+fy5eW8Yry1S9FnCs+3iwnskiAAiPBcjOB12fKaoFQPZDQ8F+8Lj/DcmG6rldx1dAxQsAfHGPdn3e76kFysyuMfmhp9QbBNTnRbBn5xMARAt7l4Lhc9TZ+9eOgsIJC8VMpWKP8AQiFwMAE3yIil8/M+EtiK0doUoAnB7+qpBRGgHgMiqcuJAPXVW3+NewG3dcvyHKevjCSYs4UC4GADrs2UkLhYwCECQJDbuoMhMwZgKSk2QFAMPcVZBxYwfVASCv71QhR34dh0+xqcSQ/40sKgEADYfuFgERhnitqX1fVB0A4uu1B82C/xAAAiXjyk28N1QbAHi+PwHC3AGZDTpfEQDxDTpCNvsZIX+LXbPaAICjnryVGwkAgZJly++QdWdvdZ35jx4FbgHJJR0n0yGv5yRIr9H2igDYX+NRONZzIpSxn/V70ZZdc0r0s+oKArqzF+jZO0oACFQswN5DoGneT1WHfkq//pl5k5/zcrcbStf9DJmN/ppV6RIAYDabRt14vj9/Y9k97JoLvvoRYuuoZzEwsXlfMLJ3lAAQqFiAkxmgvX+Qenr/Ds/x+Ae/e2M8Tn2Z1OqXAwA/zjpuvpDjrNZTmXAkcoRqAJDUaiDYzmoIAIHS+Qg2VfT+10ezOfuXPC26f12xh0dRapr2qTIADjZ9HEzsd/w9H4BpsXFNIe76KNVEAbpKywgAgVRO+Ah1BP4w0KHj+r0ib3NA8bxVkF4zosoA2F+zLWTNWwlu9rt+bwmyezj88FBVAOBI+HC5uZP8AMCHsjXDFR/2q5/1gf+9Pw7/8wov2/tfFQB8FNAbHOx3/R61sXtIn7VE+eHBNdvwqRMBIMDSz3j/sr2ZovL93RcDZTvixGydfrThyqC5CgDQcj/6Rsg1FO+IhUP3DVB2EBAbNWEmIAJAoGMB2EuZXitSuQBg94Yhz54y/wt94mfkdBjjMwBSOowGt4DrwM/AENnYWuHKBQC7N1HAJABcRaUbd0JGbeUCAIt9WLbuEdJWmDkos34nnwGAZ/uLt+8TM3LbulvRRUQwDLhw4w4CQKBlj0uBjDpRyt36azdaSL4/j90BBSPmXPXsxLUAgMeET414Fdx2/xcDMW9gSjvlBgZhvIMp7ggBIOCxAGe1fJFMkQCoGQHmtT8IaSfcQdA+MPjqi43XAADf235gYMWWoADlr93GdxiUCIC4upFCFk0JAFVQRr2OCj3zPwTcZouQ3l8/c8k1QVkVAODqffrM98WMAti9KTVXQFy99nJ0JXkCQHv/QAWe+Y/kefqEnPpLSYPcTmOv/TerAICKZCHjoOz4Wf/BhAVF3/2cz5cVlwvw/hgCQLCEufGUBgAMcbYnizmKa/r3t3859ecvABJu6Sys3n1p8klIYs6iNABgLkQCQJCE2XGUBgD9y8vAbfT/1J8zpwAKnnm1aqOOKgKAZ7p55p/gYJ/t9zSA3WPGy0sVB4CzExYQAIIlTI6pqN6/5UCw/hrPum9/u38PWHcnst6/k3AAYK4AXvPe32rE7NeL2b1i+mwlASDznx8SAIIl8+dbFRX4g+HNbr3R73ZxW6yXPfUnAgDnTwm6BGxROvUl/LOUFBhUuPEXAkCwZN0ZpxgAYIKT0vViXh5H6jnIatwjYAA40Lg7WNPEpLwuXL8dDt75mGIAULwzlgAQtFiAUxmK2ffP6zOVn9cXoeoWUK0uANCy3/tCzDNk94wptJUSF1DG3kkCQJDkzMyFzFu6KqDUVycwfbJZSJvgyUHtA4MCDgAMDHILOKXId3OWr+eJNGWfC/CWzmBn7yQBIFgAyC0EbaXstrIO/CkxC2kTjCCsbsZkXwAQd2M0j+gT8hyLTZDUerDsAYDBTY7cAgJAsIRD5txu8i8TZvxQTBlpTBqq6z+t2nkSfAEAnntP7T+VJ/0UIe3iNfIvB9bteSEp1AgAVX3hi81QMHquvM/839MPnFoxJaTw9KCmWd/qRx/6AgBMftnscX66T4TsWh0k3tNX1gBIG/0GH80QAIIkPC1nePUjWQNAVKFPT2kZFE1716cDUr4CIO78+QABKcPc3oKiso4BeHW5kO1RAkA1FrxKFn8m396f9da2/Uf8D6phsiUc9TlPoq8A4PnvIkeA+cAxAQ/Tw08b4qhCrgDAaYyohVECQBVfGsv3e+QJgBrhPFhHxNYfjiCMy9ZDxg3tgw6AuBvaQc6ydUJGMTh/xsCg/TXayBIA+u93C4E5AaAawmw3cswLkHXX41D2414xe+lnNRXVfnw9gegHANCO95wIVkF58A2sTQ7eJb/AIDwuXczeRblKtgCw7cNc931lFvgTDvlDXwGniPrxmO8/LoXvhuREPeub9XkRTvd5AY5EjfTJcPXbzK5BRO9nZ21yauhsvssgq2pAWENhXzIBINiyJ6aC9qGh8ur9G3UH06r/ArjcQgDg0unBfvC475Z0EixJJ8DMvvbVynVFQgDgYW2St2oTJDTqJq9iIG2e5kecCQBBFha7lFssQE7UKHCmZwPpCqM61jYpbGQhqxiAHhPAKtMwYFkDwKnV8eG0bDL+3NiBl/oCt4c8/Yp7gp6KUmI3RssGADhtwVgGAkCw3xWDEYomvy2fM/8tYsB5TktOfq1RAGujQy3kU0Tk7ORF4DQYCQBB3wm02sEw52P5ZPyZ9QF5dxWFpcRkEwQ05yPZxgDIGgCokne+kMepv5s6g+PIafLsKsrC2ir+po6yqAaUs+QrWbe1rAFg/nwbZDbsJnkAFD6/gFfpJVVxemezw+kRr0r/GPCtXSFfUB0HAoAPwjJhmFFH0r1/g85g3ZUg20ix0MzvPFC8Mw7iG3SQNAAO3tlLluXAFAMArH6T/cjTkgZAwbNv8P16UvWE5+t5YJCUYwAeGSasahIBwAdhIAvurUu292fTE0zU4XG6yKOrOwhgbVbA2i6hYRfJAgBjFkqTThAAQiVnRg7k9ZosWQDk9ZkC5Wc05M0+quxkOj9vIFUAHO81CWzsHSQAhGqxSG+E/IEzJTr378SPLIuopqPaxUB7OWjf/lSyawEnB84Ap95IAAjlYpFUMwNltx3Oa/SR/JMl5TQcbvuMZDMByX1xN0zuL4h++vuQUSdKWmG/dduBfvYy8l5Bypi9FOLqRkmrGvD1UbKtBqQoAJS8t5YH2kjtzL/j6BnyXFGjgKNpkssVgIFKeG6BABBimb/6EbIa95TW1h+bltDcX+BMj7UlDrelBACsklTA3j0CQKh7h+93Sy4YyPZnMnmtYJn+TJJcEJD++98JAKGW49hZ0N4/SDpbf/2mgrtUUIZYjwfKft7HdxOK314j3pZ8BbolX/KVduG2eA0Yfv5T2CKZi7Vpar8pkgFA0v0xUHbsDAEg1HKm54D2wSelsfh3Q3uwbNkN4HaLubeMHMh+9JnAXa+fOQGvGSn36DCwi9onZ22q3/I7T0YqiWpArQeDPSuXABDy+aGjHHLaDpdG799zEnNacS+Fec33AV3fCDQAcJ6sY/cgShh0I5XAoCMRwxUxtQpTwk3k9Z3K022HtPe/PhqMmCZb0Kk/V1EJFIx6A9JrRcoWAHhcNm3U61DO7kXIIIC1bc6yr/kWXEgBUKMNpPadQgCQigqff5OX2g5pvr/2Y8AuMDmkdU8iaP8e2AKogQYAHyr//UkoYfciSpiAM6X9qNACoGZbOPP8fAKAVGSY/2/WU4YOAFifAAN/PIIyw3isNihesDqgvX+wAICjAA27Fze7JyGjANbGGBiE+fhDlwikLWTNX0UAkIpwrpxROzJ0Yb8PDQF7/FFh91N+KgNyO48LPLiCAAC0o52fE5o51xR7hI8sQgaA2hGQ/8U2AoBUxKsEhSgcGMFTOHa+uMAflwtK//srZNTrqBgAxNVrD0X/3Qkel5hj0W6LlQcGxdYOD1k1oJLfDxAApCLH8bM8/j5UxT6se5OE3YvbZIH8EXOCA68gAQANU3y52L2JUsmv8TwlV0jOAdSNhLLjZwgAktkKLLPxVfhQbf2JKJB5AWap5yDzli6KA0DCLZ2hjN2bMFBabSHbEsRdCHeZlQAgJWXW7xh8ANQI59MPkSrGBc1gTV+CCAA0jeCFsyI2VQpFReH4+u2V4jbKAUBul3HBX/x79Bk++hA5/Ne2HKhYABxq+QSbBpSKay/W9hhtGGwAHO0ylgAgNelipgcXALUj+e6DkEKfXpWu387DiZUKAAzjLWD3KGzqx9pet2ZL0BcDT8S8RACQmvTT3g1u79/mGSg/nSXuZbZYIf+p2UENaAo2AGJrtoWTT83iq/iiZD2dySv0BhMA6dPeIQBITSX/+jyoAMBAHZHDf9u+ZNC2GBjcLcwgA4BPA1o8AaZ94o5L4zQAA42CeQ+5H64jAEhNlg07glfos/VTYP3jkLiLd7vBMHdVUIf/oQJA3A3RkDV3pbATkygjexbJrYMXGFS0aQcBQGqyHzgetMAf/YwlQnt/jGPI7fJ88IOYQgCA84toFnbPIkcB6TPeD9pagPnAMQKA1IRn54MRDqz52wAo+2GvuAt3ucD8xTbIbNRdNQBIaNSVh9KKigxEGX74Aw79rV8QwoDDZV8LQJkAyM4HTbO+gXWamhGgi5kB7hKzOP/P1/NQ4pCEMYcIAGhnxs6D8nxxJdOc7Jng6jye1AvkdSc26wN29q4RACQmV24hZP9jaIDLfHcB81c/iZ26JKaC5t4BqgPAoXv7g5ndu0hhks74mzoFNhFI5Ahw6IoIAFKT22CE/KEvB3br7+FhQst842cVL1oTslwGoQQA9tTaRZ/yUuDC3gHWnskPDwnodZ8a9jI4DUYCgOQAYCyFwvELAuow5s+2ih+1MKiELI9BKAGAyUKYszpYG4hU/mffB3bqMv5NcBpLCQBSEybjCGQsAK4vuAXXgbN891to05iFGAB8S+27XULbtJw9o8RmjwfserP/9RlPSkIAkBoAyp1gXr05cIE/Cz8Fj1NssQ/dwBmqB8CJgdPFvgfsGWkXfhKw69Wt/k5RRV8UAwDwsB516x+B6f1bxIA9+ZTQy8W9/6zbeqgeAAdu6wYWwWfrSw+lQmLTwIwC9Fv38HeNACBBWX87AJm3dBV+5Fc/6wOhW39YLINH/oW4qKkUABBbJ6IiMlBglV3cEkyf+b7wo8IHmvTgUYdKkqIAYEs4CtqWMcIDf6y/xgu9TmdmLmQ/8nToC5lIAAC8gMgjw8CeKbbIhuHnfXDw7t7CqwEpKQpQcQBwpKRBTuSzYjP+9JoMZTvjwH74lDArefcLSRQ0lQoAsIBINmuTUtY2oqx4Zywc7yU2Y1BKh9FQJjCEmQAgWOVntaDrN1V4qe/cjs8JNc09/QOe8ltOAMDU4Yn39IOUjmOEmuiS4lib0MbeMQKARMXDap+bJ6lKwVI2qQBALpb23Fyh4csEAMHCaMCiFxaTcxMAAmJnX1ikqChAxQGAbwFt2AHaB58KWZZgAoDyLO76dpD04GAo3PCL0txFeQDAIA37weOgn/E+aO57ghydAODfoaX7+kP6jPfAzN4pJQUAKRYAF0BQagXLtj+gYORrITlrTwCQt2HOgtMj54B+2x5wlVqV6ibKBUDFooCHH7ixfLsL8rpPDHngDQFA+oaBSce6j4ci9s7wg0puj6JdRNkAuBB54wJXUQk/y4/beqEsJEoAkKjj1w7n24aYU6CcvSsep0sVrqEOAFy0VVg8/z88safaFwoJABVlvpJaDwbN/H+DQ2FbfASAK60POMp52HDR1HdA2yKGx/sTAFRmNdrAoRYD4NzUf4GZvQsi6zsSAOSyRGCy8Np+mJMvs34nAoBKLL5+B56TsJg9e5EViwkAcp0W6PRQuv4XyO08TlXrA2oDAM7zj/WcCIWbdoJDp6cXnwBQaVrgdIEzpwBMn2zmJwDTVQACtQAgtnYEJP/9SdB98h1f2ReZjpwAoMSpQVEJGF5fwUGQUTeaACDXBb66UbxWQNbrH4OTPVMSAaDqI4JyJ9j2JkHRC29XjAhClLmXAOBbEdJE5vgYu2/ce0iREXwEgGCNBopNvBJQwei5kFGvAwFA6r1+vWhIG/0GrxTkZM+ORAAQs1DI5o540AgjCgkA0jSM4MMDO6JTjRMASBXChcLsfDCt3ATaVoNlv1CoBADgyn5Sq0GQx54JluxSSwQfASDULMjKA8O8VaBtOVC2ZwzkDACM2T/U8gnImrcS7Fm59EISAEIjW1wKFI57U5YLhbIEgHeB78y4+WCKO0IvIAFAAguFxlKwbNkNhWPmQebNXQgAgTqie3MnSBszF/RbfgeXgspzEQAUQQE3uPKK+NHjXJksFMoJABeO6OYVgoe1NYkAINHtgoqIQuOSr0B7/yBJZP+VKwAwWzDm4s9Z8iU4WJtSBB8BQF4Lhdn5YHhtBWgffFKSZwykCgC+sv/gIMh87SO+sk8iAMha9gPH+EKhVmI5CqUIgEP3DeALfEqrwEMAUPsSgbkMLFv3QMGI10JeFFSKAMAioadHzAH91t3gYm1FIgAocH3ADU6MKFz3M+T2mAjptSJUD4DYWm3hWI/xULDuJ3Dk4jyfFvgIAAoXHk5xFRjA+PFGnqMwVCAIJQDQ8TEHX+7HG6CctQUd2CEAqHahUD9zCd8xCHZEYSgAEHtdJA/dzXx1OTh0RfQCEABIHqcTbLFHoHDCQtA066tYACQ26wNnJy+C0sRUfs8kAgCpMghKrVD67S7IH/JyUIqZBAsABxp1hVNDZkPRt78qusgGAYDkv9xucGp0YP7yR8jt8FxApwWBBgAe2EnpMBryv/wB7OyegCL4CACkKo4GHOU8WSlGFGbd0TsgB40CBQDMyHPgjl4VEXzsHtSacpsAQBIi3DHQ/99S0NzTHzKuaydZAOACX+I9/SDj/z7gK/skAgBJ1IgAcxTuPwyF49+qqHpcM1w6AKjZhlfRPTP+TTCxa6QtPQIAKVBLBAYjlP30Z8VCoZ/FTEQAAItsnBwyGwzsmpzs2kgEAFIQhBmJsNhpTvRonw8a+QMAPLCTEj2KF9O0s2shEQBIIZgWODV5YFz+DWia9q32QqFPAMCMPE0fh9zl68HO/jYN9wkAJClMDYpKQD97KWia96tyMZPqAACLbCQ27wsZsz+gIhsEAJI05wUusP2ZBIUT3uIguNYZg6oAAGP2E5v3gbMTFoCRfTZl3SUAkCQul76E5ygseOZVyKzf0WcAxNdvD6eeeYXn4CvXU6+vVADQhq1SBwQaHZR+8wuPKKwuADCCr5D9Ls7zSYqVAQFwmNpB2dMCZ1YuGJeuuyR1+cUAOF9TL2fp1zzXPg33Fa/DCIA4age1jAjyoHjeKh5IlFE76gIAsHw2BvJo2L9Rj68qxSEANlA7qEvWPw5BwZh5oI0eDSeiR/Fc+0b2PZLqtAEBsIDaQX3ixUx2xoNpZxw4jWZqEHVqAQJgArUDiaRKPYsACGfmobYgkVQl9Pk2CIDmzJKpPUgkVQl9vjkC4FZma6g9SCRVCX3+VgRAHWaTmdGpDhJJHXJ6fb5OGIp90ZXZOWoXEkkVQl/vGnZe7H/uAooHIJHUorXMGodVlndIQCc+SCRlC318ctjFYt/8B7MEah8SSbHCrb9Y9PXLAaA2sw+Y2aidSCRFCssuv4O+HnY5sX9owyyL2olEUqTQt9uEXUnsH2sxW07tRCIpUujbtcKuJvYDtzPTUFuRSIoS+vTtYVUR+8HpzOzUZiSSIoS+PD2sqmI/3ITZT9RuJJIihL7cpDoAwLWAfszSqO1IJFkrlVnva879LwOBusxeYWaiNiSRZCk9s5fQl8N8EfvFBsxWAMUGkEhyk83ruw3C/BH7gKbMtlB7kkiyEvps0zARYh/UitkualMSSRZCX20VJlLsA6OAUoiTSFIX+mhUmGhBxc5AFI0ESCRJ9/zoo7XCAiXvdGAL0MIgiSQV2bw+2SosGIKKhUFcYaQtQhIptDJ5fbFpWDAFFVuEGCdAwUIkUmiEQT4vg79bfX5AAIOFMGIQQw3p7ACJFBzZvT6HEX51w0IpqFgcxLMDeICIThGSSIGVxutr6HO1wqQkqDhKjGeOs4AWCUkkEcI0XmVen0Lfuj1MyvKOCDCzEKYXwxyDlGiURPJN6DuYw+8dr0/VCpOLoCLHICYaxWzDa6EiFzkVHyGRri6n11fWen0Hfah2mJzFbqAxVBQfwRvCkkTJQAVJSaTKw/xkr29M9vpK4zClCSrKkGEtQixIilWJsTT5AqgoSoIhjIeZGeh9IClUBu87Hud95xd4fSDc6xPoG3WC6ZP/DzH9yWKdZZdeAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA2LTAyVDAzOjAwOjExKzAwOjAw1t9LpgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNi0wMlQwMzowMDoxMSswMDowMKeC8xoAAAAASUVORK5CYII=',
      descripcion: 'Domina Angular para desarrollar aplicaciones front-end robustas y mantenibles.',
      video: 'url_al_video_del_curso'
    },
    {
      titulo: 'Introducción a Python y Data Science',
      autor: 'Francisco Rus',
      imagen: '',
      descripcion: 'Comienza tu viaje en el mundo de la programación y la ciencia de datos con Python.',
      video: 'url_al_video_del_curso'
    }
  ];


  openLogin() {
    this.navCtrl.navigateForward('/login');
  }

  openRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
