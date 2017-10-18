---
layout: page
title: "Q106528: BUG: Error in WINTEE.PIF Causes &quot;Start-Up Directory Not Found&quot;"
permalink: kb/106/Q106528/
---

## Q106528: BUG: Error in WINTEE.PIF Causes &quot;Start-Up Directory Not Found&quot;

	Article: Q106528
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an attempt is made to build or debug an application from the Visual
	Workbench, a dialog box with the following message may appear:
	
	  Start-up directory not found
	  Check the application's PIF
	
	CAUSE
	=====
	
	The entry for the startup directory in the WINTEE.PIF is always \F32\BIN even if
	the product was installed in another directory. This causes an error when an
	application is built, if the Visual Workbench is started with /v option to make
	WINTEE.EXE visible.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Run the Windows PIF Editor.
	
	2. Open the file \F32\BIN\WINTEE.PIF.
	
	3. Correct the startup directory (it will probably show the default directory).
	
	4. Save changes in the PIF Editor.
	
	5. Compiling should work fine now (there is no need to restart Windows or the
	  Visual Workbench).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation versions
	1.0 and 1.0a for MS-DOS.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	The /v option when invoking the Visual Workbench makes WINTEE MS-DOS box
	visible.
	
	Additional query words: VWB nofpsnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
