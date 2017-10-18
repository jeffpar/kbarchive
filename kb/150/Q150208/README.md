---
layout: page
title: "Q150208: BUG: Form Height Not Displayed Correctly in Design View"
permalink: kb/150/Q150208/
---

## Q150208: BUG: Form Height Not Displayed Correctly in Design View

	Article: Q150208
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the height of a form is re-sized to the height of the menu plus the title bar
	and then saved and closed, the height is shown incorrectly when the form is
	reopened and viewed in design mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the Tools menu, select Menu Editor to add a menu to Form1. In the dialog
	  box, enter a Caption of File, a Name of "mnuFile," and click OK.
	
	3. Adjust the height of Form1 until it is the height of the menu bar and title
	  bar only. Save the project and form.
	
	4. From the File menu, select New Project to clear out your existing project.
	
	5. On the File menu, select the project at the top of the most recently used
	  project list, and then choose to view Form1 in Design mode.
	
	  Results with VB 4.0:
	
	  The height of Form1 is only that of the Title bar plus borders.
	
	  Results with VB 5.0 and 6.0:
	
	  The height of Form1 appears to be reset to a "default" value.
	
	  NOTE: Form1 appears, but its height is only that of the Title bar plus
	  borders. Run the project by pressing the F5 key, and Form1 is shown correctly
	  even after the project is stopped.
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbIde
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
