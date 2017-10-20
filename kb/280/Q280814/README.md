---
layout: page
title: "Q280814: SMS: SMS_LOGON_DISCOVERY_AGENT Does Not Start on Windows 2000"
permalink: /kb/280/Q280814/
---

## Q280814: SMS: SMS_LOGON_DISCOVERY_AGENT Does Not Start on Windows 2000

{% raw %}

	Article: Q280814
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbDiscovery
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMS_LOGON_DISCOVERY_AGENT does not start on a Microsoft Windows 2000-based
	domain controller if the default domain controller policy is disabled and
	replaced by a different policy.
	
	Although the service is installed, it cannot be started. The Nt_logon.log file
	contains an entry that indicates that the service did not start because of error
	1069. Manually trying to start the service from Control Panel does not work.
	
	CAUSE
	=====
	
	SMS_NT_LOGON_SERVER_MANGER, which is responsible for the
	SMS_LOGON_DISCOVERY_AGENT service installation, creates the SMS Remote Service
	account (SMSLogonSvc) and attempts to add the "Logon on as a service" user right
	for the account only to the domain controller's default policy object. However,
	in this case, this is not the active policy. Therefore, the account lacks the
	appropriate rights and cannot log on.
	
	WORKAROUND
	==========
	
	To work around this issue, manually add the "Logon on as a service" user right
	to the domain controller's currently active policy.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbDiscovery 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
