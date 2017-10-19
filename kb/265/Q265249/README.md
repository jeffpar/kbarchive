---
layout: page
title: "Q265249: XADM: InterOrg Synchronization Tool Does Not Replicate"
permalink: /kb/265/Q265249/
---

## Q265249: XADM: InterOrg Synchronization Tool Does Not Replicate

	Article: Q265249
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The InterOrg Synchronization tool does not replicate objects between the
	configured organizations and you do not receive an error message. You may,
	however, notice that there is mail in the Inbox of the computer that is
	configured as the master computer.
	
	CAUSE
	=====
	
	The e-mail address for the foreign requestor on the Configuration tab of the
	InterOrg Master Configuration properties may be in X.500 format. The only
	requestor address that should be in the X.500 format is the requestor mailbox
	that is located on the master server.
	
	RESOLUTION
	==========
	
	In the Requestor E-mail Addresses box, type the e-mail addresses for all valid
	requestor agents. This prevents users from creating rogue requestor agents and
	participating in the InterOrg directory scheme. These addresses should be the
	Simple Mail Transfer Protocol (SMTP) addresses of the requestor services except
	if the master and requestor service are both installed on the same Exchange
	Server computer (as is the case for the master Exchange Server computer).
	
	For additional information about configuring the InterOrg Synchronization tool,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q198789 XADM: How to Install, Configure, and Use the InterOrg Tool
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
