---
layout: page
title: "Q265411: SMS: DDM Hangs on Secondary Site Performing Full Refresh"
permalink: kb/265/Q265411/
---

## Q265411: SMS: DDM Hangs on Secondary Site Performing Full Refresh

	Article: Q265411
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Discovery Data Manager (DDM) may stop responding (hang) on a secondary site
	server while it is processing a queue of .pdr files that have been received from
	the parent primary site. The following entry is the last entry in the Ddm.log
	file:
	
	  Processing full refresh...
	
	CAUSE
	=====
	
	This problem can occur if the queue of .pdr files is incorrectly enumerated.
	When this occurs, DDM continuously loops.
	
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
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
