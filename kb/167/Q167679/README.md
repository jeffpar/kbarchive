---
layout: page
title: "Q167679: INFO: Placement of Screen Code with Functional Conversion"
permalink: /kb/167/Q167679/
---

## Q167679: INFO: Placement of Screen Code with Functional Conversion

	Article: Q167679
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbvfp300 kbvfp500 kbvfp600
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains where the code snippets for the Screen Code and the READ
	Clauses from a FoxPro version 2.x screen are copied with a Functional conversion
	in Visual FoxPro versions 3.0, 5.0 or later.
	
	MORE INFORMATION
	================
	
	When a FoxPro version 2.x screen is converted to a Visual FoxPro Form with the
	Functional Conversion option, then the Code snippets for the Screen Code and the
	Read Clauses are transferred as follows:
	
	  Before Conversion              After Functional Conversion
	  -----------------              ---------------------------
	  Screen Code:
	     Setup                    Load Event of the Form in the FormSet
	     Cleanup and Procedures   Procedures and Functions are copied to
	                              a file with an .SPR extension and with the
	                              same name as the screen. Any code that
	                              is not part of a procedure or function
	                              is copied to the Unload Event of the FormSet
	
	  Screen Read Clauses:
	     Show                     ReadShow Event of the FormSet
	     Activate                 ReadActivate Event of the FormSet
	     Deactivate               ReadDeactivate Event of the FormSet
	     Valid                    ReadValid Event of the FormSet
	     When                     ReadWhen Event of the FormSet
	
	NOTE: Visual FoxPro version 5.0 or later cannot convert a FoxPro version 2.0
	screen.
	
	REFERENCES
	==========
	
	For more information on Functional and Visual Conversion, please refer to the
	following topics in the FoxPro Online Help or the Online Documentation:
	
	- "Converting FoxPro 2.6 Screens"
	
	- "Changing Converted Screens to VFP Forms"
	
	- "Visual FoxPro Converter Dialog Box"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbinfo
	
	=============================================================================
	
