---
layout: page
title: "Q131837: How to Return from an Event or Method"
permalink: /kb/131/Q131837/
---

## Q131837: How to Return from an Event or Method

	Article: Q131837
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes, it may be necessary to exit or return from an event or method. This
	article documents how to do this.
	
	MORE INFORMATION
	================
	
	For this article, assume you have created a form that requires at least one
	parameter. When the form is run without being passed a parameter, you'd like to
	cancel the form and issue an error message.
	
	In version 2.x, you could do this with the RETURN command. In Visual FoxPro, the
	process is similar but somewhat different because you must return a value of
	false from the INIT method. The following code shows how to handle this type of
	a situation in the INIT code of a form.
	
	    PARAMETER tnMyParm
	    IF PARAMETERS() < 1 OR EMPTY(tnMyParm)
	         * Display a message
	         * Release the form
	         RETURN .F.
	    ENDIF
	    More init code ...
	
	Returning a value of false (.F.) prevents the creation the object (a form in this
	case).
	
	Additional query words: VFoxWin cancel event
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
