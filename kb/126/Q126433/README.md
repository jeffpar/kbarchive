---
layout: page
title: "Q126433: Haunted House Err Msg: HHOU04E9 GPF in HHOUSE.EXE"
permalink: /kb/126/Q126433/
---

## Q126433: Haunted House Err Msg: HHOU04E9 GPF in HHOUSE.EXE

	Article: Q126433
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbfile kbimu msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Haunted House for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Haunted House on a Microsoft Windows 3.1x-based computer, you may
	receive the following error message:
	
	  HHOU04E9 caused a general protection fault in HHOUSE.EXE
	
	When you run Haunted House on a Microsoft Windows 95-based computer, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down...
	
	CAUSE
	=====
	
	This behavior can occur if you need to update your video driver.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your version of Windows.
	
	Windows 3.1x
	------------
	
	If your display adapter is based on an S3 chip set, contact your display adapter
	manufacturer to inquire about obtaining the latest version of the video driver.
	
	If your display adapter is not based on an S3 chip set, change your Windows video
	driver to the Super VGA (256 colors) driver. This driver is included with
	version 3.11 of Windows and Windows for Workgroups.
	
	For information about how to change your video driver in Windows 3.1x, please see
	your Windows printed documentation or online Help.
	
	Windows 95
	----------
	
	Contact your display adapter manufacturer to inquire about obtaining the latest
	version of the video driver.
	
	MORE INFORMATION
	================
	
	The Super VGA driver is included with version 3.11 of Microsoft Windows and
	Microsoft Windows for Workgroups. The Svga.exe update file is also available in
	the Drivers folder on the installation CD-ROM for Microsoft Scholastic's The
	Magic School Bus Series: Explores the Human Body.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbfile kbimu msgame kbfaq
	Technology        : kbZNotKeyword kbKidsSearch kbHauntedHouse
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
