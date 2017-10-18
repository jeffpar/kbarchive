---
layout: page
title: "Q313614: SMS: Administrator Console Queries Enumerate Slowly"
permalink: kb/313/Q313614/
---

## Q313614: SMS: Administrator Console Queries Enumerate Slowly

	Article: Q313614
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsmsAdmin
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Query node in the SMS Administrator console, the console may
	appear to stop responding (hang) before all of the available queries are
	displayed.
	
	CAUSE
	=====
	
	This behavior may occur after you apply Systems Management Server (SMS) 2.0
	Service Pack 4 (SP4). Changes in SMS 2.0 SP4 were made to prevent duplicate
	queries from appearing in the SMS Administrator console as described in the
	following Microsoft Knowledge Base article:
	
	  Q302508 Duplicate Queries Appear in the Administrator Console
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
