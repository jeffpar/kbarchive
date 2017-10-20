---
layout: page
title: "Q148746: FIX: Check Marks Work Only When Set in Top Level Menu Events"
permalink: /kb/148/Q148746/
---

## Q148746: FIX: Check Marks Work Only When Set in Top Level Menu Events

{% raw %}

	Article: Q148746
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
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
	
	A check mark only appears next to the previously selected item in a second level
	menu. The check mark appears next to the correct item only after the mouse
	passes over that item.
	
	RESOLUTION
	==========
	
	To work around this issue, set the Checked property of a second level menu item
	in the top level menu event rather than the second level menu event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 16-bit or 32-bit Visual Basic 4.0, or if it is already running, click
	  New Project on the File menu.
	
	2. Use the Menu Editor to add the following menu items. Note that the Blue,
	  Green, and Cyan should appear only if you click Color, and Color appears if
	  you click Options. Click Menu Editor from the Tools menu.
	
	     Caption            Name                   Index
	     -------            ----                   -----
	     Options          mnuOption
	       Color          mnuOptionsColor
	         Blue         mnuOptionsColorArray       0
	         Green        mnuOptionsColorArray       1
	         Cyan         mnuOptionsColorArray       2
	
	3. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	        Dim ncol As Integer
	
	        Private Sub mnucol_Click(Index As Integer)
	           ncol = Index
	           BackColor = QBColor(Index + 1)
	        End Sub
	
	        Private Sub mnuColor_Click()
	           Dim i As Integer
	           For i = 0 To 2
	              If i = ncol Then
	                 mnuCol(i).Checked = True
	              Else
	                 mnuCol(i).Checked = False
	              End If
	           Next
	        End Sub
	
	        Private Sub mnuOptions_Click()
	           'Uncomment the following lines for workaround
	           'Dim i As Integer
	           'For i = 0 To 2
	              'mnucol(i).Checked = (i = ncol)
	              'Next
	            End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. From
	  the Options menu, click Color and note that a second level menu appears.
	  Choose a color to change the background color of the form. Click Color again
	  from the Options menu and choose another color. Click Color a third time and
	  note that a check mark appears next to the original color you selected. Move
	  the mouse over the previously selected color and note that a check mark
	  appears on the correct choice.
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp400bug kbVBp600fix kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
