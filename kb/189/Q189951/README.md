---
layout: page
title: "Q189951: BUG: ScrollBar on WLCombo Does Not Scroll"
permalink: /kb/189/Q189951/
---

## Q189951: BUG: ScrollBar on WLCombo Does Not Scroll

	Article: Q189951
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to scroll items in the Windowless Combobox (WLCombo), the scrollbar
	will not move. However, the items in the list will scroll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Using the Projects menu, select Components to bring up the Components dialog
	  box. On the Controls Tab, check "Microsoft Windowless Controls." Then click
	  OK.
	
	3. Place a WLCombo control on Form1.
	
	4. Add the following code to the module of Form1:
	
	        Private Sub Form_Load()
	           Dim i
	           For i = 1 to 20
	              WLCombo1.Additem "testing.." & Str(i)
	           Next i
	        End Sub
	
	5. Run the project.
	
	6. Click on the WLCombo to drop it down. Try using the scroll bar to scroll the
	  ComboBox. You will see the contents of the ComboBox scroll, but the scroll
	  bar slider will not move.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189950 HOWTO: Install the Microsoft Windowless Controls for VB6
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
