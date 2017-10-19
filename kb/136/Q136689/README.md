---
layout: page
title: "Q136689: How an ON ERROR Routine Affects the Error Event"
permalink: /kb/136/Q136689/
---

## Q136689: How an ON ERROR Routine Affects the Error Event

	Article: Q136689
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
	
	This article describes how an ON ERROR routine affects the Error event. In
	particular, it examines the condition under which the Error event is called.
	
	MORE INFORMATION
	================
	
	The following information comes from the Help file:
	
	The Error event allows an object to handle errors. This event overrides the
	current ON ERROR routine and allows each object to trap and handle errors
	internally.
	
	NOTE: The Error event is only called when the error occurs in code.
	
	If a second error occurs in the Error event procedure while it is handling an
	error, Visual FoxPro calls the ON ERROR routine. If no ON ERROR routine exists,
	Visual FoxPro suspends execution and reports the error as if no Error event or
	ON ERROR routine existed.
	
	Note that the Error method of a given object is called when an error occurs in a
	method of that object. So, if an error occurs in the Form1.cmdOK.Click event
	procedure, the Form1.cmdOK.Error method is called if it exists. The Form1.Error
	method is not called unless an error occurs in a method or event procedure
	belonging to the form such as Form1.Activate or Form1.Resize.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
