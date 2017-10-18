---
layout: page
title: "Q145620: PRB: Appearance of ComboBox Control Is Always Three-Dimensional"
permalink: kb/145/Q145620/
---

## Q145620: PRB: Appearance of ComboBox Control Is Always Three-Dimensional

	Article: Q145620
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbComboBox kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ComboBox control can only be displayed with a three-dimensional (3-D)
	appearance, regardless of the value of the Appearance property.
	
	This problem does not occur in Visual Basic, 16-bit, version 4.0.
	
	RESOLUTION
	==========
	
	There is no known workaround.
	
	STATUS
	======
	
	This is a Windows 32-bit limitation.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a ComboBox control, Combo1, of any style, to Form1.
	
	3. Set the Appearance property of Combo1 to "0 - Flat". In design and run mode,
	  the appearance of the control remains 3-D.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbComboBox kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
