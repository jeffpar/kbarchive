---
layout: page
title: "Q216855: SMS: Password Uniqueness Disables SMS 2.0 Server Client Install"
permalink: kb/216/Q216855/
---

## Q216855: SMS: Password Uniqueness Disables SMS 2.0 Server Client Install

	Article: Q216855
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, client component installation on computers
	running Microsoft Windows NT Server 4.0 through SMS_CLIENT_CONFIG_MANAGER may
	fail to complete when password uniqueness is enabled within the domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q235325 SMS: How to Obtain Systems Management Server 2.0 Service Pack 1
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the Windows NT Server User Manager for Domains
	to disable password uniqueness in the Account policy of the domain. To do this,
	perform the following steps:
	
	1. Start User Manager for Domains.
	
	2. On the Policies menu, click Account.
	
	3. In the Password Uniqueness section of the Account Policy dialog box, click Do
	  Not Keep Password History.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	1.
	
	MORE INFORMATION
	================
	
	When password uniqueness is enabled in User Manager for Domains, the
	installation of the client components on a computer running Windows NT Server
	fails to complete. A temporary directory, Sms_temp, is left in the system root
	directory, while the <system_root>\MS\SMS directories are not fully
	populated. If logging of SMS_CLIENT_CONFIG_MANAGER is enabled at the site
	server, several message 2245 entries are logged:
	
	  --->Wait Waiting for PDC/BDC Sync (2245) $$ SMS_CLIENT_CONFIG_MANAGER
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
