---
layout: page
title: "Q131353: Err Msg: Unable to Initialize Windows Sockets..."
permalink: kb/131/Q131353/
---

## Q131353: Err Msg: Unable to Initialize Windows Sockets...

	Article: Q131353
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using one of the Microsoft TCP/IP-32 command line utilities (PING.EXE,
	FTP.EXE, etc.), the following error message appears:
	
	  Unable to initialize Windows Sockets interface, error code 0
	
	CAUSE
	=====
	
	This error occurs when WSOCK.386 is corrupted or not loaded in memory.
	
	RESOLUTION
	==========
	
	To correct this problem perform the following steps:
	
	1. Remove the TCP/IP protocol using the Network Setup icon.
	
	2. Exit Windows for Workgroups. From the command prompt, change to the Windows
	  System subdirectory.
	
	3. Rename the file WSOCK.386 by typing the following command:
	
	  REN WSOCK.386 WSOCK.BAD
	
	4. Restart your computer and start Windows for Workgroups. Re-add the TCP/IP
	  protocol using the Network Setup icon and directing Setup to the location of
	  your TCP/IP-32 files. Remove the TCP/IP protocol from Network Setup and then
	  reinstall it. Answer "Yes to All" to replace existing files.
	
	Additional query words: 3.11 3.11a wfwg msnets netutils ndis3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3
	Version           : WINDOWS:; :
	
	=============================================================================
	
