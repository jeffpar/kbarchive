---
layout: page
title: "Q245170: SMS: Cannot Run Advertisement with Missing or Damaged Offer File"
permalink: /kb/245/Q245170/
---

## Q245170: SMS: Cannot Run Advertisement with Missing or Damaged Offer File

	Article: Q245170
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an offer (.ofr) file is listed in a client's instruction (.ins) file, but is
	missing from the Client Access Point (CAP) or is damaged, the client computer
	generates an error 10000 status message when the offer data providers (ODPs)
	enumerate the available offers. When this happens, no other valid advertisements
	run until the problem is resolved.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To workaround this problem, remove the reference to the damaged or missing .ofr
	file from the SMS client's .ins file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The hotfix for this article is dependent upon other developed fixes and must be
	installed as a complete package for compatibility.
	
	For additional information about the contents of this consolidated fix, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package
	
	Additional query words: prodsms ofr 10000
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
