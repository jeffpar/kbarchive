---
layout: page
title: "Q161202: PPT: Sample Code to Retrieve or Set Slide Size"
permalink: /kb/161/Q161202/
---

## Q161202: PPT: Sample Code to Retrieve or Set Slide Size

{% raw %}

	Article: Q161202
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
	
	The following article contains two sample Microsoft Visual Basic for
	Applications macros (Sub procedures). The first sample sets the slide size and
	the second retrieves the current slide size from PageSetup.
	
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
	
	Use the following sample code to set the slide size:
	
	     Sub SetSlideSize()
	
	        ' Constant used to make calculating inches easier.
	        Const PTS As Byte = 72
	
	        ' Create a presentation with the following dimensions:
	        ' Width : 8 Inches
	        ' Height: 6 Inches
	        With ActivePresentation.PageSetup
	           .SlideWidth = 8 * PTS
	           .SlideHeight = 6 * PTS
	        End With
	
	     End Sub
	
	NOTE: The SlideWidth and SlideHeight property of PageSetup are measured in
	points. To easily set the height or width in inches, multiply the number of
	inches by 72.
	
	Use the following sample code to retrieve the current slide height and width:
	
	    Sub GetSlideSize()
	
	        ' Declare the variables to store the slide height and width.
	        Dim Width As Single
	        Dim Height As Single
	
	        ' Retrieve the width and height.
	        With ActivePresentation.PageSetup
	           Width = .SlideWidth
	           Height = .SlideHeight
	        End With
	
	        ' Displays a message box with the slide's height and width.
	        MsgBox "Width is " & (Width / 72) & " inches and Height is " _
	           & (Height / 72) & " inches."
	
	     End Sub
	
	NOTE: Since the SlideWidth and SlideHeight properties are in points, you must
	divide by 72 to calculate the slide height and width in inches.
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks), click Search, and then click to view "Create a
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
	
	Additional query words: 97 8.00 kbmacro ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
