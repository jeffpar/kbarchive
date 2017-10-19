---
layout: page
title: "Q163188: PPT: Sample VB Code to Create a Graph on a Slide"
permalink: /kb/163/Q163188/
---

## Q163188: PPT: Sample VB Code to Create a Graph on a Slide

	Article: Q163188
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
	(Sub procedure) that inserts a Microsoft Graph object on a Microsoft PowerPoint
	slide. The size of the graph is one-fourth the size of the slide.
	
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
	
	       Sub CreateGraph()
	
	        ' Create message box.
	        Dim strPrompt As String
	        Dim strTitle As String
	
	        ' Used as reference to the chart shape.
	        Dim shpGraph As Shape
	
	        ' Used to store the slide height and width.
	        Dim lHeight As Long
	        Dim lWidth As Long
	
	        ' Check which view PowerPoint is in.
	        If ActiveWindow.ViewType <> ppViewSlide Then
	
	           ' Create the message.
	           strPrompt = "You must be in Slide View to run this macro." _
	              & " Switch to the slide you want the graph to appear on and " _
	              & "run the macro again."
	           strTitle = "Wrong View"
	
	           ' Display the message.
	           MsgBox strPrompt, vbExclamation, strTitle
	
	           ' Quit the macro.
	           End
	
	        End If
	
	        ' Get the slide height and width.
	        lHeight = ActivePresentation.PageSetup.SlideHeight
	        lWidth = ActivePresentation.PageSetup.SlideWidth
	
	        With ActiveWindow.Selection.SlideRange.Shapes
	
	           ' Create the Graph object.
	           Set shpGraph = .AddOLEObject(Left:=(lWidth \ 4), _
	                                     Top:=(lHeight \ 4), _
	                                     Width:=(lWidth \ 2), _
	                                     height:=(lHeight \ 2), _
	                                     ClassName:="MSGraph.Chart", _
	                                     Link:=msoFalse)
	        End With
	
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
	
	Additional query words: 8.00 ppt8 vba vbe macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
