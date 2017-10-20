---
layout: page
title: "Q238250: SMSCliSvcAcct&amp; May Be Used When Netware Redirector Is Installed"
permalink: /kb/238/Q238250/
---

## Q238250: SMSCliSvcAcct&amp; May Be Used When Netware Redirector Is Installed

{% raw %}

	Article: Q238250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbSecurity kbServer kbsms200 kbsms200bug kbBindery kbCAP kbNDS kbOSNovell kbsm
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) clients that have the Novell intraNetWare client
	installed may make excessive calls to NetWare server(s) defined in the client's
	PATH statement. This may cause the NetWare server(s) to become unresponsive
	because of excessive traffic from the SMS clients. The clients use the
	SMSCliSvcAcct& account when connecting to these servers.
	
	WORKAROUND
	==========
	
	To work around this behavior, use any of the following methods:
	
	- Remove mapped NetWare drives from the Windows NT PATH statement.
	
	- Enable the Guest account on the NetWare servers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The SMSCliSvcAcct& account is a local administrative account on Windows
	NT-based SMS clients that is used by the Client service.
	
	This issue has been confirmed only to affect Windows NT 4.0 and Systems
	Management Server 2.0 with Service Pack 1 installed.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbSecurity kbServer kbsms200 kbsms200bug kbBindery kbCAP kbNDS kbOSNovell kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
