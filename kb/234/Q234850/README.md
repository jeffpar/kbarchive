---
layout: page
title: "Q234850: SMS: Packages Are Advertised to the Wrong Collections"
permalink: /kb/234/Q234850/
---

## Q234850: SMS: Packages Are Advertised to the Wrong Collections

	Article: Q234850
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, a package that is advertised to one collection
	may be incorrectly offered to a different collection. This problem occurs on
	secondary sites only.
	
	CAUSE
	=====
	
	Offer Manager modifies the wrong .col file to contain the advertisement ID. As a
	result, the .ins and .ofr files are modified to point to the wrong collection.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	For information about investigating other issues that may affect Systems
	Management Server, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q227032 SMS: Clients Are Using Wrong Instruction After Site Rebuild
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
