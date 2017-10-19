---
layout: page
title: "Q263214: Executive Status Err Msg on Shutdown w/ Windows 2000 Server"
permalink: /kb/263/Q263214/
---

## Q263214: Executive Status Err Msg on Shutdown w/ Windows 2000 Server

	Article: Q263214
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbStatSum
	Last Modified: 10-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Systems Management Server (SMS) version 2.0 Service Pack 2 site
	server is installed on a server running Windows 2000 Server, a number of error
	messages may be recorded for the SMS_Executive component of the site server at
	shutdown.
	
	When this occurs, status message 579 is recorded for the SMS_Executive component
	when you view the system status for your site code:
	
	  Could not write registry key
	  "HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components
	  \SMS_EXECUTIVE\Threads\SMS_STATUS_MANAGER" on computer "site server". The
	  operating system reported error 1723: The RPC server is too busy to complete
	  this operation.
	
	After the server restarts, the status summarizer displays warning messages and
	the SMS_Executive component has a critical status. If logging is enabled for
	SMS_Executive, the errors are also recorded in the Smsexe.log file.
	
	
	WORKAROUND
	==========
	
	To can work around this behavior and stop these error messages, stop the
	SMS_Executive service before you shut down the server running Windows 2000
	Server.
	
	You can use the following commands to stop SMS_Executive:
	
	  "NET STOP SMS_SITE_COMPONENT_MANAGER
	  NET STOP SMS_EXECUTIVE"
	
	You can automate this workaround if you use a shutdown script on the server
	running Windows 2000 Server that functions as a SMS 2.0 site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbStatSum 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
