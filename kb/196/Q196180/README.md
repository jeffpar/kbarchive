---
layout: page
title: "Q196180: XADM: Move Server Wizard Fails when System Folders are Present"
permalink: kb/196/Q196180/
---

## Q196180: XADM: Move Server Wizard Fails when System Folders are Present

	Article: Q196180
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Exchange Server 5.5 Move Server Wizard, the following message
	appears on the screen:
	
	  System folders are homed on the server being moved. Rehome the system
	  folders and run the wizard again.
	
	CAUSE
	=====
	
	If the systems folders are homed on the server being moved, and there are no
	replicas of the system folders on other servers in the site, this error will
	occur. It will not occur if the server being moved is the last server in the
	site.
	
	WORKAROUND
	==========
	
	Add a replica of each system folder to another server in the site. Another
	option is to rehome the system folders to another server in the site.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	
