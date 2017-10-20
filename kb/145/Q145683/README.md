---
layout: page
title: "Q145683: BUG: Changing ListItem.Selected Doesn't Change SelectedItem"
permalink: /kb/145/Q145683/
---

## Q145683: BUG: Changing ListItem.Selected Doesn't Change SelectedItem

{% raw %}

	Article: Q145683
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setting the Selected property of a ListItem object in a ListView control to True
	does not change the SelectedItem property of the ListView control to correspond
	to this ListItem.
	
	WORKAROUND
	==========
	
	To avoid this problem, use the SelectedItem property of the ListView control
	instead of the Selected property of an individual ListItem. Setting the
	SelectedItem property of a ListView control to a given ListItem will correctly
	modify the Selected property of that ListItem.
	
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
	
	1. Start Visual Basic, or if it is already running, choose New Project from the
	  File menu.
	
	2. Add a single ListView control to Form1.
	
	3. Add the following code to Form1:
	
	     Option Explicit
	
	     Private Sub Form_Load()
	         Dim LI As ListItem
	         Dim i As Integer
	
	         For i = 1 To 3
	             Set LI = listview1.ListItems.Add(, , "Test " & i)
	             LI.Selected = True
	         Next i
	
	         Debug.Print "SelectedItem = " & listview1.SelectedItem.Text
	
	         For i = 1 To 3
	             Debug.Print listview1.ListItems(i).Text & ", Selected = " _
	             & listview1.ListItems(i).Selected
	         Next i
	     End Sub
	
	4. Press F5 to run the project. Notice the output in the debug window:
	
	  SelectedItem = Test 1
	  Test 1, Selected = False
	  Test 2, Selected = False
	  Test 3, Selected = True
	
	  Although the Selected property of each ListItem is correct, the SelectedItem
	  property of the ListView control itself still refers to the first ListItem.
	  Setting the Selected property of the ListItems did not modify the
	  SelectedItem property of the ListView control. To work around the problem,
	  set the SelectedItem property instead. For example, in this sample, change
	  the Selected line inside the first For..Next loop from
	
	        LI.Selected = True
	
	  to:
	
	        Set ListView1.SelectedItem = LI
	
	  Running the project after this change has been made will cause the expected
	  output (that is, the Text property of SelectedItem is now 'Test 3') to be
	  displayed in the debug window.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
