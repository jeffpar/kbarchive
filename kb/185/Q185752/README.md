---
layout: page
title: "Q185752: MSCS Service Fails to Start After Installation"
permalink: kb/185/Q185752/
---

## Q185752: MSCS Service Fails to Start After Installation

	Article: Q185752
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Cluster Server (MSCS) version 1.0, you are presented
	with the following error message
	
	  Microsoft Cluster Server Setup
	  ------------------------------
	
	  Microsoft Cluster Server could not be started. Setup has completed
	  successfully, but the Cluster service failed on startup. Check the event
	  Log for the reason. Before attempting to run setup again, you must
	  uninstall the Cluster software from the "Add/Remove Programs" applet in
	  Control Panel.
	
	Furthermore, the following entry is recorded in the Event Log;
	
	  EVENT ID - 7023
	  SOURCE - Service Control Manager
	  TYPE - Error
	  DESCRIPTION - The Cluster Server service terminated with the following
	  error: "Indicated two revision levels are incompatible"
	
	Finally, on attempting to start the Cluster Server service manually through the
	Services tool in Control Panel, you get this error;
	
	  Could not start the Cluster Server service on \\<MACHINENAME>
	  Error 1306: Indicated two revision levels are incompatible
	
	CAUSE
	=====
	
	MSCS has been installed on Windows NT Workstation
	
	RESOLUTION
	==========
	
	MSCS is designed to be installed on Windows NT 4.0 Server, Enterprise Edition,
	Service Pack 3 or later.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: clustering
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
