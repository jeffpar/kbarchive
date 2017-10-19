---
layout: page
title: "Q63318: BUG: PWB Print Does Not Put CR/LF at EOL If Text Selected"
permalink: /kb/063/Q63318/
---

## Q63318: BUG: PWB Print Does Not Put CR/LF at EOL If Text Selected

	Article: Q63318
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Programmer's WorkBench (PWB) version 1.0 or 1.1, when a region of text
	is selected and the Print function is invoked, the resulting output contains
	linefeed characters (0x0A) at the end of each line, rather than a carriage
	return-linefeed (<CR><LF>) combination (0x0D and 0x0A).
	
	Some printer drivers do not recognize this as a valid end-of-line (EOL) character
	and do not print correctly.
	
	RESOLUTION
	==========
	
	The workaround for this problem is to write a program that translates each 0x0A
	found in the output file to the bytes 0x0D and 0x0A, or use a printer driver
	that understands this type of file. In fact, most printers have an escape
	sequence or DIP switch to enable it to recognize this type of file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 1.0 and 1.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, open a file that contains the <CR><LF>
	combination at the end of each line. Highlight a region of text in the file and
	from the File menu choose Print. Tab to the second field and type in the
	following:
	
	  " copy %s test.txt" (without the quotation marks)
	
	This will copy the region of selected to the file TEST.TXT. Using a standard hex
	file viewer, you can see that the end of a line is denoted by a single 0A. If
	you look at the original file using the hex viewer, it will contain 0A 0D at the
	end of each line.
	
	Programmer's WorkBench will recognize this type of file (with a single 0A at each
	end of line) and display it correctly if you try to open it within PWB, but many
	printer drivers do not understand this type of file.
	
	
	Additional query words: 1.00 1.10 buglist1.00 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
