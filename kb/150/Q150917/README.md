---
layout: page
title: "Q150917: ODI Client Hangs on Client Setup"
permalink: kb/150/Q150917/
---

## Q150917: ODI Client Hangs on Client Setup

	Article: Q150917
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The NetWare ODI SMS client stops responding on install. If the client is run in
	verbose mode (CLI_DOS /V), the client will stop at:
	
	   Setup Phase
	  SMS Network Type=6
	 ...
	  <<READING CONFIGURATION INFORMATION>>
	 ...
	  Novell
	  NetBios
	  NovellInfo
	
	
	CAUSE
	=====
	
	Interrupt 7a is disabled in the Net.cfg. By default INT7a is on, which allows
	applications to use interrupt 7Ah to access IPX services and to maintain
	compatibility with Netware v2.0a.
	
	Invdos.exe requires INT7a to be on.
	
	RESOLUTION
	==========
	
	Remove the following line from the client's Net.cfg file:
	
	  INT7a OFF
	
	Without that line, INT7a is set to ON.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
