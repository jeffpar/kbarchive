---
layout: page
title: "Q178632: Cannot Start Windows 95 After You Run DirectX Setup"
permalink: /kb/178/Q178632/
---

## Q178632: Cannot Start Windows 95 After You Run DirectX Setup

{% raw %}

	Article: Q178632
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv aoe fs98 fs6 kbimu msgame KbDirectXkbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DreamWorks Interactive, Lost World: Jurassic Park Chaos Island, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Attack of the Mutant, version 1.0 
	- DreamWorks Interactive, Dilbert's Desktop Games, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Escape from Horrorland, version 1.0 
	- DreamWorks Interactive, The Neverhood, version 1.0 
	- Microsoft Age of Empires, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install DirectX (included with the programs listed at the beginning of
	this article) and then restart your computer, Microsoft Windows 95 may not
	start.
	
	CAUSE
	=====
	
	This behavior can occur if the DirectX Setup program installs a video driver
	that does not work with your video adapter.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the original video driver. To do this, use one of
	the following methods.
	
	Use DirectX Setup (DirectX Versions x-y Only)
	---------------------------------------------
	
	Restore the original video driver using DirectX Setup. To do this, follow these
	steps:
	
	1. Restart the computer.
	
	2. When you see the "Starting Windows 95" message, press the F8 key.
	
	3. From the Startup menu, choose Safe Mode, and then press ENTER.
	
	4. When Windows starts in Safe mode, click OK.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. Double-click Add/Remove Programs.
	
	7. Double-click DirectX Drivers.
	
	8. Click Restore Display Driver, and then click OK.
	
	9. Restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Use the Display Tool in Control Panel
	-------------------------------------
	
	Use the Display tool in Control Panel to restore your original video driver. To
	do this:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key.
	
	2. From the Startup menu, choose Safe Mode, and then press ENTER.
	
	3. When Windows starts in Safe mode, click OK.
	
	4. Click Start, point to Settings, and then click Control Panel.
	
	5. Double-click Display.
	
	6. Click the Settings tab.
	
	7. Click Change Display Type or Advanced Properties.
	
	8. Click Change next to the Adapter Type box, or click Change on the Adapter
	  tab.
	
	9. Click Show Compatible Devices, and then click the correct video driver for
	  your video adapter.
	
	  NOTE: If you have an updated video driver supplied by your video adapter
	  manufacturer, click Have Disk, and then follow the instructions on the screen
	  to install the video driver.
	
	10. Click OK, click Close, and then click Close.
	
	11. Restart the computer.
	
	MORE INFORMATION
	================
	
	You may also need to change the refresh rate of your video adapter. Most Windows
	video drivers do not allow you to change the refresh rate of your monitor,
	although some third-party vendors offer programs that provide this
	functionality.
	
	To determine if your video driver allows you to change the refresh rate of your
	monitor:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display, and then click the Settings tab.
	
	3. Click Change Display Type, and then click the Adapter tab.
	
	  NOTE: If you are using Microsoft Windows 95 OEM Service Release 2 (OSR2),
	  click Advanced Properties, and then click the Adapter tab. If you are using
	  Microsoft Windows 98, click Advanced, and then click the Adapter tab.
	
	If you see a Refresh Rate box, you can manually change the refresh rate of your
	monitor. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display, click the Settings tab, and then click Change Display
	  Type.
	
	  NOTE: If you are using OSR2, click Advanced Properties. If you are using
	  Windows 98, click Advanced.
	
	3. On the Adapter tab, click Adapter Default in the Refresh Rate box.
	
	4. Click OK. If you are prompted to test the setting, click OK.
	
	5. If the setting appears to work correctly, click Yes to keep the setting. If
	  the setting does not work correctly, click No, and then follow the steps in
	  the "Reduce the Hardware Acceleration" section later in this article.
	
	6. Click OK, and then close Control Panel.
	
	DirectX includes updated video drivers for the most popular video adapters. In
	rare instances, a video driver may not be compatible with the specific brand or
	model of hardware in your computer.
	
	Additional query words: 6.0 5.0 3.0 error message locked hung
	
	======================================================================
	Keywords          : kbdisplay kbenv aoe fs98 fs6 kbimu msgame KbDirectX kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbCloseCombatSearch kbCARTRacingSearch kbAOESearch kbCloseCombat2 kbFlightSim2000 kbFlightSim98 kbDIDilbert kbDILostWorldJurassic kbDIGoosebumpAttack kbDIGoosebumpEscape kbDINeverhood kbCARTRacing kbDISearch kbDIGoosebumpsSearch kbSimSearch
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
