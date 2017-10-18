---
layout: page
title: "Q188045: SMS: Smsls.ini Fails If Used in a Domain with Multiple Sites"
permalink: kb/188/Q188045/
---

## Q188045: SMS: Smsls.ini Fails If Used in a Domain with Multiple Sites

	Article: Q188045
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Smsls.ini file can be used to map clients to specific sites in a Systems
	Management Server hierarchy. This may fail when using Smsls.ini within a domain
	that contains more than one site. For example, a primary site resides in a
	resource domain. A secondary site is then created in the same domain. The
	Smsls.ini file is created and modified to map the clients from the primary site
	to the new secondary site. The clients are not moved to the secondary site.
	
	CAUSE
	=====
	
	During the client login process, the Setlsxx.exe program is called. SETLS is
	coded to determine whether it needs to check the Smsls.ini file or depend on the
	Sms.ini file. This code compares the Sms.ini domain, filename, and time against
	the current domain, filename, and time. If they match, then only the Sms.ini
	file is used.
	
	WORKAROUND
	==========
	
	Instead of using Smsls.ini, use a batch file that maps a drive to the SMS_SHR
	share of a server belonging to the new site. This batch file can then execute
	Runsms.bat from that server. This will result in the client reporting to the new
	site.
	
	For existing clients, the "Invalid Site/Domain combination" message may be
	displayed. This will occur for three login attempts before the client is added
	to the new site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
