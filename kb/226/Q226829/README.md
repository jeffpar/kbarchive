---
layout: page
title: "Q226829: SMS: SWMAccount Is Not Removed from Local Account Database"
permalink: kb/226/Q226829/
---

## Q226829: SMS: SWMAccount Is Not Removed from Local Account Database

	Article: Q226829
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are on a member server and you uninstall a Software Metering Server
	computer, the SWMAccount is not removed from the local account database as
	expected.
	
	WORKAROUND
	==========
	
	To work around this issue, when you remove a site system role from a server, be
	sure to manually remove the user accounts that were created on the server.
	Always review the local account database on that server after the role has been
	successfully removed.
	
	If the site system being removed is on a domain controller, use caution when you
	remove the remaining user accounts. If another server hosting a site system role
	(in this case, software metering) is configured to use the domain account in
	question, that site system role will cease to function when the account is
	removed from the domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
