---
layout: page
title: "Q86341: Windows Err Msg: Setup Error #S020. Setup Is Unable..."
permalink: /kb/086/Q86341/
---

## Q86341: Windows Err Msg: Setup Error #S020. Setup Is Unable...

	Article: Q86341
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Setup for Windows version 3.1, you may receive the following error
	message if the WIN.INI file in the WINDOWS directory has a file size of zero
	bytes:
	
	  Setup Error #S020. Setup is unable to make changes to the Windows
	  configuration file, SYSTEM.INI. This may be due to one or both of the
	  following reasons.
	
	- Your system does not have the minimum conventional memory required to set up
	  Windows. (See your Setup documentation for memory requirements.)
	
	- Your SYSTEM.INI file is unusually large (above 32K)
	
	  Setup cannot continue. You must quit Setup, free some memory, and then run
	  Setup again.
	
	RESOLUTION
	==========
	
	Delete or rename the WIN.INI file in the Windows directory and run Windows Setup
	again.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
