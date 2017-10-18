---
layout: page
title: "Q151221: How Remote Control Registers with WINS Server"
permalink: kb/151/Q151221/
---

## Q151221: How Remote Control Registers with WINS Server

	Article: Q151221
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbusage smsgeneral smsremoteshoot kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote Control may not seem to work over TCP/IP if the WINS server that the
	client is reporting to is different than the WINS server that the
	administrator's tool is using. This is due to the fact that the Remote Control
	client does not register with the WINS server at boot but rather when Wuser.exe
	is run.
	
	MORE INFORMATION
	================
	
	When the client is booted Usertsr.exe is loaded; however, the client does not
	register the <43h> name to the WINS server at that time. Instead Wuser.exe
	is relied upon to register with the WINS server. Because the client does not
	report to WINS until Wuser.exe is loaded, the SMS administrator's utility may
	not work until WINS replication has taken place if the client reports to a
	different WINS server than the one the SMS administrator's utility is using.
	
	Also, when Wuser.exe is stopped, it sends a release request to the WINS database
	that removes the <43h> entry.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbusage smsgeneral smsremoteshoot kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
