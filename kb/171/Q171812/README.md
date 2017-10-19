---
layout: page
title: "Q171812: FIX: Run-Time Error When DataObject Passed as Object"
permalink: /kb/171/Q171812/
---

## Q171812: FIX: Run-Time Error When DataObject Passed as Object

	Article: Q171812
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you pass a DataObject as an Object to another procedure, you receive one of
	the following errors:
	
	  Run-time error '-2147417848 (80010108)':
	  Method 'GetFormat' of object 'IVBDataObject' failed
	
	  - or -
	
	  Run-time error '-2147319765 (8002802b)':
	  Automation Error
	
	RESOLUTION
	==========
	
	This problem is corrected with Microsoft Visual Studio 97 Service Pack 2.
	
	You may also work around this issue by obtaining the correct interface to the
	DataObject that contains the GetFormat method. The example below illustrates
	this workaround. In this example, the DataObject is passed to a subroutine as an
	Object and is then set to a variable of type MSFlexGridLib.DataObject:
	
	     Private Sub MSFlexGrid1_OLEDragDrop( _
	        Data As msflexgridlib.DataObject, Effect As Long, Button As _
	        Integer, Shift As Integer, x As Single, y As Single)
	        PrintIt Data
	     End Sub
	
	     Sub PrintIt(d As Object)
	         Dim iDataObject As MSFlexGridLib.DataObject
	         Set iDataObject = d
	         Debug.Print iDataObject.GetFormat(vbCFText)
	     End Sub
	
	This method allows you to communicate directly with the DataObject interface of
	the Object that is passed to the PrintIt procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	This error may occur with ActiveX controls that support OLE drag-and-drop. The
	error does not occur with intrinsic controls.
	
	The following list contains some ActiveX controls that exhibit this problem:
	
	  Animation
	  FlexGrid
	  ListView
	  Masked EditBox
	  Progress Bar
	  Rich TextBox
	  Slider
	  SSTab
	  StatusBar
	  TabStrip
	  Toolbar
	  TreeView
	  UpDown
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new "Standard EXE" project.
	
	2. Click Components on the Project menu. Check "Microsoft FlexGrid Control 5.0."
	
	3. Add a TextBox to Form1. Set the OLEDragMode property to 1-Automatic and the
	  OLEDropMode to 1-Manual.
	
	4. Add a FlexGrid to Form1. Set the OLEDropMode to 1-flexOLEDropManual.
	
	5. Add the following code to Form1:
	
	        Private Sub MSFlexGrid1_OLEDragDrop( _
	           Data As msflexgridlib.DataObject, Effect As Long, Button As _
	           Integer, Shift As Integer, x As Single, y As Single)
	           PrintIt Data
	        End Sub
	
	        Sub PrintIt(d As Object)
	           Debug.Print d.GetFormat(vbCFText)
	        End Sub
	
	        Private Sub Text1_OLEDragDrop(Data As DataObject, Effect As Long, _
	           Button As Integer, Shift As Integer, x As Single, y As Single)
	           PrintIt Data
	        End Sub
	   
	
	6. Press the F5 key to run the application.
	
	7. Highlight the text in the TextBox, then drag-and-drop it on top of itself. As
	  expected, "True" is printed to the Immediate window.
	
	8. Highlight the text in the TextBox, then drag-and-drop it on top of the
	  FlexGrid. You receive the following error:
	
	  Run-time error '-2147417848 (80010108)':
	  Method 'GetFormat' of object 'IVBDataObject' failed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
