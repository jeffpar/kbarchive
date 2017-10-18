---
layout: page
title: "Q82749: Using LPT1.OS2, LPT1.DOS, or FILE: Ports When Printing"
permalink: kb/082/Q82749/
---

## Q82749: Using LPT1.OS2, LPT1.DOS, or FILE: Ports When Printing

	Article: Q82749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.1, the LPT1.DOS printer port connection has
	exactly the same effect as typing LPT1.DOS (or LPT1.OS2) when printing to a
	FILE:. If you type LPT1.DOS (or LPT1.OS2), a message box asking "Overwrite
	existing file?" appears. Choose the Yes button to print. This message appears
	because MS-DOS assumes that the file LPT1.xxx (where xxx is any extension)
	always exists.
	
	Note that the LPT1.OS2 or LPT1.DOS syntax is not required. It is included in
	Windows 3.1 for backward compatibility only. Using LPT1 (or typing LPT1 in the
	FILE: output file dialog box) has the same effect.
	
	LPT2 and LPT3 connections behave similarly.
	
	MORE INFORMATION
	================
	
	A problem in Windows 3.0 was corrected to allow binary files to be printed to
	LPT1.xxx-style ports. In Windows 3.0, the output was copied to the port using a
	command similar to the MS-DOS COPY command without the /B parameter, which would
	stop the output if a CTRL+Z (^Z) End-of- File (EOF) character was found in the
	output. The port is now written to in a raw mode, allowing binary data
	containing EOF characters to be written.
	
	
	Additional query words: 3.10 3.11 binary EOF end-of-file /B
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
