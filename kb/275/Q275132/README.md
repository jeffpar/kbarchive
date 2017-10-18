---
layout: page
title: "Q275132: SMS: Large Hierarchy Causes High Processor Usage on Central Site"
permalink: kb/275/Q275132/
---

## Q275132: SMS: Large Hierarchy Causes High Processor Usage on Central Site

	Article: Q275132
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix kbsm
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Systems Management Server (SMS) 2.0 hierarchy contains several thousand
	sites, the SMS Executive service can consume up to 100 percent of the available
	processor usage on a central site. Specifically, the threads that follow
	components of the SMS Executive service can consume a large amount of processor
	usage:
	
	- SMS Collection Evaluator
	- SMS Discovery Data Manager
	- SMS Distribution Manager
	- SMS Hierarchy Manager
	- SMS Offer Manager
	- SMS Scheduler
	
	CAUSE
	=====
	
	Several components of the SMS Executive service build an ordered array of the
	site hierarchy in memory to accomplish some of their operations. The more sites
	that exist in the hierarchy, the longer it takes to build the site array, and
	more processor usage is consumed. If the number of sites exceeds several
	thousand, the overall performance of the system begins to degrade because the
	SMS Executive service consumes most of the available processor usage.
	
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
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
