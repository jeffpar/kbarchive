---
layout: page
title: "Q179926: DirectX: No Sound After You Install DirectX"
permalink: /kb/179/Q179926/
---

## Q179926: DirectX: No Sound After You Install DirectX

{% raw %}

	Article: Q179926
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsound aoe KbDirectX kbHardwarekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install DirectX or one of the programs listed at the beginning of this
	article (these programs all install DirectX), sounds may no longer be played on
	your computer.
	
	CAUSE
	=====
	
	This issue can occur if the DirectX Setup program installs a newer version of
	the Sound Blaster audio drivers when you are using a Cyrix MediaGX processor.
	The MediaGX processor emulates a Creative Labs Sound Blaster audio adapter.
	However, the Sound Blaster drivers included with DirectX do not work with the
	MediaGX processor.
	
	To verify that your computer contains a MediaGX processor, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System. If MediaGX is listed under Computer on the General tab,
	  the processor is a MediaGX.
	
	RESOLUTION
	==========
	
	To restore sound in Windows, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Double-click the Sound, Video And Game Controllers branch to expand it.
	
	5. Click the Sound Blaster device, and then click Remove. If there is more than
	  one Sound Blaster device, repeat this step to remove each Sound Blaster
	  device.
	
	6. If a game port device is listed, click the game port device, and then click
	  Remove.
	
	7. Click OK, close Control Panel, and then restart your computer.
	
	8. When Windows starts, it detects the MediaGX processor and installs the
	  correct audio drivers. If Windows does not detect the MediaGX processor,
	  install the audio drivers provided by Cyrix or your computer manufacturer.
	
	  For information about installing an audio driver, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q133291 Windows 95: How to Change an Audio Driver
	
	MORE INFORMATION
	================
	
	To enable sound in programs that use DirectSound (this includes the programs
	listed at the top of this article), contact your computer manufacturer or Cyrix
	to obtain the Cyrix MediaGX DirectX 5.0 patch. This patch resolves a conflict
	with DirectX 5.0 or 5.2 and the MediaGX processor.
	
	Additional query words: 1.00 Compaq Presario 2100 2200 ds cpu chip kbfaq
	
	======================================================================
	Keywords          : kbenv kbhw kbsound aoe KbDirectX kbHardware kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbCloseCombatSearch kbCARTRacingSearch kbAOESearch kbCloseCombat2 kbFlightSim98 kbCARTRacing kbSimSearch
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
