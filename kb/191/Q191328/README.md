---
layout: page
title: "Q191328: SMS: Service Account Does Not Have Rights on Member Server"
permalink: kb/191/Q191328/
---

## Q191328: SMS: Service Account Does Not Have Rights on Member Server

	Article: Q191328
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbSCMan smssetup smsconfig smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your domain properties are set to Use All Detected Servers, the Site
	Configuration Manager service will enumerate all servers in the domain,
	regardless of their role.
	
	If the member servers have not been previously configured for this type of
	installation, the following error messages may appear in the system event log:
	
	  Logon attempt with current password failed with the following error: Logon
	  failure: the user has not been granted the requested logon type at this
	  computer.
	
	  -or-
	
	  The SMS_INVENTORY_AGENT_NT service failed to start due to the following
	  error: The service did not start due to a logon failure.
	
	  -or-
	
	  The SMS_PACKAGE_COMMAND_MANAGER_NT service failed to start due to the
	  following error: The service did not start due to a logon failure."
	
	CAUSE
	=====
	
	This can occur if the Systems Management Server service account has not been
	given the Log On As A Service user right. This privilege is not automatic on
	member servers; they must be given this right in each member server's LOCAL
	accounts database.
	
	WORKAROUND
	==========
	
	To work around this problem, give the Systems Management Server service account
	on each member server the Log On As A Service user right.
	
	Additional query words: account winnt permissions prodsms SCM
	
	======================================================================
	Keywords          : kbsetup kbConfig kbSCMan smssetup smsconfig smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
