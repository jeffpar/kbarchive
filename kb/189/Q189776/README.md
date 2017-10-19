---
layout: page
title: "Q189776: BUG: Beautify &quot;Data type mismatch&quot; w/ SET UDFPARM TO REFERENCE"
permalink: /kb/189/Q189776/
---

## Q189776: BUG: Beautify &quot;Data type mismatch&quot; w/ SET UDFPARM TO REFERENCE

	Article: Q189776
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Beautify in Visual FoxPro's Editor or in a code window, you might
	get the following error message:
	
	  Data type mismatch.
	
	CAUSE
	=====
	
	The command SET UDFPARMS TO REFERENCE was run.
	
	RESOLUTION
	==========
	
	Before using Beautify, run the following command:
	
	  SET UDFPARMS TO VALUE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command Window:
	
	  " SET UDFPARMS TO REFERENCE" (without the quotation marks)
	
	2. Edit a program file, right-click in the edit window, and select Beautify from
	  the shortcut menu.
	
	3. Click Run in the Beautify Options dialog box.
	
	RESULT: A "Data Type mismatch" error message appears, and the code is not
	"Beautified."
	
	Additional query words: kbVFp500abug kbTools kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
