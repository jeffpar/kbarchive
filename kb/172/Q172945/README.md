---
layout: page
title: "Q172945: How To View A Remote Printer in Windows NT 4.0"
permalink: kb/172/Q172945/
---

## Q172945: How To View A Remote Printer in Windows NT 4.0

	Article: Q172945
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To monitor and administer a remote print queue in Windows NT 3.51, perform the
	following steps:
	
	1. Double-click on print manager.
	
	2. From the Printer menu, click Server Viewer.
	
	3. Type the computer name of the computer to monitor the queues of remotely.
	
	To monitor and administer a remote print queue in Windows NT 4.0, perform one of
	the following procedures:
	
	1. Click on the Start button, and then click Run.
	
	2. Type the \\<servername>\<printer sharename>. (For example,
	  \\myserver\hplaser)
	
	  NOTE: If you do not have the correct permissions on that server, you will be
	  prompted for a user name and password.
	
	3. Double-click on the printer queue you want monitor.
	
	-or-
	
	1. Double-click on Network Neighborhood.
	
	2. Double-click on the server icon where the printer queue resides.
	
	3. Double-click on the printer queue you want monitor.
	
	MORE INFORMATION
	================
	
	For additional information, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q120019 Windows NT Remote Printer Administration Limitations
	
	Additional query words: prodnt server viewer
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
