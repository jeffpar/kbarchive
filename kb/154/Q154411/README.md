---
layout: page
title: "Q154411: SMS Err Msg: Unable to Initialize IPX Protocol"
permalink: /kb/154/Q154411/
---

## Q154411: SMS Err Msg: Unable to Initialize IPX Protocol

{% raw %}

	Article: Q154411
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run the Remote Control Agent on a Windows 95 client computer
	using NetWare 3.1x or NetWare 4.x as the primary logon network and the Windows
	95 Microsoft Client for NetWare Networks driver, you may receive the following
	error message:
	
	  Unable to initialize IPX protocol
	
	CAUSE
	=====
	
	Systems Management Server 1.2 creates a Domain.ini file on the NetWare logon
	servers. The Domain.ini file includes the following section:
	
	  [SIGHT]
	  Allow Takeover=No
	  Allow Reboot=No
	  Allow File Transfer=No
	  Allow Chat=No
	  Allow Remote Execute=No
	  Visible Signal=Yes
	  Audible Signal=Yes
	  Allow Ping Test=No
	  Allow DOS Diagnostics=No
	  Allow Windows Diagnostics=No
	  Permission Required=Yes
	  Default Protocol=IPX
	  LANANUM=0
	  InstallWin16RCTsr=1
	
	The Domain.ini file is used to create the Sms.ini file on the client computer.
	The Remote Control Agent configuration is stored in the [SIGHT] section of the
	Sms.ini file. The default protocol for a NetWare client is configured to be IPX.
	The Microsoft IPX/SPX-compatible protocol for Windows 95 clients is NWLINK$.
	When the Remote Control Agent starts, it attempts to use IPX instead of NWLINK$,
	which generates the error message.
	
	WORKAROUND
	==========
	
	To work around this behavior do one of the following:
	
	- Use the NetWare network drivers for Windows 95.
	
	-or-
	
	- Install TCP/IP on the Windows 95 clients. Change the default protocol for
	  remote control to TCP/IP in the Systems Management Server registry. Changing
	  the default remote control protocol for Windows clients is documented in the
	  Systems Management Server 1.2 "Administrator's Guide" on pages 168-170.
	
	STATUS
	======
	
	This behavior is by product design.
	
	Additional query words: prodsms win95 remote
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
