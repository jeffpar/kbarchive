---
layout: page
title: "Q157327: Windows NT May Hang Using SNA Server 2.11 SP1 w/Digi Sync SDLC"
permalink: /kb/157/Q157327/
---

## Q157327: Windows NT May Hang Using SNA Server 2.11 SP1 w/Digi Sync SDLC

{% raw %}

	Article: Q157327
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the new Digi Sync SDLC driver included with SNA Server 2.11 Service
	Pack 1, the Microsoft Windows NT computer may hang (for example, mouse and
	keyboard input has no effect) after the SDLC connection stays pending, if a
	misconfigured modem or bad cable (either V.35 or RS-232, as appropriate) are
	being used.
	
	NOTE: The Digi Sync SDLC adapter supports either a V.35 or RS-232 interface. This
	problem has been observed with either interface.
	
	
	CAUSE
	=====
	
	The problem is being investigated by Digi Corporation.
	
	
	RESOLUTION
	==========
	
	To resolve the problem, the SDLC cable and modem should be checked for possible
	misconfiguration. All reported cases of hang problems were due to either a
	improper synchronous modem cable or misconfigured modem (for example, a modem
	not configured for SDLC or synchronous operation).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.11
	Service Pack 1. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
