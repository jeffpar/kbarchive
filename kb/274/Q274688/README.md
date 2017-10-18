---
layout: page
title: "Q274688: Metal Gear Solid: How to Troubleshoot Game Controller Issues"
permalink: kb/274/Q274688/
---

## Q274688: Metal Gear Solid: How to Troubleshoot Game Controller Issues

	Article: Q274688
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu msgame
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metal Gear Solid 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot game controller issues in Metal Gear
	Solid.
	
	When you play Microsoft Metal Gear Solid, your game controller may not respond,
	or it may behave erratically.
	
	MORE INFORMATION
	================
	
	To troubleshoot game controller issues in Metal Gear Solid, use the following
	methods in the order in which they are listed.
	
	Confirm That Your Game Controller Is Assigned to Controller ID 1
	----------------------------------------------------------------
	
	Many games do not recognize game controllers that are not assigned to Controller
	ID 1. To verify that your game controller is assigned to Controller ID 1:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. Click the Advanced tab.
	
	4. If the game controller that you want to use is not assigned to ID 1, click
	  Change.
	
	  If the game controller that you want to use is assigned to ID 1, proceed to
	  the next method.
	
	5. In the Game Controllers box, click the game controller that you want to use,
	  and then click the Up Arrow or Down Arrow to change the Selected ID value to
	  1.
	
	6. Click OK, and then click OK again.
	
	7. Close Control Panel.
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce the Hardware Sound Acceleration Level Setting
	----------------------------------------------------
	
	To reduce the Hardware Sound Acceleration Level setting:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under DirectX Features, move the Hardware Sound Acceleration Level slider all
	  the way to the left (the "No acceleration" setting).
	
	5. Click Exit.
	
	NOTE: The DirectX Diagnostic Tool (Dxdiag.exe) is installed with Microsoft
	DirectX 6.0 or later. DirectX 7.0a is installed with Metal Gear Solid.
	
	If the issue continues to occur, proceed to the next method.
	
	Obtain and Install Updated Device Drivers
	-----------------------------------------
	
	Contact the manufacturer of your game controller to inquire about how to obtain
	and install the latest version of the driver for your game controller. If you
	connect your game controller to a game port on your sound card, contact the
	manufacturer of your sound card to inquire about how to obtain and install the
	latest version of the sound driver for your sound card.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: msgame mgs trouble shoot tshoot
	
	======================================================================
	Keywords          : kbimu msgame 
	Technology        : kbGamesSearch kbMetalGearSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
