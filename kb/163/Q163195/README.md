---
layout: page
title: "Q163195: PPT: Sample Code to Copy Slide to Different Presentation"
permalink: /kb/163/Q163195/
---

## Q163195: PPT: Sample Code to Copy Slide to Different Presentation

	Article: Q163195
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
	(Sub procedure) that copies the current slide from the active presentation if it
	is in slide view and pastes the slide into another presentation. If you have two
	presentations open, the macro pastes the slide into the presentation that is not
	the active presentation. If you have more than two presentations open, the
	Office Assistant asks you which presentation you want to receive the object.
	
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
	
	     Sub AppendSlides()
	
	        Dim lCurrentView As Long
	
	        ' Object reference to presentations.
	        Dim oDestPres As Presentation
	        Dim oSourcePres As Presentation
	        Dim oPossiblePres() As Presentation
	
	        Dim oPresObject As Presentation
	
	        ' Used to build the message box.
	        Dim strPrompt As String
	        Dim strTitle As String
	
	        ' Variables for the assistant.
	        Dim Ball As Balloon
	        Dim Count As Long
	        Dim lResult As Long
	
	        ' Determine which view the active presentation is using.
	        lCurrentView = ActiveWindow.ViewType
	
	        ' Check if PowerPoint is in Slide Sorter view.
	        If lCurrentView <> ppViewSlideSorter And _
	           lCurrentView <> ppViewSlide Then
	
	           ' Create the prompt for the error message.
	           strPrompt = "You must be in Slide Sorter or Slide view to run " _
	              & "this macro. Please switch to one of these views and run " _
	              & "the macro again."
	
	           ' Create the title for the error message.
	           strTitle = "Wrong View Type"
	
	           ' Display the message box.
	           MsgBox strPrompt, vbExclamation, strTitle
	
	           ' End the macro.
	           End
	
	        End If
	
	        ' Check if more than one presentation is open.
	        If PowerPoint.Presentations.Count = 1 Then
	
	           ' Only one presentation is open.
	           ' Create the prompt for the error message.
	           strPrompt = "You only have one presentation open. " _
	              & "Please open a destination presentation and run " _
	              & "the macro again. "
	
	           ' Create the title for the error message.
	           strTitle = "One Presentation Open"
	
	            ' Display the message box.
	           MsgBox strPrompt, vbExclamation, strTitle
	
	           ' End the macro.
	           End
	
	        End If
	
	        ' Check if two presentations are open.
	        If PowerPoint.Presentations.Count = 2 Then
	
	           ' Determine which presentation is the destination.
	           ' This algorithm uses the presentation that is not active
	           ' as the destination.
	           If Presentations(1).Name <> ActivePresentation.Name Then
	
	              ' The destination is presentations(1).
	              Set oDestPres = Presentations(1)
	              Set oSourcePres = Presentations(2)
	
	           Else
	              ' The destination is presentations(2).
	              Set oDestPres = Presentations(2)
	              Set oSourcePres = Presentations(1)
	
	           End If
	
	        End If
	
	        ' Check if more than two presentations are open in PowerPoint.
	        If PowerPoint.Presentations.Count > 2 Then
	
	           ' Create the balloon for the assistant.
	           Set Ball = Assistant.NewBalloon
	
	           With Ball
	
	              ' Set up the heading and text.
	              .Heading = "Select a Presentation"
	              .Text = "Which Presentation would you like to use as the " _
	                 & "destination?"
	
	              ' Sets the BalloonType Property.
	              .BalloonType = msoBalloonTypeButtons
	
	              ' Make the balloon modal (this is the default).
	              .Mode = msoModeModal
	
	              ' Add a Cancel button to the balloon (OK is default).
	              .Button = msoButtonSetCancel
	
	           End With
	
	           For Each oPresObject In PowerPoint.Presentations
	
	              If ActivePresentation.Name = oPresObject.Name Then
	                 Set oSourcePres = oPresObject
	              Else
	
	                 ' Increment the counter.
	                 Count = Count + 1
	
	                 ' Change the size of the array.
	                 ReDim Preserve oPossiblePres(1 To Count)
	
	                 ' Add an object reference to the array.
	                 Set oPossiblePres(Count) = oPresObject
	
	                 ' Assign presentation name to a balloon label.
	                 Ball.Labels(Count).Text = oPresObject.Name
	
	               End If
	
	           Next oPresObject
	
	           ' Display the assistant.
	           If Assistant.Visible = False Then
	              Assistant.Visible = True
	           End If
	
	           ' Display the assistant greeting.
	           Assistant.Animation = msoAnimationGreeting
	
	           ' Display the balloon.
	           lResult = Ball.Show
	
	           ' End the macro if the Cancel button was hit.
	           If lResult = -vbCancel Then
	              End
	           End If
	
	           ' Set up the destination.
	           Set oDestPres = oPossiblePres(lResult)
	
	        End If
	
	        ' Copy the slide and paste to the end of the destination
	        ' presentation.
	        If oSourcePres.Windows(1).ViewType = ppViewSlide Then
	
	           ' Copy the slide.
	           With oSourcePres.Windows(1).Selection.SlideRange
	              oSourcePres.Slides(.SlideNumber).Copy
	           End With
	
	           ' Check if destination presentation is using slide sorter view.
	           If oDestPres.Windows(1).ViewType = ppViewSlideSorter Then
	              oDestPres.Windows(1).View.Paste
	              MsgBox "Sucessfully pasted slide.", vbInformation
	           Else
	
	              ' Create the message text for the message box.
	              strPrompt = "The destination must be Slide Sorter view. " _
	                 & "Switch to Slide Sorter View?"
	
	              strTitle = "Change to Slide Sorter"
	
	              ' Ask the user to switch to slide sorter.
	              lResult = MsgBox(strPrompt, vbExclamation + vbOKCancel, _
	                 strTitle)
	
	              If lResult = vbOK Then
	
	                 ' Paste the slide.
	                 oDestPres.Windows(1).ViewType = ppViewSlideSorter
	                 oDestPres.Windows(1).View.Paste
	                 MsgBox "Sucessfully pasted slide.", vbInformation
	              Else
	                 ' Cancel button was selected.
	                 strPrompt = "No changes have been made to the presentation."
	                 strTitle = "No Changes Made"
	                 MsgBox strPrompt, vbInformation, strTitle
	                 End
	              End If
	
	           End If
	
	        Else
	
	           ' The source presentation is not in slide view.
	           strPrompt = "The source presentation is not in slide view. " _
	              & "Please switch the active presentation to Slide View and" _
	              & " run the macro again."
	           strTitle = "Wrong View"
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
	
