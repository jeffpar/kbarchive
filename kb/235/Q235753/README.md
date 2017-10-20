---
layout: page
title: "Q235753: SMS: Specifying &#92;&#92;servername Send Address May Cause Failure"
permalink: /kb/235/Q235753/
---

## Q235753: SMS: Specifying &#92;&#92;servername Send Address May Cause Failure

{% raw %}

	Article: Q235753
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you specify a servername prefixed by "\\", and the sender tries to connect to
	the computer using \\\\servername, the connection may fail. Specify the server
	name without the two backslashes in front for the Sender address box.
	
	CAUSE
	=====
	
	Sender prepends "\\" to the server name specified in the Sender address. The
	sender log displays the following information:
	
	     Created sending thread (Thread ID = 205)
	     Trying the No. 1 address (out of 1)
	     Error during WNetAddConnection2 to \\\\DSSMS\SMS_SITE (67).
	     No (more) send requests found to process.
	     There is no existing connection, Win32 error = 0
	     Operation is retryable.
	
	     Cannot connect to server \\DSSMS at remote site MS1, won't try send    
	     requests going to site MS1 for an hour or until there are no active      
	     send requests. 
	
	     Could not establish connection.
	     Attempt to connect failed.
	     There is no existing connection, Win32 error = 0
	     No need to disconnect
	     Restart time = 03/17/99 10:47:16 Eastern Standard Time
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	This has been fixed in Systems Management Server 2.0 Service Pack 1. Even if
	\\servername is specified in the Sender address box, Lan Sender parses the name
	correctly.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
