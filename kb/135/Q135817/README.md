---
layout: page
title: "Q135817: BUG: Mouse Down Triggered on a Minimized Window"
permalink: /kb/135/Q135817/
---

## Q135817: BUG: Mouse Down Triggered on a Minimized Window

	Article: Q135817
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MouseDown event of a form occurs when the user presses a mouse button when
	the form has the focus. It is very useful when trying to detect mouse clicks or
	performing a specific action when the mouse is pressed. Forms created in Visual
	FoxPro running under Windows 3.1, Windows for Workgroups, and Windows 95 execute
	code in their MouseDown events when the Form is minimized. This behavior is not
	expected because MouseDown events should occur only when the Form is active.
	
	WORKAROUND
	==========
	
	Place the following code in the MouseDown event of the form:
	
	     IF THISFORM.WindowState <> 1
	        FORM::MouseDown
	        * Any event, such as wait window prevents the default MouseDown event
	     ENDIF
	
	With this code, the default MouseDown event code will fire only if the window is
	not minimized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form in Visual FoxPro running under Windows 3.1, Windows 95, or
	  Windows for Workgroups.
	
	2. Place the following code in the MouseDown event procedure:
	
	     WAIT WINDOW "MouseDown"
	
	3. Run the form.
	
	4. Minimize the form.
	
	5. Click the minimize icon with the right or left mouse button. The MouseDown
	  event occurs.
	
	NOTE: This behavior is platform specific. If steps 1 through 5 are performed
	under Windows NT, the MouseDown event executes before the form appears on the
	screen and does not respond when the form is active.
	
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
