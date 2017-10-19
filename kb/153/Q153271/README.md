---
layout: page
title: "Q153271: XCLN: How to Disable Autoprocessing of S+ Meeting Responses"
permalink: /kb/153/Q153271/
---

## Q153271: XCLN: How to Disable Autoprocessing of S+ Meeting Responses

	Article: Q153271
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to disable autoprocessing of Schedule+ meeting responses, you can
	add a registry entry on Windows NT or Windows 95. Win16 clients can accomplish
	the same thing by modifying the Schdplus.ini file
	
	MORE INFORMATION
	================
	
	To disable autoprocessing on Windows NT or Windows 95, take the following
	steps:
	
	WARNING: Using Registry Editor can cause serious, system-wide errors that may
	require you to reinstall Windows NT or Windows 95. Microsoft cannot guarantee
	that problems resulting from the incorrect use of Registry Editor can be solved.
	Use Registry Editor at your own risk.
	
	1. Start Registry Editor.
	
	2. Under the HKEY_CURRENT_USER subtree, go to the following subkey:
	
	     Software\Microsoft\Schedule+\Application
	
	3. Add the following entry:
	
	     AutoScanDisabled, type DWORD (1 - autoscan disabled, 0 - autoscan
	     enabled)
	
	4. Quit Registry Editor.
	
	For Win16 clients, add the following entry to the Schdplus.ini file:
	
	  autoscandisabled=1
	
	When this entry is added, messages are left in the inbox and are not
	autoprocessed.
	
	The following scenario shows the difference that disabling autoprocessing makes.
	
	1. User A sends meeting requests to User B and User C.
	
	2. User B accepts without typing anything in the body.
	
	3. User C accepts and changes the text.
	
	User A's inbox will have User C's response, but User B's response would have gone
	to the Deleted items folder. With the autoscandisabled setting, User B's
	response stays in the inbox.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
