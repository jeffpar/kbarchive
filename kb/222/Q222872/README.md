---
layout: page
title: "Q222872: RAS Counters Missing in Performance Monitor"
permalink: /kb/222/Q222872/
---

## Q222872: RAS Counters Missing in Performance Monitor

	Article: Q222872
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you have a computer running Windows NT 4.0 or later, some or all Remote
	Access Service (RAS) and Routing and Remote Access Service (RRAS) counters may
	be missing in Performance Monitor.
	
	CAUSE
	=====
	
	This behavior occurs because of any of the following conditions:
	
	- The Rasctrs.dll file is missing or corrupted.
	
	- The Close, Collect, Library, and Open values are missing in the following
	  registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RemoteAccess\Performance
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use the appropriate method:
	
	- Delete the Rasctrs.dll file and replace it with the Rasctrs.dll file from the
	  RRAS installation file or from the Windows NT 4.0 service pack CD-ROM.
	
	- Add the missing registry values:
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RemoteAccess\Performance
	
	  3. On the Edit menu, click Add Value, and then add the following registry
	     values:
	
	  Value 0
	  Value name: Close
	  Data type: REG_SZ
	  Data: CloseRasPerformanceData
	
	  Value 1
	  Value name: Collect
	  Data type: REG_SZ
	  Data: CollectRasPerformanceData
	
	  Value 2
	  Value name: Library
	  Data type: REG_SZ
	  Data: rasctrs.dll
	
	  Value 3
	  Value name: Open
	  Data type: REG_SZ
	  Data: OpenRasPerformanceData
	
	  4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	To extract the files from the RRAS installation file, type the command:
	"mpri386.exe /T:<directory path> /C" (without the quotation marks), where
	<directory path> is the folder in which you want to put the files.
	
	This places all of the files in the folder that you specify. You can then copy
	the missing file to the Winnt\System32 folder.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q127207 Missing Objects and Counters in Performance Monitor
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
