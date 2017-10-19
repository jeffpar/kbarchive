---
layout: page
title: "Q136803: XCLN: Alias PST Inbox Not Highlighted for Unread Messages"
permalink: /kb/136/Q136803/
---

## Q136803: XCLN: Alias PST Inbox Not Highlighted for Unread Messages

	Article: Q136803
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can create an alias .PST file (that is, you can add a duplicate Personal
	Folders information service pointing to the same .PST file). However, two
	Personal Folders items will appear in the folder view pane of the main window.
	
	When an unread message is moved or copied into the duplicate personal folder, the
	name of the folder containing the unread message is not displayed in bold
	letters.
	
	CAUSE
	=====
	
	This is by product design. Two messaging services that point to the same .PST
	file is not a supported configuration.
	
	
	Additional query words: boldface
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
