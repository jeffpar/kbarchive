---
layout: page
title: "Q82577: No Environment Variable in PC Tools for Windows Causes GPF"
permalink: /kb/082/Q82577/
---

## Q82577: No Environment Variable in PC Tools for Windows Causes GPF

	Article: Q82577
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Microsoft Windows versions 3.0 and 3.1, if the PCTOOLS environment variable
	is not properly set before running one of the PC Tools tools, a general
	protection (GP) fault will occur in that tool's .EXE file.
	
	Microsoft has confirmed this to be a problem in PC Tools. Central Point Software,
	the maker of PC Tools, is responsible for correcting this problem.
	
	MORE INFORMATION
	================
	
	PC Tools relies on the PCTOOLS environment variable to run properly. PC Tools
	uses this variable to locate its data files. If this variable is not specified
	in the AUTOEXEC.BAT file or if there is too little environment space to set it,
	PC Tools will not be able to run correctly.
	
	PC Tools is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 3.1 PC-Tools third party PCTools WNLAUNCH
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
