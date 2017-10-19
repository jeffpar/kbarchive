---
layout: page
title: "Q235205: Advertised Program Does Not Run with 10003 Status Message"
permalink: /kb/235/Q235205/
---

## Q235205: Advertised Program Does Not Run with 10003 Status Message

	Article: Q235205
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsAdmin kbsms200sp2fix kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to advertise a program to Systems Management Server (SMS) 2.0
	clients, the program may not run and a 10003 status message may be reported for
	the Advertisement status. The Smsapm32.log file on clients on which the issue
	occurs may log the following entry:
	
	  SCHED DATA : CAPScheduleData :: SetChangableData( C1UP0416, C1UP0416 ) APM
	  ACCOUNT MGR : ERROR: NetUserGetLocalGroups failed for user DOM\SOFTDIST (1722)
	  APM
	  ACCOUNT MGR : WARNING: Could not ascertain rights for user 'DOM\SOFTDIST' APM
	  SCHED DATA : Return code = 0x525; The specified user does not exist. APM
	
	This problem occurs only when the following conditions exist:
	
	- The SMS site server is a member server in a domain.
	
	- A valid Windows NT Software Installation account has been specified in SMS
	  Administrator Console.
	
	- A program specifies that the Windows NT Software Installation account should
	  be used.
	
	- The program is advertised to Windows NT clients.
	
	- Account lockout is enabled in the domain.
	
	- Domain controllers in the domain have the SMS client software installed.
	
	CAUSE
	=====
	
	The local workstation's SMSCliToknAcct& account credentials are being used
	to request authentication for the specified Windows NT Software Installation
	account. These credentials are invalid for the domain account of the same name.
	If account lockout is enabled, the account is locked out. When the account is
	locked out, advertised programs that specify use of the Windows NT Software
	Installation account do not run.
	
	Note that this account may also be locked out for other reasons.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q231399 SMSCliToknAcct& and/or SMSCliSvcAcct Accounts Locked Out
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.Microsoft has confirmed that this is a problem in the Microsoft
	products that are listed at the beginning of this article. This problem was
	first corrected in Systems Management Server 2.0 Service Pack 3.
	
	
	
	Additional query words: prodsms token smsclitokacct advertisement failure
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsAdmin kbsms200sp2fix kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
