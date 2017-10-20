---
layout: page
title: "Q214830: BUG: Tab Control Initialization Problem with Control Array"
permalink: /kb/214/Q214830/
---

## Q214830: BUG: Tab Control Initialization Problem with Control Array

{% raw %}

	Article: Q214830
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbTabCtrl kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Tab Control is not able to initialize correctly when placing controls that
	are members of a control array on separate tabs from the load event of the form
	on which the Tab Control was placed. All the controls are drawn on a single tab
	instead of on the tabs for which they were intended. This problem occurs in
	Visual Basic 6.0 and Visual Basic 5.0 with service pack 2 or later.
	
	RESOLUTION
	==========
	
	Method 1:
	
	To work around this problem, move the code that places controls on the tabs from
	the load event to the Activate event of the form. Use a global flag to determine
	if the Activate event was fired without unloading the form. For example, use the
	sample project created in "Steps to Reproduce Behavior" below and follow these
	steps:
	
	1. Move the code listed in step 5 from the Load event to the Activate event of
	  Form1.
	
	2. Modify the code in the Activate event by replacing it with the following:
	
	  Dim i as integer
	  If ActivateFlag = False Then
	      For i = 1 To 3
	          SSTab1.Tab = i - 1
	          Load Text1(i)
	          Set Text1(i).Container = SSTab1
	          Text1(i).Top = i * (SSTab1.TabHeight + 100)
	          Text1(i).Left = i * 200
	          Text1(i).Visible = True
	      Next i
	      ActivateFlag = True
	  End If
	
	3. From the Project menu, add a Standard Module (Module1) to the project and add
	  the following line of code to Module1:
	
	  Public ActivateFlag as Boolean
	
	4. Place the following line of code in the Unload event of Form1:
	
	  ActivateFlag = False
	
	5. Run the application and note that all members of the TextBox control array
	  are displayed on the correct tab.
	
	Method 2:
	
	Another workaround is to place the control loading code in a global procedure.
	Call this procedure before calling the Show method for the form containing the
	tab control. For example:
	
	1. Follow the steps 1 through 4 in "Steps to Reproduce Behavior" below.
	
	2. From the Project menu, add a (BAS) Module to the project and copy and paste
	  the following code to General Declarations area of Module1:
	
	  Sub MyTabSetup()
	      Dim i As Integer
	      With Form1
	          For i = 1 To 3
	              .SSTab1.Tab = i - 1
	              Load .Text1(i)
	              Set .Text1(i).Container = .SSTab1
	              .Text1(i).Top = i * (.SSTab1.TabHeight + 100)
	              .Text1(i).Left = i * 200
	              .Text1(i).Visible = True
	          Next i
	      End With
	  End Sub
	
	3. Create a Sub Main procedure to be set as Startup object for the project by
	  adding the following code to Module1:
	
	  Sub Main()
	  	MyTabSetup
	  	Form1.Show
	  End Sub
	
	4. From the Project menu, select Project1 Properties, and on the General tab,
	  select Sub Main as the Startup Object.
	
	5. Run the application and there should be one TextBox on each tab.
	
	6. The procedure can also be called before the Show method of the form when ever
	  the form needs to be displayed. For example, if the form was closed and
	  needed to be shown from the click event of a CommandButton, simply place the
	  following code in the click event of the CommandButton:
	
	  Private Sub Command1_Click()
	  	MyTabSetup
	  	Form1.Show
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior 
	---------------------------
	
	1. Create a Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components, select Microsoft Tabbed Dialog
	  Control 6.0, and click OK.
	
	3. Draw the tab control (SSTab1) on the default form (Form1).
	
	4. Draw a TextBox (Text1) on Form1 and set the Index property of Text1 to 0 and
	  set the Visible property to False.
	
	5. Place the following code in the load event of Form1:
	
	  Dim i as integer
	  For i = 1 To 3
	      SSTab1.Tab = i - 1
	      Load Text1(i)
	      Set Text1(i).Container = SSTab1
	      Text1(i).Top = i * (SSTab1.TabHeight + 100)
	      Text1(i).Left = i * 200
	      Text1(i).Visible = True
	  Next i
	
	Run the program and note that all the TextBox controls appear on a single tab
	instead of one on each tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbTabCtrl kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
