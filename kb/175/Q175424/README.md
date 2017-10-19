---
layout: page
title: "Q175424: Return of Arcade: Game Does Not Appear on Screen"
permalink: /kb/175/Q175424/
---

## Q175424: Return of Arcade: Game Does Not Appear on Screen

	Article: Q175424
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Return of Arcade for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the games in Return of Arcade for Windows,
	nothing may happen.
	
	If you press CTRL+ALT+DEL, click the name of the game in the Close Program dialog
	box, and then click End Task, you may receive an "Exception 0E" error message.
	
	CAUSE
	=====
	
	This behavior can occur if Cleansweep is running when you install Return of
	Arcade.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps to remove and reinstall Return of
	Arcade and Cleansweep:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Return Of Arcade, and then
	  click Add/Remove.
	
	4. Follow the instructions on the screen to finish removing Return of Arcade.
	
	5. On the Install/Uninstall tab, click Cleansweep, and then click Add/Remove.
	
	6. Follow the instructions on the screen to finish removing Cleansweep.
	
	7. Reinstall Return of Arcade.
	
	8. Verify that you can run the games in Return of Arcade, and then reinstall
	  Cleansweep.
	
	If you are running Microsoft Windows 98 and the issue continues to occur, follow
	these steps to reduce your audio hardware acceleration setting to None:
	
	Note: These steps only apply to Microsoft Windows 98-based computers. Audio
	acceleration is not available in Microsoft Windows 95.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Audio tab, click Advanced Properties under Playback.
	
	4. Click the Performance tab.
	
	5. Move the Hardware Acceleration slider all the way to the left (the None
	  setting).
	
	6. Click OK, and then click OK again.
	
	7. If you are prompted to restart the computer, click Yes.
	
	If the issue continues to occur, follow these steps to manually initialize
	DirectX:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (with quotation marks), and then
	  click OK "<drive>:\program files\directx\setup" where <drive> is
	  the letter of the hard disk on which Windows is installed.
	
	3. Right-click and drag Dxtool from the Setup window to the desktop, and then
	  click Create Shortcut.
	
	4. Close the Setup window.
	
	When you want to run Return of Arcade, double-click the Shortcut To Dxtool icon
	on the desktop, quit DirectX Tool, and then start the game.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: nothing not responding clean sweep
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbGamesSearch kbArcadeRet kbZNotKeyword kbArcadeSearch kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
