---
layout: page
title: "Q249642: Golf 1999 Error Message: Run Time Error '11' Division by Zero"
permalink: /kb/249/Q249642/
---

## Q249642: Golf 1999 Error Message: Run Time Error '11' Division by Zero

	Article: Q249642
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound w_golf kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 1999 Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Golf 1999 Edition, you may receive the following error
	message:
	
	  Run Time Error '11' Division by Zero.
	
	CAUSE
	=====
	
	This behavior can occur if there is a conflict between Golf 99 and your sound
	card.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Update Your Sound Card Drivers
	------------------------------
	
	You may be able to resolve this issue by downloading and installing the latest
	sound card driver available for your sound card.
	
	For information about how to contact your sound card manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Test to determine if the issue is resolved. If the issue continues to occur,
	proceed to the next method.
	
	Install the Latest Version of Microsoft DirectX
	-----------------------------------------------
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	Test to determine if the issue is resolved. If the issue continues to occur,
	proceed to the next method.
	
	Disable Hardware Sound Acceleration
	-----------------------------------
	
	To disable hardware sound acceleration:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Move the Hardware Sound Acceleration Level slider all the way to the left
	  (the "No acceleration" setting).
	
	5. Click Exit.
	
	Test to determine if the issue is resolved. If the issue continues to occur,
	proceed to the next method.
	
	Turn Off Commentary and Game Sounds
	-----------------------------------
	
	To turn off commentary and game sounds in Golf 99:
	
	1. On the Golf 99 startup screen, click Options.
	
	2. Click Game Preferences.
	
	3. Click to change the Commentary box to No.
	
	4. Click to change the Game Sounds box to No.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgolf99 runtime
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound w_golf kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbGolf99 kbGolfSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
