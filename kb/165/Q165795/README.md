---
layout: page
title: "Q165795: PPT: Sample VB Code to Create Shape Using FreeForm Tool"
permalink: kb/165/Q165795/
---

## Q165795: PPT: Sample VB Code to Create Shape Using FreeForm Tool

	Article: Q165795
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
	
	This article provides a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that uses the FreeForm tool to draw a shape that resembles a
	sine wave.
	
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
	
	  Sub DrawWave()
	
	     On Error Resume Next
	
	     ' Dimension the variables that hold the height and width of
	     ' the presentation.
	     Dim lh As Long, lw As Long
	
	     ' Get the slide height and width.
	     lh = ActivePresentation.PageSetup.SlideHeight
	     lw = ActivePresentation.PageSetup.SlideWidth
	
	     ' Clear the error object and get the current slide number.
	     Dim lSlideNum As Long
	     Err.Clear
	     lSlideNum = ActiveWindow.Selection.SlideRange.SlideNumber
	     If Err.Number <> 0 Then
	
	        ' Display error message.
	        MsgBox Err.Description, vbExclamation
	
	        ' Stop the macro.
	        End
	     End If
	
	     ' Draw a line down the middle of the screen.
	     With ActivePresentation.Slides(lSlideNum).Shapes
	        .AddLine 0, lh \ 2, lw, lh \ 2
	     End With
	
	     ' Create the first point of the free form shape.
	     Dim oShape As FreeformBuilder
	     With ActivePresentation.Slides(lSlideNum).Shapes
	        ' Places the free form tool at its initial point.
	        Set oShape = .BuildFreeform(msoEditingAuto, 0, lh \ 2)
	     End With
	
	     ' Peak point.
	     oShape.AddNodes msoSegmentCurve, msoEditingAuto, lw \ 4, 0
	
	     ' Middle point.
	     oShape.AddNodes msoSegmentCurve, msoEditingAuto, lw \ 2, lh \ 2
	
	     ' Valley point.
	     oShape.AddNodes msoSegmentCurve, msoEditingAuto, 3 * (lw \ 4), lh
	
	     ' Ending point.
	     oShape.AddNodes msoSegmentCurve, msoEditingAuto, lw, lh \ 2
	
	     ' Convert all the points created into a shape. If you do not call
	     ' ConvertToShape the free form object won't appear on your slide.
	     oShape.ConvertToShape
	
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
	
	Additional query words: 8.00 ppt8 vba vbe ppt8.0 ppt97 macppt98 mac ppt98
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
