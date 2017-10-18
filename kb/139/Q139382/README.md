---
layout: page
title: "Q139382: Cannot Install CorelDraw 3.0 Revision B with DriveSpace 3"
permalink: kb/139/Q139382/
---

## Q139382: Cannot Install CorelDraw 3.0 Revision B with DriveSpace 3

	Article: Q139382
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install CorelDraw version 3.0 revision B on a Windows 95-based
	computer that is running DriveSpace 3, your computer may seem to stop responding
	(hang) after you receive the following message from CorelDraw Setup:
	
	  CorelDraw is checking for space available on your drives
	
	To close the hung Setup program, you must press CTRL+ALT+DELETE and use the Close
	Program dialog box.
	
	CAUSE
	=====
	
	DriveSpace 3 uses 32K clusters on the hard disk. CorelDraw 3.0 revision B cannot
	be installed on drives with 32K clusters.
	
	Earlier versions of DoubleSpace and DriveSpace do not use 32K clusters for disk
	compression.
	
	RESOLUTION
	==========
	
	Corel Corporation has released an update (called Instfx.exe) that resolves this
	problem. Please contact Corel Corporation to obtain this update.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
