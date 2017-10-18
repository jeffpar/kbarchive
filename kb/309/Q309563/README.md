---
layout: page
title: "Q309563: Games: Game Stops Responding a Few Minutes Into Play"
permalink: kb/309/Q309563/
---

## Q309563: Games: Game Stops Responding a Few Minutes Into Play

	Article: Q309563
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Links 2001 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use one of the products listed in the beginning of this article, the
	game stops responding a few minutes into the play.
	
	CAUSE
	=====
	
	This issue can occur when the virtual device driver Viagart.vxd is automatically
	loaded at startup.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable Viagart.vxd. To do this, use one of the following
	methods.
	
	Disable Viagart.vxd in Windows Millennium Edition-based Computers
	-----------------------------------------------------------------
	
	1. Start the System Configuration Utility (Msconfig.exe). To do this, follow
	  these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "Msconfig" (without the quotation marks), and then
	     press ENTER.
	
	2. Click the Static VxDs tab.
	
	3. Clear the Viagart.vxd check box.
	
	4. Click OK to quit the System Configuration Utility.
	
	Disable Viagart.vxd in Windows 9x-based Computers
	-------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedit.exe). To do this, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "Regedit" (without the quotation marks), and then
	     press ENTER.
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VIAGART
	
	3. On the Edit menu, click Delete.
	
	4. Click Yes to confirm that you want to delete the key.
	
	5. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	
	The virtual device driver Viagart.vxd enables AGP (Accelerated Graphics Port)
	Fast Writes.
	
	Additional query words: msgame quits
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbGolfSearch kbFlightSim2000 kbLinks2001 kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
