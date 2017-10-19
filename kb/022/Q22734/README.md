---
layout: page
title: "Q22734: Sending Binary Files to a Printer After Print to File"
permalink: /kb/022/Q22734/
---

## Q22734: Sending Binary Files to a Printer After Print to File

	Article: Q22734
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,2.x,3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 2.03, 2.1, 2.11, 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a dot-matrix printer that is not connected to your personal computer,
	and you first print Microsoft Windows files to an output file on a disk and then
	you use the standard Print command on the computer connected to the printer to
	print the files, your files do not print properly.
	
	CAUSE
	=====
	
	Because Windows places a dot-matrix printer in graphics mode when it prints, the
	print output file you create is a binary file with graphics information.
	
	RESOLUTION
	==========
	
	Instead of using the standard Print command, you should use the COPY command
	with the /B option to send the binary print file to the printer.
	
	For example, if your printer was connected to LPT1 and you are trying to send a
	binary print file named PR.PRN to the printer, type the following:
	
	  " copy pr.prn lpt1: /b" (without the quotation marks)
	
	Use this same method to print any document when you use the Print to File option
	at the application level.
	
	REFERENCES
	==========
	
	See your MS-DOS manual for more information on the COPY command.
	
	
	Additional query words: dos dot matrix 3.11 3.10 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin310 kbWin311
	Version           : WINDOWS:1.x,2.x,3.0,3.1,3.11
	
	=============================================================================
	
