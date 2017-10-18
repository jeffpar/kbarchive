---
layout: page
title: "Q268328: ST2000: Printer Hangs When You Print Map and Directions"
permalink: kb/268/Q268328/
---

## Q268328: ST2000: Printer Hangs When You Print Map and Directions

	Article: Q268328
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbprint kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a the map and directions for a route that you created in
	Microsoft Expedia Streets and Trips 2000, the directions are printed, but when
	the printer prints the map, you may experience one of the following symptoms:
	
	- The printer may print a blank page instead of the map.
	
	- The printer may stop responding (hang).
	
	If you print the directions and the map separately, the directions and the map
	are printed successfully.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You run Streets and Trips 2000 on a Microsoft Windows 98-based computer.
	
	- The Unidrv.dll file on the computer is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the Unidrv.dll file from the Microsoft Windows
	98 CD-ROM:
	
	1. Insert the Windows 98 CD-ROM into your CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent the CD-ROM from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "sfc.exe" (without the quotation marks), and then click
	  OK.
	
	4. Click "Extract one file from installation disk."
	
	5. In the "Specify the system file you would like to restore" box, type
	  "unidrv.dll" (without the quotation marks), and then click Start.
	
	6. In the Restore From box, click the CD-ROM drive that contains the Windows 98
	  CD-ROM.
	
	7. In the Save File In box, type the following line, and then click OK
	
	  <drive>:\windows\system
	
	  where <drive> is the drive letter of the hard disk on which Windows is
	  installed.
	
	Additional query words: st2000 amap automap
	
	======================================================================
	Keywords          : kbprint kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
