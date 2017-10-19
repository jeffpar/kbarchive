---
layout: page
title: "Q190541: PRB: DATE() Returns a DateTime Type Value From OLE Server"
permalink: /kb/190/Q190541/
---

## Q190541: PRB: DATE() Returns a DateTime Type Value From OLE Server

	Article: Q190541
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DATE() function returns a data type of Time when evaluated from an OLE
	Server or COM object. This behavior is by design because the Date data type is
	converted to an OLE variant type during the evaluation.
	
	RESOLUTION
	==========
	
	The workaround to this behavior is to convert the return value via the TTOD
	(Time to Date) function, for example:
	
	     ?TYPE('TTOD(_VFP.EVAL("DATE()"))') && This returns "T" for Time
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue the following:
	
	        ?TYPE('DATE()')              && This returns "D" for Date
	        ?TYPE("_VFP.EVAL('DATE()')") && This returns "T" for Time
	
	NOTE: In the example above, the return value from the second line is the same
	that you would get from any COM object created in Visual FoxPro.
	
	Additional query words: kbVFp500a kbVFp500 kbVFp600 kbCOMt
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
