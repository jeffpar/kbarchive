---
layout: page
title: "Q314207: SMS: Site System Status Summarizer Does Not Update Properly"
permalink: kb/314/Q314207/
---

## Q314207: SMS: Site System Status Summarizer Does Not Update Properly

	Article: Q314207
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug smsinst
	Last Modified: 08-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the site status node of the Systems Management Server (SMS)
	administrator's console, the "Summary Date" site system status for a site may
	not be current, and it may not update.
	
	CAUSE
	=====
	
	This problem can occur if the schedule for the site's site system status
	summarizer has been changed from the default start time of 12:00 AM. If the site
	system status summarizer start time is changed to anything other than a whole
	hour value (for example, 12:30AM rather than 12:00AM), the site system status is
	not updated.
	
	WORKAROUND
	==========
	
	To work around this problem, do not change the site system status summarizer
	start time to a value other than a whole hour setting such as 12:00, 1:00, 2:00,
	3:00, and so on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	You can change the schedule for the site system status summarizer in the SMS
	administrator console by opening the following node:
	
	  Site Database\Site Hierarchy\Sitecode-SiteName\Site Settings\Status
	  Summarizers\Site System Status Summarizer
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
