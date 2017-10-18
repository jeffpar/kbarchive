---
layout: page
title: "Q272937: SMS: Administrator Console Does Not Connect to Windows NT 4.0 Si"
permalink: kb/272/Q272937/
---

## Q272937: SMS: Administrator Console Does Not Connect to Windows NT 4.0 Si

	Article: Q272937
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbConfig kbMMC kbRemote kbServer kbWBEM kbsms200 kbsms200bug kbsmsAdm
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Systems Management Server (SMS) 2.0 Administrator console that is
	running on a Windows 2000-based computer, you may be unable to connect to a
	remote SMS 2.0 site server that is running on a Windows NT 4.0-based computer.
	
	Other Administrator consoles that are running on remote Windows NT 4.0-based
	computers can connect properly to the same site server.
	
	If Wbemtest.exe is used from the same Windows 2000-based computer to the Windows
	NT 4.0 SMS site server, a remote procedure call (RPC) connection failure message
	is displayed.
	
	CAUSE
	=====
	
	This behavior occurs because of a mismatch in the negotiated protocols. The
	default protocol for Distributed COM communications for Windows 2000 is
	Connection Oriented TCP/IP, whereas the default protocol for Distributed COM
	communications for Windows NT 4.0 is the Datagram UDP/IP.
	
	WORKAROUND
	==========
	
	To work around this behavior, change the display order for protocols on the
	Windows NT 4.0 SMS site Server by using the Dcomcnfg.exe tool:
	
	- On the SMS site server, click Start, and then click Run.
	
	- Type "dcomcnfg.exe" (without the quotation marks), and then click OK.
	
	- On the Default Protocols tab, move Connection Oriented TCP/IP to the top of
	  the list.
	
	- Restart the SMS site server to make the change effective.
	
	Remote computers that are running Windows 2000 should now be able to connect to
	the SMS site server through the SMS Administrator console.
	
	MORE INFORMATION
	================
	
	If any of the remote Windows NT 4.0 workstations with the SMS 2.0 Administrator
	console are affected by this change on the Windows NT 4.0 SMS site server, you
	may want to consider ensuring that Distributed COM (DCOM) is able to negotiate a
	common protocol datagram. You can do this by moving the Connection Oriented
	TCP/IP protocol to the top of the list in the Protocols tab of the Dcomcnfg.exe
	tools on each of the remote Windows NT 4.0-based computers.
	
	Additional query words: prodsms MMC console dcom connection failed
	
	======================================================================
	Keywords          : kbinterop kbsetup kbConfig kbMMC kbRemote kbServer kbWBEM kbsms200 kbsms200bug kbsmsAdmin kbsms200preSP3 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
