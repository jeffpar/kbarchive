---
layout: page
title: "Q261120: XCLN: Outlook Users Cannot Create Top-Level Public Folders"
permalink: kb/261/Q261120/
---

## Q261120: XCLN: Outlook Users Cannot Create Top-Level Public Folders

	Article: Q261120
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5; :
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a top-level folder in Outlook, the New Folder command is
	unavailable (it appears dimmed), even though you have checked the following
	settings and conditions to make sure that they are correct:
	
	- The user who is attempting to create the folder has the correct permissions
	  for the public folder on this server.
	
	- Top-level public folder creation is allowed (to check this, in the Exchange
	  Server Administrator program, click Configuration, and then click the Top
	  Level Folder Creation tab in the Information Store Site Configuration
	  Properties dialog box.
	
	- The public folder server that is listed in the private information store
	  properties is online and available.
	
	CAUSE
	=====
	
	This issue can occur if a container is selected that is at the wrong level in
	the hierarchy. The Public Folders container is at the same hierarchical level as
	the Outlook Today container, and the Public Folders container always has an
	unavailable New Folder command. This behavior is by design.
	
	RESOLUTION
	==========
	
	To resolve this issue, right-click All Public Folders (this is a subfolder that
	is named All Public Folders by default) and not Public Folders when you try to
	create a top-level folder. This ensures that the New Folder command is available
	and that you can create top-level public folders.
	
	MORE INFORMATION
	================
	
	You can rename the All Public Folders subfolder; this object is stored in the
	user profile, so when you rename it you do not affect any other users.
	
	
	Additional query words: OL98 OL2000 grayed out
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:; winnt:5.5; :
	Issue type        : kbprb
	
	=============================================================================
	
