---
layout: page
title: "Q193401: BUG: Can't Change UserControl FontTransparent if Default = False"
permalink: /kb/193/Q193401/
---

## Q193401: BUG: Can't Change UserControl FontTransparent if Default = False

	Article: Q193401
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
	
	When the FontTransparent property of a UserControl is programmatically set to
	True, the UserControl still behaves as if FontTransparent is set to False. The
	actual property value changes but the behavior does not. Once something has been
	printed on the control, the FontTransparent can be changed successfully. This
	problematic behavior occurs only if the FontTransparent property is set to False
	in design mode.
	
	RESOLUTION
	==========
	
	The workaround for this problem is to always set the FontTransparent property of
	a UserControl to True in design mode. If the design mode value is True, it can
	be changed programmatically without incident. If it is set to False, the
	problems described above will occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created default.
	
	2. Select Add Project from the File menu to add an ActiveX Control project to
	  the project group.
	
	3. Assign the Picture property of the UserControl to a large bitmap.
	
	4. Set the FontTransparent property of the UserControl to False.
	
	5. Add the following code to the UserControl's module:
	
	        Private Sub UserControl_Click()
	           FontTransparent = True
	           Print FontTransparent
	           FontTransparent = False
	           Print FontTransparent
	           FontTransparent = True
	           Print FontTransparent
	        End Sub
	
	6. Close the UserControl window, and place an instance of the UserControl on
	  Form1.
	
	7. Run the project, and click on the UserControl.
	
	8. Note that the first value printed on the control does not exhibit
	  FontTransparent behavior.
	
	9. Open the UserControl1 project and change the FontTransparent property of the
	  UserControl to True, and then repeat step 7. Note that the behavior is
	  correct.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
