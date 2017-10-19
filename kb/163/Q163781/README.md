---
layout: page
title: "Q163781: PPT: Sample Code Displays Message Box With AutoShape Type Name"
permalink: /kb/163/Q163781/
---

## Q163781: PPT: Sample Code Displays Message Box With AutoShape Type Name

	Article: Q163781
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
	(Sub procedure) that retrieves the shape type for a selected AutoShape object
	and then displays a message box with the name of the shape type.
	
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
	
	     Sub GetAutoShapeName()
	
	        ' Dimension the variables.
	        Dim strAutoShape As String
	        Dim lCurrentSlide As Long
	        Dim lCurrentView As Long
	        Dim oShape As Shape
	
	        ' Determine what the current slide view is.
	        lCurrentView = ActiveWindow.ViewType
	
	        ' See whether in slide view.
	        If lCurrentView <> ppViewSlide Then
	
	           ' Display error message.
	           MsgBox "This macro is designed to be run in slide view. " _
	              & "Switch to slide view, select a shape and run the " _
	              & "macro again. ", vbExclamation, "Invalid View"
	
	           ' Stop the macro.
	           End
	
	        End If
	
	        ' Check to make sure something is selected.
	        If ActiveWindow.Selection.Type = ppSelectionNone Then
	
	           ' Display error message box.
	           MsgBox "No objects are selected. Please select one object " _
	              & "and run the macro again.", vbExclamation
	
	           ' End the macro.
	           End
	
	        End If
	
	        ' Get the current slide number.
	        lCurrentSlide = ActiveWindow.Selection.SlideRange.SlideNumber
	
	        ' See whether more than one shape is selected.
	        If ActiveWindow.Selection.ShapeRange.Count > 1 Then
	
	           ' Display error message.
	           MsgBox "Too many objects selected. Please select one object " _
	              & "and run the macro again.", vbExclamation
	
	           ' Stop the macro.
	           End
	
	        End If
	
	        ' Get reference to selected shape.
	        Set oShape = ActiveWindow.Selection.ShapeRange(1)
	
	        ' Determine the type of autoshape.
	        Select Case oShape.AutoShapeType
	
	           Case msoShape16pointStar
	              strAutoShape = "16pointStar"
	           Case msoShape24pointStar
	              strAutoShape = "24point Star"
	           Case msoShape32pointStar
	              strAutoShape = "32pointStar"
	           Case msoShape4pointStar
	              strAutoShape = "4pointStar"
	           Case msoShape5pointStar
	              strAutoShape = "5pointStar"
	           Case msoShape8pointStar
	              strAutoShape = "8pointStar"
	           Case msoShapeActionButtonBackorPrevious
	              strAutoShape = "ActionButtonBackorPrevious"
	           Case msoShapeActionButtonBeginning
	              strAutoShape = "ActionButtonBeginning"
	           Case msoShapeActionButtonCustom
	              strAutoShape = "ActionButtonCustom"
	           Case msoShapeActionButtonDocument
	              strAutoShape = "ShapeActionButtonDocument"
	           Case msoShapeActionButtonEnd
	              strAutoShape = "ActionButtonEnd"
	           Case msoShapeActionButtonForwardorNext
	              strAutoShape = "ActionButtonForwardorNext"
	           Case msoShapeActionButtonHelp
	              strAutoShape = "ActionButtonHelp"
	           Case msoShapeActionButtonHome
	              strAutoShape = "ActionButtonHome"
	           Case msoShapeActionButtonInformation
	              strAutoShape = "ActionButtonInformation"
	           Case msoShapeActionButtonMovie
	              strAutoShape = "ActionButtonMovie"
	           Case msoShapeActionButtonReturn
	              strAutoShape = "ActionButtonReturn"
	           Case msoShapeActionButtonSound
	              strAutoShape = "ActionButtonSound"
	           Case msoShapeArc
	              strAutoShape = "Arc"
	           Case msoShapeBalloon
	              strAutoShape = "Balloon"
	           Case msoShapeBentArrow
	              strAutoShape = "BentArrow"
	           Case msoShapeBentUpArrow
	              strAutoShape = "BentUpArrow"
	           Case msoShapeBevel
	              strAutoShape = "Bevel"
	           Case msoShapeBlockArc
	              strAutoShape = "BlockArc"
	           Case msoShapeCan
	              strAutoShape = "Can"
	           Case msoShapeChevron
	              strAutoShape = "Chevron"
	           Case msoShapeCircularArrow
	              strAutoShape = "CircularArrow"
	           Case msoShapeCloudCallout
	              strAutoShape = "CloudCallout"
	           Case msoShapeCross
	              strAutoShape = "Cross"
	           Case msoShapeCube
	              strAutoShape = "Cube"
	           Case msoShapeCurvedDownArrow
	              strAutoShape = "CurvedDownArrow"
	           Case msoShapeCurvedDownRibbon
	              strAutoShape = "CurvedDownRibbon"
	           Case msoShapeCurvedLeftArrow
	              strAutoShape = "CurvedLeftArrow"
	           Case msoShapeCurvedRightArrow
	              strAutoShape = "CurvedRightArrow"
	           Case msoShapeCurvedUpArrow
	              strAutoShape = "CurvedUpArrow"
	           Case msoShapeCurvedUpRibbon
	              strAutoShape = "CurvedUpRibbon"
	           Case msoShapeDiamond
	              strAutoShape = "Diamond"
	           Case msoShapeDonut
	              strAutoShape = "Donut"
	           Case msoShapeDoubleBrace
	              strAutoShape = "DoubleBrace"
	           Case msoShapeDoubleBracket
	              strAutoShape = "DoubleBracket"
	           Case msoShapeDoubleWave
	              strAutoShape = "DoubleWave"
	           Case msoShapeDownArrow
	              strAutoShape = "DownArrow"
	           Case msoShapeDownArrowCallout
	              strAutoShape = "DownArrowCallout"
	           Case msoShapeDownRibbon
	              strAutoShape = "DownRibbon"
	           Case msoShapeExplosion1
	              strAutoShape = "Explosion1"
	           Case msoShapeExplosion2
	              strAutoShape = "Explosion2"
	           Case msoShapeFlowchartAlternateProcess
	              strAutoShape = "FlowchartAlternateProcess"
	           Case msoShapeFlowchartCard
	              strAutoShape = "FlowchartCard"
	           Case msoShapeFlowchartCollate
	              strAutoShape = "FlowchartCollate"
	           Case msoShapeFlowchartConnector
	              strAutoShape = "FlowchartConnector"
	           Case msoShapeFlowchartData
	              strAutoShape = "FlowchartData"
	           Case msoShapeFlowchartDecision
	              strAutoShape = "FlowchartDecision"
	           Case msoShapeFlowchartDelay
	              strAutoShape = "FlowchartDelay"
	           Case msoShapeFlowchartDirectAccessStorage
	              strAutoShape = "FlowchartDirectAccessStorage"
	           Case msoShapeFlowchartDisplay
	              strAutoShape = "FlowchartDisplay"
	           Case msoShapeFlowchartDocument
	              strAutoShape = "FlowchartDocument"
	           Case msoShapeFlowchartExtract
	              strAutoShape = "FlowchartExtract"
	           Case msoShapeFlowchartInternalStorage
	              strAutoShape = "FlowchartInternalStorage"
	           Case msoShapeFlowchartMagneticDisk
	              strAutoShape = "FlowchartMagneticDisk"
	           Case msoShapeFlowchartManualInput
	              strAutoShape = "FlowchartManualInput"
	           Case msoShapeFlowchartManualOperation
	              strAutoShape = "FlowchartManualOperation"
	           Case msoShapeFlowchartMerge
	              strAutoShape = "FlowchartMerge"
	           Case msoShapeFlowchartMultidocument
	              strAutoShape = "FlowchartMultidocument"
	           Case msoShapeFlowchartOffpageConnector
	              strAutoShape = "FlowchartOffpageConnector"
	           Case msoShapeFlowchartOr
	              strAutoShape = "FlowchartOr"
	           Case msoShapeFlowchartPredefinedProcess
	              strAutoShape = "FlowchartPredefinedProcess"
	           Case msoShapeFlowchartPreparation
	              strAutoShape = "FlowchartPreparation"
	           Case msoShapeFlowchartProcess
	              strAutoShape = "FlowchartProcess"
	           Case msoShapeFlowchartPunchedTape
	              strAutoShape = "FlowchartPunchedTape"
	           Case msoShapeFlowchartSequentialAccessStorage
	              strAutoShape = "FlowchartSequentialAccessStorage"
	           Case msoShapeFlowchartSort
	              strAutoShape = "FlowchartSort"
	           Case msoShapeFlowchartStoredData
	              strAutoShape = "FlowchartStoredData"
	           Case msoShapeFlowchartSummingJunction
	              strAutoShape = "FlowchartSummingJunction"
	           Case msoShapeFlowchartTerminator
	              strAutoShape = "FlowchartTerminator"
	           Case msoShapeFoldedCorner
	              strAutoShape = "FoldedCorner"
	           Case msoShapeHeart
	              strAutoShape = "Heart"
	           Case msoShapeHexagon
	              strAutoShape = "Hexagon"
	           Case msoShapeHorizontalScroll
	              strAutoShape = "HorizontalScroll"
	           Case msoShapeIsoscelesTriangle
	              strAutoShape = "IsoscelesTriangle"
	           Case msoShapeLeftArrow
	              strAutoShape = "LeftArrow"
	           Case msoShapeLeftArrowCallout
	              strAutoShape = "LeftArrowCallout"
	           Case msoShapeLeftBrace
	              strAutoShape = "LeftBrace"
	           Case msoShapeLeftBracket
	              strAutoShape = "LeftBracket"
	           Case msoShapeLeftRightArrow
	              strAutoShape = "LeftRightArrow"
	           Case msoShapeLeftRightArrowCallout
	              strAutoShape = "LeftRightArrowCallout"
	           Case msoShapeLeftRightUpArrow
	              strAutoShape = "LeftRightUpArrow"
	           Case msoShapeLeftUpArrow
	              strAutoShape = "LeftUpArrow"
	           Case msoShapeLightningBolt
	              strAutoShape = "LightningBolt"
	           Case msoShapeLineCallout1
	              strAutoShape = "LineCallout1"
	           Case msoShapeLineCallout1AccentBar
	              strAutoShape = "LineCallout1AccentBar"
	           Case msoShapeLineCallout1BorderandAccentBar
	              strAutoShape = "LineCallout1BorderandAccentBar"
	           Case msoShapeLineCallout1NoBorder
	              strAutoShape = "LineCallout1NoBorder"
	           Case msoShapeLineCallout2
	              strAutoShape = "LineCallout2"
	           Case msoShapeLineCallout2AccentBar
	              strAutoShape = "LineCallout2AccentBar"
	           Case msoShapeLineCallout2BorderandAccentBar
	              strAutoShape = "LineCallout2BorderandAccentBar"
	           Case msoShapeLineCallout2NoBorder
	              strAutoShape = "LineCallout2NoBorder"
	           Case msoShapeLineCallout3
	              strAutoShape = "LineCallout3"
	           Case msoShapeLineCallout3AccentBar
	              strAutoShape = "LineCallout3AccentBar"
	           Case msoShapeLineCallout3BorderandAccentBar
	              strAutoShape = "LineCallout3BorderandAccentBar"
	           Case msoShapeLineCallout3NoBorder
	              strAutoShape = "LineCallout3NoBorder"
	           Case msoShapeLineCallout4
	              strAutoShape = "LineCallout4"
	           Case msoShapeLineCallout4AccentBar
	              strAutoShape = "LineCallout4AccentBar"
	           Case msoShapeLineCallout4BorderandAccentBar
	              strAutoShape = "LineCallout4BorderandAccentBar"
	           Case msoShapeLineCallout4NoBorder
	              strAutoShape = "LineCallout4NoBorder"
	           Case msoShapeMixed
	              strAutoShape = "Mixed"
	           Case msoShapeMoon
	              strAutoShape = "Moon"
	           Case msoShapeNoSymbol
	              strAutoShape = "NoSymbol"
	           Case msoShapeNotchedRightArrow
	              strAutoShape = "NotchedRightArrow"
	           Case msoShapeNotPrimitive
	              strAutoShape = "NotPrimitive"
	           Case msoShapeOctagon
	              strAutoShape = "Octagon"
	           Case msoShapeOval
	              strAutoShape = "Oval"
	           Case msoShapeOvalCallout
	              strAutoShape = "OvalCallout"
	           Case msoShapeParallelogram
	              strAutoShape = "Parallelogram"
	           Case msoShapePentagon
	              strAutoShape = "Pentagon"
	           Case msoShapePlaque
	              strAutoShape = "Plaque"
	           Case msoShapeQuadArrow
	              strAutoShape = "QuadArrow"
	           Case msoShapeQuadArrowCallout
	              strAutoShape = "QuadArrowCallout"
	           Case msoShapeRectangle
	              strAutoShape = "Rectangle"
	           Case msoShapeRectangularCallout
	              strAutoShape = "RectangularCallout"
	           Case msoShapeRegularPentagon
	              strAutoShape = "RegularPentagon"
	           Case msoShapeRightArrow
	              strAutoShape = "RightArrow"
	           Case msoShapeRightArrowCallout
	              strAutoShape = "RightArrowCallout"
	           Case msoShapeRightBrace
	              strAutoShape = "RightBrace"
	           Case msoShapeRightBracket
	              strAutoShape = "RightBracket"
	           Case msoShapeRightTriangle
	              strAutoShape = "RightTriangle"
	           Case msoShapeRoundedRectangle
	              strAutoShape = "RoundedRectangle"
	           Case msoShapeRoundedRectangularCallout
	              strAutoShape = "RoundedRectangularCallout"
	           Case msoShapeSmileyFace
	              strAutoShape = "SmileyFace"
	           Case msoShapeStripedRightArrow
	              strAutoShape = "StripedRightArrow"
	           Case msoShapeSun
	              strAutoShape = "Sun"
	           Case msoShapeTrapezoid
	              strAutoShape = "Trapezoid"
	           Case msoShapeUpArrow
	              strAutoShape = "UpArrow"
	           Case msoShapeUpArrowCallout
	              strAutoShape = "UpArrowCallout"
	           Case msoShapeUpDownArrow
	              strAutoShape = "UpDownArrow"
	           Case msoShapeUpDownArrowCallout
	              strAutoShape = "UpDownArrowCallout"
	           Case msoShapeUpRibbon
	              strAutoShape = "UpRibbon"
	           Case msoShapeUTurnArrow
	              strAutoShape = "UTurnArrow"
	           Case msoShapeVerticalScroll
	              strAutoShape = "VerticalScroll"
	           Case msoShapeWave
	              strAutoShape = "ShapeWave"
	           Case Else
	              strAutoShape = "Not an AutoShape"
	
	        End Select
	
	        ' Display information sheet.
	        MsgBox strAutoShape, vbInformation, "Auto Shape Name"
	
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
	
	Additional query words: 8.00 ppt8 vba vbe ppt ppt8.0 ppt97 macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
