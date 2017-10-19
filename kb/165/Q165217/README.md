---
layout: page
title: "Q165217: PPT: Sample VB Code to Create a Custom Slide Show"
permalink: /kb/165/Q165217/
---

## Q165217: PPT: Sample VB Code to Create a Custom Slide Show

	Article: Q165217
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
	
	Microsoft PowerPoint has a Custom Show feature that allows you to show some of
	the slides in a presentation as a slide show or to reorder the slides when you
	run a slide show.
	
	This article contains a sample Microsoft Visual Basic for Applications macro (Sub
	procedure) that creates a custom show. The macro creates a custom show that
	includes every slide in the active presentation. You can modify the code to
	select specific slides to be a part of your custom show.
	
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
	
	  Sub CreateCustomShow()
	
	     On Error Resume Next
	
	     'Change this value to the name you want to use for your
	     'custom slide show.
	     Const strDefaultName As String = "My Custom Show"
	
	     Dim lNumSlides, lSlideList(), lCount As Long
	     Dim oSlide As Slide
	     Dim strPrompt, strShowName As String
	     Dim Continue As Boolean: Continue = False
	
	     'Get the number of slides in the active presentation.
	     lNumSlides = ActivePresentation.Slides.Count
	
	     'Make sure at least 1 slide is in the presentation.
	     If lNumSlides < 1 Then
	       MsgBox "No slides in the presentation.", vbExclamation, "No Slides"
	       End
	     End If
	
	     'Initialize the counter.
	     lCount = 0
	
	     'Loop through the slides in the presentation.
	     For Each oSlide In ActivePresentation.Slides
	
	        'Make the array one element larger.
	        ReDim Preserve lSlideList(lCount)
	
	        'Add the slide id to the array.
	        lSlideList(lCount) = oSlide.SlideID
	
	        'Increment the counter.
	        lCount = lCount + 1
	
	     Next oSlide
	
	     'Reset the counter
	     lCount = 0
	
	     'Set the name of the custom show to the default.
	     strShowName = strDefaultName
	
	     'Loop until a custom show is created.
	     Do
	
	        'Increment the counter.
	        lCount = lCount + 1
	
	        With ActivePresentation.SlideShowSettings.NamedSlideShows
	
	           'Clear the error object.
	           Err.Clear
	
	           'Create the custom show.
	           .Add strShowName, lSlideList
	
	           'Check to see if an error occurred creating the show.
	           'A run-time error occurs if the custom show name you specify
	           'is already being used.
	           If Err.Number <> 0 Then
	
	              'Change the name of the custom show
	              strShowName = strDefaultName & " " & CStr(lCount)
	           Else
	              Continue = True
	           End If
	
	        End With
	
	     Loop While Continue = False
	
	     'Create and then display message box.
	     strPrompt = "Successfully created custom show named " & strShowName _
	      & ". To view the show:" & Chr(13) & Chr(13) _
	      & Chr(9) _
	      & "1. On the Slide Show menu, click Custom Shows." _
	      & Chr(13) & Chr(9) _
	      & "2. Highlight the custom show you want to run." _
	      & Chr(13) & Chr(9) _
	      & "3. Click the show button to run the show." _
	      & Chr(13) & Chr(13) _
	      & "NOTE: If the Custom Shows dialog box is visible " _
	      & "when you run this macro. Close and" _
	      & Chr(13) _
	      & "then reopen the dialog box to see the updated custom show list."
	     MsgBox strPrompt, vbInformation, "Custom Show Created!"
	
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
	
	Additional query words: 8.00 ppt8 vba vbe 8.0 macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
