---
layout: page
title: "Q145966: XCLN: Personal Views Lost When Changing Stores"
permalink: kb/145/Q145966/
---

## Q145966: XCLN: Personal Views Lost When Changing Stores

	Article: Q145966
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbui kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the store to which new mail is delivered, user-defined views
	seem to be lost.
	
	MORE INFORMATION
	================
	
	User-defined views are stored in the IPM_COMMON_VIEWS folder of the default
	store. If the store is changed, personal views will be lost unless the user
	copies them to the new store. The user can do this by selecting the "Copy Design
	of Forms & Views" checkbox available under the Tools, Application Design,
	Copy Folder Design menu. They will want to copy the views from the root folder
	of that store to the root folder of the new default store.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: view store personal
	
	======================================================================
	Keywords          : kbui kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
