---
layout: page
title: "Q299261: SMS: &quot;The Software Metering Server Is Not Running&quot; Message"
permalink: /kb/299/Q299261/
---

## Q299261: SMS: &quot;The Software Metering Server Is Not Running&quot; Message

{% raw %}

	Article: Q299261
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS_LICENSE_SERVER_MANAGER component may report status message 9406 ("The
	software metering server service is not running on <SMSserver>") every
	SMS_LICENCE_SERVER_MANAGER polling cycle (the default polling cycle is 15
	minutes).
	
	Attempting to stop the SMS_LICENSE_SERVER service or control it in any way
	returns Win32 error 1061 ("The service cannot accept control messages at this
	time").
	
	CAUSE
	=====
	
	These symptoms may occur shortly after you upgrade to Systems Management Server
	(SMS) 2.0 Service Pack 3 (SP3), or after you apply the Service Pack 2 (SP2)
	hotfix that is described in the following Microsoft Knowledge Base article:
	
	  Q245271 Memory Leak in Remodbc.exe for Software Metering Component
	
	A problem in this hotfix causes the SMS_LICENSE_SERVER service to report that it
	is stopping every Sunday at 2:00 A.M. without actually stopping. This causes
	Service Control Manager to report Win32 error 1061 when the service is
	interrogated. The SMS_LICENSE_SERVER_MANAGER service checks that the
	SMS_LICENSE_SERVER service is running on every polling cycle and then begins
	reporting status message 9406 because Service Control Manager cannot determine
	its current state.
	
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
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The SMS License server starts the Microsoft FoxPro database packing utility
	every Sunday at 1:59:59 A.M. (by default) to improve database access performance
	to the database cache. This is denoted by the PackTime entry in the Remodbc.ini
	file. The value in this entry is the number of seconds since January 1, 1970,
	0:00. The value is the date of the next scheduled pack time. It is during this
	routine that the problem occurs.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
