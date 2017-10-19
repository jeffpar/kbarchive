---
layout: page
title: "Q170884: HOWTO: Sort a ListView Control by Date"
permalink: /kb/170/Q170884/
---

## Q170884: HOWTO: Sort a ListView Control by Date

	Article: Q170884
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a Listview control, you can set the Sorted property for the control
	to sort the list alphabetically. However, the Listview control does not expose a
	property or method for sorting a list by date. This article presents a method
	that you can use to sort a Listview control by date.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	To sort data in a ListView control by date, it is necessary to provide a
	comparison function to the control via AddressOf.
	
	NOTE: Using this approach, you will sort the data in the control but not the
	ListItems collection. Therefore, if you must read the data from the list in
	sorted order, it is necessary to step through the actual list rather than the
	ListItems collection.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. On the Project menu, click Components, select the "Microsoft Windows Common
	  Controls 5.0" check box, and then click OK.
	
	  NOTE: You can also use Visual Basic 6.0 and select the "Microsoft Windows
	  Common Controls 6.0" check box with only one minor change, as noted below.
	
	3. Add a Module to the project.
	
	4. Draw a ListView control on Form1.
	
	5. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	
	          Dim clmAdd As ColumnHeader
	          Dim itmAdd As ListItem
	
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
	
	        ' Use this line of code for Common Controls 5.0:
	        Private Sub ListView1_ColumnClick(ByVal ColumnHeader As _
	                ComctlLib.ColumnHeader)
	        ' For Common Controls 6.0, uncomment the line below and comment the line above.
	        'Private Sub ListView1_ColumnClick(ByVal ColumnHeader As _
	                MSComctlLib.ColumnHeader)
	
	          Dim strName As String
	          Dim dDate As Date
	          Dim lngItem As Long
	
	          'Handle User click on column header
	          If ColumnHeader.Text = "Name" Then  'User clicked on Name header
	            ListView1.Sorted = True        'Use default sorting to sort the
	            ListView1.SortKey = 0          'items in the list
	          Else
	            ListView1.Sorted = False       'User clicked on the Date header
	                                           'Use our sort routine to sort
	                                           'by date
	            SendMessage ListView1.hWnd, _
	                        LVM_SORTITEMS, _
	                        ListView1.hWnd, _
	                        AddressOf CompareDates
	          End If
	
	          'Refresh the ListView before writing the data
	          ListView1.Refresh
	
	          'Loop through the items in the List to print them out in
	          'sorted order.
	          'NOTE: You are looping through the ListView control because when _
	          'sorting by date the ListItems collection won't be sorted.
	
	          For lngItem = 0 To ListView1.ListItems.Count - 1
	            ListView_GetListItem lngItem, ListView1.hWnd, strName, dDate
	          Next
	
	        End Sub
	
	6. Add the following code to Module1:
	
	        Option Explicit
	
	        'Structures
	
	        Public Type POINT
	          x As Long
	          y As Long
	        End Type
	
	        Public Type LV_FINDINFO
	          flags As Long
	          psz As String
	          lParam As Long
	          pt As POINT
	          vkDirection As Long
	        End Type
	
	        Public Type LV_ITEM
	          mask As Long
	          iItem As Long
	          iSubItem As Long
	          State As Long
	          stateMask As Long
	          pszText As Long
	          cchTextMax As Long
	          iImage As Long
	          lParam As Long
	          iIndent As Long
	        End Type
	
	        'Constants
	        Private Const LVFI_PARAM = 1
	        Private Const LVIF_TEXT = &H1
	
	        Private Const LVM_FIRST = &H1000
	        Private Const LVM_FINDITEM = LVM_FIRST + 13
	        Private Const LVM_GETITEMTEXT = LVM_FIRST + 45
	        Public Const LVM_SORTITEMS = LVM_FIRST + 48
	
	        'API declarations
	
	        Declare Function SendMessage Lib "user32" Alias "SendMessageA" ( _
	          ByVal hWnd As Long, _
	          ByVal wMsg As Long, _
	          ByVal wParam As Long, _
	          ByVal lParam As Long) As Long
	
	        'Module Functions and Procedures
	
	        'CompareDates: This is the sorting routine that gets passed to the
	        'ListView control to provide the comparison test for date values.
	
	        Public Function CompareDates(ByVal lngParam1 As Long, _
	                                     ByVal lngParam2 As Long, _
	                                     ByVal hWnd As Long) As Long
	
	          Dim strName1 As String
	          Dim strName2 As String 
	          Dim dDate1 As Date
	          Dim dDate2 As Date
	
	          'Obtain the item names and dates corresponding to the
	          'input parameters
	
	          ListView_GetItemData lngParam1, hWnd, strName1, dDate1
	          ListView_GetItemData lngParam2, hWnd, strName2, dDate2
	
	          'Compare the dates
	          'Return 0 ==> Less Than
	          '       1 ==> Equal
	          '       2 ==> Greater Than
	
	          If dDate1 < dDate2 Then
	            CompareDates = 0
	          ElseIf dDate1 = dDate2 Then
	            CompareDates = 1
	          Else
	            CompareDates = 2
	          End If
	
	        End Function
	
	        'GetItemData - Given Retrieves
	
	        Public Sub ListView_GetItemData(lngParam As Long, _
	                                        hWnd As Long, _
	                                        strName As String, _
	                                        dDate As Date)
	          Dim objFind As LV_FINDINFO
	          Dim lngIndex As Long
	          Dim objItem As LV_ITEM
	          Dim baBuffer(32) As Byte
	          Dim lngLength As Long
	
	          '
	          ' Convert the input parameter to an index in the list view
	          '
	          objFind.flags = LVFI_PARAM
	          objFind.lParam = lngParam
	          lngIndex = SendMessage(hWnd, LVM_FINDITEM, -1, VarPtr(objFind))
	
	          '
	          ' Obtain the name of the specified list view item
	          '
	          objItem.mask = LVIF_TEXT
	          objItem.iSubItem = 0
	          objItem.pszText = VarPtr(baBuffer(0))
	          objItem.cchTextMax = UBound(baBuffer)
	          lngLength = SendMessage(hWnd, LVM_GETITEMTEXT, lngIndex, _
	                                  VarPtr(objItem))
	          strName = Left$(StrConv(baBuffer, vbUnicode), lngLength)
	
	          '
	          ' Obtain the modification date of the specified list view item
	          '
	          objItem.mask = LVIF_TEXT
	          objItem.iSubItem = 1
	          objItem.pszText = VarPtr(baBuffer(0))
	          objItem.cchTextMax = UBound(baBuffer)
	          lngLength = SendMessage(hWnd, LVM_GETITEMTEXT, lngIndex, _
	                                  VarPtr(objItem))
	          If lngLength > 0 Then
	            dDate = CDate(Left$(StrConv(baBuffer, vbUnicode), lngLength))
	          End If
	
	        End Sub
	
	        'GetListItem - This is a modified version of ListView_GetItemData
	        ' It takes an index into the list as a parameter and returns
	        ' the appropriate values in the strName and dDate parameters.
	
	        Public Sub ListView_GetListItem(lngIndex As Long, _
	                                        hWnd As Long, _
	                                        strName As String, _
	                                        dDate As Date)
	          Dim objItem As LV_ITEM
	          Dim baBuffer(32) As Byte
	          Dim lngLength As Long
	
	          '
	          ' Obtain the name of the specified list view item
	          '
	          objItem.mask = LVIF_TEXT
	          objItem.iSubItem = 0
	          objItem.pszText = VarPtr(baBuffer(0))
	          objItem.cchTextMax = UBound(baBuffer)
	          lngLength = SendMessage(hWnd, LVM_GETITEMTEXT, lngIndex, _
	                                  VarPtr(objItem))
	          strName = Left$(StrConv(baBuffer, vbUnicode), lngLength)
	
	          '
	          ' Obtain the modification date of the specified list view item
	          '
	          objItem.mask = LVIF_TEXT
	          objItem.iSubItem = 1
	          objItem.pszText = VarPtr(baBuffer(0))
	          objItem.cchTextMax = UBound(baBuffer)
	          lngLength = SendMessage(hWnd, LVM_GETITEMTEXT, lngIndex, _
	                                  VarPtr(objItem))
	          If lngLength > 0 Then
	            dDate = CDate(Left$(StrConv(baBuffer, vbUnicode), lngLength))
	          End If
	
	        End Sub
	
	7. Save your project.
	
	8. Press the F5 key to run the application. Click the Date column header to sort
	  the items in the list by date.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
