---
layout: page
title: "Q124621: Scheduled Jobs Cannot Access User Environment Variables"
permalink: /kb/124/Q124621/
---

## Q124621: Scheduled Jobs Cannot Access User Environment Variables

	Article: Q124621
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Schedule Service runs a job that was previously submitted by running
	the AT utility, the environment space provided to the scheduled job includes
	only the System Environment Variables.
	
	The scheduled job's environment space does not include any User Environment
	Variables.
	
	MORE INFORMATION
	================
	
	To see which environment variables are available to scheduled jobs on your
	machine, first run the following command specifying a <time> that is in
	the near future:
	
	  AT <time> /INTERACTIVE CMD
	
	This will cause a new command window to open as a scheduled job at the specified
	time. Type "SET" (without the quotes) in this command window to obtain a list of
	Environment Variables available to scheduled jobs.
	
	User and System Environment Variables can be defined by running the System applet
	from within Control Panel.
	
	To make environment variables available to scheduled jobs, make sure that they
	are defined as System Environment Variables.
	
	After modifying System Environment Variables it is necessary to shutdown and
	restart your computer to make them available to applications.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
