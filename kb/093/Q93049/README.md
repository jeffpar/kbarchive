---
layout: page
title: "Q93049: Using Write to Determine Unprintable Regions"
permalink: /kb/093/Q93049/
---

## Q93049: Using Write to Determine Unprintable Regions

	Article: Q93049
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,95; winnt:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Write program, which ships with Windows, can be used to
	determine the unprintable regions (minimum margins) for any Windows printer
	driver. The unprintable regions of a page are regions that the printer cannot
	print to because of its design (that is, the print head or image drum) and/or
	its paper-handling mechanism (that is, the sheet feeder).
	
	Note that the Write program has been replaced with WordPad in Windows 95 and
	Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The unprintable regions displayed by Write apply to all applications that use
	standard Windows printer drivers. Applications that include non-Windows printer
	drivers, such as WordPerfect for Windows, have different unprintable regions
	when non-Windows drivers are selected. Knowing the unprintable regions for a
	given printer driver is useful for troubleshooting and creating page layouts in
	programs such as Word for Windows and Microsoft Publisher.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Write.
	
	2. From the Document menu, choose Page Layout.
	
	3. In the Page Layout dialog box, type "0" (without the quotation marks) (zero)
	  for either the Left, Right, Top, or Bottom Margin.
	
	4. Choose the OK button. Windows then displays the following message:
	
	  
	
	     Current printer cannot print outside these margins
	
	     Left: 0.2"                           Right:  0.3"
	     Top:  0.25"                          Bottom: 0.22"
	
	  NOTE: the above margins are for the Okidata OL-400 laser printer. Other
	  printer drivers have different margins.
	
	
	Additional query words: 3.00 3.00a 3.10 4.00 3.50 limits limitation margin region win95 win95x winnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin3xSearch kbWin95search kbWinNT310Search kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,95; winnt:3.1,3.5,3.51,4.0
	
	=============================================================================
	
