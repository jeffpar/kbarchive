---
layout: page
title: "Q169558: SMS Database Manager Ignores Named Pipe Definition"
permalink: kb/169/Q169558/
---

## Q169558: SMS Database Manager Ignores Named Pipe Definition

	Article: Q169558
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SQL Server is configured to listen on a named pipe other than its default,
	the Systems Management Server Database Manager (DBCLEAN) will not be able to
	establish a connection, even when the named pipe definition in the registry is
	updated on the Systems Management Server site server. You may encounter this
	problem if two versions of SQL Server are installed on the server. (This is a
	supported configuration under SQL Server.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: prodsms prodsql
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
