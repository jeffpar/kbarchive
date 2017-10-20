---
layout: page
title: "Q303463: Memory Leak in SMS Performance Monitor Counters"
permalink: /kb/303/Q303463/
---

## Q303463: Memory Leak in SMS Performance Monitor Counters

{% raw %}

	Article: Q303463
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program that is using the SMS Performance Counters (Perfmon.exe or any
	third-party program) may leak some memory. You can view this problem by using
	Task Manager (memory usage), or when you monitor the private bytes of the
	Perfmon.exe program.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: smsperf
	
	======================================================================
	Keywords          : kbtool kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
