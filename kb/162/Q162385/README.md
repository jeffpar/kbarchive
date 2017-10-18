---
layout: page
title: "Q162385: PPT: How to Use the EntryEffect Property"
permalink: kb/162/Q162385/
---

## Q162385: PPT: How to Use the EntryEffect Property

	Article: Q162385
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
	
	This article contains Microsoft Visual Basic for Applications sample macros (Sub
	procedures) that demonstrate how to use the EntryEffect property and lists the
	constants that you can use with the EntryEffect property. The EntryEffect
	property can be applied to an object on a slide or to a slide show transition.
	
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
	
	Retrieving the EntryEffect Type
	-------------------------------
	
	The following sample Visual Basic procedure retrieves the EntryEffect type that
	is currently applied to an object.
	
	NOTE: If no object is selected when you run this example you will receive a
	run-time error.
	
	     Sub GetEntryEffectFromObject()
	
	        ' Used to store the EntryEffect type.
	        Dim lTypeOfEffect As Long
	
	        ' This is the section of code that retrieves the EntryEffect Type.
	        With ActiveWindow.Selection.ShapeRange.AnimationSettings
	           lTypeOfEffect = .EntryEffect
	        End With
	
	     End Sub
	
	The following sample code retrieves the EntryEffect type that is currently
	applied to a slide. The code loops through all slides in the active presentation
	and checks the EntryEffect of each one.
	
	       Sub GetEntryEffectFromSlide()
	
	        Dim sSlideObject As Slide
	        Dim lTypeOfEffect As Long
	
	        ' Get the slide show transition EntryEffect property for the slide.
	        For Each sSlideObject In ActivePresentation.Slides
	           lTypeOfEffect = sSlideObject.SlideShowTransition.EntryEffect
	        Next sSlideObject
	
	     End Sub
	
	In the example above, the lTypeOfEffect is replaced each time the macro loops
	with the EntryEffect of the next object. If you want to store the EntryEffect
	for every slide, make lTypeOfEffect an array.
	
	Setting the EntryEffect Type
	----------------------------
	
	The following sample Visual Basic procedure sets the EntryEffect property for a
	selected object. An object must be selected prior to running this example.
	
	        Sub SetEntryEffectForObject()
	
	        ' Used to store the EntryEffect type.
	        Dim lTypeOfEffect As Long
	
	        ' Set the EntryEffect type.
	        With ActiveWindow.Selection.ShapeRange.AnimationSettings
	           .EntryEffect = ppEffectFlyFromLeft
	        End With
	
	     End Sub
	
	This example sets the EntryEffect to ppEffectFlyFromLeft. When you run the slide
	show, the object flys from the left of the screen to its current position on the
	slide. For a list of the different entry effects you can use, see the
	"EntryEffect Constants List" section of this article.
	
	The following sample code selects the first slide in your presentation and then
	sets the EntryEffect for that slide.
	
	        Sub SetEntryEffectForSlide()
	
	        ' Use this to refer to slide 1.
	        With ActivePresentation.Slides(1)
	
	           ' Sets the EntryEffect to Checkerboard Across.
	           .SlideShowTransition.EntryEffect = ppEffectCheckerboardAcross
	        End With
	
	     End Sub
	
	EntryEffect Constants List
	--------------------------
	
	You can use the following constants with the EntryEffect property.
	
	Appear:
	
	  ppEffectAppear
	
	Fly Effects:
	
	  ppEffectFlyFromBottom
	  ppEffectFlyFromBottomLeft
	  ppEffectFlyFromBottomRight
	  ppEffectFlyFromLeft
	  ppEffectFlyFromRight
	  ppEffectFlyFromTop
	  ppEffectFlyFromTopLeft
	  ppEffectFlyFromTopRight
	
	Blinds Effects:
	
	  ppEffectBlindsHorizontal
	  ppEffectBlindsVertical
	
	Box Effects:
	
	  ppEffectBoxInm
	  ppEffectBoxOut
	
	Checkerboard Effects:
	
	  ppEffectCheckerboardAcross
	  pEffectCheckerboardDown
	
	Crawl Effects:
	
	  ppEffectCrawlFromDown
	  ppEffectCrawlFromLeft
	  ppEffectCrawlFromRight
	  ppEffectCrawlFromUp
	
	Dissolve:
	
	  ppEffectDissolve
	
	Flash Effects:
	
	  ppEffectFlashOnceFast
	  ppEffectFlashOnceMedium
	  ppEffectFlashOnceSlow
	
	Peek Effects:
	
	  ppEffectPeekFromDown
	  ppEffectPeekFromLeft
	  ppEffectPeekFromRight
	  ppEffectPeekFromUp
	
	Random Effects:
	
	  ppEffectRandomBarsHorizontal
	  ppEffectRandomBarsVertical
	  ppEffectRandom
	
	Spiral:
	
	  ppEffectSpiral
	
	Split Effects:
	
	  ppEffectSplitHorizontalIn
	  ppEffectSplitHorizontalOut
	  ppEffectSplitVerticalIn
	  ppEffectSplitVerticalOut
	
	Stretch Effects:
	
	  ppEffectStretchAcross
	  ppEffectStretchDown
	  ppEffectStretchLeft
	  ppEffectStretchRight
	  ppEffectStretchUp
	
	Strips Effects:
	
	  ppEffectStripsDownLeft
	  ppEffectStripsDownRight
	  ppEffectStripsLeftDown
	  ppEffectStripsLeftUp
	  ppEffectStripsRightDown
	  ppEffectStripsRightUp
	  ppEffectStripsUpLeft
	  ppEffectStripsUpRight
	
	Swivel:
	
	  ppEffectSwivel
	
	Wipe Effects:
	
	  ppEffectWipeDown
	  ppEffectWipeLeft
	  ppEffectWipeRight
	  ppEffectWipeUp
	
	Zoom Effects:
	
	  ppEffectZoomBottom
	  ppEffectZoomCenter
	  ppEffectZoomIn
	  ppEffectZoomInSlightly
	  ppEffectZoomOut
	  ppEffectZoomOutSlightly
	
	Uncover Effects:
	
	  ppEffectUncoverDown
	  ppEffectUncoverLeft
	  ppEffectUncoverLeftDown
	  ppEffectUncoverLeftUp
	  ppEffectUncoverRight
	  ppEffectUncoverRightDown
	  ppEffectUncoverRightUp
	  ppEffectUncoverUp
	
	Cover Effects:
	
	  ppEffectCoverDown
	  ppEffectCoverLeft
	  ppEffectCoverLeftDown
	  ppEffectCoverLeftUp
	  ppEffectCoverRight
	  ppEffectCoverRightDown
	  ppEffectCoverRightUp
	  ppEffectCoverUp
	
	Cut Effects:
	
	  ppEffectCut ppEffectCutThroughBlack
	
	Fade:
	
	  ppEffectFade
	
	No Effect:
	
	  ppEffectNone
	
	Mixed:
	
	  ppEffectMixed
	
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
	
	Additional query words: 97 8.00 ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
