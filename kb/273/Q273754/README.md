---
layout: page
title: "Q273754: Distributing Software May Not Work w/10004 Under Admin Context"
permalink: kb/273/Q273754/
---

## Q273754: Distributing Software May Not Work w/10004 Under Admin Context

	Article: Q273754
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbsms200bug kbsms200fix kbAdvertisement kbsms200preSP3fix kbsms20
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain advertisements that are sent with the requirement of running under an
	administrative context may not complete successfully. Instead, status message ID
	10004 may be returned because of the following error message:
	
	  0x10b (267) : "The directory name is invalid."
	
	  SCHED DATA : Return code = 0x10b; The directory name is invalid.
	
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
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbsms200bug kbsms200fix kbAdvertisement kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
