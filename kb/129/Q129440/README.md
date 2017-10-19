---
layout: page
title: "Q129440: BUG: Cannot Escape Out of ON ERROR Routine"
permalink: /kb/129/Q129440/
---

## Q129440: BUG: Cannot Escape Out of ON ERROR Routine

	Article: Q129440
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ON ERROR routine with a RETRY is in an infinite loop. Pressing the ESC key
	does not cancel execution of the RETRY.
	
	CAUSE
	=====
	
	The ON ERROR does not call a procedure. It is set as ON ERROR RETRY. When the
	RETRY is executed, the error that prompted the ON ERROR has not been corrected.
	
	WORKAROUND
	==========
	
	You can add a special case to the ON ERROR routine to handle cases where an
	infinite loop might occur. If SET ESCAPE is ON, you can press the ESC key when
	the procedure is executing, and execution will be canceled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
