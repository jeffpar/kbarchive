---
layout: page
title: "Q259210: Puzzle Collection: Setup Starts and Quits Immediately"
permalink: kb/259/Q259210/
---

## Q259210: Puzzle Collection: Setup Starts and Quits Immediately

	Article: Q259210
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbimu msgame
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Entertainment Pack: The Puzzle Collection, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Entertainment Pack: The Puzzle Collection,
	Setup may start and then quit immediately.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- A beta version of Entertainment Pack: The Puzzle Collection is installed on
	  the computer.
	
	- A previously installed beta version of Entertainment Pack: The Puzzle
	  Collection was not removed successfully.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use Registry Editor to delete the following key from the
	Microsoft Windows registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Microsoft Games\Puzzle Collection Trial
	
	After you remove this registry key, reinstall Entertainment Pack: The Puzzle
	Collection.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Entertainment Pack:
	The Puzzle Collection, version 1.0.
	
	Additional query words: 1.00 msgame wep installs crash
	
	======================================================================
	Keywords          : kbenv kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch kbZNotKeyword kbWinEntPkPuzzleSearch kbWinEntPkPuzzle
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
