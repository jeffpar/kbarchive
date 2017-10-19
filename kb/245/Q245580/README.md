---
layout: page
title: "Q245580: SMS: Client Connection Account Lockouts on Secondary Site"
permalink: /kb/245/Q245580/
---

## Q245580: SMS: Client Connection Account Lockouts on Secondary Site

	Article: Q245580
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Setup method discussed in the following Microsoft Knowledge
	Base article, client connection account lockouts may occur when clients are
	being installed on the secondary site. This occurs only if SQL server is not
	installed before you install Systems Management Server (SMS) on the primary
	site.
	
	  Q235169 SMS: How to Reduce SMS Accounts Required for Installation on Large
	  Windows NT Domains
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, install SQL Server before you install a primary
	site instead of using SMS Setup to start the SQL Server installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The method included with the fix described in the following Microsoft Knowledge
	Base article (also included with SMS 2.0 SP1) introduces new Setup switches for
	secondary sites so that you can specify accounts to reduce the number of
	accounts in a domain with multiple sites. This installation method, when
	combined with automatic SQL Server installation using SMS Setup, can cause the
	client connection account to be locked out for secondary sites:
	
	  Q235169 SMS: How to Reduce SMS Accounts Required for Installation on Large
	  Windows NT Domains
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
