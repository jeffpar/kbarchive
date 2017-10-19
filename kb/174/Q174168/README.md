---
layout: page
title: "Q174168: XFOR: GroupWise Messages Missing After Migration"
permalink: /kb/174/Q174168/
---

## Q174168: XFOR: GroupWise Messages Missing After Migration

	Article: Q174168
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc55
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After migrating messages from GroupWise into Microsoft Exchange Server, users may
	report that messages from their GroupWise inbox do not show up in their Exchange
	Server Inbox. When looking at the .pri file created during migration, the
	administrator may notice the following:
	
	  Deleted Items,,,,,,,,,FALSE,FALSE,#00000002.SEC(1497),0,0
	  Deleted Items,,,,,,,,,FALSE,FALSE,#00000002.SEC(1593),0,0
	  Deleted Items,,,,,,,,,FALSE,FALSE,#00000002.SEC(1689),0,0
	
	CAUSE
	=====
	
	This is usually caused by messages that have the GroupWise "deleted" flag set,
	but have not been placed in the GroupWise Trashbin. When the Migration Wizard
	brings these messages across, it places them in the Exchange Server Deleted
	Items folder. This behavior is by design.
	
	MORE INFORMATION
	================
	
	GroupWise is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: migwiz gwise
	
	======================================================================
	Keywords          : kbtshoot kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
