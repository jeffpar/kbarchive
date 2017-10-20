---
layout: page
title: "Q185835: DirectX: Multiple Images on Startup Menu in DirectX-Based Games"
permalink: /kb/185/Q185835/
---

## Q185835: DirectX: Multiple Images on Startup Menu in DirectX-Based Games

{% raw %}

	Article: Q185835
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbtlc kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the games listed at the beginning of this article, you may
	see multiple overlapping images on the startup menu.
	
	CAUSE
	=====
	
	This issue can occur for any of the following reasons:
	
	- Your computer's display settings are configured for an incorrect monitor.
	
	- The refresh rate settings for your monitor are incorrect.
	
	- The graphics hardware acceleration setting is incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue use the following methods.
	
	Configure Display Settings to Use the Correct Monitor
	-----------------------------------------------------
	
	To configure your computer's display settings to use the correct monitor:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Change Display Type.
	
	  NOTE: If you are using Microsoft Windows 95 OEM Service Release 2 (OSR2),
	  click Advanced Properties.
	
	4. Under Monitor, click Change.
	
	  NOTE: If you are using OSR2, click the Monitor tab, and then click Change.
	
	5. Click Show All Devices.
	
	6. In the Manufacturers box, click your monitor manufacturer.
	
	7. In the Models box, click your monitor model.
	
	8. Click OK, and then click Close.
	
	9. Click OK. If you are prompted to restart the computer, click Yes.
	
	If the issue continues to occur, change the refresh rate of your monitor.
	
	Change the Refresh Rate of Your Monitor
	---------------------------------------
	
	NOTE: You cannot change the refresh rate of your monitor using most Windows 95
	video drivers. However, some third-party vendors provide software utilities that
	provide this functionality.
	
	To determine if you can change the refresh rate of your monitor:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Change Display Type.
	
	  NOTE: If you are using OSR2, click Advanced Properties.
	
	  If you see a Refresh Rate box on the Adapter tab, you can manually change the
	  refresh rate for your monitor.
	
	  If you do not see an Adapter tab or a Refresh Rate box, follow the steps in
	  the "Reduce the Hardware Acceleration" method later in this article.
	
	To change the refresh rate for your monitor:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Change Display Type.
	
	  NOTE: If you are using OSR2, click Advanced Properties.
	
	4. On the Adapter tab, click Adapter Default in the Refresh Rate box.
	
	5. Click OK. If you are prompted to test the setting, click OK.
	
	6. If the setting works correctly, click Yes to keep the setting. If the setting
	  does not work correctly, click No, and then follow the steps in the "Reduce
	  the Hardware Acceleration" method later in this article.
	
	7. Click OK, and then close Control Panel.
	
	Reduce the Hardware Acceleration
	--------------------------------
	
	To reduce the graphics hardware acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	NOTE: Microsoft recommends that you do not lower the hardware acceleration all
	the way to None because some video cards do not work with this setting.
	
	Additional query words: dx6 dx direct-x msgame duplicate layered main screen
	
	======================================================================
	Keywords          : kbdisplay kbenv kbtlc kbimu msgame kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf98 kbGolf99 kbGolfSearch kbOutwarsSearch kbOutwars kbCloseCombatSearch kbAOESearch kbCloseCombat2 kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
