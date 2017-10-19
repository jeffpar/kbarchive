---
layout: page
title: "Q248150: SMS: Package Status Inaccurate in Three-Tier Hierarchy"
permalink: /kb/248/Q248150/
---

## Q248150: SMS: Package Status Inaccurate in Three-Tier Hierarchy

	Article: Q248150
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbMMC kbServer kbsms200 kbsms200bug kbPackage kbsmsAdmin kbSoftwareDist kbsms200s
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server (SMS) in a three-tier hierarchy, package
	status as viewed at the middle-tier site may be inaccurate for the third-level
	child site.
	
	CAUSE
	=====
	
	This behavior occurs when you create a package at the central site in a
	three-tier hierarchy. When you view the package status from the middle-tier
	site's Administrator console, it indicates that the package has not been
	received. However, the information is correctly presented at the central site.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	A three-tier hierarchy is shown in the following example:
	
	  CEN (central site)
	   |
	  MID (middle tier)
	   |
	  BOT (third tier - this is usually a secondary site)
	
	In this situation, the package status for a package created at CEN for deployment
	to site BOT is not accurate when viewed from the Administrator console at the
	MID site.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbMMC kbServer kbsms200 kbsms200bug kbPackage kbsmsAdmin kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
