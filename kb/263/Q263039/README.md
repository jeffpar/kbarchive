---
layout: page
title: "Q263039: Games: How to Troubleshoot Display Issues"
permalink: kb/263/Q263039/
---

## Q263039: Games: How to Troubleshoot Display Issues

	Article: Q263039
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgame
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Baseball 2001, version 1.0 
	- Microsoft Casino 
	- Microsoft Classic Board Games 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Dungeon Siege, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000, version 1.0 
	- Microsoft Flight Simulator 2000 Professional Edition, version 1.0 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links LS 2000, version 1.0 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft Plus! Game Pack: Cards and Puzzles 
	- Microsoft Zoo Tycoon 
	- Microsoft Zoo Tycoon: Dinosaur Digs Expansion Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some methods that you can use to troubleshoot
	display-related problems that you may experience when using one of the Microsoft
	games listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The More Information section of this article contains the following topics:
	
	- General Display Symptoms
	
	- Display Troubleshooting Methods
	
	General Display Symptoms
	------------------------
	
	The following list contains general display symptoms that you may experience when
	using one of the Microsoft games listed at the beginning of this article.
	
	- Textures are missing.
	
	- Textures are distorted.
	
	- Texture colors are distorted.
	
	- Textures are blurred.
	
	- Screen text is blurred or illegible.
	
	- Graphics are black or white.
	
	- The screen turns black.
	
	Display Troubleshooting Methods
	-------------------------------
	
	Check Minimum System Requirements:
	
	Many Microsoft games require a video adapter with at least 4 megabytes(MB) of
	video memory. Make sure that the video adapter meets the minimum requirements
	required to play the game.
	
	For all boxed games please see the System Requirements listed on the box.
	
	Use the DirectX Diagnostic Tool to determine how much video memory is available.
	To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display or Display 1 tab.
	
	4. Note how much video memory is on the Approx. Total Memory line, and then
	  click Exit.
	
	NOTE: The DirectX Diagnostic tool is automatically installed with newer versions
	of Microsoft DirectX.
	
	Install the Latest Video Driver for Your Video Adapter:
	
	For additional information about how to identify the driver version of your video
	adapter, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	Contact your video adapter manufacturer to inquire about how to obtain and
	install the latest video driver for your video adapter.
	
	For information about how to contact your video adapter manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Install the Latest Version of Microsoft DirectX:
	
	To download and install the latest version of Microsoft DirectX, visit the
	following Microsoft Web site:
	
	  http://www.microsoft.com/directx/default.asp
	
	For additional information about how to download and install the latest version
	of DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Adjust Display Settings:
	
	Many newer Microsoft games require a video card and monitor that can run a
	resolution of at least 800 x 600 at High Color (16 bit). Set your Windows
	display resolution to 800 x 600 at High Color (16 bit), and then test the game.
	
	To do so:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Move the Desktop Area or Screen Area slider to the 800 x 600 pixels setting.
	
	5. In the Color Palette or Colors box, click High Color (16 bit).
	
	6. Click OK, and then click OKagain.
	
	7. Click Yes to accept the settings.
	
	NOTE: After changing your video resolution, you may have to adjust your monitor
	settings so that your screen displays correctly. See your monitor documentation
	for more information.
	
	If you know what resolution your game is set to run at, set your Windows display
	settings to the same resolution as the game. You may also try setting your
	display resolution to 640 x 480 High Color (16 bit).
	
	Check or Turn on Direct 3D:
	
	To check or turn on Direct3D acceleration:
	
	1. Click Start, and then click Run.
	
	2. Type "dxdiag" (without the quotation marks), and then click OK.
	
	3. On the Display tab, verify that all DirectX features are turned on. If any
	  are disabled, click Enable next to the feature.
	
	  NOTE: If some DirectX features are unavailable, please verify that your video
	  adapter meets the minimum requirements.
	
	Reduce Graphics Hardware Acceleration:
	
	To reducing graphics hardware acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	7. Test the game. If the issue continues to occur, repeat these steps to
	  increase the graphics hardware acceleration by moving the Hardware
	  Acceleration slider one notch to the right (the Most acceleration setting) in
	  step 4.
	
	NOTE: If your game runs with video acceleration turned down, it may indicate that
	you need to update your video driver or it may indicate that your display
	adapter cannot run your game at full acceleration.
	
	Adjust Refresh Rate:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Advanced.
	
	4. On the Adapter tab, under Refresh Rate, select Adapter default.
	
	5. Click OK, and then clickOK again.
	
	Remove Multiple Adapters Using the DirectX Diagnostic Tool (Windows 95 and Windows 98 Only):
	
	To remove multiple adapters:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag -ghost" (without the quotation marks), and then
	  click OK.
	
	3. Click the More Help tab.
	
	4. Click the Inactive button.
	
	5. Click the item on the left, and then click Backup.
	
	6. Repeat until all the items have been removed from Inactive Window.
	
	7. Click Exit.
	
	
	Additional query words: 1.00 2.00 msgame black screen crash hangs freeze lock fatal exception t-shoot
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbLinkGolfSearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMSNSearch _IK kbPandoraSearch kbPlusSearch kbMotocrossSearch kbCrimsonSkiesSearch kbAsheronSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbDungeonSiege kbAsheron100 kbAOEExpRome kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbClassicBoardGames kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbCasino kbCrimsonSkies kbLinks2001 kbLinksLS2000 kbNBAInsideDrive2000 kbPlusGamePk kbFlightSim2002 kbFlightSim2002Pro kbZooTycoon kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbhowto
	
	=============================================================================
	
