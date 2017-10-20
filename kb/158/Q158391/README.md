---
layout: page
title: "Q158391: Games: Unable to Hear Sounds in Game"
permalink: /kb/158/Q158391/
---

## Q158391: Games: Unable to Hear Sounds in Game

{% raw %}

	Article: Q158391
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsound kbimukbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Deadly Tide for Windows 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft GEX, version 1.0 
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Soccer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a game that requires DirectSound, sounds in the game may not be
	played.
	
	Environmental sounds in Microsoft Windows and sound files in Media Player are
	still played.
	
	CAUSE
	=====
	
	This behavior can occur if a real-mode (16-bit) sound driver for your sound card
	is installed on your computer.
	
	Programs that use DirectSound may not function properly when a real-mode sound
	driver is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove or remark out the sound driver lines in the
	Autoexec.bat and Config.sys files. To do this, use the appropriate method for
	your version of Microsoft Windows.
	
	Microsoft Windows 98
	--------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the Config.sys tab.
	
	4. Click to clear the check box for each line that refers to your sound driver.
	
	5. Click the Autoexec.bat tab.
	
	6. Click to clear the check box for each line that refers to your sound driver.
	
	7. Click OK.
	
	8. Restart the computer.
	
	Microsoft Windows 95
	--------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. In the Autoexec.bat window, type "REM" (without the quotation marks) at the
	  beginning of each line that refers to your sound driver.
	
	4. On the Window menu, click 4 C:\Config.sys.
	
	5. In the Config.sys window, type "REM" (without the quotation marks) at the
	  beginning of each line that refers to your sound driver.
	
	6. On the File menu, click Exit.
	
	  If you are prompted to save the changes, click Yes for each prompt.
	
	7. Restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot sound problems in
	DirectX-enabled games, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q157487 Games: Troubleshooting Sound Problems
	
	Additional query words: 1.00 6.00 Hellbender truck directX sound hear monster deadly tide gex close combat soccer fs95 fs6
	
	======================================================================
	Keywords          : kbsound kbimu kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbZNotKeyword kbMonsterTMSearch kbGEX kbMonsterTM kbHellBender kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbFlightSim95 kbSoccer kbDeadlyTide kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
