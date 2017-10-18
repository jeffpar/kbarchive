---
layout: page
title: "Q253647: SMS: Logon Server Manager Does Not Remove Non-Existent Domain"
permalink: kb/253/Q253647/
---

## Q253647: SMS: Logon Server Manager Does Not Remove Non-Existent Domain

	Article: Q253647
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbConfig kbsms200 kbsms200bug kbDiscovery
	Last Modified: 05-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type a non-existent domain name by mistake in Windows Networking Logon
	Installation properties or Windows Networking Logon Discovery properties, Logon
	Server Manager reports a valid error message that states that the domain
	controller for the domain cannot be located.
	
	However, after you remove the incorrect domain from Windows Networking Logon
	properties, Logon Server Manager continues to report the following errors in the
	NT_logon.log file:
	
	  NetGetDCName domain: DOMAIN1 server return: 2453
	  Warning could not find domain controller for DOMAIN1
	  ReportStatus is will not be called, keys
	  ,SMS_NT_LOGON_SERVER_MANAGER,c000057f,0,DOMAIN1
	  Warning Unable to update domain
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbConfig kbsms200 kbsms200bug kbDiscovery 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
