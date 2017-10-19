---
layout: page
title: "Q91680: Keyboard Control in Calculator When Pasting Formulas"
permalink: /kb/091/Q91680/
---

## Q91680: Keyboard Control in Calculator When Pasting Formulas

	Article: Q91680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Calculator can paste numbers and formulas from the Clipboard; however, the
	syntax of a formula is not necessarily the same syntax you would normally use.
	For example, pasting "5*3=" generates the correct result "15," but pasting
	"SIN(30)" does not generate the correct result "5."
	
	MORE INFORMATION
	================
	
	This behavior occurs because of the way Calculator accepts data pasted from the
	Clipboard. Calculator uses single keystrokes to activate its functions or
	buttons and uses data from the Clipboard one character at a time, moving left to
	right.
	
	When Calculator uses a character from the pasted data, the data is used as if you
	typed that character while in Calculator. In the "SIN(30)" example, using pasted
	data would be the same as clicking SINE, INVERSE, NATURAL LOG, and then finally
	typing "30." The correct formula in this case would be "30s" (type "30" (without
	the quotation marks) and then activate the SINE function.)
	
	Below is a table listing all the buttons in Calculator with the keystrokes that
	activate them.
	
	  Function                Key(s)
	  ------------------------------
	
	  "."                     .
	  "0"                     0
	  "1"                     1
	  "2"                     2
	  "3"                     3
	  "4"                     4
	  "5"                     5
	  "6"                     6
	  "7"                     7
	  "8"                     8
	  "9"                     9
	  "("                     (
	  ")"                     )
	  "*"                     *
	  "+"                     +
	  "+/-"                   F9
	  "-"                     -
	  "/"                     / 
	  "="                     =
	  "1/x"                   r
	  "A"                     a
	  "And"                   &
	  "Ave"                   CTRL A
	  "B"                     b
	  "Back"                  BACKSPACE
	  "Bin"                   F8
	  "C"                     c
	  "C (Clear)"             ESC
	  "CE"                    DEL
	  "cos"                   o
	  "D"                     d
	  "Dat"                   INS
	  "Dec"                   F6
	  "Deg"                   F2
	  "dms"                   m
	  "E"                     e
	  "Exp"                   x
	  "F"                     f
	  "F-E"                   v
	  "Grad"                  F4
	  "Hex"                   F5
	  "Hyp"                   h
	  "Int"                   ;
	  "Inv"                   i
	  "ln"                    n
	  "log"                   l
	  "Lsh"                   >
	  "M+"                    CTRL P
	  "MC"                    CTRL L
	  "Mod"                   %
	  "MR"                    CTRL R
	  "MS"                    CTRL M
	  "n!"                    !
	  "Not"                   ~
	  "Oct"                   F7
	  "Or"                    \ 
	  "PI"                    p
	  "Rad"                   F3
	  "s"                     CTRL D
	  "sin"                   s
	  "Sta"                   CTRL S
	  "Sum"                   CTRL T
	  "tan"                   t
	  "x^2"                   @
	  "x^3"                   #
	  "x^y"                   y
	  "Xor"                   ^
	
	Additional query words: calc 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
