---
layout: page
title: "Q152192: Err Msg: Setup Error 258. Your Setup Files May Be Damaged..."
permalink: kb/152/Q152192/
---

## Q152192: Err Msg: Setup Error 258. Your Setup Files May Be Damaged...

	Article: Q152192
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimukbfaq
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install one of the programs listed at the top of this article, you may
	receive one or both of the following error messages:
	
	  Setup Error 258. Your Setup files may be damaged. Try restarting the Setup
	  program.
	
	  -or-
	
	  Setup.exe caused a General Protection Fault in module Msvfw32.dll.
	
	NOTE: In some instances you may not receive the second error message referring to
	the Msvfw32.dll file.
	
	CAUSE
	=====
	
	This behavior can occur if the Msvfw32.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the Msvfw32.dll file from your hard disk, and then
	extract a new copy of the Msvfw32.dll file from your original Windows disks or
	CD-ROM to the Windows\System folder. To do this, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "msvfw32.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click the Msvfw32.dll file, and then click
	  Delete.
	
	4. Close the Find: Files Named Msvfw32.dll window.
	
	5. Extract a new copy of the Msvfw32.dll file to the Windows\System folder. You
	  can find the Msvfw32.dll file in the following locations:
	
	   - The Win95_08.cab cabinet file on the Windows 95 CD-ROM
	
	   - The Win95_12.cab cabinet file on the Windows 95 OEM Service Release 2
	     (OSR2) CD-ROM
	
	   - The Win95_08.cab cabinet file on the Windows 95 DMF disks
	
	   - The Win95_13.cab cabinet file on the Windows 95 non-DMF disks
	
	  If you are using Microsoft Windows 98, you can find the Msvfw32.dll file in
	  the following location:
	
	   - The Win98_36.cab cabinet file on the Windows 98 CD-ROM.
	
	  For information about how to use the Extract tool, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	6. Restart the computer.
	
	Additional query words: 1.00 2.00 mskids 3-d three 3dmm movies cw2 gpf
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbCreativeWriter200 kb3dMovieMaker
	Version           : :1.0,2.0
	Issue type        : kbhowto
	
	=============================================================================
	
