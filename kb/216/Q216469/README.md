---
layout: page
title: "Q216469: Combat FS Err Msg: Invalid Page Fault in Module Simsui.dll"
permalink: /kb/216/Q216469/
---

## Q216469: Combat FS Err Msg: Invalid Page Fault in Module Simsui.dll

	Article: Q216469
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a pilot on the Campaigns screen in Microsoft Combat
	Flight Simulator, you may receive the following error message:
	
	  Combatfs caused an invalid page fault in module Simsui.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Courier New font is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the the Courier New font to the
	Windows\Fonts folder. To do this, use the appropriate method for your operating
	system.
	
	Microsoft Windows 98
	--------------------
	
	To restore the Courier New font in Windows 98, follow these steps:
	
	1. Insert the Windows 98 CD-ROM into your CD-ROM drive. Press and hold down the
	  SHIFT key as you insert the Windows 98 CD-ROM to prevent the CD-ROM from
	  starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "sfc.exe" (without the quotation marks), and then click
	  OK.
	
	4. Click "Extract one file from installation disk."
	
	5. In the "Specify the system file you would like to restore" box, type
	  "cour.ttf" (without the quotation marks), and then click Start.
	
	6. In the Restore From box, click the CD-ROM drive that contains the Windows 98
	  CD-ROM.
	
	7. In the Save File In box, type the following line, and then click OK
	
	  <drive>:\windows\fonts
	
	  where <drive> is the drive letter of the hard disk on which Windows is
	  installed.
	
	Microsoft Windows 95
	--------------------
	
	For information about how to restore the Courier New font in Windows 95, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q152974 How to Restore the Default Fonts in Windows 95
	
	Additional query words: 1.00 msgame combatfs cfs
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
