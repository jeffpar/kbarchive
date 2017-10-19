---
layout: page
title: "Q186673: XWEB: Error Msg: Unable to Delete Message Using OWA"
permalink: /kb/186/Q186673/
---

## Q186673: XWEB: Error Msg: Unable to Delete Message Using OWA

	Article: Q186673
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have exceeded your mailbox storage limit, you cannot delete any items
	using Outlook Web Access (OWA). The following error message appears when you
	attempt to delete an item after you have exceeded your mailbox storage limit
	with Exchange Server 5.5:
	
	  "Unable to delete message"
	
	This error message was changed in Exchange 5.5 SP1 to the following:
	
	  "Unable to delete item"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem does not occur if you use any other messaging client, such as
	Outlook Express, Outlook, or other MAPI clients. Note that items currently
	stored in the Deleted Items folder can be deleted as expected.
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : 5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
