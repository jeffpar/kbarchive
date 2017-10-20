---
layout: page
title: "Q181891: BUG: OLE Drag Disabled When ListBox Has Multiple Columns"
permalink: /kb/181/Q181891/
---

## Q181891: BUG: OLE Drag Disabled When ListBox Has Multiple Columns

{% raw %}

	Article: Q181891
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A listbox control is set to more than one column and the OLEDragMode property is
	set to Automatic to allow for OLE Drag-and-Drop. When you attempt to drag an
	item to another control from any column of the listbox other than the first, the
	item is not copied to the target control as expected.
	
	RESOLUTION
	==========
	
	To work around this problem, initiate the drag from the listbox using the
	OLEDrag method.
	
	For example, you would add code such as the following to the MouseDown event of
	the "multi-column" listbox:
	
	      Private Sub List1_MouseDown(Button As Integer, Shift As Integer, _
	                                  X As Single, Y As Single)
	         List1.OLEDrag
	      End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the following controls to Form1 and set the following properties for the
	  appropriate controls:
	
	  Control           Default Name     Property            Setting
	  ---------------------------------------------------------------
	  Text Box          Text1            Text                <Blank>
	                                     OLEDropMode         2 - Automatic
	
	  List Box          List1            Columns             2
	                                     OLEDragMode         1 - Automatic
	
	3. Copy the following code to the Module of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Dim intCounter As Integer
	           ' Add some test data to the ListBox
	           For intCounter = 1 To 100
	              List1.AddItem CStr(intCounter)
	           Next
	        End Sub
	
	        Private Sub List1_MouseDown(Button As Integer, Shift As Integer, _
	                                    X As Single, Y As Single)
	           ' Uncomment the next line for a simple workaround.
	           'List1.OLEDrag
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Select
	  an item from the first column and drag that item to the text box.
	
	  NOTE: You must Click and release to select the item, then Click-and- Drag the
	  same item as a second operation. Now, select an item from the second column
	  and drag that item to the text box.
	
	  RESULT: The item from the first column is copied to the text box, but the item
	  from the second column is not.
	
	5. Choose End from the Run Menu or Click the End button to stop the program.
	  Uncomment the workaround line and repeat step 4.
	
	  RESULT: Both items are now successfully copied to the text box. Also, it no
	  longer requires a Click to select and a second Click-and-Drag to move the
	  item. This can now be a single Click-and-Drag operation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
