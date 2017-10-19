---
layout: page
title: "Q191958: SMS: SMS_Site_Config_Manager Appears to Stop Responding"
permalink: /kb/191/Q191958/
---

## Q191958: SMS: SMS_Site_Config_Manager Appears to Stop Responding

	Article: Q191958
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server site server, the site properties are not being
	updated. There is at least one .ct1 file in the Sms\Site.srv\Sitecfg.box
	directory waiting to be processed.
	
	The SMS_Site_Config_Manager service appears to stop responding, because the
	Scman.log file is not being updated. However, when you stop the service for the
	SMS_Site_Config_Manager service, an entry in the Scman.log shows "~Service is
	stopping". Therefore, you can tell that the service has not actually stopped
	responding; rather, it is waiting on a pending operation that is never
	completed.
	
	NOTE: The Logon Server files are not updated if the registry of the logon server
	is full.
	
	WORKAROUND
	==========
	
	Upon restarting the SMS_Site_Config_Manager service and monitoring the
	Scman.log, you will notice it processing until it reaches the same point. Make
	note of the Systems Management Server logon server that was being last
	processed.
	
	When you know the logon server, try to remote control it, or manually go to it.
	If a message appears on the screen that mentions "{Low on Registry Quota}", you
	may be experiencing the symptoms outlined in the following article in the
	Microsoft Knowledge Base:
	
	  Q176083 System Is Running Low on Registry Quota
	
	After adjusting the size of the registry and restarting that server,
	SMS_Site_Config_Manager is able to process that server successfully.
	
	Additional query words: prodsms hang hangs hung
	
	======================================================================
	Keywords          : kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
