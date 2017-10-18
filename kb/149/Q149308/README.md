---
layout: page
title: "Q149308: XCLN: The Form You Selected Could Not Be Displayed"
permalink: kb/149/Q149308/
---

## Q149308: XCLN: The Form You Selected Could Not Be Displayed

	Article: Q149308
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a form on a Microsoft Exchange Windows NT client
	computer that is running the Windows NT File System (NTFS), you will get the
	following error message if restrictive permissions have been applied to the
	Winnt\Forms subdirectory:
	
	  The form you selected could not be displayed. An error occurred while
	  installing a form.
	
	CAUSE
	=====
	
	This is expected behavior and it will only occur if the form has not previously
	been downloaded to, or purged from, the forms subdirectory.
	
	WORKAROUND
	==========
	
	Change the permissions on the Winnt\Forms subdirectory to include Change
	Permissions for all users who will be using the Microsoft Exchange Windows NT
	client on this computer.
	
	You can also change the permissions, compose the form (this will cause the file
	to be copied locally), and then reset the permissions.
	
	NOTE: It is not recommended that you to restrict access to the forms subdirectory
	because you may get the above error message again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
