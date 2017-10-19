---
layout: page
title: "Q159898: Games: Using 3D Hardware Acceleration with Diamond Stealth 3D"
permalink: /kb/159/Q159898/
---

## Q159898: Games: Using 3D Hardware Acceleration with Diamond Stealth 3D

	Article: Q159898
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Hellbender for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Hellbender or Monster Truck Madness with a Diamond Stealth 3D 2000
	video card, you may receive a message that there is either no 3D hardware
	support or no support for a specific 3D function when the "Use Hardware
	Accelerator" option is turned on in Dxsetup.exe.
	
	RESOLUTION
	==========
	
	To use hardware acceleration in the games listed at the top of this article, the
	display colors in Windows must be set to 16-bit (64K) high color. To change the
	color setting in Windows, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click 16-bit high color or 64K color.
	
	  NOTE: This may reduce your desktop area to a lower resolution.
	
	5. Click OK.
	
	6. Close, and then restart the game.
	
	When you start the game, you may receive the following message:
	
	  Your display is currently set to more than 256 colors. This will cause a
	  dramatic frame rate slowdown unless you are using a 3D hardware accelerator.
	  Please click the help button for instructions on how to change the display to
	  256 colors.
	
	Because you are using a 3D hardware accelerator, click the Don't Warn Me Again
	check box and ignore the message.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 direct x directx video draw 3D accelerate acceleration hardware 3-d three dimensional
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbtlc kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbMonsterTMSearch kbMonsterTM kbHellBender
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
