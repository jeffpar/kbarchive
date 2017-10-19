---
layout: page
title: "Q236318: Server Connection Account Created in Same Domain as Site Server"
permalink: /kb/236/Q236318/
---

## Q236318: Server Connection Account Created in Same Domain as Site Server

	Article: Q236318
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbServer kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0 Service Pack 1, the Server Connection account
	is created in the same domain where the Site Server resides. This account has
	the name SMSServer_<site code> and is used to connect from Remote Site
	Systems to the Site Server.
	
	In Systems Management Server 2.0 (the final released version), this account was
	created in the same domain where the Service Account was created for the Site.
	
	If a Systems Management Server 2.0 (the final released version) Site is upgraded
	to Service Pack 1, the Server Connection account location is unchanged and will
	remain in the same domain where the Service Account was created for the Site.
	
	MORE INFORMATION
	================
	
	In a Master Domain Model where the Systems Management Server 2.0 Site Server
	resides in a Resource Domain and the Service Account is created in the Master
	Accounts Domain, the following behavior is observed in the following scenarios:
	
	A New Systems Management Server 2.0 Service Pack 1 Installation Is Performed
	----------------------------------------------------------------------------
	
	The Server connection account will be created in the same domain as the Site
	Server. In this example, the account will be created in the Resource Domain.
	
	An Upgrade Is Performed on a Current Systems Management Server 2.0 (the final released version) Site
	----------------------------------------------------------------------------------------------------
	
	The Server connection account will remain in the same domain as the Service
	Account. In this example, the account will remain in the Master Accounts
	Domain.
	
	There will be no changes to the location of the Server connection account between
	versions of Systems Management Server 2.0 when in a single domain model.
	
	Additional query words: prodsms smsserver_xxx
	
	======================================================================
	Keywords          : kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
