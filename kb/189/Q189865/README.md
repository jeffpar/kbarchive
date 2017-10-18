---
layout: page
title: "Q189865: DOC: Form's Circle Method Accepts Negative Aspect Ratio"
permalink: kb/189/Q189865/
---

## Q189865: DOC: Form's Circle Method Accepts Negative Aspect Ratio

	Article: Q189865
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use values less than -1.0 for nAspect ratio, the aspect ratio and
	radius values are determined as follows:
	
	  nAspect = ABS(nAspect)
	
	  nRadius = nRadius * nASpect
	
	This behavior is by design.
	
	The Visual FoxPro help file does not describe this behavior for values of nAspect
	less than -1.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     PUBLIC ox
	     ox = CreateObject('form')
	     ox.Show()
	     ox.Circle(50, 100, 100, -2)
	
	Additional query words: kbVFp600 kbVFp500a kbVFp500 kbNoKeyword
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	
	=============================================================================
	
