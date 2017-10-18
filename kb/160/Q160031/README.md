---
layout: page
title: "Q160031: Games Err Msg: Cannot Find Setup.exe or One of Its Components"
permalink: kb/160/Q160031/
---

## Q160031: Games Err Msg: Cannot Find Setup.exe or One of Its Components

	Article: Q160031
	Product(s): Microsoft Home Games
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetupkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Deadly Tide for Windows 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft GEX, version 1.0 
	- Microsoft Golf for Windows, version 3.0 
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	- Microsoft Soccer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive one of the following error messages:
	
	   - Cannot find the file drive:\Setup.exe or one of its components.
	
	   - Cannot find the file drive:\filename
	
	   - Cannot copy the file drive:\filename
	
	where drive is the drive letter of the CD-ROM drive and filename can be any file.
	
	CAUSE
	=====
	
	This behavior can occur if a real mode (16-bit) driver for your CD-ROM drive is
	installed on your computer.
	
	Protected mode (32-bit) CD-ROM drivers are required to install the programs
	listed at the beginning of this article.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your CD-ROM drive manufacturer to inquire about
	how to obtain and install a protected mode (32-bit) CD-ROM driver for Microsoft
	Windows 95/98.
	
	For information about how to contact your CD-ROM drive manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	To determine if you are using a real-mode CD-ROM driver:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Locate the CDROM branch in the device tree.
	
	  If the CDROM branch does not exist, you are using a real-mode CD-ROM driver.
	
	  If this line does exist and the issue continues to occur, both a real mode
	  CD-ROM driver and a protected mode CD-ROM driver may be installed.
	
	To determine if a real mode CD-ROM driver is installed in addition to a protected
	mode CD-ROM driver, examine the Autoexec.bat file for a line that refers to the
	Mscdex.exe file. To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. In the Autoexec.bat window, look for any lines that refer to the Mscdex.exe
	  file.
	
	  If a line that refers to the Mscdex.exe file exists, a real-mode CD-ROM driver
	  is probably installed on your computer. To resolve this issue, see your
	  hardware documentation, or contact your CD-ROM drive manufacturer for
	  information about how to remove the real-mode driver for your CD-ROM drive.
	
	Additional query words: 1.00 3.00 setup hellbender flt sim flight simulator game error install real mode gex fs6 fs95
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolfSearch kbGEX kbHellBender kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbFlightSim95 kbSoccer kbDeadlyTide kbNBAFullCourtPress kbGolf300 kbSimSearch
	Version           : :1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
