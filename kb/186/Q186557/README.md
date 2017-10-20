---
layout: page
title: "Q186557: Terminal Server Commands: SHUTDOWN"
permalink: /kb/186/Q186557/
---

## Q186557: Terminal Server Commands: SHUTDOWN

{% raw %}

	Article: Q186557
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SHUTDOWN allows an administrator to shut down the application server in a
	controlled manner. No programs can be executed after shutdown is started. You
	can shut down the server safely, or you may decide to reboot the server. The
	session of the user who initiated the shutdown is still active, but all
	information is read-only.
	
	Syntax
	------
	
	shutdown [wait_time] [/server:servername] [/reboot] [/powerdown]
	[/delay:delay_time] [/v] [/?]
	
	Parameters
	----------
	
	wait_time
	
	  Specifies the amount of time in seconds you must wait after notifying
	  connected users before logging off all user sessions.
	
	/server:servername
	
	  Specifies the Terminal Server to shut down. Otherwise, the current Terminal
	  Server is shut down.
	
	/reboot
	
	  The application server is rebooted after user sessions are terminated.
	
	/powerdown
	
	  The application server is prepared to shut down. Server-class computers that
	  support software control of AC power will shut themselves down.
	
	/delay
	
	  Specifies the amount of time you must wait after terminating all user
	  sessions before terminating all processes.
	
	/v (verbose)
	
	  Displays information about the actions being performed.
	
	/? (help)
	
	  Displays the syntax for this command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	Only administrators can run SHUTDOWN.
	
	SHUTDOWN -- Additional Notes
	----------------------------
	
	All connected sessions are notified that they are going to be shut down. Shutdown
	waits a specified interval (the default interval is 60 seconds) before resetting
	all sessions and logging off all users. Sessions that have applications with
	open files will prompt the user to save the files. After initiating the logoff
	command, shutdown waits a specified interval (the default interval is 30
	seconds; set by /delay) before terminating all processes.
	
	Shutdown does not reboot the application server unless the /reboot option is
	specified. The Shutdown Computer option in the Security dialog box does not
	notify users before terminating user sessions and is not recommended.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
