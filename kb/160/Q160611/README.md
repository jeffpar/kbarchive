---
layout: page
title: "Q160611: SMS: AppleTalk Session Protocol Parameter Error with PCMMAC"
permalink: /kb/160/Q160611/
---

## Q160611: SMS: AppleTalk Session Protocol Parameter Error with PCMMAC

{% raw %}

	Article: Q160611
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Macintosh clients running the Microsoft Systems Management Server Package
	Command Manager (PCMMAC) may repeatedly receive the following error message:
	
	  AspParamErr AppleTalk Session Protocol parameter error. Package Command
	  Manager is unable to connect to any servers. Package Command Manager will
	  check periodically to see if it can connect.
	
	CAUSE
	=====
	
	This error occurs repeatedly because PCMMAC constantly checks the connection to
	the Systems Management Server logon server with Appletalk "tickle" packets. If
	the logon server fails to respond to these "tickle" packets, the error message
	is generated, indicating that the server is no longer available. PCMMAC checks
	the connection to the logon server regardless of the polling interval set in
	PCMMAC. The constant checks occur because there is a single connection made to
	the logon server; however, the PCMMAC polling interval only specifies how often
	PCMMAC checks for a new package using the existing connection.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but is not fully regression-
	tested and should be applied only to systems experiencing this specific problem.
	Unless you are severely impacted by this specific problem, Microsoft recommends
	that you wait for the next Service Pack that contains this fix. Contact
	Microsoft Technical Support for more information.
	
	Additional query words: 1.20 err errmsg mac
	
	======================================================================
	Keywords          : kb3rdparty kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
