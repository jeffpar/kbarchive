---
layout: page
title: "Q191556: Urban Assault Does Not Start After Introductory Movie Is Played"
permalink: /kb/191/Q191556/
---

## Q191556: Urban Assault Does Not Start After Introductory Movie Is Played

	Article: Q191556
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbui kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you play the introductory movie or if you press ESC to skip through the
	introductory movie, Microsoft Urban Assault may not start and you may be
	returned to the Windows desktop.
	
	CAUSE
	=====
	
	This behavior can occur if you delete the folders containing the active saved
	game and the default user settings.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, do not delete any folders located inside
	the following folder:
	
	  <drive>:\Program Files\Microsoft Games\Urban Assault\Save
	
	where <drive> is the drive letter for the hard disk on which Urban Assault
	is installed.
	
	MORE INFORMATION
	================
	
	If you want to delete a saved game, click the game you want to delete on the
	Save/Load screen in Urban Assault, and then click Delete.
	
	NOTE: The SDU7 saved game contains the default user settings and cannot be
	deleted.
	
	Additional query words: 1.00 msgame ua video kbfaq
	
	======================================================================
	Keywords          : kbui kbimu msgame kbfaq
	Technology        : kbGamesSearch kbUrbanAssault
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
