---
layout: page
title: "Q159300: XFOR: PCMTA Fails to Respond to NetBIOS Notification"
permalink: /kb/159/Q159300/
---

## Q159300: XFOR: PCMTA Fails to Respond to NetBIOS Notification

	Article: Q159300
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Server MS Mail Connector MTA configured for NetBIOS
	notification will fail to respond to incoming NetBIOS datagrams. These datagrams
	are sent from NetBIOS configured MS Mail clients when urgent mail messages are
	sent to recipients on external postoffices.
	
	The MS Mail Connector MTA is designed to respond to these datagrams and alter its
	normal cycle so that mail is picked up from the sender's postoffice. Currently,
	the MS Mail Connector MTA continues to process mail in the normal fashion
	according the normal timing schedule.
	
	CAUSE
	=====
	
	The MTA fails to receive the datagrams because it is not properly registering to
	receive the multicast directed datagrams.
	
	WORKAROUND
	==========
	
	Use an MS Mail external postoffice, because it correctly responds to datagrams
	sent from clients. This may serve as a temporary solution until you can obtain
	the fixed MS Mail Connector MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: interrupt dispatch
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
