---
layout: page
title: "Q176740: XFOR: Migrated GroupWise Users Cannot See Migrated Messages"
permalink: /kb/176/Q176740/
---

## Q176740: XFOR: Migrated GroupWise Users Cannot See Migrated Messages

	Article: Q176740
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When GroupWise users are migrated into Microsoft Exchange Server via the
	GroupWise Migration Wizard, migrated users will not see any messages in the
	Inbox folder.
	
	CAUSE
	=====
	
	During migration, three additional folders are created. The three folder are
	Cabinet, Calendar, and Mail Box. These three folders will be subfolders under
	the Inbox folder. The Cabinet, Calendar, and Mail Box folders are GroupWise
	specific client folders that are also migrated.
	
	RESOLUTION
	==========
	
	Expand the Inbox subfolders and open the Mail Box folder. All migrated messages
	will be in the Mail Box folder. Users can move messages from the Mail Box folder
	to the Inbox folder.
	
	Additional query words: missing lost
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
