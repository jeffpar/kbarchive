---
layout: page
title: "Q193811: SNA Manager Does Not Show Local Domain Window"
permalink: /kb/193/Q193811/
---

## Q193811: SNA Manager Does Not Show Local Domain Window

	Article: Q193811
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the local domain window is closed in SNA Manager, and another subdomain is
	opened, then closed, closing and reloading the SNA Manager may result in the
	local domain window displaying a blank screen.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Load SNA Manager displaying local domain window.
	
	2. Close local domain window.
	
	3. Open another SNA subdomain, then close it after about 5 seconds (while it
	  still displays "Looking for..." on the status bar).
	
	4. Close SNA Manager.
	
	5. Load SNA Manager again. This time the local domain window is blank.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 SP1. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	Stop, and then restart the Snabase service on the system where SNA Manager is
	running.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : WINDOWS:4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
