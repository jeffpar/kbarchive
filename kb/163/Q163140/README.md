---
layout: page
title: "Q163140: XCLN: Schedule+ Calendar Not Synchronized If Not Logged Off"
permalink: /kb/163/Q163140/
---

## Q163140: XCLN: Schedule+ Calendar Not Synchronized If Not Logged Off

	Article: Q163140
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:4.0,7.0; Win95:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	7.00
	WINDOWS
	KBBUG kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	- Microsoft Exchange Client for Windows 95, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down Microsoft Windows 95 or Microsoft Windows NT without logging
	off Microsoft Schedule+, the local Microsoft Schedule+ calendar is not
	synchronized with the server-based calendar.
	
	CAUSE
	=====
	
	This problem occurs because Windows 95 and Windows NT disconnect all user-
	established network connections before Microsoft Schedule+ can synchronize the
	local calendar with the server-based calendar.
	
	RESOLUTION
	==========
	
	To avoid this problem, log off Microsoft Schedule+ before you shut down Windows.
	To do this, click Exit And Log Off on the File menu in Microsoft Schedule+.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155510 XCLN: Empty the 'Deleted Items' Folder Option doesn't Work
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0,7.0; Win95:4.0
	
	=============================================================================
	
