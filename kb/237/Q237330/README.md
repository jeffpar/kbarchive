---
layout: page
title: "Q237330: SMS: Advertisements Are Sent with Wrong Priority"
permalink: kb/237/Q237330/
---

## Q237330: SMS: Advertisements Are Sent with Wrong Priority

	Article: Q237330
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an advertisement in Systems Management Server 2.0, you can set
	the sending priority to low, medium, or high. When you choose either a low or
	high priority, the actual sending priority used by the site server is reversed,
	as detailed in the following table.
	
	+-------------------------------------+
	| Selected priority | Actual priority | 
	+-------------------------------------+
	| low               | high            | 
	+-------------------------------------+
	| medium            | medium          | 
	+-------------------------------------+
	| high              | low             | 
	+-------------------------------------+
	
	This behavior does not apply to the sending priority that you can set on
	packages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	When you create an advertisement that needs a high priority, set the
	advertisement priority to low.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This behavior can adversely affect the timely delivery of advertisements in a
	multiple-site hierarchy. Because site-to-site communication occurs using a
	medium priority, any advertisements that are configured to use a high priority
	are preempted by the site-to-site traffic.
	
	It is especially important to configure advertisements created at a parent site
	with a low priority if a fast delivery to the client is required.
	
	Additional query words: prodsms ad not received apm
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
