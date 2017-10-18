---
layout: page
title: "Q170569: WinNT Stops Recognizing PCI Network Adapter After It Is Moved"
permalink: kb/170/Q170569/
---

## Q170569: WinNT Stops Recognizing PCI Network Adapter After It Is Moved

	Article: Q170569
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbnetwork kbHardware
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you move a PCI network adapter from one PCI slot to another without changing
	its configuration, Windows NT no longer recognizes the adapter.
	
	CAUSE
	=====
	
	This occurs due to a problem in PCI cards that cannot detect themselves.
	
	RESOLUTION
	==========
	
	Perform one of the following to work around this problem:
	
	- Reinstall the driver after the card has been moved.
	
	  -or-
	
	- Perform the following steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Start Registry Editor (Regedt32.exe) and go to the following key:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	        \<Network Adapter Driver>\Parameters
	
	  2. Modify the bus and slot numbers to the new settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and
	Windows NT version 4.0 Service Pack 2 and Service Pack 3. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
