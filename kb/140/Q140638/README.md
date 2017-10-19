---
layout: page
title: "Q140638: PRB: FLL Created Without LCK API Functions Is Invalid"
permalink: /kb/140/Q140638/
---

## Q140638: PRB: FLL Created Without LCK API Functions Is Invalid

	Article: Q140638
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the error message "Library file <filename> is invalid"
	when using the SET LIBRARY TO command to load an .fll file created with the
	Library Construction Kit (LCK).
	
	CAUSE
	=====
	
	There appears to be a problem with .fll files that are created for Visual FoxPro
	that don't call any of the _Functions that are part of the FoxPro API. This is
	not the case with .fll files created in previous versions. The error appears to
	be caused by the fact that the DLL doesn't have any exports. Normally a valid
	.fll file will contain the DispatchAPI export.
	
	WORKAROUND
	==========
	
	Call an extraneous .fll function in the code.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create an .fll file but don't add any of the Library construction Kit functions
	besides the FoxTable and FoxInfo structures:
	
	  // include the library construction header file
	  #include <pro_ext.h>
	
	  void bugtest(ParamBlk  *parm) // the function definition
	      {
	       double c,e;
	       c=3.00;
	       e=++c*3.1415927;
	       //_RetFloat(e,15,10);
	       //Remove comment on previous line to fix error
	      }
	
	  // the FoxInfo structure registers the function
	  FoxInfo myFoxInfo[] = {
	       {"BUGTEST",(FPFI) bugtest, 0, ""},
	  };
	
	  // the FoxTable structure
	  FoxTable _FoxTable = {
	       (FoxTable  *) 0, sizeof(myFoxInfo)/sizeof(FoxInfo), myFoxInfo
	  };
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
