---
layout: page
title: "Q186531: Error Message: &quot;Cannot find &#42;.ini. Please Re-run Setup&quot;"
permalink: /kb/186/Q186531/
---

## Q186531: Error Message: &quot;Cannot find &#42;.ini. Please Re-run Setup&quot;

{% raw %}

	Article: Q186531
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application on a Terminal Server computer, you receive the
	following error message:
	
	  Cannot find *.ini. Please Re-run Setup.
	
	CAUSE
	=====
	
	Typically, this means that the user does not have a home directory or that the
	application was not installed using the Terminal Server's application
	installation mode.
	
	When an application is installed using the Terminal Server's installation mode,
	the system captures creation of .INI files and registry settings and stores
	them. When a user runs the application for the first time, the .INI file(s) will
	be copied to the user's home directory, and registry settings will be written to
	the user area of the registry.
	
	RESOLUTION
	==========
	
	To install using installation mode, install the application using one of the
	following methods:
	
	- Add/Remove Programs tool in Control Panel
	
	  -or-
	
	- Type a "Change User /Install" command at an MS-DOS command prompt.
	
	MORE INFORMATION
	================
	
	If this is not the problem, make sure the user has a home directory.
	
	Home directories are specified in User Manager. Open an existing user's account
	and click the Profile button. The path to the user's home directory can be
	specified in this location, along with paths to profiles and logon scripts.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
