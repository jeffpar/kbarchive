---
layout: page
title: "Q225542: SMS: Logon Points Are Not Being Configured"
permalink: /kb/225/Q225542/
---

## Q225542: SMS: Logon Points Are Not Being Configured

	Article: Q225542
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbsms200
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable "Windows networking logon discovery" or "Windows networking
	logon client installation" for a domain, Systems Management Server attempts to
	configure all domain controllers for a given domain as Systems Management Server
	logon points. If the primary domain controller (PDC) for the domain does not
	meet the minimum requirements to perform the logon point role, no additional
	logon points are installed for that domain.
	
	MORE INFORMATION
	================
	
	To configure a domain controller as a logon point, the server must have an NTFS
	partition with at least 50 megabytes (MB) of disk space available. To determine
	if your site is experiencing this issue, look at the log file for
	SMS_NT_LOGON_SERVER_MANAGER (NT_Logon.log) as logon points for the following
	entries:
	
	  Thread C7 has terminated exit code=0  	SMS_NT_LOGON_SERVER_MANAGER	4/7/99 11:20:15 AM	330 (0x14A)	
	  Free space for \\PDC01\C$\ is 564 meg  	SMS_NT_LOGON_SERVER_MANAGER	4/7/99 11:20:15 AM	330 (0x14A)	
	  Share C$ has 564 MB free, and does not support file and dir permissions  	SMS_NT_LOGON_SERVER_MANAGER	4/7/99 11:20:15 AM	330 (0x14A)	
	  Unable to determine best volume  	SMS_NT_LOGON_SERVER_MANAGER	4/7/99 11:20:15 AM	330 (0x14A)	
	
	When you review the Status Messages there are no messages indicating failure,
	instead you see the following message that indicates the process cycle completed
	successfully:
	
	  SMS NT Logon Server Manager successfully completed a processing cycle for domain "<domain name>;".
	
	For additional information about how to enable logging, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q214969 SMS: Server Component Logging Is Turned Off by Default
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
