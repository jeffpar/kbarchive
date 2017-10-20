---
layout: page
title: "Q268712: SMS: Error Message When You Perform a Site Reset"
permalink: /kb/268/Q268712/
---

## Q268712: SMS: Error Message When You Perform a Site Reset

{% raw %}

	Article: Q268712
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbServer kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a site reset, you may receive the following error message:
	
	  Either the password for service account <master domain
	  name>\<account name> is incorrect or administrator accounts in
	  domain <master domain name> do not have administrator privileges in
	  domain <resource domain name>.
	
	CAUSE
	=====
	
	This issue can occur if any of the following conditions exist:
	
	- You are not using the correct password.
	
	- The specified account does not have administrative rights on the computer.
	
	- The specified account has been configured to only log on to certain
	  workstations and the site server is not included in the list of authorized
	  workstations.
	
	- Systems Management Server (SMS) Site server is in a resource domain and the
	  SMS service account is in the master domain.
	
	WORKAROUND
	==========
	
	To resolve this issue:
	
	1. Verify that the password is correct.
	
	2. Verify that the service account is a member of domain administrators or is a
	  member of the local administrators group in User Manager for Domains.
	
	3. Verify that the "User May Log Onto All Workstations" feature is enabled in
	  User Manager for Domains.
	
	NOTE: In a master domain model, user accounts are normally maintained in the
	master domain. By default, SMS does not place a master domain account in the
	resource domain local administrators group.
	
	MORE INFORMATION
	================
	
	For additional information about SMS security and configuration of accounts that
	are used by SMS 2.0, view the SMS Security Whitepaper at the following Microsoft
	Web site:
	
	  http://www.microsoft.com/smsmgmt/techdetails/secessentials.asp
	
	NOTE: SMS Security is also described in Chapter 4 of the Microsoft Systems
	Management Server Administrator's Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbtool kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
