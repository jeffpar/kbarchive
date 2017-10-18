---
layout: page
title: "Q99530: RPL Workstation Login Problems with Login Scripts"
permalink: kb/099/Q99530/
---

## Q99530: RPL Workstation Login Problems with Login Scripts

	Article: Q99530
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	This error message is returned when you attempt to log in on RPL workstations
	and have login scripts enabled:
	
	  RPLDISK.SYS
	  Error in Server \\testsrv
	  Server not responding: \\testsrv
	
	CAUSE
	=====
	
	During the command "NET START RDR (COMPUTER_NAME) ...." you are not yet logged
	on, so you do not have write permission in the LMUSER.INI file, where new
	connections are stored.
	
	RESOLUTION
	==========
	
	Put the line "saveconnections = no" in the [network] section of LANMAN.INI for
	the RPL workstation. Turning this persistent connections option off lets you use
	logon scripts defined for your computer name.
	
	The workaround some users have tried is to log in twice: log in the first time to
	let the remote login timeout and log in as the machine name, then log off and
	log in a second time as the user. This allows you to log in and allows the log
	in scripts to execute correctly, but you have to leave the initial log in alone
	and not interfere by allowing the machine to log in to the LAN. The resolution
	seems preferable to the workaround for this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
