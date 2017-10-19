---
layout: page
title: "Q103078: No Generic/Text Only Printer Driver with Windows NT"
permalink: /kb/103/Q103078/
---

## Q103078: No Generic/Text Only Printer Driver with Windows NT

	Article: Q103078
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 3.1 and 3.5 do not include a Generic/Text Only printer driver or any
	other NULL port driver that allows you to output pure text from an application
	that cannot export text on its own.
	
	WORKAROUND
	==========
	
	1. Use the Generic IBM Graphics 9-pin printer driver.
	
	2. Set it to print to FILE.
	
	3. Format the document with Printer Font.
	
	This produces a file that contains all the text with only a small amount of
	control codes. You can then edit the control codes out of the file with any text
	editor, such as Notepad.
	
	Additional query words: prodnt TypeWriter diablo daisy wheel generic text only text-only daisywheel
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
