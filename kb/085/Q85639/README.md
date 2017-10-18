---
layout: page
title: "Q85639: Manual Feed Selection Not Working in the QMS PS2200"
permalink: kb/085/Q85639/
---

## Q85639: Manual Feed Selection Not Working in the QMS PS2200

	Article: Q85639
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Manual Feed selection for the QMS PS2200 (using the Q2200510.WPD, dated
	3/10/92, and PSCRIPT.DRV versions 3.5 and 3.51 drivers) does not function in
	Microsoft Windows operating system version 3.1. It will output blank sheets of
	paper.
	
	WORKAROUND
	==========
	
	When you want to use manual feed paper, use a different PostScript printer that
	has a similar feature set, such as the Apple LaserWriter IINT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows version 3.1
	Q2200510.WPD driver dated 3/10/92. We are researching this problem and will post
	new information here as it becomes available.
	
	MORE INFORMATION
	================
	
	When you select most of the PostScript printers that come with Windows 3.1, you
	are actually installing two files. The first file is PSCRIPT.DRV, which is the
	PostScript driver. The second is a Windows printer definition file (.WPD) that
	further defines the PostScript driver with usable features such as paper sizes
	and sources.
	
	Additional query words: 3.10 qms ps 2200 qms-ps PSCRIP.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
