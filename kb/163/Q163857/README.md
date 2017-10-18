---
layout: page
title: "Q163857: PPT: Sample VB Code Adds Multiple New Slides to Presentation"
permalink: kb/163/Q163857/
---

## Q163857: PPT: Sample VB Code Adds Multiple New Slides to Presentation

	Article: Q163857
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
	(Sub procedure) that asks you how many slides you want to add to the current
	presentation and inserts the new slides based on the Bulleted List AutoLayout at
	the end of your presentation.
	
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
	
	     Sub InsertMultipleSlides()
	
	        ' Used for error trapping.
	        On Error Resume Next
	        Err.Clear
	
	        ' Change this value to the maximum number of slides you want to
	        ' create.
	        Const MAX_SLIDES As Long = 250
	
	        ' Change this to the auto layout you want to use. This value can be
	        ' any PpSlideLayout constant.
	        Const DEFAULT_AUTO_LAYOUT As Long = ppLayoutText
	
	        ' Dimension the variables.
	        Dim lLastSlide, i As Long
	        Dim lToCreate, lResult As Long
	        Dim Continue As Boolean
	        Dim strInputPrompt, strResult, strPlural As String
	
	        ' Initialize the message for the input box.
	        strInputPrompt = "Enter the number of slides you want to create. "
	
	        ' Loop until valid input.
	        Do
	
	           ' Ask how many slides do you want to create.
	           strResult = InputBox(strInputPrompt)
	
	           ' Check for valid input.
	           If strResult = "" Then
	
	              ' If NULL string returned, stop the macro.
	              End
	           End If
	
	           ' Convert string to integer.
	           lToCreate = CLng(strResult)
	
	           ' Check for a type mismatch.
	           If Err.Number <> 0 Then
	
	              ' Reset the err object.
	              Err.Clear
	
	              ' Repeat the loop.
	              Continue = False
	           End If
	
	           ' Check for valid entry.
	           If lToCreate <= MAX_SLIDES And lToCreate > 0 Then
	              Continue = True
	           Else
	              Continue = False
	           End If
	
	           ' Change the message of input box if invalid entry is made.
	           If Continue = False Then
	              strInputPrompt = "Invalid entry, please enter a value " _
	                 & "between 1 and " & MAX_SLIDES & "." & Chr(13) _
	                 & Chr(13) & strInputPrompt
	           End If
	
	        Loop Until Continue = True
	
	        ' See whether slides or slide is needed in the MsgBox.
	        If lToCreate = 1 Then
	           strPlural = "slide"
	        Else
	           strPlural = "slides"
	        End If
	
	        ' Ask for confirmation.
	        lResult = MsgBox("Are you sure you want to create " & lToCreate _
	         & " new " & strPlural & ", at the end of the presentation, using " _
	           & "the Bulleted List auto layout?", vbYesNo + vbQuestion)
	
	        ' Find out what the user selected in the message box.
	        If lResult = vbNo Then
	           'Stop the Macro.
	           End
	        End If
	
	        ' Get the number of slides in the active presentation.
	        lLastSlide = ActivePresentation.Slides.Count
	
	        ' Create the new slides.
	        For i = 1 To lToCreate
	           lLastSlide = lLastSlide + 1
	           ActivePresentation.Slides.Add lLastSlide, DEFAULT_AUTO_LAYOUT
	
	           ' Find out whether error occurred when creating the new slides.
	           If Err.Number <> 0 Then
	              MsgBox "Unable to add new slides to the presentation. " _
	                 , vbCritical, "Error When Adding New Slides"
	
	              ' Stop the macro.
	              End
	           End If
	
	        Next i
	
	        ' Display closing message.
	        MsgBox "Successfully added " & lToCreate & " " & strPlural & _
	          " to the active presentation.", vbInformation, "Macro Done"
	
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
	
	Additional query words: 8.00 ppt8 vba vbe ppt97 macppt98 ppt98 mac
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
