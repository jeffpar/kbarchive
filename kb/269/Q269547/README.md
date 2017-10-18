---
layout: page
title: "Q269547: SMS: Software Metering Licenses Increase Across Server"
permalink: kb/269/Q269547/
---

## Q269547: SMS: Software Metering Licenses Increase Across Server

	Article: Q269547
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The number of Software Metering licenses may unexpectedly increase when multiple
	sites are used to balance software licenses.
	
	CAUSE
	=====
	
	This behavior can occur because when a site is sent a license, it is not removed
	from the sending site until the receiving site acknowledges that it has received
	the license.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Example:
	
	You have three license metering servers in your environment. Monitoring for
	Microsoft FrontPage, you have allocated 250 licenses per site. After a week of
	allowing the sites to run, the number of licenses is now shown as 250, 251, and
	253, respectively, for the three sites.
	
	NOTE: This effect was noticed on software that was moved from the excluded
	software list to the metered software. Load balancing was set to every hour.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
