---
layout: page
title: "Q165903: PPT: Sample VB Code to Turn Bullets On or Off"
permalink: kb/165/Q165903/
---

## Q165903: PPT: Sample VB Code to Turn Bullets On or Off

	Article: Q165903
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
	(Sub procedure) that toggles the bullets on the body placeholder. The code can
	be modified to toggle the bullets on any shape.
	
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
	
	NOTE: For best results, run this macro in slide view.
	
	   Sub ToggleBullets()
	
	     On Error Resume Next
	
	     Dim lSlideNum As Long
	     Dim oShape As Shape
	
	     ' Get current slide number.
	     Err.Clear
	     lSlideNum = ActiveWindow.Selection.SlideRange.SlideNumber
	
	     ' Check if error occurred getting the slide number.
	     If Err.Number <> 0 Then
	        MsgBox Err.Description, vbExclamation
	        End
	     End If
	
	     ' Find the body placeholder on the slide.
	     For Each oShape In ActivePresentation.Slides(lSlideNum).Shapes
	
	        ' Check if the shape is a placeholder.
	        If oShape.Type = msoPlaceholder Then
	
	           ' Check if placeholder is the body placeholder.
	           If oShape.PlaceholderFormat.Type = ppPlaceholderBody Then
	
	              ' Make the bullet visible if not visible. If
	              ' some lines have the bullets turned on, leave the
	              ' body alone.
	              With oShape.TextFrame.TextRange.ParagraphFormat.Bullet
	                 If .Visible = msoTrue Then
	                    .Visible = msoFalse
	                 Else
	                    .Visible = msoTrue
	                 End If
	              End With
	
	          End If
	
	        End If
	
	     Next oShape
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks)click Search, and then click to view "Create a
	macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro" (without
	the quotation marks) click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe ppt8.0 macppt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
