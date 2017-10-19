---
layout: page
title: "Q242926: Duplicate Client Configuration Request Stream in Ccrretry.box"
permalink: /kb/242/Q242926/
---

## Q242926: Duplicate Client Configuration Request Stream in Ccrretry.box

	Article: Q242926
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbDiscovery kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple Client Configuration Request (CCR) files may be generated for a single
	site system client if for some reason the client installation cannot be
	completed. This can cause unnecessary server usage, possibly including the need
	to replicate Security Accounts Manager (SAM) changes in a large domain
	environment.
	
	CAUSE
	=====
	
	Each CCR is stored in the retry queue with a unique random name. Duplicate CCRs
	can be queued.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	A supported bundle of fixes that corrects this problem is now available from
	Microsoft, but has not been fully regression tested and should be applied only
	to systems experiencing this specific problem. If you are not severely affected
	by this specific problem, Microsoft recommends that you wait for the next
	Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain this hotfix bundle.
	
	For additional information about this hotfix bundle, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package Contents
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Client Configuration Manager (CCM) now uses CCR system-specific information to
	name CCRs in the retry queue. The name of a "retry" CCR is now unique for a
	specific system (<COMPUTERNAME>.<DOMAINNAME>.CCR) to prevent
	duplicate CCRs in the retry queue.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbDiscovery kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
