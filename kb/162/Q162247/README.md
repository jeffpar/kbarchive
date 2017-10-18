---
layout: page
title: "Q162247: PPT: Sample Code to Center a Selection of Objects"
permalink: kb/162/Q162247/
---

## Q162247: PPT: Sample Code to Center a Selection of Objects

	Article: Q162247
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
	(Sub procedure) that centers an object horizontally on a Microsoft PowerPoint
	slide. You select the object you want to center and then run the macro. The
	macro can also center more than one object at a time. To have the macro center
	multiple objects, hold down the shift key and click each of the objects you want
	to center.
	
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
	
	   Sub CenterShape()
	
	        ' Object reference to a shape.
	        Dim ShapeObject As Shape
	
	        ' Holds the center of the slide.
	        Dim SlideCenter As Long
	
	        ' Holds the center of a shape.
	        Dim ShapeCenter As Long
	
	        ' Stores the number of shapes.
	        Dim lNumberOfShapes As Long
	
	        ' Variable to store the selection type.
	        Dim lSelectionType As Long
	
	        ' Variables used to build the error message.
	        Dim ErrorMessage As String
	        Dim ErrorWindowTitle As String
	
	        ' Variables used to build the success message.
	        Dim Message As String
	        Dim WindowTitle As String
	
	        ' Holds the number of shapes centered.
	        Dim count As Long
	
	        ' Stores the selection type.
	        lSelectionType = ActiveWindow.Selection.Type
	
	        ' Checks whether selection is a shape.
	        If lSelectionType <> ppSelectionShapes Then
	
	           Select Case lSelectionType
	
	             ' The selected item is a slide.
	              Case ppSelectionSlides
	                 ErrorMessage = "You have a slide selected. "
	                 ErrorWindowTitle = "Slide Selected"
	
	              ' The selected item is text.
	              Case ppSelectionText
	                 ErrorMessage = "You have text selected. "
	                 ErrorWindowTitle = "Text Selected"
	
	              ' Nothing is selected.
	              Case ppSelectionNone
	                 ErrorMessage = "You have nothing selected. "
	                 ErrorWindowTitle = "Nothing Selected"
	
	              Case Else
	                 ErrorMessage = "A problem with you selection. "
	                 ErrorWindowTitle = "Unkown Error"
	           End Select
	
	           ' Build the rest of the error message.
	           ErrorMessage = ErrorMessage & "Please select a " _
	              & "shape and run the macro again."
	
	           ' Display the error message.
	           MsgBox ErrorMessage, vbExclamation, ErrorWindowTitle
	
	           ' Stop the macro.
	           End
	        End If
	
	        ' Calculates the center of the slide.
	        SlideCenter = ActivePresentation.PageSetup.SlideWidth \ 2
	
	        ' Initializes the count before using it.
	        count = 0
	
	        ' Centers each object as the loop goes through.
	        For Each ShapeObject In ActiveWindow.Selection.ShapeRange
	           ShapeCenter = ShapeObject.Width \ 2
	           ShapeObject.Left = SlideCenter - ShapeCenter
	           count = count + 1
	        Next ShapeObject
	
	        ' Builds the success message.
	        WindowTitle = "Macro Completed"
	        Message = "Successfully centered "
	        If count = 1 Then
	           Message = Message & "1 object."
	        Else
	           Message = Message & count & " "
	           Message = Message & "objects"
	        End If
	
	        ' Displays the message box.
	        MsgBox Message, vbInformation, WindowTitle
	
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
	
	Additional query words: 97 8.00 kbpptvba ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
