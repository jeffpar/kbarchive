---
layout: page
title: "Q121793: Err Msg: The DOS Sockets TSR is Not Loaded"
permalink: kb/121/Q121793/
---

## Q121793: Err Msg: The DOS Sockets TSR is Not Loaded

	Article: Q121793
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Windows Sockets application after the installation of TCP/IP- 32
	on a Windows for Workgroups version 3.11 computer, the following error message
	may appear:
	
	  The DOS Sockets TSR is not loaded.
	
	When you choose the OK button, the following error message appears and the
	application quits:
	
	  Net3021E: NetAPI TCP/IP driver failed to load.
	
	CAUSE
	=====
	
	This problem occurs when an application or system is trying to use the real mode
	version of Windows Sockets DLL. Previous DLL versions that were distributed with
	Microsoft LAN Manager (for example, WIN_SOCK.DLL and WSOCKETS.DLL) are not
	supported by Microsoft TCP/IP-32. In order for a Windows Sockets application to
	function with Microsoft TCP/IP-32, the application must support Windows Sockets
	version 1.1 (WINSOCK.DLL).
	
	RESOLUTION
	==========
	
	Remove the real mode version of the Windows Sockets DLL file, and contact the
	manufacturer of the Windows Sockets application to determine if it supports
	Windows Sockets version 1.1.
	
	Additional query words: prodtcp32 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
