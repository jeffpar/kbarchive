---
layout: page
title: "Q106732: BUG: Dependencies Not Scanned If Include Statement Is Labeled"
permalink: kb/106/Q106732/
---

## Q106732: BUG: Dependencies Not Scanned If Include Statement Is Labeled

	Article: Q106732
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dependencies are not scanned for include files containing statement labels (for
	example, line numbers). Also, the included file doesn't appear in the Visual
	Workbench file list.
	
	RESOLUTION
	==========
	
	Do not use statement labels with include statements.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of the article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate this problem, follow these steps:
	
	1. In the Visual Workbench, create a project containing the sample program; it
	  will scan dependencies for "FLIB.FI" but not for "FLIB.FD."
	
	2. Display the File List (click the icon below the File menu). FLIB.FI will be
	  listed but not FLIB.FD.
	
	NOTE: If the include files are not being modified, and if the project is large
	and is modified often, placing statement labels on include statements will speed
	up the process of scanning dependencies.
	
	Sample Code
	-----------
	
	        include 'flib.fi'
	    2   include 'flib.fd'
	        print *, 'Hello'
	        end
	
	Additional query words: 1.00 slow scan disable
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS
	Version           : :1.0
	
	=============================================================================
	
