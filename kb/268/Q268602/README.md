---
layout: page
title: "Q268602: Event ID 7024 Appears in Event Log on Terminal Server"
permalink: /kb/268/Q268602/
---

## Q268602: Event ID 7024 Appears in Event Log on Terminal Server

{% raw %}

	Article: Q268602
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to Windows NT Server version 4.0, Terminal Server
	Edition from a client computer, the following error message may appear
	
	  The client could not connect to Terminal Server. The server may be too busy.
	  Please try connecting later.
	
	You may notice that the Terminal Server Licensing service is stopped and cannot
	be started. After you attempt to restart the service, you may also find two
	entries in the Event Viewer:
	
	  Source: Service Control Manager Event ID: 7024 Description: The Terminal
	  Server Licensing service terminated with service-specific error 3221225489
	  (or 2148270091).
	
	  -and-
	
	  Source: TermServLicensing Event ID: 13 Description: The description for Event
	  ID ( 13 ) in Source (TermServLicensing) could not be found. It contains the
	  following insertion string(s): Can't initialize Cryptographic - error code
	  0x80090006.
	
	CAUSE
	=====
	
	This behavior can occur when you install Internet Explorer 4.x, because there
	are changes to the registry that are incompatible with Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove Internet Explorer 4.0 and then upgrade to the
	latest version.
	
	MORE INFORMATION
	================
	
	When you install Internet Explorer 4.x, the following two processes occur:
	
	1. File copying
	
	2. Registry setting
	
	While the program installs, the setup program checks the versions of the program
	files to be copied and compares them with the files located on the computer.
	This occurs so the newer files may install on the computer.
	
	In this case, the setup program tried to copy a file named Rsabase.dll to the
	System32 folder. When the setup program determines that the file located in the
	folder is newer (5.0.1877.2) than the one to be copied (5.0.1651.1), it leaves
	the original file. This registry entry holds the file signature for the older
	version of the file causing the behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
