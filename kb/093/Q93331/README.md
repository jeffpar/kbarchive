---
layout: page
title: "Q93331: How to Specify Field Alignment in the Report Writer"
permalink: /kb/093/Q93331/
---

## Q93331: How to Specify Field Alignment in the Report Writer

	Article: Q93331
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6x; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To align an output field in the Report Writer, select the desired alignment by
	using the Format button, not the Style button.
	
	MORE INFORMATION
	================
	
	NOTE: In Visual FoxPro for Windows, there is coordination between the Report
	Writer's Format button and the Text Alignment command under the Format menu. The
	format selected in the Text Alignment command becomes the default selection for
	the report's Format button.
	
	In the Report Expression dialog box, choose the Format button. If the field type
	is character, Center and Right Align are the available options.
	
	If the field type is numeric, Left Justify is an available option in FoxPro
	version for MS-DOS. In FoxPro for Windows, however, the Left Justify option is
	disable (dimmed) for numeric field types.
	
	If you choose the Style button in the Report Expression dialog box, the Center,
	Left, and Right alignment options are available. However, these options do not
	change the alignment for the field unless the output is printed using a
	PostScript printer driver. The Style selection is a MS-DOS only option.
	
	To left-justify a field in FoxPro for Windows, choose Text Alignment from the
	Object menu, then select Left.
	
	Additional query words: FoxDos FoxWin vFoxWin FoxMac 2.50 2.50a 2.50b 2.60 2.60a report style alignment RWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.5x,2.6x; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,3.0b
	
	=============================================================================
	
