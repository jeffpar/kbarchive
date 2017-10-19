---
layout: page
title: "Q100727: Encarta Err Msg: MindMaze: Player Already Playing"
permalink: /kb/100/Q100727/
---

## Q100727: Encarta Err Msg: MindMaze: Player Already Playing

	Article: Q100727
	Product(s): Microsoft Home Kids Products
	Version(s): 1993 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta for Windows 1993 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to restore a player in the MindMaze game in Encarta, the
	following error message may be generated:
	
	  Mindmaze: Player already playing.
	
	This will occur if a new player is created that has the same saved filename as a
	previous player.
	
	MORE INFORMATION
	================
	
	Encarta saves files in MindMaze by truncating the first name to eight letters
	and then adding the extension ".SAV". For example, if the players first name is
	"Rich", then the saved filename is "RICH.SAV." If the first name is "Bridgette",
	the saved filename is "BRIDGETT.SAV" (truncated to eight characters). If you
	start the game and create a new player named "Rich" and attempt to restore the
	old "Rich", you will receive the error message. If you want to have multiple
	players with the same name, they will have to use a different letter or add a
	number. For example:
	
	  Rich1, Rich2, Bridgete, Bridgett
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Encarta.
	
	2. Start MindMaze.
	
	3. Choose Play.
	
	4. Type the name of someone who has already played. Note the Restore button is
	  unavailable (dimmed) and Restore in the File menu is also unavailable. Press
	  ENTER.
	
	5. Choose Start.
	
	6. From the File menu, choose Restore.
	
	7. Select the same player's .SAV file and choose OK.
	
	At this point, you will receive the error message. If you do want to restore the
	player, do the following
	
	1. From the File menu, choose Quit Player.
	
	2. From the File menu, choose Restore.
	
	3. Select the .SAV filename of the individual and choose OK.
	
	Additional query words: 1.0 multi media multimedia multi-media mind maze gray grey grayed greyed Usage Viewer 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncarta1993
	Version           : :1993 edition
	
	=============================================================================
	
