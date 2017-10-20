---
layout: page
title: "Q256127: SMS: Changing Software Metering Server Service Account Password"
permalink: /kb/256/Q256127/
---

## Q256127: SMS: Changing Software Metering Server Service Account Password

{% raw %}

	Article: Q256127
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 05-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Software Metering services throughout a site may not start because of a
	service logon problem. When this occurs, Software Metering servers do not
	restart when they are stopped. If you attempt to restart them, you receive the
	following error message:
	
	  Error 1069, service could not start due to a logon failure.
	
	The account continues to be locked out until you stop all Software Metering
	servers and reset the account.
	
	CAUSE
	=====
	
	Changing the Software Metering service domain-based account password in the site
	system's properties successfully changes the password in the domain and in the
	service registration for the Software Metering servers. Because the service is
	still running with the old credentials, the old credentials are used to get
	groups from the domain controller. When a client starts or runs the background
	task of getting user groups (every 15 minutes by default), the old account
	password is used. The service account becomes locked out shortly, or immediately
	in a busy site.
	
	The Software Metering servers stop each Sunday evening for database maintenance
	(by default), so the computers are all stopped on Monday morning. When a server
	is bounced or the memory threshold is reached and the service cycles, it will be
	unable to restart. You must manually restart the servers after resetting the
	account. All users will be locked out of group-restricted programs until all
	servers are cycled and the account is reset.
	
	WORKAROUND
	==========
	
	To avoid this issue, follow these steps:
	
	1. Specify a new account and a new password when you change the credentials for
	  the Software Metering Server service.
	
	2. Configure all Software Metering servers in the site systems node to use the
	  new credentials.
	
	3. Wait until all the servers have been configured with the new credentials as
	  reported by the SMS\Logs\Licsvcfg.log file.
	
	4. Cycle all Software Metering Server services (SMS_LICENSE_SERVER) or wait over
	  a weekend for database maintenance to cycle the servers before removing the
	  old domain account.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
