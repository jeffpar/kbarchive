---
layout: page
title: "Q191858: BUG: Changing Appearance Property Reduces ListBox Height"
permalink: /kb/191/Q191858/
---

## Q191858: BUG: Changing Appearance Property Reduces ListBox Height

{% raw %}

	Article: Q191858
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Appearance property of a ListBox control is changed at run-time, the
	height of the ListBox control is reduced.
	
	RESOLUTION
	==========
	
	Set the IntegralHeight property of the ListBox to False at design-time.
	
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
	
	2. Add a ListBox control and a CommandButton to Form1.
	
	3. Copy the following to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Debug.Print "Appearance property = " & List1.Appearance & _
	              " Height property = " & List1.Height
	           If List1.Appearance = 0 Then
	              List1.Appearance = 1
	           Else
	              List1.Appearance = 0
	           End If
	        End Sub
	
	4. Open the Immediate Window. On the Run menu, select Start, or press the F5 key
	  to start the program. Click the CommandButton. Note that every CommandButton
	  click causes the ListBox height to change.
	
	  If you set the IntegralHeight property of the ListBox to False, the bug
	  behavior does not occur.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
