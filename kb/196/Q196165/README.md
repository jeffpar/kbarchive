---
layout: page
title: "Q196165: XADM: &quot;Unable to display folder...&quot; in Outlook 97 After MSW Runs"
permalink: kb/196/Q196165/
---

## Q196165: XADM: &quot;Unable to display folder...&quot; in Outlook 97 After MSW Runs

	Article: Q196165
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After using the Microsoft Exchange Server Move Server Wizard to move a server,
	Outlook 97 toolbars don't work correctly. If you click on any of the folders
	displayed in the Outlook bar, the error message below is displayed in a dialog
	box in the client:
	
	  Unable to display folder. Folder no longer exists.
	
	CAUSE
	=====
	
	This is by design in Outlook. If a folder's path changes, Outlook will not be
	able to find it.
	
	WORKAROUND
	==========
	
	Users with this problem will need to recreate their Outlook toolbar.
	
	Additional query words: XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
