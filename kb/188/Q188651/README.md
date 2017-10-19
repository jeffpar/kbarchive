---
layout: page
title: "Q188651: XADM: Public Folder Deletion Causes One Replication Message"
permalink: /kb/188/Q188651/
---

## Q188651: XADM: Public Folder Deletion Causes One Replication Message

	Article: Q188651
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a public folder containing several items is deleted, only one replication
	message is generated to servers containing replicas of the public folder, even
	though the public folder may have several hundred items in it. In other words, a
	single replication message for each item in the folder is not generated.
	
	MORE INFORMATION
	================
	
	After a public folder is deleted, the following events will occur in the event
	log:
	
	  Event ID: 3005
	  Src: MSExchangeIS Public
	  Type: Information
	  Category: Replication DS Updates
	  Description:
	  A replica of public folder (5-2B19) was removed.
	
	  Event ID: 3028
	  Src: MSExchangeIS Public
	  Type: Information
	  Category: Replication Incoming
	  Description:
	  An incoming replication message was processed.
	
	  Type: 0x2
	  Message ID: 1-14CE
	  CN min: 5-38A4
	  CN max: 5-38B6
	  RFIs: 0
	  IDCN deleted:  5-2B19,5-38B6
	
	  Server:
	  /O=MICROSOFT/OU=CENTRAL/CN=CONFIGURATION/CN=SERVERS/CN=EXCH_SVR/CN
	  =MICROSOFT PUBLIC MDB
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
