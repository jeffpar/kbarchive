---
layout: page
title: "Q259436: Log Off all Terminal Server Session Users from a Command Prompt"
permalink: /kb/259/Q259436/
---

## Q259436: Log Off all Terminal Server Session Users from a Command Prompt

{% raw %}

	Article: Q259436
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some conditions, an administrator may want to force a logoff of all users
	currently logged onto a Windows NT 4.0 Server, Terminal Server Edition-based
	computer. You can do so by creating a batch file that calls two Terminal Server
	specific commands, QUERY and LOGOFF.
	
	WARNING: Performing the following procedure logs off all users currently logged
	onto the Terminal Server. This may result in a loss of unsaved data. Because of
	this, extreme caution is advised.
	
	MORE INFORMATION
	================
	
	To create a batch file that calls these two Terminal Server specific commands,
	place the following information into a batch (.bat) file:
	
	query session >session.txt
	for /f "skip=1 tokens=3," %%i in (session.txt) DO logoff %%i
	del session.txt
	
	This batch file may be run at any time the Administrator desires to force the
	logoff of all users that are not logged onto the Terminal Server console.
	
	Query is a multi-purpose command found within the Terminal Server environment. In
	this case, Query Session creates a list of all sessions running on the Terminal
	Server, complete with Session ID numbers. Within the batch file, this output is
	redirected to a text file. The FOR statement then parses each line of the text
	file, skipping the first line, and looking for the Session ID number found in
	the third column. It then places this variable into Logoff, resulting in that
	session being logged off.
	
	It is not uncommon to receive an error message when you run this batch file. If a
	user is logged onto the Terminal Server console, the following error message is
	generated:
	
	  Could not logoff session ID 0 from session Console, Error code 5
	  Error [5]: Access is denied.
	
	This is due to a limitation of the Logoff command. It cannot force the logoff of
	the console session. A work around to this issue would be to modify the batch
	file to read:
	
	query session >session.txt
	for /f "skip=2 tokens=3," %%i in (session.txt) DO logoff %%i
	del session.txt
	
	This causes the first two lines of the Session.txt file to be skipped, avoiding
	the error.
	
	REFERENCES
	==========
	
	For additional information about the Query command, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q186592 TERMINAL SERVER COMMANDS: QUERY
	
	Additional query words: logoff script
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
