---
layout: page
title: "Q162121: PPT: Sample Code to Animate All Graph 8.0 Objects"
permalink: /kb/162/Q162121/
---

## Q162121: PPT: Sample Code to Animate All Graph 8.0 Objects

{% raw %}

	Article: Q162121
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
	(Sub procedure) that finds all Microsoft Graph 8.0 objects in the active
	presentation and applies an entry custom animation to each one. The macro
	randomly chooses which animation effect to apply to each graph.
	
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
	
	     Sub GraphAnimationRandomizor()
	
	        Const NumEffects As Byte = 58
	
	        Dim SlideObject As Slide
	        Dim ShapeObject As Shape
	        Dim HoldRandomValue As Byte
	
	        ' Make an array to store all the different types
	        ' of Entry Animation Effects
	        Dim EffectList(1 To NumEffects) As Long
	
	        Dim GraphCount As Long
	
	        ' Initialize the graph counter
	        GraphCount = 0
	
	        ' Set up the Effect list
	        SetUpEffectList EffectList()
	
	        ' Outer loop goes through every slide in the Active presentation
	        For Each SlideObject In Application.ActivePresentation.Slides
	
	           ' Inner loop goes through every shape in the presentation
	           For Each ShapeObject In SlideObject.Shapes
	
	              ' Check if the shape is an OLE object
	              If ShapeObject.Type = msoEmbeddedOLEObject Then
	
	                 ' Check if the shape is a graph
	                 If ShapeObject.OLEFormat.ProgID = "MSGraph.Chart.8" Then
	
	                    With ShapeObject.AnimationSettings
	
	                       ' This property must be set to True for any of the
	                       ' other properties of the AnimationSettings object
	                       ' to take effect.
	                       .Animate = msoTrue
	
	                       ' Get a Random number
	                       Randomize
	                       HoldRandomValue = Int((NumEffects * Rnd) + 1)
	
	                       ' Assigns a random animatation to the graph
	                       .EntryEffect = EffectList(HoldRandomValue)
	                    End With
	
	                    ' Increment the graph counter
	                    GraphCount = GraphCount + 1
	                 End If
	
	              End If
	
	           Next ShapeObject
	
	        Next SlideObject
	
	        ' Check if any graphs were changed
	        If GraphCount = 0 Then
	           MsgBox "No Graphs are available. No changes were made " _
	              & "to the presentation.", vbInformation, "No Graphs"
	        Else
	
	           ' Set up the message box
	           If GraphCount = 1 Then
	              MsgBox "One Graph was given a random custom animation.", _
	                 vbInformation, "Random Custom Animation"
	           Else
	              MsgBox "Suscessfully applied a custom animation to all " _
	                 & "Graphs.", vbInformation, GraphCount & " Graphs Animated"
	           End If
	
	        End If
	
	     End Sub
	
	     ' Assigns effect constants to the List Array
	     Sub SetUpEffectList(ByRef List() As Long)
	
	        ' Appear
	        List(1) = ppEffectAppear
	
	        ' Fly Effects
	        List(2) = ppEffectFlyFromBottom
	        List(3) = ppEffectFlyFromBottomLeft
	        List(4) = ppEffectFlyFromBottomRight
	        List(5) = ppEffectFlyFromLeft
	        List(6) = ppEffectFlyFromRight
	        List(7) = ppEffectFlyFromTop
	        List(8) = ppEffectFlyFromTopLeft
	        List(9) = ppEffectFlyFromTopRight
	
	        ' Blinds Effects
	        List(10) = ppEffectBlindsHorizontal
	        List(11) = ppEffectBlindsVertical
	
	        ' Box Effects
	        List(12) = ppEffectBoxIn
	        List(13) = ppEffectBoxOut
	
	        ' Checkerboard Effects
	        List(14) = ppEffectCheckerboardAcross
	        List(15) = ppEffectCheckerboardDown
	
	        ' Crawl Effects
	        List(16) = ppEffectCrawlFromDown
	        List(17) = ppEffectCrawlFromLeft
	        List(18) = ppEffectCrawlFromRight
	        List(19) = ppEffectCrawlFromUp
	
	        ' Dissolve
	        List(20) = ppEffectDissolve
	
	        ' Flash Effect
	        List(21) = ppEffectFlashOnceFast
	        List(22) = ppEffectFlashOnceMedium
	        List(23) = ppEffectFlashOnceSlow
	
	        ' Peek Effect
	        List(24) = ppEffectPeekFromDown
	        List(25) = ppEffectPeekFromLeft
	        List(26) = ppEffectPeekFromRight
	        List(27) = ppEffectPeekFromUp
	
	        ' Random Effects
	        List(28) = ppEffectRandomBarsHorizontal
	        List(29) = ppEffectRandomBarsVertical
	
	        ' Spiral
	        List(30) = ppEffectSpiral
	
	        ' Split Effects
	        List(31) = ppEffectSplitHorizontalIn
	        List(32) = ppEffectSplitHorizontalOut
	        List(33) = ppEffectSplitVerticalIn
	        List(34) = ppEffectSplitVerticalOut
	
	        ' Stretch Effects
	        List(35) = ppEffectStretchAcross
	        List(36) = ppEffectStretchDown
	        List(37) = ppEffectStretchLeft
	        List(38) = ppEffectStretchRight
	        List(39) = ppEffectStretchUp
	
	        ' Strips Effects
	        List(40) = ppEffectStripsDownLeft
	        List(41) = ppEffectStripsDownRight
	        List(42) = ppEffectStripsLeftDown
	        List(43) = ppEffectStripsLeftUp
	        List(44) = ppEffectStripsRightDown
	        List(45) = ppEffectStripsRightUp
	        List(46) = ppEffectStripsUpLeft
	        List(47) = ppEffectStripsUpRight
	
	        ' Swivel
	        List(48) = ppEffectSwivel
	
	        ' Wipe Effects
	        List(49) = ppEffectWipeDown
	        List(50) = ppEffectWipeLeft
	        List(51) = ppEffectWipeRight
	        List(52) = ppEffectWipeUp
	
	        ' Zoom Effects
	        List(53) = ppEffectZoomBottom
	        List(54) = ppEffectZoomCenter
	        List(55) = ppEffectZoomIn
	        List(56) = ppEffectZoomInSlightly
	        List(57) = ppEffectZoomOut
	        List(58) = ppEffectZoomOutSlightly
	
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
	
	Additional query words: 97 8.00 kbmacro kbpptvba ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
