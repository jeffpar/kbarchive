---
layout: page
title: "Q32866: Entering and Displaying Control Characters in TELNET or EDLIN"
permalink: /kb/032/Q32866/
---

## Q32866: Entering and Displaying Control Characters in TELNET or EDLIN

	Article: Q32866
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enter a control character into a text file using EDLIN, press CTRL+V followed
	by the character that identifies the particular control character desired (if
	that character is an alphabetic character it must be capitalized). For example,
	to enter CTRL+G (ASCII character 07h) in EDLIN, type CTRL+V followed by the
	capital letter G. EDLIN will display this particular input as ^VG.
	
	Please note that EDLIN displays control characters differently, depending on
	whether you are entering text or you are listing some lines in a file. In the
	previous example, EDLIN represents CTRL+G as ^VG when you are inputting text.
	However, when you exit EDLIN's input mode and list the line that contains the
	CTRL+G character, EDLIN displays the CTRL+G as ^G. This behavior is consistent
	with all control characters except CTRL+I (tab), CTRL+J (linefeed), and CTRL+M
	(carriage return); when EDLIN lists a line that contains these characters, it
	interprets them literally.
	
	MORE INFORMATION
	================
	
	The following is a list of ASCII control-code characters, 0 through 31, that
	many try to include in a text file. The most common control-code character is
	the ESC-key character, ASCII value 27 decimal.
	
	  Decimal  Hexadecimal  Character  Mnemonic
	
	  00       00           NUL        ^@
	  01       01           SOH        ^A
	  02       02           STX        ^B
	  03       03           ETX        ^C
	  04       04           EOT        ^D
	  05       05           ENQ        ^E
	  06       06           ACK        ^F
	  07       07           BEL        ^G
	  08       08           BS         ^H
	  09       09           HT         ^I
	  10       0A           LF         ^J
	  11       0B           VT         ^K
	  12       0C           FF         ^L
	  13       0D           CR         ^M
	  14       0E           SO         ^N
	  15       0F           SI         ^O
	  16       10           DLE        ^P
	  17       11           DC1        ^Q
	  18       12           DC2        ^R
	  19       13           DC3        ^S
	  20       14           DC4        ^T
	  21       15           NAK        ^U
	  22       16           ETB        ^W
	  23       17           SYN        ^V
	  24       18           CAN        ^X
	  25       19           EM         ^Y
	  26       1A           SUB        ^Z
	  27       1B           ESC        ^[
	  28       1C           FS         ^\ 
	  29       1D           GS         ^]
	  30       1E           RS         ^^
	  31       1F           US         ^_
	
	Additional query words: 2.x 3.x 4.00 4.01 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS310 kbMSDOS500 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x3.x,4.x,5.x
	
	=============================================================================
	
