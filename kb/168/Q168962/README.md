---
layout: page
title: "Q168962: Number of Copies Option Is Unavailable When Printing"
permalink: kb/168/Q168962/
---

## Q168962: Number of Copies Option Is Unavailable When Printing

	Article: Q168962
	Product(s): Microsoft Windows NT
	Version(s): 4.0 95
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print multiple copies of a document, the option to specify the
	number of copies in the Print dialog box may be unavailable.
	
	CAUSE
	=====
	
	The printer does not have the ability to hold all the information for a complete
	page in memory.
	
	RESOLUTION
	==========
	
	Use a program that handles printing multiple pages internally (such as Microsoft
	Word), or use a printer that can hold an entire page in its internal memory.
	
	MORE INFORMATION
	================
	
	Dot-matrix and inkjet printers print one line at a time. When information is
	sent to these printers, it is printed immediately. The printer memory is then
	overwritten with the next line of data. Dot-matrix and inkjet printers cannot
	print multiple copies of a page because the information for the page does not
	remain in memory.
	
	Laser printers print an entire page at one time, so all of the information for
	the page is held in the printer's memory. Laser printers can print multiple
	copies because the print job is still in the printer's memory.
	
	Additional query words: win95 win95x grayed greyed out
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.0 95
	
	=============================================================================
	
