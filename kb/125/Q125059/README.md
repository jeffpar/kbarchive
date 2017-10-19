---
layout: page
title: "Q125059: Network Monitor Displays Expiration Notice"
permalink: /kb/125/Q125059/
---

## Q125059: Network Monitor Displays Expiration Notice

	Article: Q125059
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbtool smsnetmon
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the version of Network Monitor that is shipped with Systems
	Management Server version 1.0, the following error message appears:
	
	  The expiration date on this product will be reached within 10 days. If the
	  support situation has not been resolved, please contact your support
	  representative for more information.
	
	CAUSE
	=====
	
	Network Monitor is located in the NMWFW directory on the SMS version 1.0 CD.
	Before Network Monitor was shipped with SMS, the program included a built-in
	timer that would disable the use of the program after a certain number of days.
	The code that displays the expiration message was included with this version of
	Network Monitor, but the disabling feature was not.
	
	RESOLUTION
	==========
	
	The error message can be ignored. Network Monitor will continue to work
	normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: sms prodsms netmon.exe wfw wfwg 16-bit Windows for Workgroups
	
	======================================================================
	Keywords          : kbtool smsnetmon 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
