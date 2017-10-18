---
layout: page
title: "Q238127: SMS: SMS_NT_LOGON_DISCOVERY_AGENT May Experience Logon Problems"
permalink: kb/238/Q238127/
---

## Q238127: SMS: SMS_NT_LOGON_DISCOVERY_AGENT May Experience Logon Problems

	Article: Q238127
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbsms200 kbsms200bug kbSiteComp kbsms200sp1fix
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS_NT_LOGON_DISCOVERY_AGENT service on some logon points may not start
	because of a logon problem.
	
	CAUSE
	=====
	
	The password for the SMSLogonSVC account may not be synchronized with the rest
	of the Systems Management Server (SMS) domain, causing the service not to start
	correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, install SMS 2.0 Service Pack 1 (SP1) or later. After you
	have applied SP1 successfully to all the sites that share the same Microsoft
	Windows NT-based domain, the NT Logon Discovery Agent services on domain
	controllers are reinstalled with the new SMSLogonSVC account password during the
	next senior site's Logon Server Manager domain update cycle.
	
	MORE INFORMATION
	================
	
	For additional information about obtaining the latest SMS service pack, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbsms200 kbsms200bug kbSiteComp kbsms200sp1fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
