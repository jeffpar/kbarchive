---
layout: page
title: "Q142469: BUG: DBCombo Dropdown List Detaches While Dragging Parent Form"
permalink: /kb/142/Q142469/
---

## Q142469: BUG: DBCombo Dropdown List Detaches While Dragging Parent Form

	Article: Q142469
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DBCombo control drop-down list becomes detached from the control and the
	parent form if the user drags the form while the drop-down list is displayed in
	Microsoft Visual Basic version 4.0 for Windows. This behavior is reproducible in
	both the 16-bit and 32-bit versions of Visual Basic version 4.0 running under
	the Microsoft Windows, Microsoft Windows NT, and Microsoft Windows 2000
	operating systems. In Microsoft Windows NT, this behavior can be eliminated by
	clearing the "Full Drag" option in the Desktop dialog box of the Control Panel.
	
	In Microsoft Windows 2000, this behavior can be eliminated by clearing the "Show
	window contents while dragging" option in the Display dialog box of the Control
	Panel.
	
	In Microsoft Windows 95 and Windows 98, the behavior can be eliminated by
	unchecking the Show window contents while dragging item in the Plus! tab of the
	Display Properties dialog. The Display Properties dialog can be viewed by right-
	clicking on the Windows 95 and Windows 98 desktop and selecting 'Properties'.
	This setting can also be controlled programmatically by the SystemParametersInfo
	API and the SPI_GETDRAGFULLWINDOWS and SPI_SETDRAGFULLWINDOWS constants. For
	more information, see your Windows API documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Data control, "Data1" by default, to Form1 and set the following
	  properties:
	
	     DataBaseName = BIBLIO.MDB
	     RecordSource = Authors
	
	3. Add a DBCombo control to Form1, "DBCombo1" by default, and set the following
	  properties:
	
	     RowSource = Data1
	     ListField = Author
	     Style = 0 - Drop-down Combo or 2 - Drop-down List
	
	4. On the Run menu, click Start or press the F5 key to start the program. Open
	  the DBCombo list box and then drag the Form1 form. Note that the list
	  separates from the DBCombo control.
	
	Additional query words: kbVBp kbVBp400bug kbWinOS98 kbDSupport kbGrpVBDB kbCtrl
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,95
	Issue type        : kbbug
	
	=============================================================================
	
