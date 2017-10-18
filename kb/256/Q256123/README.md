---
layout: page
title: "Q256123: SMSLogonSvc account cannot reliably remain unlocked if password"
permalink: kb/256/Q256123/
---

## Q256123: SMSLogonSvc account cannot reliably remain unlocked if password

	Article: Q256123
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In System Manager Server versions 2.0, and 2.0 SP1, the Logon Data Discovery
	Records (DDRs) are not copied from the logon points to the site server.
	
	Each Domain Controller in the site will then log numerous NT Event Log errors
	that report failure to start the SMS Logon Discovery Agent service:
	
	  Service Failed to start due to a logon failure: Error 1069
	
	CAUSE
	=====
	
	If account lockout is enabled on the domain for X number of failed logon
	attempts and an administrator manually changes the SMSLogonSvc account password
	the SMSLogonSvc account will be locked out whenever X instances of the
	SMS_LOGON_DISCOVERY_AGENT (LDA) is restarted.
	
	Currently, there is no reliable way to ensure the SMSLogonSvc account will not be
	subsequently locked out unless all logon points are uninstalled then
	reinstalled. Even running a senior site update after changing the password will
	not prevent the potential lockout. This behaviour occurs regardless of whether
	or not the password is ever manually changed again.
	
	The SMS_LOGON_DISCOVERY_AGENT service startup properties are not updated on logon
	points whose SMS_LOGON_DISCOVERY_AGENT service is already running when the
	senior site runs its update. At any point from then on, if X number of Logon
	Point servers (Domain Controllers) are rebooted or their
	SMS_LOGON_DISCOVERY_AGENT service is restarted within the "lockout reset count"
	timeout window then the account will be locked out again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Once the SMSLogonSvc account is locked out, an Administrator needs to disable
	  Windows Networking Logon Discovery for all sites that share the NT domain
	  containing the SMSLogonSvc account that keeps getting locked out.
	
	2. Wait for the NT Logon Server Manager to uninstall the NT Logon Discovery
	  Agent from all Domain Controllers. Once each site has updated the PDC and
	  then the senior site has run a full update, the Logon Discovery Agent (LDA)
	  and the SMSLogonSvc service will be removed completely from all DCs in the
	  domain.
	
	3. Re-enable Windows Networking Logon Discovery. When logon discovery is
	  re-enabled the SMSLogonSvc account will be recreated with a new random
	  password and the LDA service will be installed and started on each DC using
	  this new password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	After each site has updated the PDC and then the senior site has run a full
	Logon Point update, the SMS_LOGON_DISCOVERY_AGENT service will be removed
	completely from all DCs in the domain.
	
	When Logon Discovery is re-enabled the SMSLogonSvc account will be recreated with
	a new random password and the SMS_LOGON_DISCOVERY_AGENT service will be
	installed and started on each Domain Controller using this new password and the
	SMSLogonSvc account will no longer be subject to lockouts.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
