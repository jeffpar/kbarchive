---
layout: page
title: "Q83078: ATM and PostScript Printers: Questions and Answers"
permalink: /kb/083/Q83078/
---

## Q83078: ATM and PostScript Printers: Questions and Answers

	Article: Q83078
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains specific questions and answers regarding Adobe Type
	Manager (ATM) and PostScript printers with Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	Question:
	
	What is the purpose of the ATM=placeholder line in the WIN.INI file? Can it be
	removed?
	
	Answer:
	
	The ATM=placeholder line tells ATM that there is a PostScript printer installed,
	in case ATM is installed in the future. It also lets the PostScript driver know
	that Windows 3.0 has been upgraded to Windows 3.1, so it will not execute its
	upgrade code. For these reasons, this line should NOT be removed from the
	WIN.INI file; even if ATM is never installed.
	
	Question:
	
	After installing ATM, the new soft fonts are listed by the application and appear
	on screen, but they all print in Courier. Why?
	
	Answer:
	
	By default, the ATM Setup program has manual downloading installation. The
	WIN.INI file's soft font lines need to be modified to enable automatic
	downloading. Contact Adobe for assistance.
	
	Question:
	
	I am getting the message, "ADOBE Type Manager ATM fonts and PostScript printer
	fonts don't match on TIMES." Why?
	
	Answer:
	
	This is a harmless ATM message. To stop the error message, contact Adobe.
	
	Question:
	
	I have many soft fonts installed and my WIN.INI file is very large. what should I
	do to avoid the 64K limit?
	
	Answer:
	
	The WIN.INI file must be smaller than 64K. Look for sections beginning with
	[PostScript,PortName] if there are soft font entries under multiple ports,
	delete the sections referring to ports that are no longer used. If you routinely
	print to multiple ports, the printers should be configured to print to FILE:,
	and you should transfer the soft font information to the section
	[PostScript,FILE:] and delete all other occurrences of soft font information. To
	use soft fonts, print to FILE:, then copy the file to the printer. Documents not
	requiring any of the soft fonts may be printed directly to the port to which the
	printer is attached.
	
	Question:
	
	I changed my printer port and now my printer no longer recognizes the ATM fonts.
	Why?
	
	Answer:
	
	When ATM fonts are installed, they are installed only on the ports that are
	occupied by PostScript printers at that time. To correct this problem, copy the
	lines in WIN.INI starting with "softfont" from the section [Postscript,OldPort]
	to the section [Postscript,NewPort]. To save space in the WIN.INI file, delete
	the old section if the old port is no longer used.
	
	The ATM product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
