---
layout: page
title: "Q309559: MechWarrior 4: Err Msg: Setup Has Detected Beta or Test Version"
permalink: /kb/309/Q309559/
---

## Q309559: MechWarrior 4: Err Msg: Setup Has Detected Beta or Test Version

	Article: Q309559
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft MechWarrior 4: Vengeance, you may receive
	the following error message:
	
	  Setup has detected either a Beta or Test version of MechWarrior Vengeance on
	  your system. Please uninstall it before installing MechWarrior:Vengeance.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- You have not uninstalled the trial version of MechWarrior 4.
	
	  -or-
	
	- When you uninstalled the trial version of MechWarrior, you did not remove a
	  particular registry key associated with this version.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods, as appropriate to your
	circumstances.
	
	Uninstall the Trial Version
	---------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please see your product documentation
	to complete these steps.
	
	3. On the Install/Uninstall tab, click MechWarrior Vengeance, and then click
	  Add/Remove.
	
	4. Click Uninstall, and then click OK.
	
	Remove the Registry Key
	-----------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Microsoft Games\Mechwarrior 4
	
	4. Right-click Mechwarrior 4, and then click Delete. When prompted to confirm
	  the deletion of this key, click OK.
	
	5. On the Registry menu, click Exit.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
