---
layout: page
title: "Q190286: SMS: &quot;Couldn't Connect to SQL Server&quot; Error Reusing Login IDs"
permalink: /kb/190/Q190286/
---

## Q190286: SMS: &quot;Couldn't Connect to SQL Server&quot; Error Reusing Login IDs

	Article: Q190286
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to start the Systems Management Server Administrator program you
	may receive the following error message:
	
	  Couldn't connect to SQL Server. The server may be down or configured
	  incorrectly.
	
	This problem is independent of the version of SQL Server being used, and it can
	occur with all types of SQL Server security: standard, integrated, or mixed.
	
	CAUSE
	=====
	
	This error can occur when using a SQL Server login ID that had previously been
	deleted. The newly re-created login ID is being used to access the SMS database.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Systems Management Server Security Manager
	to remove permissions to this account and then add them back in.
	
	MORE INFORMATION
	================
	
	When deleting the original SQL Server login ID from the SQL Server, you can
	avoid this problem of reusing it later by also running the following SQL query
	to delete the ID from the SMS database, where <SQL_Login> is the SQL
	Server login ID that you want to remove:
	
	     use SMS
	     delete from SecurityObjAccessList where username = '<SQL_login>'
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
