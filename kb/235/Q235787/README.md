---
layout: page
title: "Q235787: SMS: SMS_EXECUTIVE Schedules Wrong Time for Network Discovery"
permalink: kb/235/Q235787/
---

## Q235787: SMS: SMS_EXECUTIVE Schedules Wrong Time for Network Discovery

	Article: Q235787
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbConfig kbMMC kbServer kbsms200 kbsms200bug kbDiscovery
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the time zone on a Microsoft Systems Management Server (SMS)
	2.0 Site Server, Network Discovery runs at a different time than what has been
	scheduled in the SMS 2.0 Administrator Console.
	
	CAUSE
	=====
	
	This behavior occurs because the SMS_Executive service schedules Network
	Discovery based on the original time zone and not on the updated time zone. This
	behavior can cause Network Discovery to run at an unintended time.
	
	WORKAROUND
	==========
	
	When you change the time zone on an SMS 2.0 Site Server, it is necessary to
	restart the computer so that the change is updated on the site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbConfig kbMMC kbServer kbsms200 kbsms200bug kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
