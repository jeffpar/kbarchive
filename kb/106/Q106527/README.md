---
layout: page
title: "Q106527: FIX: Error in /FILE&#36;INFO/ in FLIB.FI and FLIB.FD"
permalink: /kb/106/Q106527/
---

## Q106527: FIX: Error in /FILE&#36;INFO/ in FLIB.FI and FLIB.FD

{% raw %}

	Article: Q106527
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Data corruption may occur after a call to GETFILEINFOQQ due to the NAME field of
	/FILE$INFO/ in FLIB.FI and FLIB.FD being declared character*13 instead of
	character*255. In some cases the following error:
	
	  run-time error F6316: array already allocated
	
	may be produced.
	
	CAUSE
	=====
	
	Page 313 of the FORTRAN PowerStation "Language Guide" shows the structure of
	/FILE$INFO/, which is used to return information about the file that matches the
	search criteria. The NAME (of file) field is declared as character*255. However,
	the NAME field is declared only as character*13 in FLIB.FD and FLIB.FI.
	Therefore, using /FILE$INFO/ from FLIB.FD with GETFILEINFOQQ will cause data
	corruption because the character*13 field overflows.
	
	RESOLUTION
	==========
	
	In F32\INCLUDE\FLIB.FI and F32\INCLUDE\FLIB.FD change
	
	  CHARACTER*13 NAME ! Filename
	
	to the following:
	
	  " CHARACTER*255 NAME ! Filename " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version
	1.0. This problem was corrected in FORTRAN PowerStation version 1.0a.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem (before making the above correction):
	
	1. In the Visual Workbench (VWB), build F32\SAMPLES\RUNTIME\RUNTIME.FOR with the
	  project in debug mode.
	
	2. Set a breakpoint on line 166:
	
	        length = GETFILEINFOQQ(files, info, handle)
	
	3. "GO" (F5), and then enter "*.FOR" (without the quotation marks) in the "F32
	  DEBUG" window.
	
	4. Open the Locals window (choose Locals from the Windows menu). Note the values
	  of some integers such as IMIN (should be zero).
	
	5. Single step (F10). Note that IMIN now equals 8224 (hexadecimal 2020).
	
	6. In F32\INCLUDE\FLIB.FI and F32\INCLUDE\FLIB.FD, change NAME from CHARACTER*13
	  to CHARACTER*255.
	
	7 Repeat steps 1-5. This time IMIN will remain zero.
	
	Additional query words: 1.00 kbdocerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
