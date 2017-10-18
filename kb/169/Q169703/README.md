---
layout: page
title: "Q169703: XADM: Error Msg. When Accessing cc:Mail Connector Properties"
permalink: kb/169/Q169703/
---

## Q169703: XADM: Error Msg. When Accessing cc:Mail Connector Properties

	Article: Q169703
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are running the Microsoft Exchange Server Administrator program and the left
	pane displays one of the following messages:
	
	  SITE\Configuration\Servers\server\private information store\logons
	
	  -or-
	
	  SITE\Configuration\Servers\server\private information store\mailbox resources
	
	When you double-click in the right pane to display the cc:Mail Connector
	properties page, the Administrator program stops responding and the following
	Dr. Watson error message appears:
	
	  The instruction at ' 0xff042500 ' referenced memory at ' 0xff042500 '
	  could not be read.
	
	CAUSE
	=====
	
	The Administrator program is trying to display an incomplete object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
