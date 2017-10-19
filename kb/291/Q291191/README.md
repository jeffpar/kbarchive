---
layout: page
title: "Q291191: HOWTO: Use the ENTER Key to Navigate in Visual Basic DataGrid"
permalink: /kb/291/Q291191/
---

## Q291191: HOWTO: Use the ENTER Key to Navigate in Visual Basic DataGrid

	Article: Q291191
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDataBinding kbGrpDSVBDB kbDSupport
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many applications that display data in a grid interface allow the user to use
	the ENTER (RETURN) key to navigate from cell to cell. The Visual Basic DataGrid
	does not offer a property setting to activate such a feature. This article
	demonstrates how you can work around this limitation to achieve ENTER key
	navigation by using simple code.
	
	MORE INFORMATION
	================
	
	The Visual Basic DataGrid normally expects the user to use the ARROW keys or the
	TAB key to navigate from cell to cell and from row to row. (The exact behavior
	of the TAB key depends on your choices for the TabAction and WrapCellPointer
	properties of the DataGrid.) In order to allow the use of the ENTER key for this
	purpose, the developer must trap the ENTER key press in the DataGrid's KeyDown
	or KeyPress event and "convert" the pressed key value to a TAB key:
	
	1. On the DataGrid's Property pages, on the Keyboard tab, select the
	  WrapCellPointer checkbox and select dbgGridNavigation from the TabAction
	  dropdown list. Alternatively, you can set these two properties in your code.
	
	2. If you do not have a command button on your form with the Default property
	  set to True (which would cause the ENTER key to fire the command button's
	  click procedure), you can trap the ENTER key in the DataGrid's KeyDown event
	  as follows:
	
	  Private Sub DataGrid1_KeyDown(KeyCode As Integer, Shift As Integer)
	    If KeyCode = vbKeyReturn Then
	      KeyCode = vbKeyTab
	    End If
	  End Sub
	
	  Otherwise, you can also use the KeyPress event for the same purpose:
	
	  Private Sub DataGrid1_KeyPress(KeyAscii As Integer)
	    If KeyAscii = vbKeyReturn Then
	      KeyAscii = vbKeyTab
	    End If
	  End Sub
	
	Additional query words: DataGrid
	
	======================================================================
	Keywords          : kbCtrl kbDataBinding kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
