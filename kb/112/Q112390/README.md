---
layout: page
title: "Q112390: FIX: BK1506 : Cannot Open File : Permission Denied"
permalink: /kb/112/Q112390/
---

## Q112390: FIX: BK1506 : Cannot Open File : Permission Denied

	Article: Q112390
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbLangFortran
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application cannot be rebuilt when its browser file is open. Attempting to do
	so generates the following error message:
	
	  BSCMAKE: error BK1506 : cannot open file 'xxxxx.bsc': Permission denied
	  BSCMAKE returned code: 4
	
	RESOLUTION
	==========
	
	Close the .BSC file and then rebuild the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	for Windows NT, version 1.0. This problem was fixed in Microsoft FORTRAN
	PowerStation, version 4.0.
	
	MORE INFORMATION
	================
	
	To reproduce this error, do the following:
	
	1. Open a source file by choosing Open from the File menu.
	
	2. Build the executable (make sure you produce browser output) by choosing Build
	  from the Project menu.
	
	3. Open the Browser database.
	
	4. Rebuild All.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kberrmsg kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
