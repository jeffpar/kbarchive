---
layout: page
title: "Q226857: SMS: Intersite License Balancing Still Runs After Being Disabled"
permalink: /kb/226/Q226857/
---

## Q226857: SMS: Intersite License Balancing Still Runs After Being Disabled

	Article: Q226857
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When intersite license balancing is enabled for your software metering servers
	and then, at a later time, disabled, intersite license balancing continues
	according to its configured schedule.
	
	CAUSE
	=====
	
	This behavior occurs because after intersite license balancing is enabled at the
	site, it cannot be turned off.
	
	WORKAROUND
	==========
	
	To work around this issue, increase the interval at which licenses are balanced
	so that this traffic occurs as infrequently as possible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
