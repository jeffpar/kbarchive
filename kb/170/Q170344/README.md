---
layout: page
title: "Q170344: XCLN: Err Msg: Unable To Display The Folder"
permalink: kb/170/Q170344/
---

## Q170344: XCLN: Err Msg: Unable To Display The Folder

	Article: Q170344
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view another person's calendar using the Microsoft Exchange
	Client or Outlook Client, the following error message occurs:
	
	  Unable to display the folder. The calendar folder could not be found.
	
	CAUSE
	=====
	
	This error is a permission problem with the other user's calendar folder.
	Permission to view or read another user's folder is optional.
	
	NOTE: By default there are no permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. In the Microsoft Exchange or Outlook Client, click the user's Calendar
	  folder.
	
	2. Go to the Properties page of this folder either by right-clicking on the
	  folder or through the File menu.
	
	3. Choose the Permissions tab to view current permissions. By default you will
	  see the name "Default" with a Role of "none." If the role for Default is
	  modified, it sets the permissions for everyone with access to a Microsoft
	  Exchange or Outlook Client to view the calendar.
	
	MORE INFORMATION
	================
	
	This permission problem is the same for all Microsoft Outlook folders, such as
	the Inbox, Contacts, Tasks, Journal, and Notes folders.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
