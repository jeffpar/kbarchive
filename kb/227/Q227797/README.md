---
layout: page
title: "Q227797: Offline Logon Servers Continue to Show Errors in Site Status"
permalink: kb/227/Q227797/
---

## Q227797: Offline Logon Servers Continue to Show Errors in Site Status

	Article: Q227797
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbConfig kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix k
	Last Modified: 31-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a domain controller is renamed or taken offline in Systems Management Server
	(SMS) 2.0 while it is performing as a logon point, it may continue to log
	numerous error messages in the Site System Status. These errors are related to
	the inability of the site server to communicate with the non-existent server.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove the server's machine account from the domain
	by using the Server Manager utility. After 7 days of not being able to contact
	the server, the Microsoft Windows NT Logon Server Manager component on the site
	server should remove all references to this computer.
	
	In some cases, the server might retain an "SMS component server" status even
	though there are no site system components assigned to it. If this occurs, you
	may delete the server from the Site Systems folder under Site Settings in the
	SMS Administrator tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	
	Additional query words: prodsms ntlogon logon server manager
	
	======================================================================
	Keywords          : kbnetwork kbtool kbConfig kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
