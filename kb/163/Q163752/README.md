---
layout: page
title: "Q163752: SNA Server Manager Starts Minimized"
permalink: /kb/163/Q163752/
---

## Q163752: SNA Server Manager Starts Minimized

	Article: Q163752
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft SNA Server Manager starts in a minimized state in the following
	scenarios:
	
	- Manager is minimized on the Windows NT 4.0 Task Bar and cannot be restored,
	  sized, or maximized.
	
	- Manager is shown as a title bar somewhere on the desktop. It can be resized
	  by dragging one of the edges of the minimized window.
	
	- Toolbar and menu bar are missing although the SNA Subdomain is still listed
	  in the title.
	
	
	CAUSE
	=====
	
	SNA Server Manager can get into this minimized state if it is started after one
	of more of the SNA Server services fail to start. Typically, the SNA MngAgent or
	the SnaBase service are the services that failed to start when this problem
	occurs.
	
	Note: The Windows NT System Log should contain Service Control Manager errors
	that indicate why the SNA Server services failed to start.
	
	SNA Server Manager stores information about its window state in a file called
	SNAEXP.SNAV. This file contains information regarding the size and position of
	the main SNA Server Manager window, as well as which part of a subdomain is
	displayed in each multiple document interface (MDI) window and the size and
	position of the MDI windows. When SNA Server Manager is started, it reads the
	information in this file and restores the window state recorded in the
	SNAEXP.SNAV file.
	
	The problem occurs because Manager gets out of sync when reading the SNAEXP.SNAV
	file when the SNA Server services do not start properly.
	
	RESOLUTION
	==========
	
	The following steps will resolve the issue:
	
	1. Close SNA Server Manager if it is running.
	
	2. Delete the SNAEXP.SNAV file in the <snaroot>\system directory.
	
	3. Make sure that the SNA MngAgent service is started.
	
	4. Start SNA Server manager.
	
	SNA Server Manager has been updated so that is always reads the SNAEXP.SNAV file
	in a normal order to prevent it from getting out of sync.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, version
	3.0. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: explorer 3.0 admin
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
