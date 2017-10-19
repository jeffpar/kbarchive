---
layout: page
title: "Q269775: SMS: WINNT 4 .0 Clients Can't Run SMS From NetWare Logon Servers"
permalink: /kb/269/Q269775/
---

## Q269775: SMS: WINNT 4 .0 Clients Can't Run SMS From NetWare Logon Servers

	Article: Q269775
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbConfig kbServer kbsms120 kbBindery kbNDS kbOSNovell
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT clients executing RUNSMS or SMSLS from a NetWare logon
	server fail with the following error message:
	
	  Unable to connect to server
	
	CAUSE
	=====
	
	This behavior occurs because Microsoft Systems Management Server does not
	support the configuration described in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	In Windows NT 3.51 Service Pack 2 or later, clients are supported only by
	running SMSLS or RUNSMS from Windows NT logon servers. A list of supported
	clients and logon server combinations is documented in the SMS 1.2 Getting
	Started guide, Appendix B.
	
	MORE INFORMATION
	================
	
	Support Limitations
	-------------------
	
	Microsoft did not design Systems Management Server 1.<x> to function in a
	NetWare Directory Services (NDS) environment. No support is available for
	Program Group Control with an NDS logon. No support is available for Microsoft
	Windows NT or IBM OS/2 as a Netware client. NetWare clients that connect to
	NetWare servers through a protocol other than IPX are also not supported.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbConfig kbServer kbsms120 kbBindery kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	
