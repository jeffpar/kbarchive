---
layout: page
title: "Q156873: PRB: Calling Paint Method Can Cause Recursion in VFP 5.0"
permalink: /kb/156/Q156873/
---

## Q156873: PRB: Calling Paint Method Can Cause Recursion in VFP 5.0

{% raw %}

	Article: Q156873
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Caption property of an object in the Paint event causes Visual
	FoxPro to recursively call the event.
	
	CAUSE
	=====
	
	Setting or changing the Caption property repaints the object. However,
	repainting a form or tool bar triggers the Paint event. Therefore, Visual FoxPro
	enters into a recursive loop.
	
	RESOLUTION
	==========
	
	Do not place code in the Paint event that causes a form or toolbar to repaint.
	Place code that refreshes a form or toolbar in an event that does not call
	itself recursively. For instance, if the Caption of a label requires changing,
	place the code in the Refresh method, LostFocus, or Click event of an object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Close all running applications and save your data before following this
	procedure. To close all open applications in Windows 3.1, press the CTRL+ESC
	keys to open the Windows Task List, and then close all the other applications
	you have running. In Windows 95 and Windows NT, press the CTRL+ALT+Delete keys
	simultaneously to invoke the Close Dialog window or the Task Manager,
	respectively. The following the steps will cause Visual FoxPro to enter into a
	recursive loop. Therefore, Visual FoxPro must be shutdown using either the
	Windows Task List, Close Program dialog box, or Task Manager.
	
	1. Create a form called Test.
	
	2. Add the following code to the Paint event of the form:
	
	        ThisForm.Label1.Caption="ABC"
	        WAIT WINDOW PROGRAM() TIME .1
	
	3. Add a label called Label1.
	
	4. Run the form. FoxPro continuously calls the Paint event.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
