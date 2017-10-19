---
layout: page
title: "Q190673: BUG: Flat Scroll Bars in ListView Do Not Work Correctly"
permalink: /kb/190/Q190673/
---

## Q190673: BUG: Flat Scroll Bars in ListView Do Not Work Correctly

	Article: Q190673
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
	
	When using the FlatScrollBar in the ListView control you may run into one of the
	following problems:
	
	1. If you check the FlatScrollBar property of the ListView in the IDE, you will
	  not see a ScrollBar when you run the form.
	
	  -or-
	
	2. The FlatScrollBar does not appear to track properly on the ListView control.
	  The control scrolls the columns properly, but the ScrollBar "thumb" position
	  does not match.
	
	RESOLUTION
	==========
	
	For problem number 1, set the FlatScrollBar property for the ListView control in
	the form Activate instead of the IDE.
	
	There is no resolution for problem number 2 at this time.
	
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
	  box. On the Controls Tab, select "Microsoft Windows Common Controls 6.0," and
	  then click OK.
	
	3. Place a ListView and ImageList control on Form1.
	
	4. Add four Images to the ImageList Control using the Images Tab of the
	  ImageList control's Property Page.
	
	5. In the Properties window, for the ListView control set the FlatScrollBar
	  property to True.
	
	6. Add the following code to Form1's code window:
	
	        Option Explicit
	
	        Private Sub Form_Activate()
	        ' Uncomment the next line to show the scroll bar as Flat.
	        ' For this to work you must make sure that you don't have
	        ' FlatScrollBar set to True in the properties window of the ListView.
	          'ListView1.FlatScrollBar = True
	        End Sub
	
	        Private Sub Form_Load()
	          Dim i As Integer
	          Dim y As Integer
	          y = 1
	
	          ' Add some items to the ListView control
	          For i = 1 To 40
	             ListView1.ListItems.Add Text:="test" & Str(i), Icon:=y
	             y = y + 1
	             If y = 5 Then y = 1
	          Next i
	        End Sub
	
	7. Save and run the project. You will not have a ScrollBar on the ListView
	  control.
	
	8. In the Properties window for the ListView control, set the FlatScrollBar
	  property to False, and then uncomment the following line of code in the
	  Form_Activate:
	
	        ListView1.FlatScrollBar = True
	
	9. Save and run the project. You now have a flat ScrollBar on the ListView
	  control.
	
	10. Try using the ScrollBar to scroll to the bottom of the ListView control. You
	  will see the control scroll past the last items in the ListView and the
	  ScrollBar will go to the bottom. But after you release the ScrollBar it will
	  jump towards the top of the control, but you will still see the last items
	  in the ListView control.
	
	Additional query words: kbDSupport kbDSD kbCtrl kbVBp kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
