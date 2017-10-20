---
layout: page
title: "Q162612: PPT: Sample VB Code that Inserts Title Slide and Title Text"
permalink: /kb/162/Q162612/
---

## Q162612: PPT: Sample VB Code that Inserts Title Slide and Title Text

{% raw %}

	Article: Q162612
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
	
	This article provides a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that inserts a new slide based on the Title Slide AutoLayout at
	the end of the active presentation and then inserts the title text.
	
	NOTE: The sample code is designed to run from a presentation editing session or
	from a slide show.
	
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
	
	     Sub AddTitleSlide()
	
	        ' Change this string to the title you want to use for your slide.
	        Const stringMyTitle As String = "This is a Title"
	
	        Dim slideObject As Slide
	        Dim longSlideCount As Long
	
	        ' Determine how many slides are in the presentation.
	        longSlideCount = ActivePresentation.Slides.Count
	
	        With ActivePresentation.Slides
	
	           ' Insert a slide at the end of the presentation using the Title
	           ' Slide AutoLayout.
	           Set slideObject = .Add(longSlideCount + 1, ppLayoutTitleOnly)
	
	        End With
	
	        ' Inserts the text you want to use for the title.
	        slideObject.Shapes.Title.TextFrame.TextRange.Text = stringMyTitle
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro,"
	click Search, and then click to view "Create a macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro," click
	Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe powerpt powerpnt macppt mac_ppt ppt98 98
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
