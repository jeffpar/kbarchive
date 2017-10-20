---
layout: page
title: "Q162709: PPT: How to Use the AddLine Method"
permalink: /kb/162/Q162709/
---

## Q162709: PPT: How to Use the AddLine Method

{% raw %}

	Article: Q162709
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
	
	This article explains how to use the Microsoft Visual Basic for Applications
	AddLine method to create new lines on your slides.
	
	MORE INFORMATION
	================
	
	The AddLine method uses the following syntax:
	
	  .AddLine(BeginX, BeginY, EndX, EndY)
	
	NOTE: The data type for all AddLine parameters is single.
	
	AddLine Parameters
	------------------
	
	The AddLine method has four parameters:
	
	  BeginX    The X coordinate (in points) for the starting point of the
	            line. The coordinate is relative to the top left corner of the
	            slide.
	
	  BeginY    The Y coordinate (in points) for the starting point of the
	            line. The coordinate is relative to the top left corner of
	            the slide.
	
	  EndX      The X coordinate (in points) for the ending point of the
	            line. The position is relative to the bottom left corner of
	            the slide.
	
	  EndY      The Y coordinate (in points) for the ending point of the
	            line. The position is relative to the bottom left corner of
	            the slide.
	
	Creating Lines
	--------------
	
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
	
	The following sample Visual Basic procedure draws a horizontal line across the
	middle of the first slide in a presentation.
	
	  Sub DrawHorizontalLine()
	
	        Dim longHeight As Long
	        Dim longWidth As Long
	
	        ' Get the slide height and width.
	        longHeight = ActivePresentation.PageSetup.SlideHeight
	        longWidth = ActivePresentation.PageSetup.SlideWidth
	
	        With ActivePresentation.Slides(1).Shapes
	
	           ' Create the line.
	           .AddLine 0, (longHeight \ 2), longWidth, (longHeight \ 2)
	
	        End With
	
	     End Sub
	
	The following sample Visual Basic procedure draws a vertical line down the middle
	of the first slide in a presentation.
	
	     Sub DrawVerticalLine()
	
	        Dim longHeight As Long
	        Dim longWidth As Long
	
	        ' Get the slide height and width.
	        longHeight = ActivePresentation.PageSetup.SlideHeight
	        longWidth = ActivePresentation.PageSetup.SlideWidth
	
	        With ActivePresentation.Slides(1).Shapes
	
	           ' Create the line.
	           .AddLine (longWidth \ 2), 0, (longWidth \ 2), longHeight
	
	        End With
	
	     End Sub
	
	The following sample Visual Basic procedure draws two diagonal lines. The
	diagonal lines form an X on the first slide in a presentation.
	
	      Sub DrawDiagonalLines()
	
	        Dim longHeight As Long
	        Dim longWidth As Long
	
	        ' Get the slide height and width.
	        longHeight = ActivePresentation.PageSetup.SlideHeight
	        longWidth = ActivePresentation.PageSetup.SlideWidth
	
	        With ActivePresentation.Slides(1).Shapes
	
	           ' Create line from top left to bottom right.
	           .AddLine 0, 0, longWidth, longHeight
	
	           ' Create line from top right to bottom left.
	           .AddLine longWidth, 0, 0, longHeight
	
	        End With
	
	     End Sub
	
	Using the Return Value
	----------------------
	
	The AddLine method returns a reference to a shape that you created. You can use
	the reference to modify the properties of the line.
	
	The following sample Visual Basic procedure uses the return value to change the
	line color and weight.
	
	  Sub ChangeLineColor()
	
	        Dim longHeight As Long
	        Dim longWidth As Long
	
	        Dim MyLine As Shape
	
	        ' Get the slide height and width.
	        longHeight = ActivePresentation.PageSetup.SlideHeight
	        longWidth = ActivePresentation.PageSetup.SlideWidth
	
	        With ActivePresentation.Slides(1).Shapes
	
	           ' Get the return value and create the line.
	           Set MyLine = .AddLine(100, 100, 300, 100)
	
	           ' Change line weight to 50 point.
	           MyLine.Line.Weight = 50
	
	           ' Change line color to red.
	           MyLine.Line.ForeColor.RGB = RGB(255, 0, 0)
	
	        End With
	
	     End Sub
	
	NOTE: Because the AddLine method returns an object, use the Set command to get
	the returned shape reference.
	
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
	
	Additional query words: 8.00 ppt8 vba vbe powerpnt 8 ppt8.0
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
