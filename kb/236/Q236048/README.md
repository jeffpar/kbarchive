---
layout: page
title: "Q236048: Account Creation for Secondary Site Requires Network Connection"
permalink: /kb/236/Q236048/
---

## Q236048: Account Creation for Secondary Site Requires Network Connection

	Article: Q236048
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A resource domain server may not be able to communicate via TCP/IP with the
	master domain primary domain controller to update the Security Accounts Manager
	(SAM) with the master domain Systems Management Server (SMS) service accounts
	for the secondary site.
	
	This prevents the SMSServer_<sitecode> account from being created in the
	domain, and prevents communications between the primary SMS site server and the
	secondary site from being established.
	
	The secondary site server must have TCP/IP or IPX communication to the domain
	primary domain controller for a successful site installation.
	
	CAUSE
	=====
	
	During the installation of the SMS 2.0 secondary site the following error
	message may be listed in the SMSsetup.log file:
	
	  06-21-1999 15:45:36 Starting evaluation process.
	  06-21-1999 15:45:36 Enough free disk space.
	  06-21-1999 15:45:51 Cannot find any PDC for domain XXXX, Win32 return = 2453
	  06-21-1999 15:45:51 The domain and PDC checked out OK.
	
	The following message may be listed later in the log:
	
	  06-21-1999 16:11:07 Cannot create server account SMSServer_4XX in domain
	  XXXX.
	
	Because the server that is being used for the secondary site cannot communicate
	with the primary domain controller of the master domain, the
	SMSServer_<sitecode> account cannot be created. This account is used for
	communication between the primary site server and the secondary site.
	
	RESOLUTION
	==========
	
	To resolve this issue, create a routed path for the secondary site server to be
	able to communicate via TCP/IP to the primary site server. Once the secondary
	site server can ping the primary site server by name, a new installation of the
	secondary site is completed, the account is created, and the site becomes
	active.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
