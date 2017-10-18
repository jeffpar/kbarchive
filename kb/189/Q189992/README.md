---
layout: page
title: "Q189992: BUG: Line Displays in Title Bar of MDI Child Form"
permalink: kb/189/Q189992/
---

## Q189992: BUG: Line Displays in Title Bar of MDI Child Form

	Article: Q189992
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MDI Child form with a border style set to 5-Sizable ToolWindow appears with a
	thin line below the Toolbar. The line does not repaint when another window is
	moved over the MDI Child form.
	
	RESOLUTION
	==========
	
	Toggle the form height by adding the following code to the Form_Load event of
	the MDI Child form:
	
	     Me.Height = Me.Height - 15
	     Me.Height = Me.Height + 15
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add an MDI Child Form to the project by completing the following steps:
	
	  a. From the Project menu, select Add MDI Form. The Add MDI Form dialog box
	     appears with MDI Form highlighted in the New tab.
	
	  b. Click the Open button to add an MDI Form, MDIForm1, to the project.
	
	3. Set the following properties for Form1:
	
	     Property            Setting
	     ----------------------------------------
	
	     MDIChild            True
	
	     BorderStyle         5-Sizable ToolWindow
	
	4. On the Run menu, select Start, or press the F5 key to start the program.
	
	  NOTE: A gray line appears below the title bar of the MDI Child window. If you
	  move another window on top of this MDI Child window, the gray line does not
	  repaint.
	
	5. Stop the project and add the following code to the code window of Form1:
	
	        Private Sub Form_Load()
	           Me.Height = Me.Height - 15
	           Me.Height = Me.Height + 15
	        End Sub
	
	6. Run the project again and note that the gray line has disappeared.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbMDI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
