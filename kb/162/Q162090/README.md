---
layout: page
title: "Q162090: PPT: Sample Code to Reset Action Settings"
permalink: kb/162/Q162090/
---

## Q162090: PPT: Sample Code to Reset Action Settings

	Article: Q162090
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
	(Sub procedure) that turns off the Mouse Click and Mouse Over events for every
	object within the active presentation. At the end of the macro a message box is
	displayed indicating if any changes were made to the presentation.
	
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
	
	     Sub ResetActionSettings()
	
	        Dim SlideObject As Slide
	        Dim ShapeObject As Shape
	        Dim MouseClickCount As Long
	        Dim MouseOverCount As Long
	        Dim Total As Long
	
	        ' Initialize the counters.
	        MouseClickCount = 0
	        MouseOverCount = 0
	        Total = 0
	
	        ' Outer loop goes through every slide in the Active presentation.
	        For Each SlideObject In Application.ActivePresentation.Slides
	
	           ' Inner loop goes through every shape in the presentation.
	           For Each ShapeObject In SlideObject.Shapes
	
	              ' See whether object has Mouse click events.
	              With ShapeObject.ActionSettings(ppMouseClick)
	
	                 ' Reset the object action to none, add 1 to counter.
	                 If .Action <> ppActionNone Then
	                    .Action = ppActionNone
	                    MouseClickCount = MouseClickCount + 1
	                 End If
	              End With
	
	              ' See whether object has mouse over events.
	              With ShapeObject.ActionSettings(ppMouseOver)
	
	                 ' Reset the object action to none.
	                 If .Action <> ppActionNone Then
	                    .Action = ppActionNone
	                    MouseOverCount = MouseOverCount + 1
	                 End If
	              End With
	
	           Next ShapeObject
	
	        Next SlideObject
	
	        ' See whether any objects were changed.
	        If MouseOverCount = 0 And MouseClickCount = 0 Then
	           MsgBox "No objects had mouse events. No changes were made " _
	              & "to the presentation.", vbInformation, _
	              "No Mouse Events Found"
	        Else
	
	           ' This is the total number of objects changed.
	           Total = MouseOverCount + MouseClickCount
	
	           ' Set up the message box.
	           If Total = 1 Then
	              MsgBox "The action settings were successfully reset.", _
	                 vbInformation, Total & " Object Reset"
	           Else
	              MsgBox "The action settings were successfully reset.", _
	                 vbInformation, Total & " Objects Reset"
	           End If
	
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
	the quotation marks), click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 97 8.00 kbmacro ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
