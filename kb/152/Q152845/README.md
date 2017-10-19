---
layout: page
title: "Q152845: XFOR: Moving Messages Between Folders Fails to Delete Original"
permalink: /kb/152/Q152845/
---

## Q152845: XFOR: Moving Messages Between Folders Fails to Delete Original

	Article: Q152845
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to move a message or messages from any folder within the
	Microsoft Exchange 4.0 Client to another folder, the following error message
	appears:
	
	  The item could not be moved. The action could not be completed.
	
	WORKAROUND
	==========
	
	No workaround is required. The message is actually copied to the destination
	selected, however the delete action on the original message failed. If the
	original message is manually deleted all is fine, however this action should not
	be required by the user. The original message should be deleted automatically by
	the Exchange Client itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
