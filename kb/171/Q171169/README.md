---
layout: page
title: "Q171169: XADM: Address Book Views in Exchange Server 4.0 Servers"
permalink: /kb/171/Q171169/
---

## Q171169: XADM: Address Book Views in Exchange Server 4.0 Servers

	Article: Q171169
	Product(s): Microsoft Exchange
	Version(s): Windows:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a mixed environment of servers running both Microsoft Exchange Server version
	4.0 and 5.0, Exchange clients connecting to the version 4.0 servers will be able
	to see Address Book View containers, but will not be able to view the recipients
	within the containers. In addition, Address Book Views that have been configured
	to be hidden from the Microsoft Exchange client will be visible in clients
	connected to the version 4.0 servers.
	
	CAUSE
	=====
	
	The behavior above occurs when version 4.0 servers obtain the Address Book Views
	through replication with version 5.0 servers. The ability to configure and use
	custom Address Book Views is a new feature which is introduced in Microsoft
	Exchange Server version 5.0 and is not supported on Microsoft Exchange Server
	version 4.0.
	
	RESOLUTION
	==========
	
	To configure the Address Book Views, use version 5.0 of the Microsoft Exchange
	Administrator program. To take advantage of the Address Book Views feature on
	version 4.0 servers, you must upgrade them to Microsoft Exchange Server version
	5.0.
	
	
	Additional query words: AB missing empty
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : Windows:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
