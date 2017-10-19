---
layout: page
title: "Q162125: Installation Error: Invalid Page Fault in Kernel32.dll"
permalink: /kb/162/Q162125/
---

## Q162125: Installation Error: Invalid Page Fault in Kernel32.dll

	Article: Q162125
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,3.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbsetup kbtlckbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Deadly Tide for Windows 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft GEX, version 1.0 
	- Microsoft Golf for Windows, version 3.0 
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	- Microsoft Soccer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install one of the programs listed at the beginning of this article,
	you may receive the following error message during installation of the
	DirectDraw drivers:
	
	  Installation Error: Invalid Page Fault In Kernel32.dll
	
	RESOLUTION
	==========
	
	To resolve this issue, cancel Setup and perform the following steps:
	
	1. Change the video driver to the Standard Video Adapter (VGA) driver. To do
	  this, use the appropriate method for your version of Windows.
	
	Windows 95 retail or OEM Service Release 2 (OSR-2):
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. On the Settings tab, click Change Display Type (retail) or Advanced
	     Properties (OSR-2).
	
	  d. Under Adapter Type, note the name of your current video driver, and then
	     click Change (retail), or on the Adapter tab, note the name of your
	     current video driver, and then click Change (OSR-2).
	
	  e. Click Show All Devices.
	
	  f. In the Manufacturers box, click (Standard Display Types).
	
	  g. In the Models box, click Standard Display Adapter (VGA), and then click
	     OK.
	
	  h. Click Close, and then click Close again.
	
	  i. When you are prompted to restart the computer, click Yes.
	
	Windows 98:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. On the Settings tab, click Advanced.
	
	  d. On the Adapter tab, note the name of your current video driver, and then
	     click Change.
	
	  e. Click Next, click "Display a list of all the drivers in a specific
	     location, so you can select the driver you want," and then click Next.
	
	  f. Click Show All Devices.
	
	  g. In the Manufacturers box, click (Standard Display Types).
	
	  h. In the Models box, click Standard Display Adapter (VGA), and then click
	     OK.
	
	  i. Click Next three times, and then click Finish.
	
	  j. Click Close, and then click Close again.
	
	  k. When you are prompted to restart the computer, click Yes.
	
	2. Run DirectX Setup (Dxsetup.exe) from the installation CD-ROM for the program.
	  To do this:
	
	  a. Click Start, point to Find, and then click "Files or Folders".
	
	  b. In the "Look in" box, click cd-rom, where cd-rom is the drive letter for
	     the CD-ROM drive that contains the installation CD-ROM for the program.
	
	  c. In the Named box, type "dxsetup.exe" (without the quotation marks), and
	     then click Find Now.
	
	  d. In the list of found files, double-click the Dxsetup.exe file to start
	     DirectX Setup.
	
	  e. If you are prompted to install or reinstall DirectX, click Install or
	     Reinstall DirectX.
	
	  f. When you are prompted to restart your computer, do so.
	
	3. When Windows restarts, repeat step 1 to change the video driver back to the
	  original video driver, and then restart the computer.
	
	4. Install the program.
	
	Additional query words: 1.00 3.00 6.00 games video fs95 fs6 flight simulator hellbender gex deadly tide nba full court press fcp golf ipf setup kernel install directx direct draw
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbsetup kbtlc kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolfSearch kbMonsterTMSearch kbGEX kbMonsterTM kbHellBender kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbFlightSim95 kbSoccer kbDeadlyTide kbNBAFullCourtPress kbGolf300 kbSimSearch
	Version           : WINDOWS:1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
