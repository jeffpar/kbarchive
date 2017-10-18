---
layout: page
title: "Q148438: PCMCIA SCSI Hard Disks Not Recognized After Service Pack 1"
permalink: kb/148/Q148438/
---

## Q148438: PCMCIA SCSI Hard Disks Not Recognized After Service Pack 1

	Article: Q148438
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 3.51 Service Pack 1, File Manager and Disk
	Administrator do not recognize the PCMCIA SCSI controllers and hard disk drives.
	No events are logged in Event Viewer.
	
	
	CAUSE
	=====
	
	During the Service Pack upgrade, the ServiceGroupOrder registry entry is
	removed.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Control\ServiceGroupOrder
	
	2. Select the following entry: List
	
	3. From the Edit menu, select Multi String.
	
	4. Add the following line to the beginning of the list:
	
	  System Bus Extender
	
	5. Click OK and quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	
	Additional query words: prodnt 3.51 pcmcia adapter
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
