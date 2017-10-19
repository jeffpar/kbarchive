---
layout: page
title: "Q220948: Problems Using a Non-US WinNT Workstation w/ US Terminal Server"
permalink: /kb/220/Q220948/
---

## Q220948: Problems Using a Non-US WinNT Workstation w/ US Terminal Server

	Article: Q220948
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a non-U.S. version of Windows NT Workstation 4.0 to
	connect the U.S. version of the Terminal Server client or to a U.S. version of
	Terminal Server, you may get an error message. This error message has been seen
	with the Korean version of Windows NT, but could occur with others. The error
	message is as follows:
	
	  Keyboard layout of requested language could not be opened.
	  Korean keyboard layout will be used instead.
	  You can choose another layout from your CLIENT SETTINGS.
	
	Other symptoms may include the loss of functionality of the keyboard after you
	have logged on to the Terminal Server client on the Windows NT Workstation
	computer.
	
	CAUSE
	=====
	
	This problem occurs because the appropriate code pages are not installed on the
	Terminal Server computer or the Terminal Server client.
	
	RESOLUTION
	==========
	
	To work around this problem, install the non-U.S. code pages on the Terminal
	Server computer and install the U.S. code pages on the Windows NT Workstation
	computer.
	
	MORE INFORMATION
	================
	
	For additional information about installing additional code pages, please see
	the following article(s) in the Microsoft Knowledge Base:
	
	  Q177561 HOWTO: Add and Enable Additional Languages in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
