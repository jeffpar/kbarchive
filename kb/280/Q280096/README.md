---
layout: page
title: "Q280096: XCCC: Unable to Connect to Exchange Server By Using POP3"
permalink: kb/280/Q280096/
---

## Q280096: XCCC: Unable to Connect to Exchange Server By Using POP3

	Article: Q280096
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to Exchange Server by using Post Office Protocol 3
	(POP3), you may be prompted for logon credentials numerous times, and you may
	not be able to log on successfully.
	
	CAUSE
	=====
	
	This issue can occur if you have installed the Norton Anti-Virus 2000 program on
	the computer and the Popproxy.exe service is running.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable or remove Popproxy.exe.
	
	MORE INFORMATION
	================
	
	If you connect to port 110 by using telnet, you receive the following banner:
	
	  18:33:22 POP3: 18:33:23 [rx] +OK POP3 server ready
	
	  POP3: 18:33:23 [tx]
	
	However, this banner is not the Exchange Server POP3 banner.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Component         : POP3
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
