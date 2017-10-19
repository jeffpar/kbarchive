---
layout: page
title: "Q232689: HOWTO: Get the Window Handle to a WindowsCE Control from VB"
permalink: /kb/232/Q232689/
---

## Q232689: HOWTO: Get the Window Handle to a WindowsCE Control from VB

	Article: Q232689
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many of the controls that ship with the Windows CE Toolkit for Visual Basic
	(VBCE) do not have an hWnd property. The hWnd property is necessary for many API
	functions. This article will illustrate how to obtain hWnd for a VBCE control.
	
	MORE INFORMATION
	================
	
	In this example, use the Windows CE API to enable FullRowSelect functionality of
	a ListView control. In order to accomplish this in Visual Basic 6.0, use the
	SendMessage API to set the style of the ListView, with the hWnd to the ListView
	being passed as a parameter. But the Windows CE ListView control does not
	provide an hWnd property, so you need to use GetFocus(), which returns the
	handle to the currently active window.
	
	Step by Step Example
	--------------------
	
	1. Create a new Windows CE HPC, HPC Pro, or PsPC Project in Visual Basic. Form1
	  is created by default.
	
	2. Select Components from the Project menu and select the "Microsoft CE ListView
	  Control 6.0."
	
	3. Place a ListView control on Form1.
	
	4. Paste the following code into Form1:
	
	  Option Explicit
	
	  Declare Function GetFocus Lib "coredll" () As Long
	  Declare Function SendMessage Lib "coredll" Alias "SendMessageW" ( _
	      ByVal hwnd As Long, _
	      ByVal wMsg As Long, _
	      ByVal wParam As Long, _
	      ByVal lParam As Long) As Long
	
	  Const LVS_EX_FULLROWSELECT = &H20
	  Const LVM_FIRST = &H1000
	  Const LVM_GETEXTENDEDLISTVIEWSTYLE = &H1037
	  Const LVM_SETEXTENDEDLISTVIEWSTYLE = &H1036
	
	  Private Sub Form_Load()
	      Dim lStyle As Long
	
	      ListViewCtrl1.View = lvwReport
	      ListViewCtrl1.LabelEdit = lvwManual
	
	      'Add Column headers
	      ListViewCtrl1.ColumnHeaders.Add 1, "First", "First"
	      ListViewCtrl1.ColumnHeaders.Add 2, "Second", "SECOND"
	      ListViewCtrl1.ColumnHeaders.Add 3, "Third", "THIRD"
	      
	      'Add first ListItem
	      ListViewCtrl1.ListItems.Add 1, "Item1", "First Item"
	      ListViewCtrl1.ListItems(1).SubItems(1) = "TEST"
	      ListViewCtrl1.ListItems(1).SubItems(2) = "TEST"
	
	      'Add second ListItem
	      ListViewCtrl1.ListItems.Add 2, "Item2", "Second Item"
	      ListViewCtrl1.ListItems(2).SubItems(1) = "TEST"
	      ListViewCtrl1.ListItems(2).SubItems(2) = "TEST"
	       
	      ListViewCtrl1.SetFocus
	          
	      lStyle = SendMessage(GetFocus(), LVM_GETEXTENDEDLISTVIEWSTYLE, 0, 0)
	      lStyle = lStyle Or LVS_EX_FULLROWSELECT
	      Call SendMessage(GetFocus(), LVM_SETEXTENDEDLISTVIEWSTYLE, 0, lStyle)
	  End Sub
	
	5. Run the project targeting either the default device or emulation.
	
	Note that an entire row can now be selected by clicking an item in any column.
	Also note that the SendMessage API requires a window handle as the first
	parameter. Because the GetFocus API returns the handle to the currently active
	window, you are able to pass this as the first parameter to SendMessage.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q181440 HOWTO: Add Full Row Select Functionality to a ListView Control
	
	Additional query words: vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600 kbVBeMb300
	Version           : :1.0,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
