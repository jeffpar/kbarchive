---
layout: page
title: "Q281081: Links 2001: Cannot See Where the Golf Ball Lands"
permalink: kb/281/Q281081/
---

## Q281081: Links 2001: Cannot See Where the Golf Ball Lands

	Article: Q281081
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv w_golf kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Links 2001 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you play Microsoft Links 2001, the view of where the ball lands may be
	blocked by trees or other objects on the golf course.
	
	You may not be able to determine where the ball landed until you accept the shot.
	
	CAUSE
	=====
	
	This behavior can occur if Dynamic View is turned on.
	
	RESOLUTION
	==========
	
	To resolve this issue, turn off Dynamic View:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Open the following registry key:
	
	  HKEY_CURRENT_USER/Software/Microsoft/Microsoft Games/Links 2001/Options
	
	4. Double-click the Dynamic View value.
	
	5. Change the value data from 1 to 0.
	
	6. Click OK.
	
	7. Quit Registry Editor.
	
	Additional query words: msgames links2001 access camera obstructed distorted
	
	======================================================================
	Keywords          : kbenv w_golf kbimu 
	Technology        : kbLinkGolfSearch kbGamesSearch kbGolfSearch kbLinks2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
