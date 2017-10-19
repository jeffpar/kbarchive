---
layout: page
title: "Q166859: PPT: Sample VB Code to Print Current Slide from Slide Show"
permalink: /kb/166/Q166859/
---

## Q166859: PPT: Sample VB Code to Print Current Slide from Slide Show

	Article: Q166859
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbprint kbdta kbdtacode KbVBA _IK11573
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
	(Sub procedure) that prints the current slide in a running slide show.
	
	When running a slide show, it may be desirable, especially if in kiosk mode, to
	be able to print the current slide in a running slideshow out to a printer. The
	following code allows you to do just that.
	
	This macro code would be used with an action button, placed on the master slide,
	and attached to the action button via its action settings. Once on the master,
	it would be available for all slides, and it will print whichever slide is
	currently on display in the slideshow.
	
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
	
	    ' This code determines what slide is currently visible in the
	     ' slide show and then it clears the print range and prints out the
	     ' current slide.
	     Sub PrintCurrentSlide()
	
	     ' Declare lSldNum as a long integer.
	     Dim lSldNum As Long
	
	     ' Assign lSldNum to the current slide number.
	     lSldNum = SlideShowWindows(1).View.Slide.SlideNumber
	
	     ' Set the print options for the active presentation.
	     With ActivePresentation.PrintOptions
	
	        ' Set RangeType to print a slide range.
	        .RangeType = ppPrintSlideRange
	
	        ' Delete old print range settings.
	        .Ranges.ClearAll
	
	        ' Set Ranges to the new range for the current slide.
	        .Ranges.Add lSldNum, lSldNum
	     End With
	
	     ' Using the current print settings print the slide to the default
	     ' printer.
	     ActivePresentation.PrintOut
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
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe macppt
	
	======================================================================
	Keywords          : kbcode kbProgramming kbprint kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	
