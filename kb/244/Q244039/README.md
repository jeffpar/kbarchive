---
layout: page
title: "Q244039: 3270 Applet Does Not Support Multiple Connected Sessions"
permalink: /kb/244/Q244039/
---

## Q244039: 3270 Applet Does Not Support Multiple Connected Sessions

{% raw %}

	Article: Q244039
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,3.0 U.S. SP1,3.0 U.S. SP2,4.0,4.0 SP1,4.0 S
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 3.0 U.S. SP1, 3.0 U.S. SP2, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 3270 Applet does not support multiple connections to the SNA Server computer
	to gain access to the mainframe on the same workstation.
	
	WORKAROUND
	==========
	
	Another 3270 emulator that supports the Microsoft SNA Server connection (3270
	SNA Server Client) must be used to support multiple instances connecting to the
	mainframe.
	
	MORE INFORMATION
	================
	
	The 3270 Applet supports mainframe multi-session managers such as TPX and
	Supersession because they are host initiated and controlled multi-sessions.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,3.0 U.S. SP1,3.0 U.S. SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
