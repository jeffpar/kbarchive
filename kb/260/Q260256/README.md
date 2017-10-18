---
layout: page
title: "Q260256: Java Plug-in Leaves Browser Processes and NTVDMs Running"
permalink: kb/260/Q260256/
---

## Q260256: Java Plug-in Leaves Browser Processes and NTVDMs Running

	Article: Q260256
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty msient
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs such as Netscape Navigator, Microsoft Internet Explorer 5, and
	RealPlayer, as well as 16-bit programs running NT Virtual DOS Machine (NTVDM),
	may continue to use process resources after you close the programs. You must
	then use Task Manager to quit the process; otherwise, the operating system
	memory eventually runs out of resources and you need to restart the computer.
	
	CAUSE
	=====
	
	This behavior can occur because Java Plug-in version 1.2.1 leaves orphaned
	browser processes open after the browser is closed. This behavior does not seem
	to occur when you browse Web sites or applets that do not use the Java plug-in.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install Java Plug-in 1.2.2 from the
	following Web site:
	
	  http:java.sun.com
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty msient 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : :4.0,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
