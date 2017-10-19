---
layout: page
title: "Q259408: SMS: Threshold Settings for Sitestat Lost When CAP Unavailable"
permalink: /kb/259/Q259408/
---

## Q259408: SMS: Threshold Settings for Sitestat Lost When CAP Unavailable

	Article: Q259408
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Periodically, user-specified threshold settings may be reset to their default
	values in Site System Status Summarizer. This could potentially cause inaccurate
	alerts to be generated.
	
	CAUSE
	=====
	
	If Site System Status Summarizer detects that a Client Access Point (CAP) has
	been unavailable for two successive update cycles, the thresholds for each of
	that site system's storage objects are inadvertently reset to their default
	values.
	
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
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
