---
layout: page
title: "Q132697: PRB: Application Appears Then Exits to Operating System"
permalink: /kb/132/Q132697/
---

## Q132697: PRB: Application Appears Then Exits to Operating System

	Article: Q132697
	Product(s): Microsoft FoxPro
	Version(s): 3.00 5.00
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual FoxPro .EXE file appears briefly, and then it exits to the operating
	system.
	
	CAUSE
	=====
	
	The main program is a screen or menu, and no READ EVENTS command has been
	issued. In Visual FoxPro, the Command window provides a place for your
	application to wait for the next command. Because the Command window is
	unavailable in a run-time application, the .EXE file has no wait state to
	anticipate keyboard input, so the application returns to the operating system.
	
	RESOLUTION
	==========
	
	A READ EVENTS command or a modal form will provide a wait state for your
	application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Adding a READ EVENTS to a menu
	------------------------------
	
	If the main program in your project is a menu, a READ EVENTS command should be
	added to the menu as follows:
	
	1. In the Menu Builder on the View menu, click General options.
	
	2. Select the Cleanup check box. In the Cleanup code window, add this code:
	
	        READ EVENTS
	
	3. Add a Quit option to the menu that contains this command:
	
	        CLEAR EVENTS
	
	If the main program in your project is a form or formset, there are several ways
	to proceed as described in the remainder of this article.
	
	Creating a Modal Form or Formset
	--------------------------------
	
	The easiest way to provide a wait state for a form or formset is to set the
	WindowType property to 1 - Modal at design time.
	
	This may be undesirable if you want to run other forms from within the current
	form or formset.
	
	Creating a Program that Issues a Read Events
	--------------------------------------------
	
	The form or formset can be run from within a program that issues a READ EVENTS.
	For example:
	
	1. Create a program containing this code:
	
	        DO FORM <formname>
	        READ EVENTS
	
	2. Save this program, and make it the main program in your project.
	
	3. Add a command button to the form. Add the following code in its Click event:
	
	        CLEAR EVENTS
	        THISFORM.RELEASE
	
	Adding a READ EVENTS to a form or formset
	-----------------------------------------
	
	If you do not want to create a wrapper program that runs the form and issues a
	read events command, you can add the appropriate code to the form or formset
	itself. For example:
	
	1. Add a new property to the form or formset named RdEventsFlag. Set the value
	  of this property to false (.F.).
	
	2. In the Activate method of the form or formset, add this code:
	
	        IF !THISFORM.RdEventsFlag
	           READ EVENTS
	           THISFORM.RdEventsFlag = .T.
	        ENDIF
	
	3. Add a command button to the form. Add the following code to its click event:
	
	        CLEAR EVENTS
	        THISFORM.RELEASE
	
	Change THISFORM to THISFORMSET everywhere it appears if you are working with a
	formset instead of a form.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick form.
	
	2. Create a new project, and add the form to the Documents tab.
	
	3. Build an executable from the project.
	
	4. Exit Visual FoxPro, and run the executable. The menu appears briefly; then
	  the executable returns to the operating system shell.
	
	REFERENCES
	==========
	
	Visual FoxPro Professional Features Guide, Chapter 9.
	
	Additional query words: foundation READ
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : 3.00 5.00
	
	=============================================================================
	
