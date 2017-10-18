---
layout: page
title: "Q180361: &quot;Failure to Initialize Modem Session&quot; When Restarting External"
permalink: kb/180/Q180361/
---

## Q180361: &quot;Failure to Initialize Modem Session&quot; When Restarting External

	Article: Q180361
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running an async instance of External as a service on Windows NT
	4.0, stopping the service does not release the referenced modem. Subsequent
	attempts to restart the service result in "Failure to Initialize Modem Session"
	error messages in the Session.log file. ECHO to the modem's COM port fails as
	well. The computer must be restarted in order for the modem to be used again.
	
	CAUSE
	=====
	
	Xtsrv32.exe does not recognize the escape code that Windows NT 4.0 passes when
	the service is stopped. So, even though the service is stopped, External is left
	running.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Restart the computer and monitor the instance from Microsoft Mail Service
	  Manager.
	
	2. Press the ESCAPE key and "Y" (without the quotation marks) to exit. This
	  releases the modem properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks,
	version 3.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
