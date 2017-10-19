---
layout: page
title: "Q199208: Program Will Not Run from FPNW Volume"
permalink: /kb/199/Q199208/
---

## Q199208: Program Will Not Run from FPNW Volume

	Article: Q199208
	Product(s): Microsoft Windows NT
	Version(s): Win2000:95,98; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Windows 95 clients will not be able to run a file that is on a File and Print
	Services for NetWare (FPNW) volume if they are using the Client for NetWare
	Networks. These same files can be run when using the Client for Microsoft
	Networks. Windows NT Workstation and Windows for Workgroups clients do not have
	any problems running these programs.
	
	CAUSE
	=====
	
	The Client for NetWare Networks under Windows 95 does not negotiate a correct
	IPX packet size with the server. If the maximum packet size (MaxPktSize) on the
	server is set to a specific value, and not the default of 0, this error may
	occur.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: Registry keys in the following procedure may appear on two or more lines,
	but are actually one path; they have been wrapped for readability.
	
	If MaxPktSize is set to 240 change it to 0 via the Registry.
	
	1. Run Registry Editor (Regedt32.exe).
	  NOTE: It is recommended that you first save each registry key before deleting
	  it.
	
	2. The MaxPktSize information is located in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NWLnkIPX\NetConfig\<adapter_name>
	
	3. Double-click MaxPktSize and set to 0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbServicesNetwareSearch kbFPNW351
	Version           : Win2000:95,98; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
