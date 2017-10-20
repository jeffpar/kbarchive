---
layout: page
title: "Q189733: BUG: Setting Windowless ListBox ListIndex Fires Click Event"
permalink: /kb/189/Q189733/
---

## Q189733: BUG: Setting Windowless ListBox ListIndex Fires Click Event

{% raw %}

	Article: Q189733
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
	
	When you programmatically select an item from a Windowless ListBox control, the
	control's Click event is fired regardless of which item was previously selected.
	This behavior differs from the standard ListBox control where programmatically
	reselecting an item does not result in a Click event.
	
	The behavior of selection through the use of the mouse is not affected and is
	consistent between these two controls.
	
	RESOLUTION
	==========
	
	To work around this behavior, check to see if the value that you are about to
	assign to the ListIndex matches the current ListIndex's value, and make the
	assignment only if these values differ. See step 10 in the MORE INFORMATION
	section of this article for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Components and add a reference to the "Microsoft
	  Windowless Controls."
	
	3. Add a Standard ListBox to Form1.
	
	4. Add a Windowless ListBox to Form1.
	
	5. Add a CommandButton to Form1.
	
	6. Paste the following code into Form1's code window:
	
	        Private Sub Form_Load
	           ' Add some items to the lists
	           List1.AddItem "test"
	           List1.AddItem "test1"
	           WLList1.AddItem "test"
	           WLList1.AddItem "test1"
	        End Sub
	
	        Private Sub Command1_Click()
	           ' Select the first item in both lists
	           List1.ListIndex = 0
	           WLList1.ListIndex = 0
	        End Sub
	
	        Private Sub List1_Click()
	           Debug.Print "List1.Click"
	        End Sub
	
	        Private Sub WLList1_Click()
	           Debug.Print "WLList1.Click"
	        End Sub
	
	7. Run the sample project.
	
	8. Click the CommandButton. The click events for both list controls are executed
	  and the results are displayed in the debug window.
	
	9. Click the CommandButton again. Only the click event for the Windowless
	  ListBox control is executed.
	
	10. Replace the code from step 6 with the following to demonstrate a workaround
	  that makes use of a custom property:
	
	        Private Sub Form_Load()
	           ' Add some items to the lists
	           List1.AddItem "test"
	           List1.AddItem "test1"
	           WLList1.AddItem "test"
	           WLList1.AddItem "test1"
	        End Sub
	
	        Private Sub Command1_Click()
	           ' Select the first item in both lists
	           List1.ListIndex = 0
	
	           ' Call custom property to set windowless listindex
	           SetListIndex = 0
	        End Sub
	
	        Private Sub List1_Click()
	           Debug.Print "List1.Click"
	        End Sub
	
	        Private Sub WLList1_Click()
	           Debug.Print "WLList1.Click"
	        End Sub
	
	        Private Property Let SetListIndex(NewListIndex As Long)
	           ' Check if selection changed
	           If NewListIndex <> WLList1.ListIndex Then
	              WLList1.ListIndex = NewListIndex
	           End If
	        End Property
	
	11. Repeat steps 7 through 9. In step 9, note that neither click event is
	  executed.
	
	Additional query words: kbDSupport kbDSD Lightweight kbVBp kbVBp600bug kbCtrl kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
