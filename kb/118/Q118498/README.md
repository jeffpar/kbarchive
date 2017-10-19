---
layout: page
title: "Q118498: Session Error 2574 in 3270 Applet"
permalink: /kb/118/Q118498/
---

## Q118498: Session Error 2574 in 3270 Applet

	Article: Q118498
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server applet generates a Session Error 2574 when you attempt to
	establish a connection with an SNA Server.
	
	CAUSE
	=====
	
	This error may occur if the 3270 applet is trying to connect to an LU Pool that
	is defined on the SNA Server and that LU Pool doesn't have any LUs assigned to
	it. If you start SNA Server Admin and put the focus on the LU Pools windows, a
	"No Assigned LUs" message may be in the right side of the window.
	
	RESOLUTION
	==========
	
	To correct this error, add LUs to the LU Pool that the 3270 Applet is trying to
	establish a connection to. Also, changing an LU Pool definition requires that
	all affected SNA Servers be restarted to pick up the configuration change. In
	SNA Server Admin, all affected servers will appear as "Active [Out of Date]" to
	indicate that the server needs to be restarted for the configuration change to
	take effect.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbprb
	
	=============================================================================
	
