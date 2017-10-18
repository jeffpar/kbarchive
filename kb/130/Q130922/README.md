---
layout: page
title: "Q130922: Event Error 2022: Server Unable to Find a Free Connection"
permalink: kb/130/Q130922/
---

## Q130922: Event Error 2022: Server Unable to Find a Free Connection

	Article: Q130922
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you share a Gateway Service for NetWare (GSNW) session, the following
	event log appears in the Event Viewer when a Windows for Workgroups version 3.11
	client computer attempts to connect to the Windows NT server share:
	
	  Event ID: 2022
	  Source: SRV
	  Type: Error
	  Description: The server was unable to find a free connection
	  <number> times in the last <seconds> seconds.
	
	WORKAROUND
	==========
	
	To work around this problem, you can modify the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following:
	
	     Value Name:   MaxFreeConnections
	     Data Type:    REG_DWORD
	     Data:         8
	
	     Value Name:   MaxWorkItems
	     Data Type:    REG_DWORD
	     Data:         255
	
	     NOTE: The maximum number for Work Items is 512. You should use
	     255 first, and then increase it as needed, up to a maximum of 512.
	
	5. Quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	
	Additional query words: 3.1 3.11 wfw gsnw nwcs
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbAudDeveloper kbWFWSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
