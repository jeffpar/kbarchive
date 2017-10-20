---
layout: page
title: "Q194775: Combat Flight Simulator: Potential Cheating in Multiplayer Games"
permalink: /kb/194/Q194775/
---

## Q194775: Combat Flight Simulator: Potential Cheating in Multiplayer Games

{% raw %}

	Article: Q194775
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbui kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you join or host a multiplayer game in Combat Flight Simulator or Combat
	Flight Simulator 2, certain events or commands can put you in a suspended state.
	When you are in a suspended state, your airplane does not seem to move on your
	screen, but other players see you flying in a straight line on their screens.
	
	If another player fires on you when you are in a suspended state, your airplane
	is not damaged. Also, other players may notice that you can fly through solid
	terrain features when you are in a suspended state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you play a multiplayer game, Combat Flight Simulator sends suspended state
	information to each player in the game. To monitor this information and catch
	potential cheaters, you must modify the Combatfs.cfg file in Combat Flight
	Simulator or the Cfs2.cfg file in Combat Flight Simulator 2. To do this, follow
	these steps:
	
	1. Quit Combat Flight Simulator or Combat Flight Simulator 2 if it is running.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type the following line appropriate for your version of
	  Combat Flight Simulator:
	
	  Combat Flight Simulator: WWII Europe Series
	
	  "combatfs.cfg" (without the quotation marks)
	
	  Combat Flight Simulator 2: WWII Pacific Theater
	
	  "cfs2.cfg" (without the quotation marks)
	
	4. In the Look In box, click My Computer, and then click Find Now.
	
	5. Double-click the Combatfs.cfg or the Cfs2.cfg file.
	
	6. In the "Choose the program you want to use" box, click Notepad.
	
	7. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	8. On the Search menu, click Find.
	
	9. Type "[MULTIPLAYER]" (without the quotation marks) and then click Find Next.
	
	10. When you locate the [MULTIPLAYER] section, click Cancel, and then change the
	  number at the end of the following line to 1:
	
	  SP_DISPLAY_CHEAT_WARNINGS=0
	
	11. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	When you play a multiplayer game in Combat Flight Simulator after you follow
	these steps, you see the following message when any player enters the suspended
	state
	
	  <Player> has entered a suspended state.
	
	where <Player> is the name of a pilot in the multiplayer session. If a
	player enters the suspended state more than twice in a single game, Combat
	Flight Simulator displays an asterisk (*) beside that player's score.
	
	The following table lists some of the commands and actions in a multiplayer game
	that can start and stop the suspended state.
	
	+---------------------------------------------------------------------------------------------------------+
	| Suspend Event                                                | Resume Event                             | 
	+---------------------------------------------------------------------------------------------------------+
	| Press ALT to view a menu.                                    | Press ESC to close the menu.             | 
	+---------------------------------------------------------------------------------------------------------+
	| Press D to view the scoreboard.                              | Press D to close the scoreboard.         | 
	+---------------------------------------------------------------------------------------------------------+
	| Press ESC to open prompt to exit the current game.           | Click No.                                | 
	+---------------------------------------------------------------------------------------------------------+
	| Press ALT+F4 to open prompt to quit Combat Flight Simulator. | Click No.                                | 
	+---------------------------------------------------------------------------------------------------------+
	| Resize or move the game window.                              | Stop resizing or moving the game window. | 
	+---------------------------------------------------------------------------------------------------------+
	| Right-click with your pointing device.                       | Press ESC to close the shortcut menu.    | 
	+---------------------------------------------------------------------------------------------------------+
	
	Additional query words: 1.00 msgame combatfs cfs
	
	======================================================================
	Keywords          : kbui kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
