---
layout: page
title: "Q262298: SMS: CCM Tries to Install Client on SAMBA Servers"
permalink: /kb/262/Q262298/
---

## Q262298: SMS: CCM Tries to Install Client on SAMBA Servers

	Article: Q262298
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 24-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Systems Management Server (SMS) 2.0 Network Discovery and the Microsoft
	Windows NT Remote Client Installation method enabled, the following information
	may be recorded in the Client Configuration Manager (CCM) log file (Ccm.log)
	when a SAMBA server is discovered (if logging is enabled on the site server).
	
	Note that "SPARC" is the name of the SAMBA server in the following sample log
	file:
	
	  Received request: "01MOLQGI" for machine name: "SPARC" on queue: "Incoming".
	  SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:00 PM 227 (0xE3)
	  Stored request "01MOLQGI", machine name "SPARC", in queue "Processing".
	  SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:00 PM 227 (0xE3)
	  ----- Started a new CCR processing thread. Thread ID is 0x114. There are now 1
	  processing threads SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02 PM 227 (0xE3)
	  Submitted request successfully SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02 PM
	  227 (0xE3)
	  Getting a new request from queue "Incoming" after 100 millisecond delay.
	  SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02 PM 227 (0xE3)
	  Waiting for change in directory "D:\SMS\inboxes\ccr.box" for queue "Incoming",
	  (30 minute backup timeout). SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02 PM 227
	  (0xE3)
	  ======>Begin Processing request: "01MOLQGI", machine name: "SPARC"
	  SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02 PM 276 (0x114)
	  ---> Trying all accounts in turn SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02
	  PM 276 (0x114)
	  ---> Attempting to connect to administrative share '\\SPARC\admin$' using
	  account 'HAMPTON\SMSService' SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:02 PM 276
	  (0x114)
	  ---> Failed to connect to \\SPARC\admin$ using account HAMPTON\SMSService
	  (67) SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:06 PM 276 (0x114)
	  ---> Attempting to connect to administrative share '\\SPARC\admin$' using
	  account 'HAMPTON\SMSService' SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:08 PM 276
	  (0x114)
	  ---> Failed to connect to \\SPARC\admin$ using account HAMPTON\SMSService
	  (67) SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:08 PM 276 (0x114)
	  ---> Attempting to connect to administrative share '\\SPARC\admin$' using
	  account 'HAMPTON\SMSService' SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:08 PM 276
	  (0x114)
	  ---> Failed to connect to \\SPARC\admin$ using account HAMPTON\SMSService
	  (67) SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:08 PM 276 (0x114)
	  ..........
	  ---> ERROR: The account '' does not have administrative rights on machine
	  "SPARC". SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:08 PM 276 (0x114)
	  ---> ERROR: Unable to access target machine for request: "01MOLQGI",
	  machine name: "SPARC", error code: 67 SMS_CLIENT_CONFIG_MANAGER 9/20/99
	  5:24:08 PM 276 (0x114)
	  Stored request "01MOLQGI", machine name "SPARC", in queue "Retry".
	  SMS_CLIENT_CONFIG_MANAGER 9/20/99 5:24:09 PM 276 (0x114)
	
	CAUSE
	=====
	
	The Data Discovery Record (DDR) that is generated for the SAMBA server (that is
	emulating a Windows NT-based server) may indicate that it is discovered as a
	Windows NT-based computer. Consequently, a Client Configuration Request (CCR)
	may be generated to install the SMS client.
	
	CCM may then attempt to install the SMS client on the SAMBA server, not succeed,
	and go into a retry mode. For each unsuccessful attempt, an error status message
	is recorded for the CCM component in addition to the log entries listed above.
	
	WORKAROUND
	==========
	
	To work around this behavior, use the ExcludeServers registry entry on the site
	server and add the name of the SAMBA server. No CCR is then generated to install
	the SMS client on that server.
	
	For additional information about the ExcludeServers registry entry, see the
	following article in the Microsoft Knowledge Base:
	
	  Q207729 Excluding Computers from Windows NT Remote Client Install
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
