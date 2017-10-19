---
layout: page
title: "Q190079: BUG: Procedure Declaration Does Not Match Description of Event"
permalink: /kb/190/Q190079/
---

## Q190079: BUG: Procedure Declaration Does Not Match Description of Event

	Article: Q190079
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
	
	Implementing an interface for a class that has broken compatibility results in
	the following error during compile time:
	
	  Compile Error: Procedure declaration does not match description of event or
	  procedure having the same name
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic, Project1.
	
	2. Select Add Project from the File menu and add a second ActiveX DLL project,
	  Project2.
	
	3. Add the following code to Project2's default class (Class1):
	
	        Public Test As Long
	
	4. Select Make Project2.dll from the File menu to compile Project2.DLL.
	
	5. Select Project2 Properties from the Project menu, and choose the Component
	  tab in the dialog box.
	
	6. In the Version Compatibility frame, select Binary Compatibility. The text
	  field below the option should be pointing to the DLL that was just compiled
	  (Project2.DLL).
	
	7. Modify the code in Class1 of Project2 to:
	
	        Public Test as Integer
	
	8. Press the F5 key to run the module. A dialog box should appear twice warning
	  about breaking Binary Compatibility. Choose "Preserve Compatibility" each
	  time.
	
	9. Another dialog will appear asking how to instantiate the DLL. Choose "Wait
	  For Components To Be Created."
	
	10. Stop the DLL from running by pressing the "Stop" button on the Visual Basic
	  design environment toolbar.
	
	11. Switch to Project1 DLL, select References from the Project menu and add a
	  reference to Project 2.
	
	12. Add the following code to Project1's default class (Class1):
	
	        Implements Project2.Class1
	
	13. Under the object drop-down box (upper-left ComboBox in Class1's code
	  window), select Class1. A "Get" property for Class1_Test should be inserted
	  into the Class1 code window.
	
	14. Under the property drop-down box (upper-right ComboBox in Class1's code
	  window), select "Test [PropertyLet] ." A "Let" property stub for Class1_Test
	  should be inserted into the Class1 code window.
	
	15. Select Make Project1.dll from the File menu to attempt to compile
	  Project1.DLL. Note that the above mentioned error appears.
	
	Additional query words: kbDSupport kbVBp600bug kbCompiler kbdss kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
