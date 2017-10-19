---
layout: page
title: "Q166611: XCON: No Rerouting Needed When OU Field is Empty"
permalink: /kb/166/Q166611/
---

## Q166611: XCON: No Rerouting Needed When OU Field is Empty

	Article: Q166611
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the following conditions are met, a message coming into a Microsoft Exchange
	Server, version 4.0 or 5.0, addressed to:
	
	  C=cc; A=aa; P=pp; O=oo; OU=uu; S=surname
	
	will generate a Non-Delivery Report (NDR) to the originator stating that a loop
	was detected:
	
	- The Microsoft Exchange Server's Site Addressing is set to:
	
	     C=cc; A=aa; P=pp; O=oo
	
	- The Microsoft Exchange Server has a single X.400 connector to a X.400
	  provider whose Address Space set to:
	
	     C=*
	
	- The X.400 provider forwards all messages with the following address to the
	  Microsoft Exchange Server:
	
	     C=cc; A=aa; P=pp
	
	- A mailbox exists on the Microsoft Exchange Server with an X.400 address of:
	
	     C=cc; A=aa; P=pp; O=oo; S=surname
	
	CAUSE
	=====
	
	This happens because the recipient address does not exist in the Microsoft
	Exchange Directory. The existing mailbox's address does not include OU=uu.
	Microsoft Exchange Server sends the message back to the X.400 provider, which
	returns it to Microsoft Exchange Server, which then detects the loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	After the hotfix has been applied, the Microsoft Exchange Server will
	immediately generate an "Unrecognized OR Name" NDR to avoid the rerouting.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
