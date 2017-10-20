---
layout: page
title: "Q233513: Access Denied Error Message in Windows Script Host"
permalink: /kb/233/Q233513/
---

## Q233513: Access Denied Error Message in Windows Script Host

{% raw %}

	Article: Q233513
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a system environment variable in Windows Script Host and you
	are not an administrator for the computer, you may receive an 'access denied'
	error message.
	
	CAUSE
	=====
	
	This issue can occur if the system environment variables are not defined
	correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, define the system environment variable using the Process
	environment. For an example about how to use the Process environment variable,
	view the following Visual Basic Script samples.
	
	This script works when an administrator runs it but does not work when a user who
	does not have administrator permissions runs it.
	
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  Set WSHEnv = WSHShell.Environment
	  WScript.Echo WSHEnv("OS")
	
	NOTE: Notice that since there is no type specified after Environment that it will
	default to the "System" type.
	
	This script works when either an administrator or non-administrator runs it.
	
	  Set WSHShell = WScript.CreateObject("WScript.Shell")
	  Set WSHEnv = WSHShell.Environment("Process")
	  WScript.Echo WSHEnv("OS")
	
	NOTE: Notice that the type "Process" is specified after Environment.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
