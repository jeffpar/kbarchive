---
layout: page
title: "Q256963: Lockouts/Security Issues if Site Code Conflicts with Domain Name"
permalink: /kb/256/Q256963/
---

## Q256963: Lockouts/Security Issues if Site Code Conflicts with Domain Name

	Article: Q256963
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbConfig kbSecurity kbsms200 kbsms200bug kbDiscovery kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the site code is identical to the domain name, the Systems Management
	Server (SMS) Service account and Server Connection accounts experience frequent
	lockouts.
	
	CAUSE
	=====
	
	This problem can occur because the Microsoft Windows NT Logon Server Manager and
	Windows NT Logon Discovery Manager both write account information in the
	Mastercfg.cfg file. One uses the domain name, and one uses the site code. If the
	domain has the same name as one of the sites, they overwrite each other, causing
	one or the other to use the wrong credentials.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 and 2.0 SP1.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtool kbConfig kbSecurity kbsms200 kbsms200bug kbDiscovery kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
