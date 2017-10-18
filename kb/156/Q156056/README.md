---
layout: page
title: "Q156056: Unable to Start the Monitor Service - Error 2002"
permalink: kb/156/Q156056/
---

## Q156056: Unable to Start the Monitor Service - Error 2002

	Article: Q156056
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Monitor service from the Command Prompt or from the
	Control Panel Services tool, you receive the following error:
	
	  Could not start the monitor service on SERVERNAME. Error 2002 - the window
	  style or class attribute is invalid for this operation.
	
	Monitor.exe is a command-line utility that ships with the Microsoft Windows NT
	version 3.51 Resource Kit. Monitor.exe controls the Data Logging Service that
	performs the same function as the Alert and Logging facility in Performance
	Monitor. You can schedule the Datalog.exe file to start automatically using
	Monitor.exe and the At.exe commands, but you must start the Performance Monitor
	manually.
	
	CAUSE
	=====
	
	This error can occur if one or more of the following is true:
	
	- The Monitor service cannot locate the workspace settings (.pmw) file that it
	  was configured to use.
	
	- The workspace settings file (.pmw) was saved in Chart view or no objects were
	  added to monitor.
	
	RESOLUTION
	==========
	
	The workspace settings file (.pmw) must reside in the %Systemroot%\System32
	directory. It also must be saved in Log view, not in Chart view.
	
	The .pmw file is a Performance Monitor workspace file that saves current
	Performance Monitor objects and counters to be used with the Monitor and Datalog
	utilities. For more information on these utilities, see the Microsoft Windows NT
	Resource Kit documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
