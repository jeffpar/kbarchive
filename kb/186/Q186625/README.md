---
layout: page
title: "Q186625: Terminal Server Commands: REGISTER"
permalink: /kb/186/Q186625/
---

## Q186625: Terminal Server Commands: REGISTER

{% raw %}

	Article: Q186625
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
	
	Many applications expect only one user to use the application at a time. In a
	multiuser environment like Terminal Server, Dynamic Link Libraries (.dll files)
	may fail to open if more than one user attempts to use them. The REGISTER
	utility allows you to tell the system that a particular .dll file should be made
	available globally to the system and to all users.
	
	Note that registration data for a program is recognized only when the program is
	loaded. Therefore, if you issue a REGISTER command for a program that is already
	loaded, the changes will not take effect until the next time the program is
	loaded.
	
	Syntax
	------
	
	register filename [/system | /user] [/guitext | /noguitext] [/v] [/?]
	
	Parameters
	----------
	
	filename
	
	  Identifies the name of the file you want to register.
	
	/system
	
	  Registers filename as a system global resource.
	
	/user
	
	  Registers filename as a user global resource.
	
	/guitext
	
	  Registers filename as executable on text-only sessions.
	
	/noguitext
	
	  Registers filename as not executable on text-only sessions.
	
	/v (verbose)
	
	  Displays additional information.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	Only administrators can run register.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
