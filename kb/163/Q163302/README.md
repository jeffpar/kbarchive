---
layout: page
title: "Q163302: PPT: Sample VB Code to Retrieve the Title of a Graph"
permalink: kb/163/Q163302/
---

## Q163302: PPT: Sample VB Code to Retrieve the Title of a Graph

	Article: Q163302
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains two sample Microsoft Visual Basic for Applications macros
	(Sub procedures) that retrieve the title of a Microsoft Graph version 8.0
	object. The second example detects whether more than one Microsoft Graph version
	8.0 object is selected.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Example 1
	---------
	
	    Sub GetGraphTitle()
	
	       ' Used for error trapping.
	       On Error Resume Next
	
	       ' Clear the error object.
	       Err.Clear
	
	       ' A reference to an object.
	       Dim oGraph As Object
	
	       ' Check if an OLE object is selected.
	       Set oGraph = ActiveWindow.Selection.ShapeRange(1).OLEFormat.Object
	       If Err.Number <> 0 Then
	
	        ' A run-time error is generated if the selection is not an OLE
	        ' object. This code traps the run-time error and prevents it from
	        ' appearing.
	        MsgBox "Select one graph and run the macro again.", vbExclamation
	        End
	       End If
	
	       ' Check to see whether the graph has a title.
	       If oGraph.HasTitle Then
	
	        ' A run-time error is generated if the selection if not a
	        ' Graph object. This code traps the run-time error and prevents it
	        ' from appearing.
	        If Err.Number <> 0 Then
	           MsgBox "Select one graph and run the macro again.", vbExclamation
	           End
	        End If
	
	        ' The graph has a title.
	        MsgBox oGraph.ChartTitle.Text, vbInformation, "Graph Title"
	       Else
	
	        ' The graph does not have a title.
	        MsgBox "The selected graph has no title.", vbInformation, "No Title"
	       End If
	
	     End Sub
	
	Example 2
	---------
	
	   Sub GetGraphTitle()
	
	       ' Declare the variables.
	       Dim strErrorPrompt As String
	       Dim strErrorTitle As String
	       Dim shapeGraph As Shape
	       Dim oGraph As Object
	
	       ' Check to see whether the selection is a shape.
	       If ActiveWindow.Selection.Type <> ppSelectionShapes Then
	
	        ' The selection is not a shape.
	        ' Set up the message box.
	        strErrorPrompt = "The selection is not a graph." _
	           & " Please select a graph and run the macro again."
	        strErrorTitle = "No Graph Selected"
	
	        ' Display the message.
	        MsgBox strErrorPrompt, vbExclamation, strErrorTitle
	
	        ' Stop the macro.
	        End
	       End If
	
	       ' Check to see whether more than one object is selected.
	       If ActiveWindow.Selection.ShapeRange.Count > 1 Then
	
	        ' Set up the message box.
	        strErrorPrompt = "More than one object is selected." _
	           & " Please select one graph and run the macro again."
	        strErrorTitle = "Too Many Objects Selected."
	
	        ' Display the message box.
	        MsgBox strErrorPrompt, vbExclamation, strErrorTitle
	
	        ' Stop the macro.
	        End
	       End If
	
	       ' Check to see whether the selection is an OLE object.
	       Set shapeGraph = ActiveWindow.Selection.ShapeRange(1)
	       If shapeGraph.Type <> msoEmbeddedOLEObject Then
	
	        ' The selection is not a graph.
	        strErrorPrompt = "The selection is not a graph." _
	        & " Please select a graph and run the macro again."
	        strErrorTitle = "No Graph Selected."
	
	        ' Display the message.
	        MsgBox strErrorPrompt, vbExclamation, strErrorTitle
	
	        ' Stop the macro.
	        End
	
	       End If
	
	       ' Check to see whether the selection is a graph object.
	       If shapeGraph.OLEFormat.ProgID <> "MSGraph.Chart.8" Then
	
	        ' The selection is not a graph.
	        strErrorPrompt = "The selection is not a graph." _
	        & " Please select a graph and run the macro again."
	        strErrorTitle = "No Graph Selected"
	
	        ' Display the message.
	        MsgBox strErrorPrompt, vbExclamation, strErrorTitle
	
	        ' Stop the macro.
	        End
	
	       End If
	
	       ' A graph is selected.
	       Set oGraph = shapeGraph.OLEFormat.Object
	
	       If oGraph.HasTitle Then
	
	        ' Get the title and display a message box.
	        MsgBox oGraph.ChartTitle.Text, vbInformation, "Graph Title"
	
	       Else
	        ' The graph has no title.
	        MsgBox "The selected graph has no title.", vbInformation, "No Title"
	
	       End If
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks) click Search, and then click to view "Create a
	macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro" (without
	the quotation marks) click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
