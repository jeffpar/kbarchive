---
layout: page
title: "Q189773: FIX: Compile Fails in WITH/ENDWITH and IF Using Dot Operator"
permalink: kb/189/Q189773/
---

## Q189773: FIX: Compile Fails in WITH/ENDWITH and IF Using Dot Operator

	Article: Q189773
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a;
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you write a program or procedure containing an IF expression that evaluates
	a property or method reference using the "." (dot) operator within a
	WITH/ENDWITH construct and you attempt to run or compile the code, you might get
	one of the following errors:
	
	  Command contains unrecognized phrase/keyword.
	
	  Data type mismatch.
	
	RESOLUTION
	==========
	
	Include a full object reference in the IF line, rather than the "." operator
	reference that is normally used with the WITH/ENDWITH.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code into a program (.PRG) file:
	
	        PUBL ox
	        ox = CREATEOBJECT('form1')
	        ox.Show()
	
	        DEFI class form1 as form
	        cProperty = "XXX"
	           PROC init
	              WITH This
	                 IF NOT 'XXX' $ .cProperty
	                 ENDIF
	              ENDWITH
	        ENDDEFINE
	
	2. Compile or attempt to run the code.
	
	RESULT: In Visual FoxPro 5.0x, the following error appears:
	
	  Command contains unrecognized phrase/keyword.
	
	In Visual FoxPRo 3.0x, the following error appears:
	
	  Data type mismatch.
	
	To make the code compile and run without error in each version, change:
	
	     IF NOT 'XXX' $ .cProperty
	
	  -to-
	
	     IF NOT 'XXX' $ this.cProperty,
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a;
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
