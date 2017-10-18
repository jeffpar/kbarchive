---
layout: page
title: "Q103466: REGION.BMP Not a Supported Paintbrush Format"
permalink: kb/103/Q103466/
---

## Q103466: REGION.BMP Not a Supported Paintbrush Format

	Article: Q103466
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	REGION.BMP cannot be embedded or linked as a Paintbrush object in a general
	field, and it cannot be printed in a FoxPro for Windows report using the Picture
	tool.
	
	MORE INFORMATION
	================
	
	REGION.BMP is of a different format than the other bitmap files that are
	included in FoxPro's TUTORIAL and GOODIES subdirectories. For example, when you
	attempt to open this file in Paintbrush, the following error message appears:
	
	  The format of this file is not supported.
	
	Therefore, when you attempt to link or embed REGION.BMP as a Paintbrush object in
	a general field in FoxPro 2.x, the "Error creating OLE object" message appears.
	In Visual FoxPro, the error message "OLE error code 0x800401fe : Application was
	launched but didn't register a class factory" appears.
	
	There are three different types of .BMP files: OS/2, RGB, and RLE. Paintbrush
	supports the OS/2 and RGB formats but not RLE-encoded .BMP files.
	
	Using the Report Writer Picture tool, you can place REGION.BMP on a report and
	view it in page preview; however, a blank space will appear on the printed
	output where the bitmap should be.
	
	
	Additional query words: errmsg err msg graphic
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
