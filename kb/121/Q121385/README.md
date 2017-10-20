---
layout: page
title: "Q121385: SMS Program Group Controller and AutoDisconnect"
permalink: /kb/121/Q121385/
---

## Q121385: SMS Program Group Controller and AutoDisconnect

{% raw %}

	Article: Q121385
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT and LAN Manager servers default to 15 minutes of idle time per
	connection before marking the connection as available for AutoDisconnect. This
	behavior is intended to keep system resources available, and assumes that
	clients will transparently reconnect when the client application accesses the
	server. Sometimes this AutoDisconnect behavior can cause strange application
	problems such as segment load failures or "drive not ready" errors.
	
	When the Systems Management Server Program Group Controller (PGC) invokes
	APPSTART to execute a shared application off a server, it opens the executable
	file in read-only mode and keeps it open until the user exits the application
	and PGC detects that the connection needs cleaned up.
	
	MORE INFORMATION
	================
	
	This became a critical issue for shared applications under Systems Management
	Server and this technique eliminates the need to disable AutoDisconnect for the
	server, and lets PGC manage the connection. The Windows NT Server component
	correctly maintains the connection for clients running an application through
	PGC and APPSTART over all supported protocols.
	
	If problems occur:
	
	- Disable AutoDisconnect and run the application as usual from PGC.
	
	-or-
	
	- Run the application from the server, bypassing PGC controls (through File
	  Manager).
	
	If these steps fail to pinpoint the issue, the application may not be
	network-aware and you should contact the vendor of the application.
	
	
	Additional query words: directhosting sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
