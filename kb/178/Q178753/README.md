---
layout: page
title: "Q178753: FIX: ListView ItemClick Event Executes Multiple Times"
permalink: /kb/178/Q178753/
---

## Q178753: FIX: ListView ItemClick Event Executes Multiple Times

{% raw %}

	Article: Q178753
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ItemClick Event in a ListView control executes multiple times when an item
	is selected with a single mouse click.
	
	RESOLUTION
	==========
	
	To work around this problem, use a Boolean value to allow only one event to
	execute per single click. This method is illustrated in the MORE INFORMATION
	section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	This following steps show you how to create a project that reproduces this
	problem and how to workaround it.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Common Controls 5.0 by completing the
	  following steps:
	
	  a. From the Project menu, click Components to display the Components dialog
	     box.
	
	  b. Check Microsoft Common Controls 5.0 and click OK.
	
	3. Add a ListView control to Form1:
	
	        Option Explicit
	
	        Public bToggle As Boolean     'Boolean Flag
	
	        Private Sub Form_Load()
	        'Adds items to the ListView control
	            ListView1.View = lvwList
	            ListView1.ListItems.Add , , "Test1"
	            ListView1.ListItems.Add , , "Test2"
	            ListView1.ListItems.Add , , "Test3"
	            ListView1.ListItems.Add , , "Test4"
	            ListView1.ListItems.Add , , "Test5"
	            ListView1.ListItems.Add , , "Test6"
	            ListView1.ListItems.Add , , "Test7"
	        End Sub
	
	        Private Sub ListView1_ItemClick(ByVal Item As ComctlLib.ListItem)
	        'This event only occurs if the Boolean flag is True.
	           If bToggle = True Then
	              'Comment all lines in this event except for the following
	              'line to reproduce the bug.
	              MsgBox ListView1.SelectedItem.Text
	           End If
	           bToggle = False
	        End Sub
	
	        Private Sub ListView1_MouseDown(Button As Integer, _
	                                      Shift As Integer, _
	                                      x As Single, _
	                                      y As Single)
	          'Set the Boolean flag to True. Comment the following line
	          'to reproduce the bug.
	           bToggle = True
	        End Sub
	
	4. If you want to reproduce the behavior, comment the appropriate lines.
	  Otherwise, on the Run menu, click Start or press the F5 key to start the
	  program. Click on an item in the ListView control to display a message box.
	  Click OK to close the message box. If the appropriate lines were commented,
	  the message box displays a second time. The correct behavior is the message
	  box displays only once.
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
