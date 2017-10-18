---
layout: page
title: "Q264378: SMS: Site System Summarizer May Deadlock"
permalink: kb/264/Q264378/
---

## Q264378: SMS: Site System Summarizer May Deadlock

	Article: Q264378
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,6.5 Service Pack 4
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Systems Management Server (SMS) 2.0 sites that are running with Microsoft SQL
	Server 7.0, a SQL deadlock may occur, affecting Site System Status Summarizer
	and Component Status Summarizer.
	
	CAUSE
	=====
	
	The deadlock occurs because Site System Status Summarizer and Component Status
	Summarizer share a SQL table that holds the Site System status and Component
	status for the site.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server 2.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about the Component Status Summarizer hotfix, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q249121 SMS: COMMIT TRANSACTION Request Has No Corresponding BEGIN
	  TRANSACTION
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2,6.5 Service Pack 4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
