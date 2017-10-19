---
layout: page
title: "Q131902: Printer Browse Thread May Cause Extensive Network Traffic"
permalink: /kb/131/Q131902/
---

## Q131902: Printer Browse Thread May Cause Extensive Network Traffic

	Article: Q131902
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you share a printer in Windows NT, the spooler creates a thread that
	broadcasts a message on all of the print server's installed protocols to all
	Windows NT print servers, informing the print servers of the new print share.
	Each of these print servers adds the new print share name to its local printer
	browse list. In addition, each print server rebroadcasts the list of its local
	printers to all print servers every 10 minutes. Although this design ensures
	that all Windows NT print servers have current browse lists, it can also causes
	extensive network traffic.
	
	The procedure below explains how to disable the printer browse thread. Disabling
	the thread reduces network traffic, but also keeps the print servers from
	knowing about new print shares.
	
	MORE INFORMATION
	================
	
	To disable the printer browse thread, modify the Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Control\Print
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following to disable the printer browse thread:
	
	  Value Name: DisableServerThread
	  Data Type:  REG_DWORD
	  String:     1
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: prodnt browser netserverenum excessive
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
