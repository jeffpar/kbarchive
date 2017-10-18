---
layout: page
title: "Q165251: WD97: Acceptable Values of wdLineWidth Constant (in wdLineStyle)"
permalink: kb/165/Q165251/
---

## Q165251: WD97: Acceptable Values of wdLineWidth Constant (in wdLineStyle)

	Article: Q165251
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you apply borders using Visual Basic for Applications commands, you can
	specify the line style and the line width of the border to be applied. Each
	border line style has a different number of varying line widths that can be
	applied to a border. That is, all line widths are not available to use with
	every line style.
	
	Also, the list of wdLineWidth constants are available for use in a macro
	regardless of the line style being applied. There is no programmatic method
	available for determining whether a particular line width is a valid width to
	use with a chosen border line style. If you apply an invalid line width to a
	line style, the macro will return an error when you run it (it will not return
	an error when it's compiled).
	
	This article contains the list of wdLineStyle constants and the wdLineWidths that
	can be used with the line style.
	
	MORE INFORMATION
	================
	
	  wdLineStyle Constant      Available Line Widths(pts)
	                             .25  .5  .75  1  1.5  2.25  3  4.5  6
	  ----------------------------------------------------------------
	  Single                      x    x   x   x   x    x    x   x   x
	  Dot                         x    x   x   x   x    x    x   x   x
	  DashSmallGap                x    x   x   x   x    x    x   x   x
	  DashLargeGap                x    x   x   x   x    x    x   x   x
	  DashDot                     x    x   x   x   x    x    x   x   x
	  DashDotDot                  x    x   x   x   x    x    x   x   x
	  Double                      x    x   x       x    x    x
	  Triple                      x    x   x       x    x    x
	  ThinThickSmallGap                            x    x    x   x   x
	  ThickThinSmallGap                            x    x    x   x   x
	  ThinThickThinSmallGap                        x    x    x   x   x
	  ThinThickMedGap             x    x   x   x   x    x    x   x   x
	  ThickThinMedGap             x    x   x   x   x    x    x   x   x
	  ThinThickThinMedGap         x    x   x   x   x    x    x   x
	  ThinThickLargeGap           x    x   x   x   x    x    x   x   x
	  ThickThinLargeGap           x    x   x   x   x    x    x   x   x
	  ThinThickThinLargeGap       x    x   x   x   x    x    x   x   x
	  SingleWavy                           x       x
	  DoubleWavy                           x
	  DashDotStroked                                         x
	  Emboss3D                             x       x    x    x   x   x
	  Engrave3D                            x       x    x    x   x   x
	
	For more information about LineWidths, from the Visual Basic for Applications
	Editor, click the Office Assistant, type "LineWidth" (without the quotation
	marks), click Search, and then click to view "LineWidth Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vbe vba
	
	======================================================================
	Keywords          : kbprogramming word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
