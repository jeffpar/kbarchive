---
layout: page
title: "Q223138: SMS: Client Service Error 1314: Fails to Start SMSAPM32"
permalink: kb/223/Q223138/
---

## Q223138: SMS: Client Service Error 1314: Fails to Start SMSAPM32

	Article: Q223138
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAppMan
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the Systems Management Server 2.0 client on a domain controller,
	the Systems Management Server Client Service (clisvcl) may fail to start
	SMSAPM32, and log the following error in the Clisvc.log file:
	
	  ***ERROR: Unable to launch
	  "C:\WINNT.SRV\MS\SMS\clicomp\apa\Bin\smsapm32.exe " - Error : 1314
	
	Because SMSAPM32 cannot be started, the installation of optional components such
	as hardware or software inventory cannot be completed. A temporary workaround is
	to use Windows NT Server 4.0 User Manager for Domains to manually apply the
	'increase quotas' privilege to the Systems Management Server Client Token
	Account and all the Systems Management Server Client Service accounts for each
	domain controller.
	
	CAUSE
	=====
	
	The 'increase quotas' privilege is missing from the Systems Management Server
	Client Service account SMS&_<machine name> and the Systems Management
	Server Client Token account SMSCliToknAcct&.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms dc pdc bdc primary backup
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAppMan 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
