---
layout: page
title: "Q121416: PRB: GetPrivateProfileString() Generates &quot;Data Type Mismatch&quot;"
permalink: kb/121/Q121416/
---

## Q121416: PRB: GetPrivateProfileString() Generates &quot;Data Type Mismatch&quot;

	Article: Q121416
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the GetPrivateProfileString) Windows API function from within
	FoxPro for Windows and the UDFPARMS setting is REFERENCE, you will receive the
	error message "Data type mismatch."
	
	CAUSE
	=====
	
	This error occurs because GetPrivateProfileString() is expecting certain
	parameters to be passed by VALUE. With the UDFPARMS set to REFERENCE, you are
	sending all parameters by REFERENCE. The GetPrivateProfileString() function
	returns an error because it is expecting these parameters by VALUE. FoxPro
	interprets the error as a data type mismatch.
	
	RESOLUTION
	==========
	
	To prevent this behavior, set UDFPARMS to VALUE.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following commands in the Command window:
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL"
	     MRETURN=REPLICATE(CHR(0), 144)
	     MREGISTER=REGFN("GETPRIVATEPROFILESTRING","CCC@CI","I")
	     MCALL=CALLFN(MREGISTER,"WINDOWS","LOAD","",@MRETURN,256)
	
	The last command will return the error message "Data type mismatch."
	
	NOTE: A "FOXPROW caused a General Protection Fault in module <unknown>"
	error message occurs if UDFPARMS is set to VALUE.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00
	
	=============================================================================
	
