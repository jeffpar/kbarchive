---
layout: page
title: "Q183127: 5250 Applet Remains Minimized or Maximized"
permalink: /kb/183/Q183127/
---

## Q183127: 5250 Applet Remains Minimized or Maximized

	Article: Q183127
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 5250 applet that ships with SNA Server, the window may appear
	to remain minimized or maximized. The window is in a state that does not allow
	it to be resized by the user.
	
	CAUSE
	=====
	
	The window settings are being saved to the Win5250.ini file as negative values
	when the applet is closed with the window in a minimized or maximized position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	This problem does not occur in the retail version of SNA Server version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
