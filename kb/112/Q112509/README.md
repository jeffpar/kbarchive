---
layout: page
title: "Q112509: Error 2013 - Disk Is At Or Near Capacity"
permalink: /kb/112/Q112509/
---

## Q112509: Error 2013 - Disk Is At Or Near Capacity

	Article: Q112509
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	By default, Event Viewer may report Event ID 2013 if a partition has 10 percent
	or less disk space available. Event ID 2013 says the following:
	
	  The disk is at or near capacity. You may need to delete some files.
	
	MORE INFORMATION
	================
	
	By design the event is logged once per drive per occurrence. Therefore, if the
	free space of drive C dips below the threshold, an alert is logged. Another
	alert for drive C may not be logged unless the free space goes above the
	threshold and then dips back down again or the server is restarted.
	
	You can change the DiskSpaceThreshold value to alter the percentage of free disk
	space available before an alert is logged. The registry parameter is defined as
	follows:
	
	  Value: DiskSpaceThreshold     REG_DWORD
	  Range: 0 to 99 percent
	  Default: 10 percent
	  Description: Specifies the percentage of free disk space remaining
	               before an alert is sent.
	
	To modify the DiskSpaceThreshold value, perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Regedt32.exe.
	
	2. Select the following path:
	
	       HKEY_LOCAL_MACHINE
	       \SYSTEM
	            \CurrentControlSet
	                 \Services
	                      \LanmanServer
	                           \Parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Enter "DiskSpaceThreshold" in the Value Name field.
	
	5. Change the Data Type to REG_DWORD.
	
	6. Enter the desired percentage value in the Data field.
	
	7. Shut down and restart Windows NT.
	
	For more information on alert logging see the Windows NT Resource Kit Volume One.
	
	Additional query words: prodnt regedt32.exe
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	
