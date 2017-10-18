---
layout: page
title: "Q304381: SMS: SMS Executive Service Hangs During Startup"
permalink: kb/304/Q304381/
---

## Q304381: SMS: SMS Executive Service Hangs During Startup

	Article: Q304381
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbServer kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) 2.0 SMS Executive service threads may stop
	processing, and file backlogs may occur in SMS site server inboxes (such as
	SMS\Inboxes\Despoolr.box\Receive). When this occurs, the following error message
	entry may be added to the Despool.log file:
	
	  Waiting for an available despooling thread
	
	CAUSE
	=====
	
	This problem can occur when a deadlock occurs between two threads during the
	startup of SMS_EXECUTIVE.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms smsexec freeze hang locked no stopped logging
	
	======================================================================
	Keywords          : kbServer kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
