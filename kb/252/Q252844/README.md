---
layout: page
title: "Q252844: SMS: Remote Installation in NDS Environments Is Unsuccessful"
permalink: /kb/252/Q252844/
---

## Q252844: SMS: Remote Installation in NDS Environments Is Unsuccessful

	Article: Q252844
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbConfig kbSecurity kbsms200 kbsms200bug kbBindery kbDisco
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt a remote installation of the Systems Management Server (SMS)
	2.0 client software on Microsoft Windows clients that are also running Windows
	NT Novell NetWare Directory Services (NDS), the installation may not be
	successfully completed.
	
	CAUSE
	=====
	
	The Windows NT 4.0 clients are configured as NDS clients only. Neither the SMS
	Client Remote Installation account nor the SMS Service account has
	administrative rights on the Windows NT workstation.
	
	To install the client software on a Windows NT computer whose logged-on user does
	not have local administrative rights, either the SMS Service account or the SMS
	Client Remote Installation account will be used. Either account can be used in
	Windows NT and NetWare environments. At least one of these accounts must have
	local administrative rights on the computers on which the SMS client software
	will be installed or the installation will not succeed.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following procedures:
	
	- Make all Windows NT clients in NetWare environments members of the Windows NT
	  domain in which the SMS Service account exists. Even though such clients may
	  not log on to that domain, those clients need to have machine accounts so
	  that the SMS Client Remote Installation account or SMS Service account can be
	  used.
	
	-or-
	
	- Create a local administrative account on each Windows NT computer with the
	  same user name and password as the SMS Service account or the SMS Client
	  Remote Installation account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	During site setup, the SMS Service account is made a member of the domain
	Administrators group for the site server's domain and, therefore, it has
	administrative rights on all Windows NT computers in that domain. The SMS Client
	Remote Installation account does not need to be a member of the domain
	Administrators group, but it does need local administrative rights on the
	computers on which the SMS client software will be installed.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbConfig kbSecurity kbsms200 kbsms200bug kbBindery kbDiscovery kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
