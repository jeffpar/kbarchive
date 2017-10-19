---
layout: page
title: "Q256880: SMS: Package Routing Fails Distrib. from Central to Grandp Site"
permalink: /kb/256/Q256880/
---

## Q256880: SMS: Package Routing Fails Distrib. from Central to Grandp Site

	Article: Q256880
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbScheduler kbSender kbSoftware
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, software distribution can be deployed using
	the package routing method (fan-out method). This means a central site can
	target a package to a grandchild site without having a direct address defined
	from the central site to the grandchild site.
	
	However this can fail when the distribution is configured for medium priority,
	resulting in a prevention of the package from completing to the target
	grandchild site.
	
	For example, distributing a package from Site A to Site C:
	
	  Site A   ---- Central Site
	    |
	  Site B   ---- Child Site
	    |
	  Site C   ---- Grandchild Site
	
	CAUSE
	=====
	
	The Scheduler thread will periodically go through the routing packages and
	delete any routing packages that are not referenced by a send request. The
	routing packages are usually represented as a local path. However, there are
	instances where the send requests refer to the routing package using a UNC path.
	When this happens the Scheduler is unable to resolve a UNC path to a local path
	even if both paths point to the same file.
	
	This can also occur when the Sender address from Site B to Site C is configured
	to allow only high priority packages to be sent over several hours, before
	switching to allow medium and high.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this behavior, create a direct address to the target site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbScheduler kbSender kbSoftwareDist kbsms200sp2fix kbSMSSender 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
