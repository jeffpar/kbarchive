---
layout: page
title: "Q248372: Incorrect User Name When Using Office 97 Applications"
permalink: /kb/248/Q248372/
---

## Q248372: Incorrect User Name When Using Office 97 Applications

	Article: Q248372
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a Microsoft Office Suite file [for example, Microsoft
	Excel (.xls), Microsoft Word (.doc), or Microsoft PowerPoint (.ppt)] that has
	been opened by another user on another terminal server client, you may receive a
	read-only dialog box that displays the name of the user who installed the
	program. The dialog box should display the name of the user who opened the file.
	
	CAUSE
	=====
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition requires
	special installation (available in application server mode) to install programs
	for multiple users. This service is activated when you use the Add/Remove
	Programs tool in Control Panel, or the "Change User /Install" command to install
	a program. If you use the command, you must return to normal execution mode. To
	do this, run the "Change User /Execute" command after you install the program.
	
	When you use Office 97 programs for the first time, you are prompted for your
	user name and initials. This information is then contained in the registry.
	
	However, you can modify the default settings before you run the "Change User
	/Execute" command. When you make changes, you are presented with the same
	request to provide a user name and initials before you open the program. When
	you return to normal execution mode, the default settings you created (including
	the user name) become the default settings for all users.
	
	RESOLUTION
	==========
	
	Windows NT Server version 4.0, Terminal Server Edition time-stamps all
	installation changes to default settings in the registry. For the user's default
	settings to be changed, the program must be removed, and then reinstalled, even
	if the user has opened the program in the past. The user's default settings are
	changed the next time they access the program during a Terminal Services
	session.
	
	If changes are made only to the registry key values, then only new users'
	settings are changed. Changes to values do not affect users who have already
	accessed the program and have the default settings stored in their profile.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q186515 Do Not Run Terminal Server in Installation Mode
	
	  Q238840 Terminal Services Does Not Prompt You to Enter Install Mode
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
