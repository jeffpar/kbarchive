---
layout: page
title: "Q171571: PPT: Sample Code to Print Slide Numbers for a Custom Show"
permalink: kb/171/Q171571/
---

## Q171571: PPT: Sample Code to Print Slide Numbers for a Custom Show

	Article: Q171571
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft PowerPoint has the ability to create custom slide shows, which are
	subsets of existing slides within your presentation. When you print a custom
	show, PowerPoint prints the page number defined for that slide. For example, if
	you print a custom show named My Show that consists of slides 2, 8, and 13 of
	your presentation, the numbers 2, 8, and 13 appear on the printed output
	(assuming you have slide numbering turned on).
	
	This article provides a sample Microsoft Visual Basic for Applications macro (Sub
	procedure) that prints out a specified custom show and numbers the pages
	consecutively, beginning with the number 1.
	
	NOTE: You can change the beginning number by changing the value of the lStartNum
	constant.
	
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
	
	     ' These are user-defined data types; you need to place them in the
	     ' Declarations section at the beginning of the module that contains
	     ' the macro.
	
	     Type PageBoxSize
	        l As Long
	        h As Long
	        t As Long
	        w As Long
	     End Type
	
	     Type SlideInfo
	        ID As Long
	        IsVisible As Boolean
	     End Type
	
	     Sub PrintCustomShow()
	
	        ' Change this number to specify your starting slide number.
	        Const lStartNum as Long = 1
	
	        ' Ask the user which custom show they want to print.
	        Dim strShowToPrint As String, strPrompt As String
	        Dim strTitle As String, strDefault As String
	
	        ' See if any custom shows are defined.
	        If ActivePresentation.SlideShowSettings.NamedSlideShows.Count _
	           < 1 Then
	
	           ' No custom shows are defined.
	           ' Set up the string for the message box.
	           strPrompt = "You have no custom shows defined!"
	
	           ' Display the message box and stop the macro.
	           MsgBox strPrompt, vbCritical
	           End
	
	        End If
	
	        ' Find the page number placeholder; if found, pick up the style.
	        Dim rect As PageBoxSize
	        Dim oPlaceHolder As Shape
	        Dim bFound As Boolean: bFound = False
	        For Each oPlaceHolder In _
	           ActivePresentation.SlideMaster.Shapes.Placeholders
	
	           ' Look for the slide number placeholder.
	           If oPlaceHolder.PlaceholderFormat.Type = _
	              ppPlaceholderSlideNumber Then
	
	              ' Get the position of the page number placeholder.
	              rect.l = oPlaceHolder.Left
	              rect.t = oPlaceHolder.Top
	              rect.w = oPlaceHolder.Width
	              rect.h = oPlaceHolder.Height
	
	              ' Get the formatting of the slide number placeholder.
	              oPlaceHolder.PickUp
	
	              ' Found the slide number placeholder, so set the
	              ' bFound boolean to True.
	              bFound = True
	              Exit For
	           End If
	
	        Next oPlaceHolder
	
	        ' See if a slide number placeholder was found.
	        ' If not found, exit the macro.
	        If bFound = False Then
	
	           ' Unable to find slide number placeholder.
	           MsgBox "Your master slide does not contain a slide number " _
	              & "placeholder. Add a " & vbCrLf & "slide number placeholder" _
	              & " and run the macro again.", vbCritical
	           End
	        End If
	
	        ' Set up the string for the input box.
	        strPrompt = "Type the name of the custom show you want to print." _
	           & vbCrLf & vbCrLf & "Custom Show List" & vbCrLf _
	           & "==============" & vbCrLf
	
	        ' This is the title of the input box.
	        strTitle = "Print Custom Show"
	
	        ' Use the first defined show as the default.
	        strDefault = _
	           ActivePresentation.SlideShowSettings.NamedSlideShows(1).Name
	
	        ' Obtain the names of all custom slide shows.
	        Dim oCustomShow As NamedSlideShow
	        For Each oCustomShow In _
	           ActivePresentation.SlideShowSettings.NamedSlideShows
	           strPrompt = strPrompt & oCustomShow.Name & vbCrLf
	        Next oCustomShow
	
	        Dim bMatch As Boolean: bMatch = False
	
	        ' Loop until a named show is matched or user clicks Cancel.
	        While (bMatch = False)
	
	           ' Display the input box that prompts the user to type in
	           ' the slide show they want to print.
	           strShowToPrint = InputBox(strPrompt, strTitle, strDefault)
	
	           ' See if user clicked Cancel.
	           If strShowToPrint = "" Then
	              End
	           End If
	
	           ' Make sure the return value of the input box is a valid name.
	           For Each oCustomShow In _
	              ActivePresentation.SlideShowSettings.NamedSlideShows
	
	              ' See if the show is in the NamedSlideShows collection.
	              If strShowToPrint = oCustomShow.Name Then
	                 bMatch = True
	
	                 ' Leave the For loop, because a match was found.
	                 Exit For
	              End If
	
	              ' No match was found.
	              bMatch = False
	
	           Next oCustomShow
	        Wend
	
	        ' Get the array of slide IDs used in the show.
	        Dim vShowSlideIDs As Variant
	        With ActivePresentation.SlideShowSettings
	            vShowSlideIDs = .NamedSlideShows(strShowToPrint).SlideIDs
	        End With
	
	        ' Loop through the slides and turn off page numbering.
	        Dim vSlideID As Variant
	        Dim oSlide As Slide
	        Dim Info() As SlideInfo
	
	        ' Make room in the array.
	        ReDim Preserve Info(UBound(vShowSlideIDs) - 1)
	
	        ' Save the current background printing setting and
	        ' then turn background printing off.
	        Dim bBackgroundPrinting As Boolean
	        bBackgroundPrinting = _
	           ActivePresentation.PrintOptions.PrintInBackground
	        ActivePresentation.PrintOptions.PrintInBackground = msoFalse
	
	        ' Loop through every slide in the custom show.
	        Dim x As Long: x = 0
	        For Each vSlideID In vShowSlideIDs
	
	           ' The first element in the array is zero and not used.
	           If vSlideID <> 0 Then
	
	              ' Add slide ID to the array.
	              Info(x).ID = CLng(vSlideID)
	
	              ' Get a reference to the slide.
	              Set oSlide = ActivePresentation.Slides.FindBySlideID(vSlideID)
	
	              ' Store the visible state of the page number.
	              Info(x).IsVisible = oSlide.HeadersFooters.SlideNumber.Visible
	
	              ' Turn off page numbering, if needed.
	              If Info(x).IsVisible = True Then
	                 oSlide.HeadersFooters.SlideNumber.Visible = msoFalse
	              End If
	
	              ' Create a text box and add a temporary page number in it.
	              Dim oShape As Shape
	              Set oShape = _
	                 oSlide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
	                                          rect.l, rect.t, _
	                                          rect.w, rect.h)
	
	              ' Apply the formatting used for the slide number placeholder to
	              ' the text box you just created.
	              oShape.Apply
	
	              ' Add the page number text to the text box.
	              oShape.TextFrame.TextRange = CStr(x + lStartNum)
	
	              ' Print the slide. NOTE: You must turn background printing off.
	              ActivePresentation.PrintOut oSlide.SlideNumber, _
	                 oSlide.SlideNumber
	
	              ' Increment the array element positon.
	              x = x + 1
	
	              ' Delete the temporary slide number shape.
	              oShape.Delete
	
	           End If
	
	        Next vSlideID
	
	        ' Restore the slide information.
	        For x = 0 To UBound(Info)
	           ' Get a reference to the slide.
	           Set oSlide = ActivePresentation.Slides.FindBySlideID(Info(x).ID)
	           oSlide.HeadersFooters.SlideNumber.Visible = Info(x).IsVisible
	        Next x
	
	        ' Restore the background printing setting.
	        ActivePresentation.PrintOptions.PrintInBackground = _
	           bBackgroundPrinting
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
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
