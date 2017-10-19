---
layout: page
title: "Q273602: Golf 2001: Icon Remains on Taskbar When You Connect to the Zone"
permalink: /kb/273/Q273602/
---

## Q273602: Golf 2001: Icon Remains on Taskbar When You Connect to the Zone

	Article: Q273602
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu msgame
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 2001 Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play Microsoft Golf 2001 on Zone.com by following these
	steps
	
	1. On the Golf 2001 startup screen, click Online Play.
	
	2. Click "Play on Zone.com".
	
	3. Click Connect.
	
	the Golf 2001 icon may remain on the Microsoft Windows taskbar for as long as 30
	seconds before the program quits.
	
	NOTE: You cannot start a Golf 2001 session from the Zone if Golf 2001 is running
	on your computer.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	When you connect to the Zone from Golf 2001, Golf 2001 is automatically
	minimized. The game then connects to the Zone by using your default Web browser,
	and then quits.
	
	Because Golf 2001 is minimized before it quits, Windows reduces the amount of
	processor resources that are assigned to Golf 2001, which increases the amount
	of time that is required for the program to quit.
	
	RESOLUTION
	==========
	
	To resolve this issue, click the Golf 2001 icon on the Windows taskbar.
	
	Golf 2001 briefly appears on the screen, and then quits.
	
	Additional query words: msgame msgolf golf2001 task bar hangs pause freeze lock
	
	======================================================================
	Keywords          : kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolf2001 kbGolfSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
