---
layout: page
title: "Q186634: Periods Appear as Commas Using Belgian Dutch Keyboard"
permalink: /kb/186/Q186634/
---

## Q186634: Periods Appear as Commas Using Belgian Dutch Keyboard

	Article: Q186634
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Belgian Dutch keyboard or many other European keyboard layouts with
	any program, the period character from the numeric keypad appears on the screen
	as a comma.
	
	RESOLUTION
	==========
	
	This behavior is by design as of Windows NT 4.0 Service Pack 3 (SP3). Because
	the period on the keypad is meant to be the decimal separator and because many
	European countries use the comma as the separator, the keypad's period was
	modified to display as a comma.
	
	You can replace the Kbdbe.dll file with the version that is included with Windows
	NT 4.0 Server or Workstation if you prefer the period rather than the comma.
	After replacing the file, you need to restart your computer to load the DLL file
	file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
