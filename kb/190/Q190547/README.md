---
layout: page
title: "Q190547: PRB: ReadMethod Only Returns Method Text From Visual Class"
permalink: /kb/190/Q190547/
---

## Q190547: PRB: ReadMethod Only Returns Method Text From Visual Class

	Article: Q190547
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ReadMethod of an object can be used to return the text of a given method.
	The ReadMethod is only supported when the class is stored in a visual class
	library (VCX). Classes that are defined in code do not support the ReadMethod.
	This also holds true for the following methods:
	
	  ReadExpression
	  WriteMethod
	  WriteExpression
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     ox = CreateObject("myclass")
	     ?ox.ReadMethod('mymethod')
	
	     DEFINE Class myclass As Custom
	        PROCEDURE mymethod
	           WAIT WINDOW 'hello'
	        ENDPROC
	     ENDDEFINE
	
	The ReadMethod does not return anything.
	
	Additional query words: kbOOP kbVFp500a kbVFp500 kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
