---
layout: page
title: "Q99080: Loading a Two-Player Chess Game"
permalink: kb/099/Q99080/
---

## Q99080: Loading a Two-Player Chess Game

	Article: Q99080
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-1999
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Entertainment Pack, volume 4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you load a saved game in Chess, if the saved game was a two-player game
	(Player vs. Player), Chess may load the game as a Player vs. Computer game. This
	behavior occurs because Chess defaults to Player vs. Computer mode; this mode is
	not reset when a saved game is loaded.
	
	MORE INFORMATION
	================
	
	Workaround
	----------
	
	Set up Chess as a two-player game before loading the saved game:
	
	1. From the Game menu in Chess, click New. In the Select Players dialog box,
	  click Player vs. Player and click OK.
	
	2. Load the saved game by clicking Open from the Game menu. The game should now
	  load as a two-player game.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Microsoft Chess.
	
	2. From the Game menu, click New.
	
	3. In the Select Players dialog box, click Player vs. Player.
	
	4. From the Game menu, click Save and save the current game.
	
	5. From the Game menu, click Exit to close Chess.
	
	6. Restart Chess.
	
	7. Load the game by clicking Open in the Game menu. The game will be set up as
	  Player 1 vs. Ziggurat, a Player vs. Computer game.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbWinEntPkSearch kbWinEntPk400
	Version           : WINDOWS:
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
