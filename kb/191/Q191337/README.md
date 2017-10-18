---
layout: page
title: "Q191337: SMS: Forcing Inventory May Cause Overhead for Dataloader"
permalink: kb/191/Q191337/
---

## Q191337: SMS: Forcing Inventory May Cause Overhead for Dataloader

	Article: Q191337
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances it may be necessary to force a client to report its
	full inventory. This is usually accomplished by manually running either
	
	     invdos /f
	
	  -or-
	
	     invwin32 /f
	
	from the logon server. This may result in the creation of client
	resynchronizations (resyncs) which can increase the processing overhead for
	Dataloader when used in large client environments.
	
	A new command line switch has been added which allows an immediate and full
	inventory scan without generating a client resync. The new switch is /x.
	
	For example, for non-Windows NT clients (Windows 95, Windows 3.11, and so forth),
	use the command:
	
	     invdos /x
	
	For Windows NT clients, use the command:
	
	     invwin32 /x
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms SP SP4 dataloder demand invdos switches
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
