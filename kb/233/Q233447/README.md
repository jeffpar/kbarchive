---
layout: page
title: "Q233447: MSBP: &quot;Please Insert CD-ROM&quot; Error Message When You Eject CD-ROM"
permalink: /kb/233/Q233447/
---

## Q233447: MSBP: &quot;Please Insert CD-ROM&quot; Error Message When You Eject CD-ROM

	Article: Q233447
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you eject the Microsoft Office 2000 Disc 2 CD-ROM while Microsoft Business
	Planner is running, the following error message may appear on a blue screen
	
	  Please insert CD-ROM O9PRMCD02
	  With Serial Number <####-####> in Drive <cd-rom>:
	
	  If the CD-ROM is still in the drive, it may require cleaning.
	  Press ENTER for OK or ESC to Cancel: OK
	
	where <####-####> is the serial number of the Microsoft Office 2000 Disc 2
	CD-ROM and <cd-rom> is the drive letter of your CD-ROM drive.
	
	If you press ENTER, this error message reappears on the screen.
	
	If you press ESC, you receive the following error message:
	
	  Unable to find Business Planner. Please insert Microsoft Office 2000 Disc 2
	  in the CD-ROM drive or check with your system administrator to ensure that
	  the network path to Business Planner is valid.
	
	If you click OK or Exit, you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive one of the following error messages:
	
	  Msbp caused an exception c0000006H in module Msbp.exe.
	
	  Msbp caused an invalid page fault in module Krnl386.exe.
	
	CAUSE
	=====
	
	This behavior can occur if you configure Business Planner to run from the Office
	2000 Disc 2 CD-ROM.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, use one of the following methods:
	
	- Configure Business Planner to run from your hard disk.
	
	- Do not eject the Office 2000 Disc 2 CD-ROM while Business Planner is running.
	
	Additional query words: msbp crash hang compact disc
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
