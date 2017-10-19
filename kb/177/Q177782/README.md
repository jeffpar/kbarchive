---
layout: page
title: "Q177782: XADM: Home Server Not Updated After a Move Mailbox"
permalink: /kb/177/Q177782/
---

## Q177782: XADM: Home Server Not Updated After a Move Mailbox

	Article: Q177782
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move a user's mailbox from Server A to Server B using the Advanced tab
	of mailbox properties, it will appear that the user's Directory Object is still
	homed on Server A. But when you check the destination servers Mailbox Resources,
	the user's mail appears to have been successfully moved to Server B.
	
	CAUSE
	=====
	
	During the Move Mailbox process, the Microsoft Exchange Server Administrator
	program performs the following steps:
	
	1. Copies the selected user's mailbox to the selected destination Server.
	
	  NOTE: Move Mailbox only works between servers in the same site.
	
	2. After the mailbox has been successfully moved, a directory synchronization
	  request is issued.
	
	During the synchronization process, the Administrator program is passing the same
	source and destination server to the Move Mailbox function. As a result the
	user's Directory Object does not get moved.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- On the Tools menu, click Move Mailbox to move users (instead of using the
	  Home Server property in the Advanced tab of the Recipient properties dialog
	  box).
	
	- Force Directory Updates within the site, as follows:
	
	  1. In the Administrator program, select the desired server.
	
	  2. On the General tab of the Directory Service properties page, click Update
	     Now.
	
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
	
	
	
	Additional query words: Moveuser RPC DIRREP administration
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
