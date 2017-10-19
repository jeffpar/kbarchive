---
layout: page
title: "Q221218: SMS: Restrictive WinNT Account Policies Prevent DC Installation"
permalink: /kb/221/Q221218/
---

## Q221218: SMS: Restrictive WinNT Account Policies Prevent DC Installation

	Article: Q221218
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Restrictive Windows NT account policies can prevent domain controllers from
	installing the Systems Management Server client. You set account policies in
	Windows NT User Manager for Domains by clicking Account on the Policies menu.
	
	If you set the value Minimum Password Age to anything other than Allow Changes
	Immediately, domain controllers will fail to install the Systems Management
	Server client.
	
	You will see the following error in either the Wn_manual.log or Wn_logon.log
	files:
	
	  Could not register CCIM; AppRegister return code =1060
	  Waiting for 1 minute for CliSvc to start CCIM
	  Generated account name 'SMS&_NTD-MD-01'
	  Waiting for PDC/BDC Sync (1327)
	
	  Error 1327 = Logon failure: user account restriction.
	
	NOTE: You may also see the error in the Client Configuration Manager (CCM)
	Ccm.log file or in the Systems Management Server Client Service Clisvc.log. To
	work around this problem, set the Minimum Password Age property to Allow Changes
	Immediately.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms 1327 PDC/BDC sync
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
