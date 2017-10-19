---
layout: page
title: "Q130710: Cannot Access Files on Novell 3.11 Server"
permalink: /kb/130/Q130710/
---

## Q130710: Cannot Access Files on Novell 3.11 Server

	Article: Q130710
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to access a file on a NetWare 3.11 server from a Windows 95- based
	computer using the Microsoft Client for NetWare Networks, you may receive one of
	the following error messages:
	
	- File not accessible
	
	- File not found
	
	- Sharing violation
	
	You may also receive an error message from the program that you are using to
	access the file, indicating that the file has already been opened by another
	user.
	
	When you send a message from Microsoft Exchange, if the post office is located on
	a Novell 3.11 server, you may receive the following error message:
	
	  The message recipients mailbag does not exist or is busy. Contact your
	  administrator.
	
	
	CAUSE
	=====
	
	These errors occur when a File Open request is sent to a NetWare 3.11 server but
	the client does not properly receive a "file open success" message. This causes
	the File Open request to be repeated. Under normal circumstances, the server
	would resend the "file open success" message to the client. However, the server
	returns a "file already open" failure message to the client instead. This error
	occurs only when you are opening a file on a NetWare 3.11 server with the OS/2
	namespace module loaded on the server and long file name support enabled on the
	client. Therefore, the error does not occur when you are using a Novell
	work-station shell (NETX or VLM).
	
	Note that this error does not occur on NetWare version 3.12 or higher servers.
	
	RESOLUTION
	==========
	
	Once the file has been left open on the server, it must be closed to resolve the
	error. To prevent the error from occurring, use one of the following methods:
	
	- Use a Novell workstation shell (NETX or VLM) instead of the Microsoft Client
	  for NetWare Networks.
	
	- Disable long filename support on the client by modifying the SYSTEM.INI file
	  or editing the registry.
	
	- Obtain the OS2OPNFX.NLM patch for the Novell 3.11 server from Novell. For
	  more information about this patch, please refer to the Windows 95 Beta
	  Release Notes, or contact Novell.
	
	MORE INFORMATION
	================
	
	To disable long filename support on the Microsoft Client for NetWare Networks,
	use either of the following methods:
	
	- Add the following two lines to the SYSTEM.INI file:
	
	     [NWRedir]
	     supportLFN=0
	
	- Edit the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\NWREDIR
	
	  Add a binary value called supportlfn with a value of 0 to the key. The
	  allowable values are 0 (do not support long filenames) and 1 (support long
	  filenames when available). The default value is 1.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
