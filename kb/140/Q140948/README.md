---
layout: page
title: "Q140948: XADM: Reply Rule Disabled When Deliver to Public Folder Via IMC"
permalink: kb/140/Q140948/
---

## Q140948: XADM: Reply Rule Disabled When Deliver to Public Folder Via IMC

	Article: Q140948
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server public folder reply rules are disabled when messages
	that match the reply rule criteria are delivered to the public folder via the
	Microsoft Exchange Internet Mail Connector (IMC) from an unknown user external
	to the Microsoft Exchange Server.
	
	CAUSE
	=====
	
	This problem will typically occur when an external user on the Internet tries to
	send mail to the SMTP address for a Microsoft Exchange public folder that has an
	automatic reply rule enabled. However, this problem can also occur when two
	Microsoft Exchange Servers are connected via an IMC to an IMC connection and the
	user addresses have not been shared between the two Microsoft Exchange Servers.
	
	RESOLUTION
	==========
	
	Upgrade to the latest version of the Microsoft Exchange Server STORE.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
