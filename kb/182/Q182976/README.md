---
layout: page
title: "Q182976: Remote Access Server Service Does Not Start Automatically"
permalink: kb/182/Q182976/
---

## Q182976: Remote Access Server Service Does Not Start Automatically

	Article: Q182976
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Remote Access Service (RAS) to receive calls by enabling the
	Receive Calls option in Network properties, the RAS Server service may not start
	automatically. When you view the server status in the Remote Access Admin tool,
	"Remote Access Services is not started on the selected server" may be displayed.
	
	CAUSE
	=====
	
	This behavior occurs because the RAS Server service does not start automatically
	when you configure RAS to receive calls.
	
	RESOLUTION
	==========
	
	To configure the RAS Server service to start automatically when you log on to
	Windows NT, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Services.
	
	3. In the list of services, click Remote Access Server, and then click Startup.
	
	4. Click Automatic, click OK, and then click Close.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To manually start the RAS Server service, click Start Remote Access Service on
	the Server menu in the Remote Access Admin tool.
	
	NOTE: This does not set the RAS Server service to start automatically when you
	log on to Windows NT.
	
	RAS is a Telephony application programming interface (TAPI)-aware program. When
	you configure the RAS Server service to start automatically, all incoming calls
	are routed to the RAS service. This prevents other modem programs from detecting
	incoming calls.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
