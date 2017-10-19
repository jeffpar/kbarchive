---
layout: page
title: "Q226851: SMS: Initial Site Control File Rejection Doesn't Confgure Client"
permalink: /kb/226/Q226851/
---

## Q226851: SMS: Initial Site Control File Rejection Doesn't Confgure Client

	Article: Q226851
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple changes are made to a Systems Management Server (SMS) site server
	immediately (within a minute or two) after the site is installed, the changes
	for software metering and other components may not be written to the site
	control file and, therefore, the changes are not implemented on the clients.
	
	CAUSE
	=====
	
	This behavior can occur when the site server installation has not yet
	stabilized.
	
	WORKAROUND
	==========
	
	To work around this issue, perform a site reset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
