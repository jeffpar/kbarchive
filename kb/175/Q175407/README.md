---
layout: page
title: "Q175407: Age of Empires: Hangs During Multiplayer Game on Zone.com"
permalink: /kb/175/Q175407/
---

## Q175407: Age of Empires: Hangs During Multiplayer Game on Zone.com

{% raw %}

	Article: Q175407
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbinterop kbtlc aoe igz kbimu msgamekbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you run Microsoft Age of Empires, the game may stop responding (hang) after
	several minutes of game play in a multiplayer session on Zone.com.
	
	CAUSE
	=====
	
	This behavior can occur if you use certain hardware configurations and your
	Internet service provider (ISP) installs a third-party version of the
	Winsock.dll file that is not compatible with Age of Empires.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, follow these steps:
	
	1. Extract a new copy of the Winsock.dll file from your original Windows 95/98
	  CD-ROM or disks to the Windows folder. For information about how to use the
	  Extract tool, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	2. If the issue continues to occur, change the value data for the CommandLine
	  value in the following registry key to "lobby msync" (without the quotation
	  marks):
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DirectPlay\Applications\ 
	  Age of Empires
	
	NOTE: You must separate "lobby" and "msync" with a blank space.
	
	Additional query words: 1.00 aoe ror igz zone z4 freeze crash kbfaq
	
	======================================================================
	Keywords          : kbinterop kbtlc aoe igz kbimu msgame kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbAOE kbGamesSearch kbZNotKeyword kbAOESearch kbAOEExpRome
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
