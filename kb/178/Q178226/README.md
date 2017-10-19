---
layout: page
title: "Q178226: FS98: Error Message: Invalid Page Fault In Module Fltsim98.exe"
permalink: /kb/178/Q178226/
---

## Q178226: FS98: Error Message: Invalid Page Fault In Module Fltsim98.exe

	Article: Q178226
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Flight Simulator 98 or Flight Simulator for Windows
	95, you may receive the following error message:
	
	  FLTSIM98 caused an invalid page fault in module FLTSIM98.exe
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- You installed Flight Simulator for Windows 95 in the same folder in which
	  Flight Simulator 98 is installed.
	
	- A scenery or aircraft file is damaged or the wrong version.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove both versions of Flight Simulator, delete the
	Flight Simulator folder, and then reinstall both programs into separate folders.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, double-click Microsoft Flight Simulator 98.
	
	4. When you are prompted to confirm the removal of Flight Simulator 98, click
	  OK.
	
	5. On the Install/Uninstall tab, double-click Microsoft Flight Simulator for
	  Windows 95.
	
	6. Click Remove All, and then follow the Setup instructions.
	
	7. Delete the Flight Simulator folder. The default location for the Flight
	  Simulator 98 folder is Program Files\Microsoft Games\Flight Simulator. If
	  this is not the folder into which you installed both version of Flight
	  Simulator, delete the folder that contained the installations of Flight
	  Simulator 98 and 95.
	
	  For information about deleting folders in Microsoft Windows, click Start,
	  click Help, and then click the Index tab. Type "deleting" (without the
	  quotation marks), click the Files Or Folders Help topic, and then click
	  Display.
	
	8. Reinstall both versions of Flight Simulator by following these steps:
	
	  a. Insert either Flight Simulator CD-ROM into the CD-ROM drive.
	
	     If the Auto Insert Notification feature is enabled, Setup begins
	     automatically. Follow the Setup program instructions.
	
	  b. If Setup does not start automatically, click Start, point to Settings, and
	     then click Control Panel.
	
	  c. Double-click Add/Remove Programs.
	
	  d. On the Install/Uninstall tab, click Install, and then click Finish. Follow
	     the Setup program instructions.
	
	9. Repeat step 8 to install the other version of Flight Simulator.
	
	  NOTE: When you are prompted to choose a location for the second version of
	  Flight Simulator, choose a different folder than you selected in the first
	  installation.
	
	Additional query words: 1.00 flightsim fltsim flt sim fs95 fs98 IPF GPF general protection autorun
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim98 kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
