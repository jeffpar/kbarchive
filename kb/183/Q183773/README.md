---
layout: page
title: "Q183773: Err Msg: Can Not Find the File Explorer.exe..."
permalink: kb/183/Q183773/
---

## Q183773: Err Msg: Can Not Find the File Explorer.exe...

	Article: Q183773
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95, you may experience the following symptoms:
	
	- When you double-click the Speaker icon on the taskbar, the Volume Control
	  tool may not open.
	
	- When you click Advanced on the Start Menu tab in the Taskbar Properties
	  dialog box, you may receive the following error message:
	
	  Can not find the file 'Explorer.exe' or one of its components. Make sure the
	  path and filename are correct and that all required libraries are available."
	
	CAUSE
	=====
	
	This behavior can occur if the Windows folder in the PATH environment variable
	is overwritten. This can occur if you log in to a NetWare server and your
	NetWare login script uses the Map (MAP) command instead of the Map Insert (MAP
	INS) command to map search drives.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your network administrator to modify the system
	login script or the user login script to use the Map Insert command to map the
	NetWare search drives.
	
	MORE INFORMATION
	================
	
	For more information about the NetWare Map command and search drives, consult
	your NetWare product documentation.
	
	Additional query words: nothing happens respond novell
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
