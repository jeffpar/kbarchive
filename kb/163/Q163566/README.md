---
layout: page
title: "Q163566: PPT: Sample VB Code to Group Objects Together"
permalink: /kb/163/Q163566/
---

## Q163566: PPT: Sample VB Code to Group Objects Together

{% raw %}

	Article: Q163566
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
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that groups together all shapes on the current slide, excluding
	placeholders.
	
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
	
	    Sub GroupObjects()
	
	        ' Dimension the variables.
	        Dim shapeObject As shape
	        Dim lSlideNumber As Long
	        Dim strPrompt, strTitle As String
	        Dim ShapeList() As String
	        Dim count As Long
	
	        ' Initialize the counter.
	        count = 0
	
	        ' Make sure PowerPoint is in slide view.
	        If ActiveWindow.ViewType <> ppViewSlide Then
	
	           ' Set up the error message.
	           strPrompt = "You must be in slide view to run this macro." _
	              & " Change to slide view and run the macro again."
	           strTitle = "Not In Slide View"
	
	           ' Display the error message.
	           MsgBox strPrompt, vbExclamation, strTitle
	
	           ' Stop the macro.
	           End
	
	        End If
	
	        ' Get the current slide number.
	        lSlideNumber = ActiveWindow.Selection.SlideRange.SlideNumber
	
	        ' Loop through the shapes on the slide.
	        For Each shapeObject In _
	           ActivePresentation.Slides(lSlideNumber).Shapes
	
	           ' See whether shape is a placeholder.
	           If shapeObject.Type <> msoPlaceholder Then
	
	              ' Increment count if the shape is not a placeholder.
	              count = count + 1
	
	              ' Get the name of the shape and store it in the ShapeList
	              ' array.
	              ReDim Preserve ShapeList(1 To count)
	              ShapeList(count) = shapeObject.Name
	
	           End If
	
	        Next shapeObject
	
	        ' If more than 1 object (excluding a placeholder object) is found,
	        ' group the objects.
	        If count > 1 Then
	           With ActivePresentation.Slides(lSlideNumber).Shapes
	
	              ' Group the shapes together.
	              .Range(ShapeList()).Group.Select
	           End With
	        Else
	
	           Select Case count
	
	              ' One shape found.
	              Case 1
	
	                 ' Set up the message.
	                 strPrompt = "Only one shape found." _
	                    & " You need at least two shapes to group."
	                 strTitle = "One Shape Available"
	
	              ' Zero shapes found.
	              Case 0
	
	                 ' Set up the message.
	                 strPrompt = "No shapes found. You need to have at " _
	                    & "least two shapes, excluding placeholders."
	                 strTitle = "No Shapes Available"
	
	              ' An error occurred.
	              Case Else
	
	                 ' Set up the message.
	                 strPrompt = "The macro found an error it could not correct."
	                 strTitle = "Error"
	
	           End Select
	
	           ' Display the message.
	           MsgBox strPrompt, vbExclamation, strTitle
	
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
	

{% endraw %}
