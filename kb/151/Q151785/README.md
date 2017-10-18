---
layout: page
title: "Q151785: XCON: MTA Queue Blocked by NDR or Delivery Receipts"
permalink: kb/151/Q151785/
---

## Q151785: XCON: MTA Queue Blocked by NDR or Delivery Receipts

	Article: Q151785
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Exchange Server site that backbones over a foreign X.400 system to another
	Exchange Server site develops a message backlog for mail destined for the remote
	Exchange Server site. This message backlog is unrelated to any network
	communication problems. The message delivery problem may be unidirectional; that
	is, messages are being delivered from the remote site, but not to the remote
	site.
	
	CAUSE
	=====
	
	If a report message (that is, a non-delivery report [NDR], or a delivery
	receipt) is returned from the remote site and the foreign X.400 system used as a
	backbone adds unanticipated encoding for the property Report- Additional-Info,
	the message may block the MTA queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: blocked blockage hung stopped queues
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
