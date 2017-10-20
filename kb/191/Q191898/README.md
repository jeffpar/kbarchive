---
layout: page
title: "Q191898: BUG: Windowless TextBox Contents Highlighted After Drag &amp; Drop"
permalink: /kb/191/Q191898/
---

## Q191898: BUG: Windowless TextBox Contents Highlighted After Drag &amp; Drop

{% raw %}

	Article: Q191898
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	A Visual Basic program contains a windowless TextBox. After you drag-and-drop
	the TextBox, passing the cursor over the TextBox results in highlighting the
	TextBox contents.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the Microsoft Windowless Controls 6.0 by completing the following steps:
	
	  a. From the Project menu, select Components to display the Components dialog
	     box.
	
	  b. From the Controls tab, select Microsoft Windowless Controls 6.0.
	
	  c. Click OK to close the Components dialog box.
	
	3. Add a windowless TextBox control, WLText1, to Form1.
	
	4. Add a standard VB TextBox control, Text1, to Form1.
	
	5. Copy the following to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub WLText1_MouseMove(Button As Integer, _
	                                      Shift As Integer, _
	                                      X As Single, _
	                                      Y As Single)
	           If Button <> vbLeftButton Then Exit Sub
	           WLText1.Drag
	        End Sub
	
	        Private Sub Text1_MouseMove(Button As Integer, _
	                                   Shift As Integer, _
	                                   X As Single, _
	                                   Y As Single)
	           If Button <> vbLeftButton Then Exit Sub
	           Text1.Drag
	        End Sub
	
	6. On the Run menu, select Start, or press the F5 key to start the program.
	  Drag-and-drop the windowless TextBox. Now pass the cursor over the text of
	  the windowless TextBox. The TextBox contents are highlighted.
	
	7. Try the same thing with the standard Visual Basic TextBox and note that the
	  bug does not occur with this control.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
