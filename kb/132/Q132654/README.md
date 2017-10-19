---
layout: page
title: "Q132654: Setup Error Message: You Need to Run Setup from MS-DOS Mode"
permalink: /kb/132/Q132654/
---

## Q132654: Setup Error Message: You Need to Run Setup from MS-DOS Mode

	Article: Q132654
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 Setup from within Windows 95, you may receive the
	following error message:
	
	  In order to upgrade this version of Windows, you must run Setup in MS-DOS
	  mode. To do this, click Start, click Shut Down, and choose Restart The
	  Computer In MS-DOS Mode. Then run Setup from the MS-DOS prompt.
	
	CAUSE
	=====
	
	Setup has determined that the Plug and Play BIOS in the computer is no longer
	supported. Setup cannot disable the Plug and Play BIOS from within Windows 95,
	so you are prompted to run Setup from MS-DOS mode.
	
	RESOLUTION
	==========
	
	Exit Setup, restart your computer in MS-DOS mode, and then run Setup again. Or,
	run Setup from an earlier version of Windows (such as Windows version 3.1).
	
	MORE INFORMATION
	================
	
	You may want to contact your computer manufacturer about obtaining a more recent
	Plug and Play BIOS that is supported in Windows 95.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
