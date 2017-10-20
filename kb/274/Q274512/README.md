---
layout: page
title: "Q274512: The Default Temporary Variable for the Inuse.exe Utility"
permalink: /kb/274/Q274512/
---

## Q274512: The Default Temporary Variable for the Inuse.exe Utility

{% raw %}

	Article: Q274512
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Inuse.exe utility to replace a system file, the temporary
	environment variable must be set to the disk on which the %Systemroot% folder is
	installed.
	
	MORE INFORMATION
	================
	
	When the computer restarts, the Inuse.exe utility defaults to either the
	%Systemroot%\Temp or the %Systemroot%\Tmp folder location whenever the utility
	looks for the specified file to replace. If this environment variable is changed
	to another drive, the file replacement process does not occur, as expected, and
	errors are not reported.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
