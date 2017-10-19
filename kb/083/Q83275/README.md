---
layout: page
title: "Q83275: Using Extended ASCII Characters (Not Found on Keyboard)"
permalink: /kb/083/Q83275/
---

## Q83275: Using Extended ASCII Characters (Not Found on Keyboard)

	Article: Q83275
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ASCII (American Standard Code for Information Interchange) character set
	used by MS-DOS contains 256 characters. Many of these characters are not located
	on the computer keyboard; however, you can enter these characters by using a
	different code page.
	
	MORE INFORMATION
	================
	
	The ASCII character set consists of 256 codes or characters. The first 128 codes
	represent the alphabet, numbers, punctuation, and control characters. The other
	128 codes are extended characters, and include European characters, graphics,
	and scientific characters. These extended characters are not represented on the
	keyboard.
	
	To enter an ASCII character that is not represented on the keyboard, do the
	following:
	
	1. At the command prompt, type:
	
	  " [drive]\[path]\CHCP.EXE" (without the quotation marks)
	
	  (Where [drive] specifies the drive where MS-DOS is installed, and [path]
	  specifies the directory where MS-DOS is installed.)
	
	2. The active code page is returned. See the Microsoft MS-DOS User's Guide" for
	  version 5.0, 6.0, or 6.2 to find the Code Page Table for the returned code
	  page.
	
	3. Locate the character in the code page table to be displayed. The character
	  has a corresponding integer value that represents its decimal equivalent.
	
	4. At the command prompt, hold down the ALT key while typing the character's
	  decimal equivalent on the numeric keypad.
	
	  NOTE: You MUST use the number keys on the numeric keypad when typing an
	  extended character key combination.
	
	MS-DOS versions 5.0, 6.0, and 6.2 reserve characters 0 through 31 for control
	characters. These characters, except numbers 20 and 21, will not be displayed
	when entered from the command prompt. Characters 32 through 127 are located on
	the keyboard, and characters 128 and above are extended characters.
	
	If the above process does not enable the display of extended ASCII characters in
	an MS-DOS based application, contact your hardware manufacturer to ensure that
	support for these characters is provided.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, page 632-637.
	
	"Microsoft MS-DOS User's Guide," version 6.0 and 6.2, pages 269-276.
	
	Additional query words: 6.22 5.00 6.00 5.00a 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
