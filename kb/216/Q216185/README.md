---
layout: page
title: "Q216185: HOWTO: Create Multi-Column Menus in Visual Basic Using the WIN32"
permalink: /kb/216/Q216185/
---

## Q216185: HOWTO: Create Multi-Column Menus in Visual Basic Using the WIN32

	Article: Q216185
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbMenu kbGrpDSUser kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Multi-column menus can be useful when you don't want to cover up sections of
	your form or when handling large menus that would otherwise extend beyond the
	screen. Visual Basic offers no built-in method for creating multi-column menus.
	However, you can split a menu into multiple columns by using a few API calls.
	The following sample demonstrates how to do this both at Form Load and
	dynamically, from a CommandButton.
	
	NOTE: This technique will only work for menus that are visible on the menu bar.
	It does not work for invisible menus, such as shortcut or pop-up menus.
	
	MORE INFORMATION
	================
	
	Step by step example
	--------------------
	
	1. Open a new Standard EXE Project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. On the Tools menu, click Menu Editor. Create a menu consisting of at least
	  two top level menus containing at least four submenu items each.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Type MENUITEMINFO
	     cbSize As Long
	     fMask As Long
	     fType As Long
	     fState As Long
	     wID As Long
	     hSubMenu As Long
	     hbmpChecked As Long
	     hbmpUnchecked As Long
	     dwItemData As Long
	     dwTypeData As String
	     cch As Long
	  End Type
	
	  Private Const MF_MENUBARBREAK = &H20& ' columns with a separator line
	  Private Const MF_MENUBREAK = &H40&    ' columns w/o a separator line
	  Private Const MF_STRING = &H0&
	  Private Const MF_HELP = &H4000&
	  Private Const MFS_DEFAULT = &H1000&
	
	  Private Const MIIM_ID = &H2
	  Private Const MIIM_SUBMENU = &H4
	  Private Const MIIM_TYPE = &H10
	  Private Const MIIM_DATA = &H20
	
	  Private Declare Function GetMenu Lib "user32" (ByVal hwnd As Long) As Long
	
	  Private Declare Function GetMenuItemInfo Lib "user32" _
	     Alias "GetMenuItemInfoA" _
	     (ByVal hMenu As Long, ByVal un As Long, ByVal B As Boolean, _
	     lpMenuItemInfo As MENUITEMINFO) As Long
	    
	  Private Declare Function SetMenuItemInfo Lib "user32" _
	     Alias "SetMenuItemInfoA" _
	     (ByVal hMenu As Long, ByVal un As Long, ByVal bool As Boolean, _
	     lpcMenuItemInfo As MENUITEMINFO) As Long
	
	  Private Declare Function DrawMenuBar Lib "user32" (ByVal hwnd As Long) _
	     As Long
	
	  Private Declare Function GetSubMenu Lib "user32" (ByVal hMenu As Long, _
	     ByVal nPos As Long) As Long
	
	  Private Sub Command1_Click()
	  ' Splitting a menu here demonstrates that this can be done dynamically.
	     Dim mnuItemInfo As MENUITEMINFO, hMenu As Long, hSubMenu As Long
	     Dim BuffStr As String * 80   ' Define as largest possible menu text.
	
	     hMenu = GetMenu(Me.hwnd)   ' retrieve menu handle.
	     BuffStr = Space(80)
	     With mnuItemInfo   ' Initialize the UDT.
	            .cbSize = Len(mnuItemInfo)   ' 44
	            .dwTypeData = BuffStr & Chr(0)
	            .fType = MF_STRING
	            .cch = Len(mnuItemInfo.dwTypeData)   ' 80
	            .fState = MFS_DEFAULT
	            .fMask = MIIM_ID Or MIIM_DATA Or MIIM_TYPE Or MIIM_SUBMENU
	     End With
	  ' Use item break point position for the '3' below (zero-based list).
	     hSubMenu = GetSubMenu(hMenu, 0)
	     If GetMenuItemInfo(hSubMenu, 2, True, mnuItemInfo) = 0 Then
	        MsgBox "GetMenuItemInfo failed. Error: " & Err.LastDllError, , _
	               "Error"
	     Else
	        mnuItemInfo.fType = mnuItemInfo.fType Or MF_MENUBARBREAK
	        If SetMenuItemInfo(hSubMenu, 2, True, mnuItemInfo) = 0 Then
	           MsgBox "SetMenuItemInfo failed. Error: " & Err.LastDllError, , _
	                  "Error"
	        End If
	     End If
	     DrawMenuBar (Me.hwnd)   ' Repaint top level Menu.
	  End Sub
	
	  Private Sub Form_Load()
	  ' This works for either an API-created menu or a native VB Menu.
	     Dim mnuItemInfo As MENUITEMINFO, hMenu As Long, hSubMenu As Long
	     Dim BuffStr As String * 80   ' Define as largest possible menu text.
	
	     hMenu = GetMenu(Me.hwnd)   ' Retrieve menu handle.
	     BuffStr = Space(80)
	     With mnuItemInfo   ' Initialize the UDT
	            .cbSize = Len(mnuItemInfo)   ' 44
	            .dwTypeData = BuffStr & Chr(0)
	            .fType = MF_STRING
	            .cch = Len(mnuItemInfo.dwTypeData)   ' 80
	            .fState = MFS_DEFAULT
	            .fMask = MIIM_ID Or MIIM_DATA Or MIIM_TYPE Or MIIM_SUBMENU
	     End With
	  ' Use item break point position for the '3' below (zero-based list).
	     hSubMenu = GetSubMenu(hMenu, 1)
	     If GetMenuItemInfo(hSubMenu, 2, True, mnuItemInfo) = 0 Then
	        MsgBox "GetMenuItemInfo failed. Error: " & Err.LastDllError, , _
	               "Error"
	     Else
	        mnuItemInfo.fType = mnuItemInfo.fType Or MF_MENUBREAK
	        If SetMenuItemInfo(hSubMenu, 2, True, mnuItemInfo) = 0 Then
	           MsgBox "SetMenuItemInfo failed. Error: " & Err.LastDllError, , _
	                  "Error"
	        End If
	     End If
	     DrawMenuBar (Me.hwnd)   ' Repaint top level Menu.
	  End Sub
	
	  Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
	     If Button = vbRightButton Then
	        PopupMenu Aaa   ' Use the name of one of your menus.
	     End If
	  End Sub
	
	5. Change the "Aaa" in the last procedure above to the name of one of your top
	  level menus.
	
	6. Run the project and click on the menu items.
	
	Results: The first menu drops straight down as usual, but the second has two
	columns. Also, right-click the Form and the first item comes up as a normal
	pop-up menu. Then click the CommandButton and try these tests again. Now the
	first menu item and the pop-up have two columns with a separator line between
	them. If you wish to dynamically divide the columns, you can use the API
	function GetMenuItemCount to get the number of items and then loop through them.
	You can either search for a specific string to determine the break point or you
	can just break every X items.
	
	REFERENCES
	==========
	
	For additional information about manipulating menus in Visual Basic, please see
	the following article in the Microsoft Knowledge Base:
	
	Q216189 HOWTO: Right Justify the Help Menu Item in Visual Basic
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Chris E.
	Jolley, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbMenu kbGrpDSUser kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
