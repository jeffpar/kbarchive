---
layout: page
title: "Q202145: PRB: Source Control Tool Shows Font Property Deleted on Check-in"
permalink: kb/202/Q202145/
---

## Q202145: PRB: Source Control Tool Shows Font Property Deleted on Check-in

	Article: Q202145
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbSSafe400 kbSSafe500 kbSSafe600 kbVBp500 kbIDEProject kbGrpDSVB
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a source code control tool such as Visual SourceSafe on a Visual
	Basic project, .frm files appear to lose font information for controls.
	
	CAUSE
	=====
	
	If a control's font matches the font of the parent form exactly, the font blocks
	are optimized out of the property definitions. When Visual Basic loads a control
	that does not contain a font block, the font property of the control is set to
	the font that is used by the control's parent form.
	
	RESOLUTION
	==========
	
	You can safely ignore a difference report that shows a missing font.
	
	To avoid the problem, do one of the following:
	
	- Set the Font property of the Form to a font or font size that is not used by
	  the controls on the form.
	- Set the Font property of each control at run time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to reproduce behavior
	---------------------------
	
	1. In Visual Basic, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1.
	
	3. Change the font of the CommandButton in the Properties window.
	
	4. Save the project and add the project to Visual SourceSafe.
	
	5. Check out Form1.
	
	6. Change the Font property of CommandButton1 to be the same as Form1.
	
	7. Save Form1 and close Visual Basic.
	
	8. Start Visual Basic and reload your project.
	
	9. Add a line of code to the project and delete it. This causes Visual Basic to
	  mark the form as "dirty," which prompts cleanup when it is saved.
	
	10. Save Form1.frm.
	
	11. From the Tools menu, point to SourceSafe and click Show Differences to open
	  the Difference Options dialog box. Click OK to display the difference
	  report.
	
	RESULT: The difference report shows that the reference to the Font property of
	Command1 was deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbSSafe400 kbSSafe500 kbSSafe600 kbVBp500 kbIDEProject kbGrpDSVB 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
