---
layout: page
title: "Q188590: XADM: Unable to view Public Folders After Restore"
permalink: /kb/188/Q188590/
---

## Q188590: XADM: Unable to view Public Folders After Restore

	Article: Q188590
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restore the public information store to a recovery server without
	restoring the directory, some or all of the public folders may not be visible
	from the client.
	
	CAUSE
	=====
	
	The client permissions on the public folders do not have the Folder Visible
	option selected.
	
	WORKAROUND
	==========
	
	In the Microsoft Exchange Server Administrator program, change the properties of
	the Public Folder(s) Client Permissions to include the Folder Visible
	permission.
	
	MORE INFORMATION
	================
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164805 XADM: Contents of This Public Folder Currently Unavailable
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
