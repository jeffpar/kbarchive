---
layout: page
title: "Q94164: Incorrect Output with HP LaserJet 4 and Windows Accessories"
permalink: kb/094/Q94164/
---

## Q94164: Incorrect Output with HP LaserJet 4 and Windows Accessories

	Article: Q94164
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing from the Microsoft Windows Accessories applications (Notepad, Calendar,
	Cardfile) to a Hewlett-Packard (HP) LaserJet 4 printer using the HP LaserJet
	4/4M printer driver (HPPCL5E.DRV) version 31.1.03 may cause incorrect output,
	such as inconsistent margins.
	
	A general protection (GP) fault may also occur when printing from these
	accessories.
	
	
	CAUSE
	=====
	
	Notepad, Cardfile, and Calendar do not support a resolution setting of 600 dpi.
	Therefore, the LaserJet 4 printer may fail to print correctly if the resolution
	is set to 600 dpi.
	
	WORKAROUND
	==========
	
	- Select 300 dpi printer as the resolution in the Printer Setup.
	
	-or-
	
	- Use the HP LaserJet III printer driver. (This is the least-desired method
	  because of the absence of the resolution enhancement option built into the
	  newer HP LJ4 driver.)
	
	- Change the left and right margin each to 1 inch.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: gpf 3.10 3.11 win31 laserjet4 lj4 HP4 series hpiv hp iv hppcl5 4 WinLaser
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
