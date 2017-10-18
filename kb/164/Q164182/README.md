---
layout: page
title: "Q164182: Index Server: Error: 0x2AF9 Occurred While Running Webhits.exe"
permalink: kb/164/Q164182/
---

## Q164182: Index Server: Error: 0x2AF9 Occurred While Running Webhits.exe

	Article: Q164182
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a virtual server, you may get the following error message when
	you click the Show Highlights hyperlink:
	
	  Error: 0x2AF9 Occurred while running webhits.exe
	
	CAUSE
	=====
	
	When Webhits.exe is called, it searches for the /Scripts subdirectory by
	default. If a global /Scripts directory (a virtual directory without an
	associated IP address) exists, Webhits.exe cannot use it to pull up the
	information.
	
	WORKAROUND
	==========
	
	Create another /Scripts virtual directory for the virtual server with the same
	IP address. Point this /Scripts directory to the same physical location as the
	global /Scripts directory.
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINNT: 1.1
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
