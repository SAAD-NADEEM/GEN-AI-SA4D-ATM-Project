# GEN-AI-SA4D-ATM-Project

This project was started before the 5th night class.
The program only loops when prompt with wrong credentials and display info such as bank balance withdraw and deposited ammount, which where generated randomly.As stated on the git repo section of ATM.

after the 5th class it got updated with features as per the project done by sir Hamzah and the homework given.


CODE OVERVIEW:

1) Credentials are given at the welcome screen.

2) first block of code validates the credentials input by the user. First it will take both user id and pin, then display an "PIN" error if pin was incorrect or an "ID" error if id was incorrect, and wrong credentials if both were incorrect.

3) Then it gives three options, Withdraw, Fast cash, Check balance and exit.

4) selecting either withdraw or fast cash will ask to input a ammount or select an ammount. That ammount would then be minus from the total balance or will display a error if ammount is greater then the balance.

5) Program will not terminate and will ask for the options again, selecting exit will then terminate the program.