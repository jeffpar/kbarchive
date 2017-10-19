---
layout: page
title: "Q201858: SMS: IP Address Cannot Be Used as SQL Server Name During Setup"
permalink: /kb/201/Q201858/
---

## Q201858: SMS: IP Address Cannot Be Used as SQL Server Name During Setup

	Article: Q201858
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Systems Management Server 2.0 on the same computer as Microsoft
	SQL Server, typing the IP address of that computer into the SQL Server Name
	field in Systems Management Server setup causes an error.
	
	CAUSE
	=====
	
	If you type an IP address instead of a server name in the SQL Server Name field,
	Systems Management Server setup considers the SQL Server to be remote, even if
	it is the local computer, and returns an error message indicating that the
	database devices must be created manually.
	
	
	WORKAROUND
	==========
	
	Make sure you use the server name (not the IP address) in the SQL Server name
	field during Systems Management Server setup.
	
	Additional query words: prodsms sms20 setup smssetup
	
	======================================================================
	Keywords          : kbsetup kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
