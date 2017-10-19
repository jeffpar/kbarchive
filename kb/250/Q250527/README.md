---
layout: page
title: "Q250527: Pandora's Box Error Message: Unable to Create DirectDraw Surface"
permalink: /kb/250/Q250527/
---

## Q250527: Pandora's Box Error Message: Unable to Create DirectDraw Surface

	Article: Q250527
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Pandora's Box, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Pandora's Box, you may receive the following
	error message:
	
	  Unable to create DirectDraw Surface. Make sure that DirectX is installed, and
	  then try again.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- A Pentium III computer.
	
	- Your monitor is not configured correctly.
	
	- The video driver installed on the computer is incompatible with Microsoft
	  DirectX.
	
	- The video driver installed on the computer does not support a color palette
	  higher than 256 colors.
	
	- The video adapter installed in the computer does not meet the minimum
	  hardware requirements necessary to run the game.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the Pandora's Box Update for the
	game's English or French version (Pandora10a.exe) or for its Japanese version
	(PandoraJ10a.exe) from the following Microsoft Web site:
	
	  http://www.microsoft.com/games/pandorasbox/downloads.htm
	
	The self-extracting, self-installing files install two modified files: the
	Pandora.exe file and the Langenu.dll file. The combined size of the downloaded
	files is approximately one megabyte (MB).
	
	NOTE: if you are using Pandora's Box Trial version it will not work on Pentium
	III computers. The error message that you will get is
	
	  Unable to create DirectDraw Surface. Make sure that DirectX is installed, and
	  then try again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Pandora's Box, version
	1.0.
	
	MORE INFORMATION
	================
	
	The following troubleshooting methods may also help resolve this issue. Follow
	these methods in the order in which they are presented.
	
	Verify That the Video Adapter Meets the Minimum Hardware Requirements
	---------------------------------------------------------------------
	
	Consult the printed documentation provided with your video adapter to verify that
	the video adapter supports a screen resolution of at least 800 x 600 pixels at a
	16-bit or higher color palette.
	
	Adjust the Microsoft Windows Display Settings
	---------------------------------------------
	
	To adjust the Windows display settings, use the appropriate method for your
	version of Windows.
	
	Microsoft Windows 95 or Microsoft Windows 98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Move the Desktop Area or Screen Area slider to the 800 x 600 pixels setting.
	
	5. In the Color Palette or Colors box, click High Color (16 bit).
	
	6. Click Advanced Properties or Advanced.
	
	7. On the Monitor tab, make sure that your monitor is selected. If an incorrect
	  monitor is selected, or if a standard or unknown monitor is selected, click
	  Change.
	
	8. Click the manufacturer and model of your monitor, and then click OK.
	
	  NOTE: If you are using Microsoft Windows 98, click Change, click Next, click
	  "Display a list of all drivers in a specific location, so you can select the
	  driver you want," and then click Next. Click the appropriate driver for your
	  monitor, click Next, click Next again, and then click Finish.
	
	9. Click Close, and then click OK.
	
	10. Close Control Panel.
	
	Microsoft Windows NT 4.0:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Move the Desktop Area slider to the 800 x 600 pixels setting.
	
	5. In the Color Palette box, click "65536 colors," and then click Test.
	
	6. Click OK, and then click Yes.
	
	7. Click OK, and then close Control Panel.
	
	Obtain an Updated Video Driver
	------------------------------
	
	If the issue continues to occur, contact the manufacturer of your video adapter
	for information about how to obtain and install the latest version of the video
	driver for your video adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: 1.00 msgame pandoras pb panbox ddraw initialize failed directdraw direct draw box
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbPandoraSearch kbPandorasBox
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
