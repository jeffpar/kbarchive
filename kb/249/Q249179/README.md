---
layout: page
title: "Q249179: SMS: Delays in Displaying Distribution Points in SMS 2.0 Site"
permalink: /kb/249/Q249179/
---

## Q249179: SMS: Delays in Displaying Distribution Points in SMS 2.0 Site

	Article: Q249179
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsms120bug smsinst kbsms200sp2fix kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 30-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click Distribution Points and then click New Distribution Point,
	it can take a long time to display the list of existing distribution points.
	This occurs only in large site hierarchies. The larger the site hierarchy is,
	the longer the delay. With 200 sites, the delay can be approximately 3 minutes.
	With 10,000 sites, they delay can be significantly longer.
	
	CAUSE
	=====
	
	The query that is performed during this operation gathers some information that
	is not actually necessary for the operation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This hotfix should be applied on any installation of the SMS Administrator's
	Console. Note that installations of the SMS Administrative Microsoft Management
	Console Snap-In on remote machines is affected by this issue as well, so this
	hotfix needs to be applied on any installation of the SMS Administrator's
	Console, regardless of proximity to the SMS Site Server.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsms120bug smsinst kbsms200sp2fix kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
