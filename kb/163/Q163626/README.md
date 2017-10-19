---
layout: page
title: "Q163626: XCLN: Error Occurs While Attempting to Access Personal Folders"
permalink: /kb/163/Q163626/
---

## Q163626: XCLN: Error Occurs While Attempting to Access Personal Folders

	Article: Q163626
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you attempt to start the
	Microsoft Exchange client:
	
	  The set of folders could not be opened. The file
	  <path>\<filename>.pst is in use and could not be accessed.
	  Close any application that is using this file, and then try again.
	
	WORKAROUND
	==========
	
	This error can occur if the file is opened by another user or by the same user
	from another computer. To correct this problem, verify that no other user or
	computer has access to the Personal Folder file.
	
	You may also need to verify if the drive or directory that the file is located in
	has been shared on the network. In this scenario, either disconnect any users
	connected to the computer or disable the share.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
