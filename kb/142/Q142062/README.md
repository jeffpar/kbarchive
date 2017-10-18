---
layout: page
title: "Q142062: Unable to Run Win16 Sockets Application under Windows 3.1"
permalink: kb/142/Q142062/
---

## Q142062: Unable to Run Win16 Sockets Application under Windows 3.1

	Article: Q142062
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot run 16-bit Windows sockets application under Windows 3.1 when using
	the real mode TCP/IP stack provided by Microsoft Network Client for MS-DOS 3.0.
	The winsock application fails at startup with an error returned by WSASTARTUP()
	function. WSASYSNOTREADY or WSANOTINITIALIZED errors may be returned.
	
	CAUSE
	=====
	
	When you install the real mode TCP/IP stack , Network Client for MS-DOS Setup
	does not copy one of the files necessary for Windows Sockets support. The file
	is WSAHDAPP.EXE. This file is located in the Windows NT Server CD- ROM in
	uncompressed format in the \CLIENTS\MSCLIENT\NETSETUP directory and in a
	compressed format in the \CLIENTS\MSCLIENT\DISKS\DISK2 directory.
	
	RESOLUTION
	==========
	
	Manually copy WSAHDAPP.EXE from the CD-ROM to the directory where the Network
	Client for MS-DOS is installed (by default: "C:\NET"). For additional
	information on configuring Microsoft Network Client for MS-DOS 3.0 for sockets
	support, please see the following article in the Microsoft Knowledge Base:
	
	  Q128751 No "Advanced" button in Client TCP/IP Configuration Box
	
	Additional query words: 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.0
	
	=============================================================================
	
