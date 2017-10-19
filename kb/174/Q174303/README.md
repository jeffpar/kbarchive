---
layout: page
title: "Q174303: BUG: ListBox Caption Changes When Copied as Control Array"
permalink: /kb/174/Q174303/
---

## Q174303: BUG: ListBox Caption Changes When Copied as Control Array

	Article: Q174303
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ListBox control that is copied as a control array results in a different
	caption. This behavior differs from other Visual Basic controls; other controls
	copied as a control array contain the same caption text as the original control.
	
	RESOLUTION
	==========
	
	The ListBox caption cannot be changed.
	
	The purpose of the ListBox caption is for control identification in the IDE only.
	The ListBox caption has no effect on the control at run-time or in the made EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in products listed above. Microsoft
	is researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a ListBox control and two other controls such as a Command button and a
	  Combo box. Select all three controls, and then triple-click the Left property
	  to arrange the controls vertically.
	
	3. Select all three controls, and then click Copy on the Edit menu. From the
	  Edit menu, click Paste. Click Yes when asked to create a control array for
	  each of the three controls.
	
	  Result: Note that the ListBox caption text changes while the caption of the
	  other controls remain the same.
	
	Additional query words: kbVBp kbdsd kbDSupport KBCONTROL kbVBp500bug kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
