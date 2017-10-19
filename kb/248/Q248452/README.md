---
layout: page
title: "Q248452: Remote Control Residual Permissions Override Permission Required"
permalink: /kb/248/Q248452/
---

## Q248452: Remote Control Residual Permissions Override Permission Required

	Article: Q248452
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbHelpDesk kbsms200preSP3 kbsms200sp2fix kbsm
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Remote Tools option on a client is set to Permission Required and
	permission is granted once, subsequent attempts (in 120 seconds) to use remote
	tools (the same tool or a different tool) on the same computer from the same
	administrative console does not require that the user grant permissions again.
	
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
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbHelpDesk kbsms200preSP3 kbsms200sp2fix kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
