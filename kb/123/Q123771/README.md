---
layout: page
title: "Q123771: SMS Site Configuration Manager Fails to Add Domain/Server"
permalink: /kb/123/Q123771/
---

## Q123771: SMS Site Configuration Manager Fails to Add Domain/Server

	Article: Q123771
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Systems Management Server Site Configuration Manager fails to correctly add
	a domain to the site when the domain contains a server name that exceeds 13
	characters.
	
	CAUSE
	=====
	
	When the NetServerEnum2 call is made to list the servers in the domain, the
	correct list is returned by the primary domain controller (PDC). Because the API
	returns error 2140 "An internal error has occurred," SMS Site Config Manager
	ignores the domain.
	
	When a server is added using the Use Specified Servers option, and the server
	name exceeds 13 characters, the API (application program interface) function
	return error 2453. Again, Systems Management Server Site Configuration Manager
	ignores the domain.
	
	WORKAROUND
	==========
	
	To work around this problem, use server names with 13 characters or fewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5.This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: config sms prodsms servername
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
