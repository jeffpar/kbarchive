---
layout: page
title: "Q282403: SMS: Resources in Collections Appear Duplicated"
permalink: kb/282/Q282403/
---

## Q282403: SMS: Resources in Collections Appear Duplicated

	Article: Q282403
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server (SMS) administrator console to view
	collection membership, multiple collection instances may be displayed, and
	within these collections, there are multiple copies of the individual resources.
	The duplication only occurs when the user's account has no class rights to
	collections but has multiple local/global group-based instance permissions to
	some or all collections.
	
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
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
