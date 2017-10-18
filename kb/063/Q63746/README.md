---
layout: page
title: "Q63746: Print Prints Incorrect Higher-Order Character"
permalink: kb/063/Q63746/
---

## Q63746: Print Prints Incorrect Higher-Order Character

	Article: Q63746
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Microsoft Windows User's Guide" for version 3.0 states that you can create
	characters by pressing the ALT key while you type a three-digit character code
	on the numeric keypad. The character appears properly on the screen when you
	type it, but it may print as something else.
	
	CAUSE
	=====
	
	Programs running under Windows display characters with the ANSI character set.
	Most computers and printers use character sets that are different from the ANSI
	character set for character codes above 127.
	
	A given printer prints higher-order (character codes above 127) characters using
	the OEM character set built into that printer.
	
	WORKAROUND
	==========
	
	You can determine the proper print character by looking up the number of the
	character in the your printer's documentation and entering the given number. The
	character may not appear properly on the screen, but it prints correctly.
	
	NOTE: When using the Modern, Script, or Roman font built into Windows, use the
	ANSI higher-order character table instead of the OEM table. The Modern, Script,
	and Roman fonts are made as ANSI fonts only.
	
	MORE INFORMATION
	================
	
	To enter an ANSI higher-order character, rather than an OEM character, press the
	ALT key while you type the number of the character on the keypad with a leading
	zero. For example, to enter OEM character 163 (that is, a "u" with an apostrophe
	over it on IBM PC), do the following:
	
	1. Press the NUMLOCK key.
	
	2. Press ALT+163.
	
	3. Release the ALT key and Press the NUMLOCK key.
	
	To enter ANSI character 163 (English pound sign in Windows), do the following:
	
	1. Press the NUMLOCK key.
	
	2. Press ALT+0163.
	
	3. Release the ALT key and Press the NUMLOCK key.
	
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
