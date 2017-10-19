---
layout: page
title: "Q149264: BUG: ListView in Report View Mode Truncates First ListItem"
permalink: /kb/149/Q149264/
---

## Q149264: BUG: ListView in Report View Mode Truncates First ListItem

	Article: Q149264
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the View property of the ListView control is set to 2 - List, ListItem
	objects may have portions of their Text property truncated. This results in, for
	example, an entry of "Thi..." instead of "This is my text".
	
	The following article details a somewhat similar problem with the Listview
	control in List mode (rather than Report Mode) and can be found in the Microsoft
	Knowledge Base:
	
	  Q149320 BUG: First ListItem Truncated with ListView in Report View
	
	This article outlines the different symptoms of that problem in addition to
	providing a different workaround.
	
	RESOLUTION
	==========
	
	To fix this problem, set the column width of the ListView control before
	displaying the items. Knowledge Base article Q147666 explains how to set the
	width of columns in a ListView control in both List and Report modes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single ListView control to the form.
	
	3. Add this code to the form:
	
	     Private Sub Form_Load()
	        Dim lv As ListItem
	
	        ListView1.View = lvwList
	        Set lv = ListView1.ListItems.Add
	        lv.Text = "This is a long text string"
	     End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. Observe
	  that the text of the ListItem is truncated.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
