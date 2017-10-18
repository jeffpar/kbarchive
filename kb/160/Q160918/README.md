---
layout: page
title: "Q160918: FIX: SAVE SCREEN and TYPE() Cause Visual FoxPro to Terminate"
permalink: kb/160/Q160918/
---

## Q160918: FIX: SAVE SCREEN and TYPE() Cause Visual FoxPro to Terminate

	Article: Q160918
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the following commands from within a program or Command Window will
	cause Visual FoxPro to terminate:
	
	     DISPLAY MEMORY
	     SAVE SCREEN TO mscreen
	     ? TYPE('mscreen')
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	version 6.0
	
	MORE INFORMATION
	================
	
	If the variable that is being evaluated by TYPE() is of type "S," Visual FoxPro
	will terminate. Type "S" is a variable containing the output of the Save Screen
	command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
