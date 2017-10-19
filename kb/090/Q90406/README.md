---
layout: page
title: "Q90406: Upgrades from Windows 3.1 Inherit Persistent Connections"
permalink: /kb/090/Q90406/
---

## Q90406: Upgrades from Windows 3.1 Inherit Persistent Connections

	Article: Q90406
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade from Microsoft Windows version 3.1 or 3.11 to Microsoft Windows
	for Workgroups version 3.1, your persistent network connections are inherited.
	These connections may initially appear dimmed (unavailable) in File Manager
	until you select them. You cannot remove these connections using the Disconnect
	Network Drive dialog in File Manager, and you cannot manually connect to a path
	from the dimmed (unavailable) drives from the Windows command line (that is,
	M:\SYS\NOTEPAD.EXE, where M: is a dimmed network drive).
	
	MORE INFORMATION
	================
	
	Windows 3.1 stores information about persistent connections in the [network]
	section of the WIN.INI file. Windows for Workgroups inherits these connections
	for backwards compatibility with other network drivers such as, LANMAN21.DRV,
	DUALNET.DRV, NETWARE.DRV, and MS-NET.DRV.
	
	To remove these persistent connections, manually delete them from the WIN.INI
	file. You can then go back into the File Manager and connect to the resources,
	selecting the Reconnect At Startup check box to make them persistent.
	
	Persistent connection information is stored in the CONNECT.DAT file under Windows
	for Workgroups and Workgroup Connections. This file is encrypted, and cannot be
	manually edited.
	
	Additional query words: 3.10 3.11 grey greyed gray grayed wc
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
