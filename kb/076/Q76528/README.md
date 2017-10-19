---
layout: page
title: "Q76528: Tabs in Write Not Working Properly for 9-Pin Printer Drivers"
permalink: /kb/076/Q76528/
---

## Q76528: Tabs in Write Not Working Properly for 9-Pin Printer Drivers

	Article: Q76528
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The tab feature in Microsoft Windows Write 3.0 does not work properly with the
	Epson 9-pin driver. When you first edit a document, the tab stops at the Write
	default of every half inch. Pressing your TAB key any time past the first hash
	mark after the 1-inch mark results in text skipping the 1.5- inch tab stop and
	stopping at the 2-inch mark when the Courier font is used.
	
	When you use the Epson 9-pin drivers with Microsoft Windows Write 3.1 , the TAB
	key skips tab stops when using Roman 10pt, Times New Roman, and Courier New
	Type.The Truetype and Screen fonts in Windows 3.1 work correctly.
	
	MORE INFORMATION
	================
	
	When you open a new document and you have the Epson 9-pin driver installed,
	tabbing is only possible up to the 2.5-inch mark. Erratic tab behavior may occur
	regardless of which font is used. The tabs in the Okidata 9-pin drivers stops at
	4 inches, and some of the fonts like Courier, Avant Garde, and Bookman also tend
	to skip tab stops. When tabs are manually inserted by choosing the Document
	menu, the tab stops work correctly.
	
	Additional query words: 3.00 3.00a 3.0 3.10 3.1 column win30 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
