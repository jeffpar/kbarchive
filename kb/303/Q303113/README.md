---
layout: page
title: "Q303113: Asheron's Call: No Sound in Game, Sound in Windows Works"
permalink: kb/303/Q303113/
---

## Q303113: Asheron's Call: No Sound in Game, Sound in Windows Works

	Article: Q303113
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing Asheron's Call, there may not be any sounds in the game.
	Sounds work as expected in other programs.
	
	CAUSE
	=====
	
	This behavior can occur when one of the following conditions is true:
	
	- Microsoft DirectX is not installed.
	
	- The sound card does not have current drivers installed.
	
	- The DirectX Hardware Sound Acceleration Level is set too high.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following methods.
	
	Method 1: Check Version of DirectX
	----------------------------------
	
	1. Browse to the following Microsoft Web site to see the current version of
	  DirectX:
	
	  http://www.microsoft.com/directx/
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "DXDIAG" (without the quotation marks), and then click
	  OK.
	
	4. If you receive an error message, install the latest version of DirectX from
	  the Web site listed in step 1.
	
	  -OR-
	
	  If the DirectX Diagnostic Tool starts, look on the System tab in the System
	  Information dialog box for your DirectX version. If your version is earlier
	  than the current version, install DirectX from the Web site listed earlier in
	  this article.
	
	If this fails to correct the problem, proceed with the next method.
	
	Method 2: Test DirectX Sound
	----------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "DXDIAG" (without the quotation marks), and then click
	  OK.
	
	3. If the Sound tab is missing in the DirectX Diagnostic Tool, install new sound
	  card drivers.
	
	4. On the Sound tab, click Test DirectSound, click Yes, and then follow the
	  instructions to test all types of sound formats.
	
	5. If this test fails, install new sound card drivers.
	
	For additional information about installing new drivers to solve sound problems
	in Asheron's Call, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q297169 Asheron's Call: The Game Stops Responding or Quits Unexpectedly
	
	Method 3: Reduce Hardware Sound Acceleration Level
	--------------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "DXDIAG" (without the quotation marks), and then click
	  OK.
	
	3. On the Sound tab, in the DirectX Features section, change the Hardware Sound
	  Acceleration Level to "No acceleration".
	
	4. Quit the DirectX Diagnostic Tool, and then start Asheron's Call. If sounds
	  can now be heard, you can repeat these steps and increase the hardware sound
	  acceleration level setting.
	
	Additional query words: msgame asherons
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
