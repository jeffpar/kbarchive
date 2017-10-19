---
layout: page
title: "Q162175: PPT: Sample VB Code to Reverse Order of Slides"
permalink: /kb/162/Q162175/
---

## Q162175: PPT: Sample VB Code to Reverse Order of Slides

	Article: Q162175
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
	
	This article provides a sample Visual Basic macro (Sub procedure) that reverses
	the order of all slides within the active presentation. After you run the macro,
	the slides will be ordered back to front. To restore the slides to their
	original order, rerun the macro.
	
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
	
	NOTE: Before you run this macro, back up your PowerPoint presentation.
	
	Sample Visual Basic Procedure
	-----------------------------
	
	     Sub ReverseSlideOrder()
	
	        Dim lNumberOfSlides As Long
	        Dim x As Long
	
	        ' Determine how many slides are in the presentation.
	        lNumberOfSlides = ActivePresentation.Slides.Count
	
	        ' Check if more than one slide.
	        If lNumberOfSlides = 1 Then
	
	           ' Not enough slides to flip.
	           ' Display a message and exit the macro.
	           MsgBox "There is only one slide in " _
	             & "your presentation.", vbExclamation, _
	             "One Slide Available"
	           End
	         Else
	
	           ' More than two slides selected.
	           For x = 1 To lNumberOfSlides - 1
	
	              ' Reorder the slides.
	              ActivePresentation.Slides(lNumberOfSlides).Cut
	              ActivePresentation.Slides.Paste x
	           Next x
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
	
	Additional query words: 97 8.00 kbmacro kbpptvba ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
