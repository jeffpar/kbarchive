---
layout: page
title: "Q99496: Golf Doesn't Keep High Scores"
permalink: kb/099/Q99496/
---

## Q99496: Golf Doesn't Keep High Scores

	Article: Q99496
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-1999
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Entertainment Pack, volume 3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When playing the card game Golf that ships with Microsoft Entertainment Pack
	volume 3, the number of games won indicated by the Record command may not be
	accurate. This problem will occur if you choose the Backup command after winning
	a game.
	
	MORE INFORMATION
	================
	
	After winning a game in Golf, choosing the Backup command will erase that win
	from the Records table. For example, if you currently have three wins registered
	and then you win again, the Record command will now show four wins. If you
	choose Backup (before starting another game) the Record table will now show
	three wins. This is expected behavior because the current win is now an
	uncompleted game. However, recompleting the game will not reregister the win.
	(The Records table still indicates only three wins.) Choosing the Backup command
	again will cause the Records table to drop to two wins. Recompleting the game
	again will not reregister that win either.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Golf.
	
	2. Play the game until you win.
	
	3. From the File menu, click Record. Note the number of wins and click OK.
	
	4. From the File menu, click Backup.
	
	5. From the File menu, click Record. Note that the number of wins has dropped by
	  one.
	
	6. Complete the game and click Record from the File menu. Note that the number
	  of wins does not reflect the latest win.
	
	Additional query words: 1.00 WEP1 re-completing re-registering
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbWinEntPkSearch kbWinEntPk300
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
