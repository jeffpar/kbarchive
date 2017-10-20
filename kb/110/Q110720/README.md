---
layout: page
title: "Q110720: Chess: Player Sides May Change After Restart"
permalink: /kb/110/Q110720/
---

## Q110720: Chess: Player Sides May Change After Restart

{% raw %}

	Article: Q110720
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Entertainment Pack, volume 4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change sides in the game of Chess (i.e. White player to Black player),
	and then save your game, when that saved game is restarted, the player sides are
	returned to the original sides before the change.
	
	RESOLUTION
	==========
	
	The work around is to switch sides before opening the saved game. Chess will
	keep the same sides even when a new game or saved game is opened.
	
	MORE INFORMATION
	================
	
	Steps to reproduce problem:
	
	1. Run the Chess game from Windows Entertainment Pack.
	
	2. From the Move menu, click Switch Sides. This changes player colors.
	
	3. Save the game and exit Chess.
	
	4. Restart Chess and restore your saved game. Note that the player colors are
	  returned to the original settings.
	
	Microsoft has confirmed this to be a problem in Windows Entertainment Pack,
	volume 4.
	
	Additional query words: 1.00 wep wep4 switched back go switch
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbWinEntPkSearch kbWinEntPk400
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
