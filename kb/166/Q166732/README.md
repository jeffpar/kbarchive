---
layout: page
title: "Q166732: Cannot Read Parameters Help Screen for Route.exe"
permalink: /kb/166/Q166732/
---

## Q166732: Cannot Read Parameters Help Screen for Route.exe

{% raw %}

	Article: Q166732
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the command-line parameters for Route.exe, the help is
	more than one screen long. Redirection of the output to More or to a text file
	may not work.
	
	RESOLUTION
	==========
	
	To view the help for Route.exe, use one of the following methods:
	
	- View the same information in the online Help. To view the information in
	  online Help in Windows NT 4.0, click the Start button, click Help, click the
	  Index tab, and type "route utility" (without quotation marks). Then,
	  double-click Route Utility in the list of available Help topics.
	
	- Change the Command screen parameters using Control Panel. To do so in Windows
	  NT 4.0, double-click Console in Control Panel, click the Layout tab, and
	  increase the Height setting in the Window Size area. Use at least a setting
	  of 42.
	
	  In Windows NT 3.51, double-click Control Panel in the Main group, double-click
	  Console, click the Screen Size And Position tab, and increase the Height
	  setting in the Window Size area. Use a setting of at least 42.
	
	MORE INFORMATION
	================
	
	Route.exe is a tool you can use to add default gateway and destination network
	address entries to the route table from a command line.
	
	Additional query words: prodnt screen scroll
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
