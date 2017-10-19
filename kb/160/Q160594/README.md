---
layout: page
title: "Q160594: HOWTO: Use Report File Units"
permalink: /kb/160/Q160594/
---

## Q160594: HOWTO: Use Report File Units

	Article: Q160594
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbprint kbHWMAC kbPrinting kbReportWriter kbvfp300 kbvfp500
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In creating a report programmatically, you can use the following formula to
	determine the width for objects on the report:
	
	  625/6 report units per pixel
	
	MORE INFORMATION
	================
	
	The FONTMETRIC function returns return various attributes of a specified font.
	For example, FONTMETRIC(6) returns the average character width in pixels of the
	current font.
	
	So, to calculate the average width needed in a report for a five-character field,
	you could use the following formula:
	
	     reportwidth = 625/6 * ;
	        (FONTMETRIC(6, <cFontName>, <nFontSize>, <cFontStyle>) * ;
	        nNumCharacters)
	
	nNumCharacters specifies the number of characters for which you need to allow
	room.
	
	The following line of code would store the average width needed in a report for a
	five-character field in the font "Times New Roman," size 12, style Normal.
	
	     reportwidth = 625/6 * (FONTMETRIC(6, "Times New Roman", 12, "N") * 5)
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on "FONTMETRIC()"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbHWMAC kbPrinting kbReportWriter kbvfp300 kbvfp500 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
