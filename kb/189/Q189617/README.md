---
layout: page
title: "Q189617: PRB: Infinite Loop if Modal Form Shown in MDIChild's QueryUnload"
permalink: kb/189/Q189617/
---

## Q189617: PRB: Infinite Loop if Modal Form Shown in MDIChild's QueryUnload

	Article: Q189617
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to close an MDI parent form, the application gets caught in an
	infinite loop of showing a modal form.
	
	CAUSE
	=====
	
	When the MDI parent form is closed, the QueryUnload events of all MDI child
	forms are called. If any one of these MDI child forms displays a modal form
	during this event, such as prompting to save information, the infinite loop is
	initiated.
	
	This behavior will not occur if the MDI child form is closed before the MDI
	parent is closed.
	
	RESOLUTION
	==========
	
	To work around this problem, explicitly unload the MDI child form in either the
	QueryUnload event of that MDI child or in the QueryUnload event of the MDI
	parent.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, add an MDI form, MDIForm1, to the project.
	
	3. Set the MDIChild property of Form1 to True.
	
	4. From the Project menu, add another form, Form2, to the project.
	
	5. Paste the following code into Form1's QueryUnload event:
	
	        Form2.Show vbModal
	
	6. Run the project.
	
	7. Attempt to close MDIForm1 without closing Form1 first. The QueryUnload event
	  of Form1 fires in an infinite loop and Form2 is displayed repetitively.
	
	8. Change Form1's QueryUnload event to be:
	
	        Form2.Show vbModal
	        Unload Form1
	
	9. Repeat steps 6 and 7. The application closes as desired.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbMDI kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
