---
layout: page
title: "Q161485: PPT: Sample Code to Find Slides that Don't Follow Slide Master"
permalink: kb/161/Q161485/
---

## Q161485: PPT: Sample Code to Find Slides that Don't Follow Slide Master

	Article: Q161485
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
	(Sub procedure) that checks a presentation to see if any slides have backgrounds
	different from the Slide and/or Title Masters. If the macro finds a slide that
	has a different background, it displays the slide number in a message box at the
	end of the macro.
	
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
	
	     Sub FollowMaster()
	
	        ' Declare the variables.
	        Dim OmitSlides() As String, Message As String
	        Dim Index As Long, Count As Long, NumSlides As Long
	        Dim CurrentSlide as Slide
	        Dim Flag As Boolean
	
	        ' Used to control the loop.
	        Dim j As Long
	
	        ' Initialize the index and flag.
	        Index = -1
	        Flag = False
	
	        ' Get the number of slides.
	        NumSlides = ActivePresentation.Slides.Count
	
	        ' Loop through the slides.
	        For j = 1 To NumSlides
	           Set CurrentSlide = ActivePresentation.Slides(j)
	
	           ' Check to see whether slide is different from master.
	           If CurrentSlide.DisplayMasterShapes = msoFalse Or _
	              CurrentSlide.FollowMasterBackground = msoFalse Then
	              ' Add the slide number to an array.
	              Index = Index + 1
	              ReDim Preserve OmitSlides(Index)
	              OmitSlides(Index) = j
	
	              ' Set the flag to True if one slide is not following the
	              ' master.
	              If Flag = False Then
	                 Flag = True
	              End If
	           End If
	
	        Next j
	
	        ' Display the results.
	        If Flag = False Then
	           MsgBox "All slides are following the master.", vbInformation
	        Else
	
	           ' Start building message for the message box.
	           If Index < 1 Then
	              Message = "The following slide is NOT following the Master:" _
	                 & Chr(13)
	           Else
	              Message = "The following " & Index + 1 & " slides are NOT " _
	                 & "following the Master:" & Chr(13)
	           End If
	
	           ' Loop until slides finished.
	           For j = 0 To Index
	              Message = Message & Chr(13) & Chr(9) & "Slide #" & _
	                 OmitSlides(j)
	           Next j
	
	           ' Display the completed message box.
	           MsgBox Message, vbInformation
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
	
	Additional query words: 97 8.00 kbmacro ppt8 vba vbe template differ omit background color colour macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
