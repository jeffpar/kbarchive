---
layout: page
title: "Q199534: XFOR: MS Mail Users Can't Send to Users in Remote Exchange Sites"
permalink: kb/199/Q199534/
---

## Q199534: XFOR: MS Mail Users Can't Send to Users in Remote Exchange Sites

	Article: Q199534
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure directory synchronization (dirsync) between Microsoft Mail
	(MS Mail) and a Microsoft Exchange Server organization with multiple sites,
	Exchange Server user names from all the sites appear in the global address list
	for MS Mail users. Mail flows from the Exchange Server sites to MS Mail, but the
	MS Mail users cannot send mail to the users in the remote Exchange Server sites
	(sites that are not directly connected to MS Mail). Mail disappears, and no
	error message or non-delivery report (NDR) is displayed.
	
	For example, if an MS Mail postoffice (PO1) is communicating with an Exchange
	Server computer that is also the dirsync server in a site (SITE1), users in a
	remote Exchange Server site (SITE2) can send mail to users on PO1. But if a user
	on PO1 composes a new mail message and selects a user in SITE2 from the global
	address list, the message disappears, without any error messages or NDRs.
	
	This article assumes that the Directory Replication Connector is established
	between the Exchange Server sites.
	
	CAUSE
	=====
	
	The configuration of the MS Mail postoffice for the different Exchange Server
	sites is not complete.
	
	RESOLUTION
	==========
	
	To complete configuration of an MS Mail postoffice:
	
	1. Start the MS Mail Admininstrator program, click External Admin, and then
	  click Create.
	
	2. Define the remote Exchange Server site (in the example above, SITE2) as an
	  indirect postoffice by means of the shadow postoffice in the Exchange Server
	  site that is directly connected to the MS Mail postoffice (SITE1).
	
	3. Press the ESC key, and exit the MS Mail Administrator program to save the
	  changes.
	
	4. Send a message from the MS Mail postoffice (PO1) to a user in the remote
	  Exchange Server site (SITE2), and then confirm that the message is received
	  successfully.
	
	5. If there are other remote Exchange Server sites, repeat steps 1 through 4 for
	  the other Exchange Server sites.
	
	MORE INFORMATION
	================
	
	The steps in the "Resolution" section send all mail addressed to any remote
	Exchange Server sites to the shadow postoffice in the Exchange Server site that
	is directly connected to the MS Mail postoffice. When the mail reaches the
	shadow postoffice, the Microsoft Mail Interchange service retrieves the mail and
	sends it to the Exchange Server message transfer agent (MTA) for routing.
	
	If directory replication is involved in assigning address spaces to the
	connectors, the Exchange Server MTA is better able to route the mail. Each
	Exchange Server site can resolve the address and map the correct route for the
	mail message.
	
	For additional information about configuring the routing between MS Mail and two
	Exchange Server sites, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q148389 XFOR: How to Backbone MSMail 3.x over Exchange
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
