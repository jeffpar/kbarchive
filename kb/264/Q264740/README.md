---
layout: page
title: "Q264740: Courier Sender Creates Large Files for Multiple Sites"
permalink: kb/264/Q264740/
---

## Q264740: Courier Sender Creates Large Files for Multiple Sites

	Article: Q264740
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you distribute the same package by courier sender to <N> different
	sites, a package is created with a size that is a multiple of <N> instead
	of a typical package size. This may result in a large package file that does not
	fit on a single CD-ROM for distribution.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
