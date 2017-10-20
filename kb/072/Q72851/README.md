---
layout: page
title: "Q72851: BUG: Arg+Linsert May Corrupt Lines Longer Than 128 Characters"
permalink: /kb/072/Q72851/
---

## Q72851: BUG: Arg+Linsert May Corrupt Lines Longer Than 128 Characters

{% raw %}

	Article: Q72851
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Programmer's WorkBench (PWB) versions 1.0 and 1.1, a line that
	is greater than 128 characters may be corrupted if the "Arg Linsert" function is
	executed on that line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the PWB versions 1.0 and 1.1. We
	are researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The Arg+Linsert form of the Linsert function is designed to move the current
	line so that the first nonblank character is in the column where the cursor
	resides; however, instead of moving over as expected, lines longer than 128
	characters may lose some characters in the middle.
	
	This behavior may be demonstrated by following these steps:
	
	1. Enter a line of text beginning in column 1 that goes past column 128.
	
	2. Press the END key to go to the end of the line and note the column number of
	  the cursor.
	
	3. Move the cursor to column 10 and press ALT+A (Arg) followed by CTRL+N
	  (Linsert).
	
	4. Press END again and observe the column number of the cursor.
	
	The whole line will move over so that the line now begins in column Therefore,
	the column for the end of the line should be 10 greater than the original
	position; however, the end of the line is in the same position it was in before
	the move. If you check the line carefully, you will find that 10 characters are
	missing from somewhere in the middle.
	
	Additional query words: 1.00 1.10 buglist1.00 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
