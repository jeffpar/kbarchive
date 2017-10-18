---
layout: page
title: "Q181440: HOWTO: Add Full Row Select Functionality to a ListView Control"
permalink: kb/181/Q181440/
---

## Q181440: HOWTO: Add Full Row Select Functionality to a ListView Control

	Article: Q181440
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default behavior of the ListView control, when in Report View, is the
	ability to select only the item on the far left of the list. If you try to
	select any of the sub-items, nothing happens. Only the first item is available
	to be selected.
	
	You can avoid this limitation by adding a ListView extended style,
	LVS_EX_FULLROWSELECT, to the current ListView style. With this extended style
	you can select any sub-item and the entire row will be selected.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Select Components on the Project menu. Click the check box next to "Microsoft
	  Windows Common Controls 5.0," and then click OK.
	
	3. Add a ListView control (ListView1) to Form1.
	
	4. Add a CommandButton (Command1) to Form1.
	
	5. Add the following code to the Form module:
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	          "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal _
	          wParam As Long, lParam As Any) As Long
	
	        Const LVS_EX_FULLROWSELECT = &H20
	        Const LVM_FIRST = &H1000
	        Const LVM_GETEXTENDEDLISTVIEWSTYLE = LVM_FIRST + &H37
	        Const LVM_SETEXTENDEDLISTVIEWSTYLE = LVM_FIRST + &H36
	
	        Private Sub Command1_Click()
	          Dim lStyle As Long
	          lStyle = SendMessage(ListView1.hwnd, _
	             LVM_GETEXTENDEDLISTVIEWSTYLE, 0, 0)
	          lStyle = lStyle Or LVS_EX_FULLROWSELECT
	          Call SendMessage(ListView1.hwnd, LVM_SETEXTENDEDLISTVIEWSTYLE, _
	             0, ByVal lStyle)
	        End Sub
	
	        Private Sub Form_Load()
	          'Add two Column Headers to the ListView control
	          Set clmAdd = ListView1.ColumnHeaders.Add(Text:="Name")
	          Set clmAdd = ListView1.ColumnHeaders.Add(Text:="Date")
	
	          'Set the view property of the Listview control to Report view
	          ListView1.View = lvwReport
	
	          'Add data to the ListView control
	          Set itmAdd = ListView1.ListItems.Add(Text:="Joe")
	          itmAdd.SubItems(1) = "05/07/97"
	
	          Set itmAdd = ListView1.ListItems.Add(Text:="Sally")
	          itmAdd.SubItems(1) = "04/08/97"
	
	          Set itmAdd = ListView1.ListItems.Add(Text:="Bill")
	          itmAdd.SubItems(1) = "05/29/97"
	
	          Set itmAdd = ListView1.ListItems.Add(Text:="Fred")
	          itmAdd.SubItems(1) = "05/17/97"
	
	          Set itmAdd = ListView1.ListItems.Add(Text:="Anne")
	          itmAdd.SubItems(1) = "04/01/97"
	        End Sub
	
	6. Press the F5 key to start the program. Click one of the entries in the Date
	  column and observe that nothing occurs. Click on an entry in the Name column
	  and note that only the name is highlighted.
	
	7. Click the command button and then click on entries in each column. Note that
	  an entire row can now be selected by clicking an item in either column.
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
