---
layout: page
title: "Q210842: Err Msg: HTTP/1.1 New Application Failed"
permalink: /kb/210/Q210842/
---

## Q210842: Err Msg: HTTP/1.1 New Application Failed

	Article: Q210842
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you hit the Internet Information Server (IIS) 4.0 Default Web Site (.asp
	page), the following error message may occur:
	
	  HTTP/1.1 New Application Failed
	
	CAUSE
	=====
	
	The IUSR account is a domain account and is not being authenticated correctly
	against a domain controller.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Open the properties of the Default Web Site and choose Directory Security.
	
	2. Click the Edit button for Authentication.
	
	3. Click the Edit button for Anonymous and edit the account listed to read
	  "Domain-name\Anonymous."
	
	4. Disable Password Synchronization.
	
	5. Manually shut down the MMC to ensure proper writing to the metabase.
	
	6. Go to a command prompt and issue "net stop iisadmin /y."
	
	7. At the command prompt, issue "net start w3svc."
	
	8. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
