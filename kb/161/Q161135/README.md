---
layout: page
title: "Q161135: PPT: Sample Code to Extract Text from an Organization Chart"
permalink: /kb/161/Q161135/
---

## Q161135: PPT: Sample Code to Extract Text from an Organization Chart

	Article: Q161135
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97; :2.0
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Word 97 for Windows 
	- Microsoft Organization Chart, version 2.0 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following sample Microsoft Visual Basic for Applications macro (Sub
	procedure) extracts the text from an Organization Chart in a PowerPoint slide
	and then transfers that text into a new Microsoft Word document. Once the text
	is in Word you can edit it as you would any text.
	
	NOTE: The macro does not modify the original Organization Chart in any way.
	
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
	
	Sample Visual Basic Procedure
	-----------------------------
	
	     Sub OrgMain()
	
	        ' Variables.
	        Dim ShapeType, WhatIsSelected, CurrentView As Integer
	        Dim SlideCount, ObjectCount, SelectCount, i, x As Long
	        Dim Total, NextAvailable, top, BoxCount, LastSlide As Long
	        Dim WordRunning As Boolean
	        Dim word As Object
	        Dim StringTable(), OleObjectType, temp As String
	
	        ' Keeps track of the number of text boxes in the chart.
	        Total = 0
	        BoxCount = 0
	
	        ' Used for error trapping.
	        On Error Resume Next
	        Err.Clear
	
	        ' Check the type of the item selected.
	        WhatIsSelected = ActiveWindow.Selection.Type
	
	        ' Check to see whether any objects are selected.
	        If WhatIsSelected = ppSelectionNone Then
	           ' No objects are selected, so end the macro.
	           MsgBox "No Organization Chart selected. " _
	              & "Please select an Organization Chart and run " _
	              & "the macro again.", vbInformation
	           End
	        End If
	
	        ' Check to see whether a slide is selected.
	        If WhatIsSelected = ppSelectionSlides Then
	           ' A slide is selected, so end the macro.
	           MsgBox "A slide is selected. " _
	              & "Please select an Organization Chart and run " _
	              & "the macro again.", vbInformation
	           End
	        End If
	
	        ' Count the selections.
	        SelectCount = ActiveWindow.Selection.ShapeRange.Count
	
	        ' If multiple objects selected, end the macro.
	        If SelectCount > 1 Then
	           MsgBox "Too many objects selected. " _
	              & "Please select 1 Organization Chart and run " _
	              & "the macro again.", vbInformation
	           End
	        End If
	
	        ' If the selection is not a shape, exit the macro.
	        If WhatIsSelected <> ppSelectionShapes Then
	           MsgBox "The object selected is not " _
	              & "an Organization Chart. " _
	              & "Please select an Organization Chart and run " _
	              & "the macro again.", vbInformation, _
	              "Shape Check"
	           End
	        End If
	
	        ' A shape is selected, so figure out what type of shape.
	        ShapeType = ActiveWindow.Selection.ShapeRange.Type
	
	        ' Check to see whether the shape is an embedded OLE object.
	        ' If not, exit the macro.
	        If ShapeType <> msoEmbeddedOLEObject Then
	           MsgBox "The object selected is not " _
	              & "an Organization Chart. " _
	              & "Please select an Organization Chart and run " _
	              & "the macro again.", vbInformation, _
	              "OLE Object Check"
	           End
	        End If
	
	        ' Determine type of OLE object.
	        OleObjectType = ActiveWindow.Selection.ShapeRange.OLEFormat.ProgID
	
	        ' See whether the object selected is an organization chart.
	        If OleObjectType <> "OrgPlusWOPX.4" And _
	           OleObjectType <> "MSOrgchart.2" Then
	           ' If not an organization, exit the macro.
	           MsgBox "The object selected is not " _
	              & "an Organization Chart. " _
	              & "Please select an Organization Chart and run " _
	              & "the macro again.", vbInformation, _
	              "OLE Object Class Check"
	           End
	        End If
	
	        ' Copy the Organization chart.
	        ActiveWindow.Selection.ShapeRange.Copy
	
	        ' Count the number of slides.
	        SlideCount = ActivePresentation.Slides.Count
	
	        ' Add a new slide to the end of the presentation.
	        ActivePresentation.Slides.Add (SlideCount + 1), ppLayoutBlank
	
	        ' Save the current view.
	        CurrentView = ActiveWindow.ViewType
	
	        ' Switch to slide view if not there already.
	        If CurrentView <> ppViewSlide Then
	           ActiveWindow.ViewType = ppViewSlide
	        End If
	
	        ' Switch to the proper slide.
	        LastSlide = ActivePresentation.Slides.Count
	        ActiveWindow.View.GotoSlide Index:=LastSlide
	
	        ' Paste the Organization chart to the temp slide.
	        ActiveWindow.View.Paste
	
	        ' Ungroup the Organization chart.
	        ActiveWindow.Selection.ShapeRange.Ungroup.Select
	        ActiveWindow.Selection.Unselect
	
	        ' Count the Organization chart objects.
	        With ActivePresentation.Slides(LastSlide).Shapes
	           ObjectCount = .Count
	
	           ' Check all of the objects for text.
	           For x = ObjectCount To 1 Step -1
	
	              ' See whether object has a text frame.
	              If .Item(x).HasTextFrame Then
	                 ' See whether object has text.
	
	                 If .Item(x).TextFrame.HasText Then
	                    ' Increase the size of the array
	                    ' and save the contents.
	                    ReDim Preserve StringTable(Total)
	                    StringTable(Total) = .Item(x).TextFrame.TextRange.Text
	                    Total = Total + 1
	                    BoxCount = BoxCount + 1
	                 Else
	                    ' See whether object has a fill.
	                    If .Item(x).Fill.Visible = msoTrue Then
	                       NextAvailable = Total - BoxCount
	
	                       If BoxCount = 2 Or BoxCount = 3 Then
	                          ' Swap first and third Total.
	                          temp = StringTable(NextAvailable)
	                          StringTable(NextAvailable) = StringTable(Total - 1)
	                          StringTable(Total - 1) = temp
	                       End If
	
	                       If BoxCount > 3 Then
	                          top = 0
	
	                          For i = BoxCount To 0 Step -1
	                             ' Set temp = to last item in array.
	                             temp = StringTable(top)
	                             StringTable(top) = StringTable(i)
	                             StringTable(i) = temp
	                             top = top + 1
	
	                             If top = i Then
	                                Exit For
	                             End If
	                          Next i
	                       End If
	
	                       ' Add an extra Total to the end of the list.
	                       ReDim Preserve StringTable(Total)
	                       StringTable(Total) = ""
	                       Total = Total + 1
	                       BoxCount = 0
	
	                    End If
	                 End If
	              End If
	           Next x
	
	           ' Checks to see if Word is running.
	           Set word = GetObject(, "Word.Application.8")
	
	           If Err.Number <> 0 Then
	              WordRunning = False
	           Else
	              WordRunning = True
	           End If
	
	           ' Reset the error variable.
	           Err.Clear
	
	           ' Create a Word object.
	           If WordRunning = False Then
	              Set word = CreateObject("Word.Application.8")
	           End If
	
	           If Err.Number <> 0 Then
	              MsgBox "Unable to launch Word. " _
	                 & "This Macro requires Microsoft Word 97. " _
	                 & "Make sure Word is running correctly and " _
	                 & "then attempt to run the macro again. " _
	                 , vbCritical _
	                 , "Failed to launch Word"
	              End
	           End If
	
	           ' Creates a new Word document based on normal.
	           word.Documents.Add
	
	           ' Copy all the organization chart text to Word.
	           For x = 0 To Total
	              word.Selection.TypeText Text:=StringTable(x)
	              word.Selection.TypeParagraph
	           Next x
	
	        End With
	
	        ' Delete the temp slide.
	        ActiveWindow.Selection.SlideRange.Delete
	
	        ' Restore the current view.
	        If ActiveWindow.ViewType <> CurrentView Then
	           ActiveWindow.ViewType = CurrentView
	        End If
	
	        ' Make Word visible if not.
	        If WordRunning = False Then
	           word.Application.Visible = True
	        End If
	
	        ' A message indicating the macro is finished running.
	        MsgBox "Organization Chart text extracted " _
	           & "to a Word document"
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks), click Search, and then click to view "Create a
	macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro" (without
	the quotation marks), click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 97 8.00 kbmacro ppt8 vba vbe
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbZNotKeyword6 kbPowerPt97 kbZNotKeyword2 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbOrgChartSearch kbVBASearch kbZNotKeyword3 kbOrgChart200
	Version           : MACINTOSH:98; WINDOWS:97; :2.0
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
