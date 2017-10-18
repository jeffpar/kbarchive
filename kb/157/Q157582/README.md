---
layout: page
title: "Q157582: Soccer: Multiplayer Troubleshooting"
permalink: kb/157/Q157582/
---

## Q157582: Soccer: Multiplayer Troubleshooting

	Article: Q157582
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Soccer, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses solutions to problems you may experience when you try to
	play Soccer with another person over your modem or network.
	
	MORE INFORMATION
	================
	
	Network and modem games work best when you choose the Optimal installation
	option during Soccer setup.
	
	During a modem or network multiplayer game, it may take the host's machine
	(machine that sets up the game) a few minutes to set up the game and download
	the information to the guest's machine (machine that joins the game). If you
	have problems with modem games, reconfigure your modem as a standard 28,800 baud
	or 14,400 baud modem instead of any modem-specific configuration you may be
	using.
	
	For the guest joining a modem or network game, when the Multiplayer screen
	appears, the Team Editor button is enabled. The guest can make changes with the
	players and teams, but these changes will not be reflected in the current game,
	only in the next multiplayer game the players host, or the next single or
	tournament game they play.
	
	MODEM TROUBLESHOOTING
	---------------------
	
	If you're having trouble playing a multiplayer game over a modem, there are a
	number of possible solutions:
	
	Turn off flow control and error correction:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Make sure your modem is highlighted, then click Properties, and then click
	  the Connection tab.
	
	4. Click Advanced.
	
	5. Make sure the User Error Control and Use Flow Control check boxes are not
	  selected.
	
	Make sure the FIFO buffers are on:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. In the Modem Properties dialog box, click Properties, and then click the
	  Connection tab.
	
	4. Click Port Settings.
	
	5. Make sure that the FIFO buffers check box is selected (default).
	
	If you are hosting a game, try waiting for the message box that says the
	connection is established before you click Play Game.
	
	If you're setting up a multiplayer modem game, and you click Call, the Windows
	Dial dialog box appears. Try the following:
	
	- Under the Connect Using: TAPI Line: try using different modem drivers.
	- If you were hosting and not successfully connecting, call the same modem that
	  was trying to connect to you. (Try this several times.) Sometimes modems will
	  not connect one way, but will connect the other way.
	
	If you're still having trouble with multiplayer games over a modem, try the
	following:
	
	- Log out of Multiplayer, for both host and guest, and log in again.
	- Quit Soccer and restart.
	- Restart your computer and restart Soccer.
	
	NOTE: Changes made to modem settings in the Modem utility will affect all modem
	sessions, and changes made to modem settings via the Windows Dial dialog box
	affect only the current session.
	
	Additional query words: 1.00 football video multi-player game play friend more than one player user connect other
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbSoccer
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
