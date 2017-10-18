---
layout: page
title: "Q103924: Word for Windows Print to File May Be Ignored by Windows NT"
permalink: kb/103/Q103924/
---

## Q103924: Word for Windows Print to File May Be Ignored by Windows NT

	Article: Q103924
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under Windows NT, the Word for Windows Print To File option may be ignored;
	after you select Print To File, the print job still goes to the printer.
	
	NOTE: You may experience this problem under any application when printing to a
	file.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use Print Manager to create a default printer.
	
	2. Start Word for Windows.
	
	3. Choose Print Setup from the File menu and make sure the default printer you
	  just created is selected. Choose OK.
	
	4. Type "This is a Test."
	
	5. Choose Print from the File menu.
	
	6. In the Print dialog box, select the Print to File option.
	
	7. Choose OK.
	
	The print job goes to the default printer, even though you instructed Word to
	print to a file. Under Windows 3.1, a dialog box would have appeared prompting
	you for the file name and location.
	
	RESOLUTION
	==========
	
	To workaround this problem, use Print Manager to reconfigure the printer to
	redirect output to a file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in Windows NT 3.5
	
	Additional query words: prodnt power point powerpoint write
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
