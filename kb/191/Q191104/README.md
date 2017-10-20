---
layout: page
title: "Q191104: PRB: Drive ListBox Fails to Drop Down with a Small FontSize"
permalink: /kb/191/Q191104/
---

## Q191104: PRB: Drive ListBox Fails to Drop Down with a Small FontSize

{% raw %}

	Article: Q191104
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the FontSize property of a DriveListBox to a small font (that is, 4
	or 5 point), the dropdown list portion of the DriveListBox might not appear.
	This might not occur until after the second or third time that you set the
	FontSize.
	
	RESOLUTION
	==========
	
	If you need to set the FontSize of the DriveListBox to a size smaller than 8
	point, use a True Type Font.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a DriveListBox to Form1, Drive1.
	
	3. Add a CommandButton, Command1, to Form1.
	
	4. Add the following code to Command1:
	
	        Private Sub Command1_Click()
	            Drive1.FontSize=Drive1.FontSize * .5
	        End Sub
	
	5. Run the Project.
	
	6. Click Command1 and then look at the Drive1 drop-down list.
	
	7. If the list portion drops down, click Command1 again. Eventually, the list
	  does not drop down.
	
	8. To work around this problem set the Font property of Drive1 to a TrueType
	  Font and run the project again.
	
	RESULT: The list does not disappear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
