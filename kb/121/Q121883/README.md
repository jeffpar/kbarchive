---
layout: page
title: "Q121883: Golf: Rotate View on Recorded Player May Cause Hang"
permalink: /kb/121/Q121883/
---

## Q121883: Golf: Rotate View on Recorded Player May Cause Hang

	Article: Q121883
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you choose Rotate View (press F6) or Drop Ball (press F7) from the Action
	menu in Golf while you view a recorded round of Golf, the computer may stop
	responding (hang).
	
	MORE INFORMATION
	================
	
	The options Aim Shot, Rotate View, and Drop Ball are not available from the
	Action menu if a regular (that is, non-recorded) player is playing along with
	the recorded player, or if Quick Start or New Game are chosen immediately after
	starting Golf.
	
	STEPS TO REPRODUCE
	------------------
	
	1. Start a new game.
	
	2. In the Recorded Players section, select the Show Players box.
	
	3. In the Players Available box, choose a recorded player's game (a small
	  picture of a camera will precede the player's name to denote a recorded game)
	  by selecting the player's name and clicking Add Player.
	
	4. The recorded player's name will now appear in the Players Selected box.
	
	5. Click Continue.
	
	6. In the Game Settings box, click OK.
	
	7. During the playback of the recorded game, a small Recorded Player dialog box
	  will appear with the options of Pause or Continue. Click Pause (the Swing
	  indicator will now appear as a large button with Continue on it).
	
	  NOTE: Aim Shot, Rotate View, and Drop Ball are now unavailable (dimmed) in the
	  Action menu.
	
	8. From the File menu, choose Quick Start or New (F2). After choosing Quick
	  Start or New, You receive the message: "There is a game in progress: Do you
	  wish to exit?" Click Yes.
	
	  Under Windows 95, the mouse pointer turns to an hour glass and the Golf
	  program stops responding. To close the program, press CTRL-ALT-DEL. Choose
	  Microsoft Golf from the list of programs and then click End Task. This
	  returns you to the desktop and you may start Golf again.
	
	9. Once the recorded player has restarted, click Pause in the Recorded Player
	  dialog box.
	
	  NOTE: The options for Aim Shot, Rotate View, and Drop Ball are now available
	  from the Action menu.
	
	10. Either rotate the view or drop the ball in a different position and click
	  OK.
	
	The computer stops responding.
	
	Additional query words: 2.00 lock hang hung reboot lockup up freeze crash greyed grayed out
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
