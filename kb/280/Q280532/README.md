---
layout: page
title: "Q280532: SMS: Client Service Does Not Start on Windows 2000 Professional"
permalink: /kb/280/Q280532/
---

## Q280532: SMS: Client Service Does Not Start on Windows 2000 Professional

{% raw %}

	Article: Q280532
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Client service may not start on a Windows
	2000-based client if the default domain policy has been modified to grant the
	"Logon as a service" user right to a domain user account.
	
	CAUSE
	=====
	
	The addition of the "Logon as a service" user right in the default domain policy
	takes precedence over any instances of the same user right that are set locally,
	including the SMSCliSvcAcct& account under which the SMS Client service
	runs.
	
	There are times when a domain account should have certain rights on either a
	Windows 2000 Professional-based client or a Windows 2000-based member server.
	Granting this right in the default domain policy may seem the most logical way
	to grant this right so that this account has this right for the entire domain.
	However, this logic may cause problems with other accounts that are created
	locally on Windows 2000 Professional and Windows 2000-based members servers
	because the default domain policy overrides the rights that are granted locally.
	Therefore, the SMSClisvcacct account, which is local and unique on every Windows
	2000-based computer that is not a participating domain controller, cannot
	start.
	
	Manually trying to start the service generates a "logon failure" error message
	even though the account and password are correct and the "Logon as a service"
	user right is present for the SMSCliSvcAcct& account in the local policy on
	the workstation or member server.
	
	WORKAROUND
	==========
	
	To work around this behavior, grant the rights locally on the computers on which
	the domain account requires the special privileges.
	
	STATUS
	======
	
	This behavior is by design. The Domain Group Policy overrides the Local Policy
	settings; the SMSClisvcacct account cannot be added at this level.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
