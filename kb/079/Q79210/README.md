---
layout: page
title: "Q79210: DOCERR: Extended Keyboard Detection Is Documented Incorrectly"
permalink: kb/079/Q79210/
---

## Q79210: DOCERR: Extended Keyboard Detection Is Documented Incorrectly

	Article: Q79210
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Macro Assembler (MASM) version 6.0, the online help
	contains a documentation error when describing how to detect an extended
	keyboard. The entry reads:
	
	  0000:0496 1 word If bit 5 set, indicates extended keyboard installed.
	
	In general, the "Microsoft Macro Assembler Programmer's Guide" for version 6.0
	refers to the low order bit as bit 0. Therefore, the user is led to believe that
	if the bit corresponding to decimal value 32 is set (bit 5), then there is an
	extended keyboard installed.
	
	RESOLUTION
	==========
	
	The bit that should be checked is the one corresponding to decimal 16, or bit 4.
	
	MORE INFORMATION
	================
	
	To reach this help screen:
	
	1. Enter QuickHelp by typing "QH" (without the quotation marks) at the MS-DOS
	  prompt.
	
	2. Choose "MASM 6.00 Language" from the Categories menu.
	
	3. From the System Resources box, choose "BIOS Calls."
	
	4. Select "16h - Keyboard Services."
	
	5. Choose "Keyboard Data Memory" from the "See Also" list.
	
	6. Scroll down to the end of this screen.
	
	The error is contained in the last entry of the list.
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
