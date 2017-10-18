---
layout: page
title: "Q191956: XADM: System Attendant (Mad.exe) Stops in ScSetDeleted"
permalink: kb/191/Q191956/
---

## Q191956: XADM: System Attendant (Mad.exe) Stops in ScSetDeleted

	Article: Q191956
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange System Attendant (Mad.exe) stops (crashes). If you have
	Dr. Watson enabled, which it is by default, and you have Exchange symbols
	installed on the computer, the Drwtsn32.log file contains the following call
	stack:
	
	  Function Name
	  -------------
	  mad!CSecurity::ScSetDeleted
	  mad!ScUpdateExchAdminAccountsOnRegistryKeys
	  mad!CAdminRegTask::Work
	  mad!CTimerTask::DwLoop
	  mad!CTimerTask::DwLoopStatic
	
	CAUSE
	=====
	
	One of the tasks of the Microsoft Exchange System Attendant is to periodically
	check to see whether any user accounts have been added to the Site and
	Configuration containers with Administrator-level permissions. If it finds this
	to be the case, it needs to give or take away rights to the local machine's
	registry for those user accounts.
	
	There was a logic error in this procedure that could cause the Microsoft Exchange
	System Attendant to stop responding in rare events.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
