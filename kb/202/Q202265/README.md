---
layout: page
title: "Q202265: XADM: Unable to Create Top Level Folders in Exchange Server"
permalink: kb/202/Q202265/
---

## Q202265: XADM: Unable to Create Top Level Folders in Exchange Server

	Article: Q202265
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55kbfaq
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to create a top level public folder in either the Exchange or
	Outlook client, you may receive the following error message:
	
	  Unable to create the folder. You do not have sufficient permission to perform
	  this operation on this object. See the folder contact or your system
	  administrator.
	
	MORE INFORMATION
	================
	
	This behavior occurs when an Exchange Server administrator limits who can create
	top level folders. This administrative feature of Exchange Server allows
	Exchange Server administrators to control the basic structure of how information
	in the public folders is organized. To use this feature:
	
	1. Log onto the Exchange Server Administrator program.
	
	2. In the Administrator window, click Configuration.
	
	3. Double-click the "Information Store Site Configuration" object in the right
	  pane to open the properties.
	
	4. Click the "Top Level Folder Creation "tab.
	
	5. Check whether there are either Distribution Lists or Mailboxes listed in
	  either the "Allow to create top level folders" area or the "Not allowed to
	  create top level folders section" area.
	
	6. Make sure the user or users wanting to create top level public folders are
	  not listed.
	
	NOTE: When both the "Allow to create top level folders" and the "Not allowed to
	create top level folders section" are empty, everyone in the global address list
	can create top-level folders.
	
	Use the Top Level Folder Creation property page to specify which users can create
	top-level public folders in Microsoft Outlook. Top-level public folders are
	those that exist at the highest tier of the public folder tree. Limiting the
	number of people who can create top-level public folders lets you control the
	public folder hierarchy. After a top-level folder is created, the owner of that
	folder can set permissions that allow other users to create subordinate folders
	below the top-level folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
