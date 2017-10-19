---
layout: page
title: "Q235761: SMS: Foreign Package Information Not Available to Child Sites"
permalink: /kb/235/Q235761/
---

## Q235761: SMS: Foreign Package Information Not Available to Child Sites

	Article: Q235761
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbMMC kbsms200 kbsms200bug kbsms120 kbsms120bug kbPackage kbsmsAdm
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server version 2.0, foreign package information is not
	replicated down to child sites running Systems Management Server version 1.2.
	This prevents administrators at these child sites from redistributing packages
	that were sent from the parent site running version 2.0.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbMMC kbsms200 kbsms200bug kbsms120 kbsms120bug kbPackage kbsmsAdmin kbSoftwareDist kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
