---
layout: page
title: "Q177336: PRB: READ EVENTS in Form's Init Causes the Form Not to Display"
permalink: kb/177/Q177336/
---

## Q177336: PRB: READ EVENTS in Form's Init Causes the Form Not to Display

	Article: Q177336
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form does not display when you run the form.
	
	CAUSE
	=====
	
	If you issue a READ EVENTS in the Init or Load event, the form does not get a
	chance to display before going into the event loop.
	
	RESOLUTION
	==========
	
	Here are two resolutions:
	
	- Place the READ EVENTS command in a method other than Init or Load.
	
	-or-
	
	- Use the ON KEY LABEL command to issue a CLEAR EVENTS. For example, place the
	  following command in the Init event of the form:
	
	        ON KEY LABEL ALT+X CLEAR EVENTS
	
	and In the Destroy event of the form place the following command:
	
	        ON KEY LABEL ALT+X
	
	Now, after you run the form, when program execution stops at the READ EVENTS, you
	can press the ALT+X keys to clear the READ EVENTS and continue with program
	execution.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and run a FoxPro program with the following code:
	
	        frmForm=CREATEOBJECT('frmformTest')
	        frmForm.SHOW
	
	        DEFINE CLASS frmFormTest AS FORM
	        VISIBLE=.T.
	        WINDOWTYPE=1
	
	        PROCEDURE INIT
	        **Comment the following line to see form.
	        READ EVENTS
	        ENDPROC
	
	        PROCEDURE CLICK
	        CLEAR EVENTS
	        ENDPROC
	        ENDDEFINE
	
	  NOTE: If you issue READ EVENTS in an event or a method of a form, then you
	  need to issue CLEAR EVENTS before the form can be closed.
	
	Additional query words: read events clear event form disappear
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
