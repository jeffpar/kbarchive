---
layout: page
title: "Q195234: The Operating System Was Unable to Load Your Profile"
permalink: /kb/195/Q195234/
---

## Q195234: The Operating System Was Unable to Load Your Profile

{% raw %}

	Article: Q195234
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
	
	When you try to log on to Terminal Server, you receive the following error
	message:
	
	  User Environment
	  The operating system was unable to load your profile.
	  Please contact your Network Administrator. (203)
	
	The dialog box gives you 30 seconds to read the message. Then, it closes the
	connection to the Terminal Server. Selecting the OK button on the dialog box
	also disconnects the session to the Terminal Server.
	
	The Application Log on the Terminal Server records an Event ID 1000. The source
	is Userenv. You get the same message that you are shown when you try to connect.
	
	MORE INFORMATION
	================
	
	The Terminal Server's registry quota has been exceeded. As each new user logs on
	to the Terminal Server, your ntuser.dat from your profile is loaded into the
	Terminal Server's registry. If several users are logged on to the Terminal
	Server at the same time, it is possible that the default value for the
	computer's registry quota can be exceeded.
	
	The System Log in the Terminal Server's event log will show an Event ID 26, which
	indicates that the system is running low on registry quota.
	
	To remedy this situation, start the System utility in the Control Panel and
	select the Virtual Memory button to increase the computer's registry quota.
	
	Additional query words: terminalsrv RDP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
