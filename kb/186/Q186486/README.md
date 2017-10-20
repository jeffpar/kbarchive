---
layout: page
title: "Q186486: Terminal Server Usage of Net Name/Net Send"
permalink: /kb/186/Q186486/
---

## Q186486: Terminal Server Usage of Net Name/Net Send

{% raw %}

	Article: Q186486
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
	
	On a computer running Windows NT Server or Workstation, you can register up to
	16 names using the NET NAME /ADD command-line utility. However, although
	Messenger will receive messages for all registered names, it will only display
	messages intended for the logged on user name. Messages for other registered
	names are not displayed.
	
	Messenger has been modified to allow 256 registered aliases and messages sent to
	any of these aliases will be displayed on the screen. These aliases are per user
	so individual users (or user applications) can register and delete these names
	(through NET NAME /ADD /DEL) without affecting other users.
	
	Another messaging modification is that all users logged on with the same name or
	using the same registered alias will receive messages sent to that name. In
	Windows NT Server or Workstation, only the first instance of the name receives
	the message.
	
	Also, if a message is sent to the computername of a Terminal Server, all Client
	sessions will receive the message. This is similar to the functionality of the
	MSG * command.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
