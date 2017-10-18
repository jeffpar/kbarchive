---
layout: page
title: "Q101051: PRB: Bottom of Report Truncated in FoxBase+/Mac"
permalink: kb/101/Q101051/
---

## Q101051: PRB: Bottom of Report Truncated in FoxBase+/Mac

	Article: Q101051
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A report with a Detail band that extends beyond one physical page truncates the
	Detail band at the end of the first physical page.
	
	CAUSE
	=====
	
	In FoxBASE+/Mac, the Detail band is limited to one physical page. Any
	information beyond the maximum page length will not appear in preview mode, or
	on a printout.
	
	RESOLUTION
	==========
	
	Page layout options differ based on the current printer driver being used. If
	the printer setup allows you to select Universal Fanfold paper and No Gap
	Between Pages, information past the end of the first physical page will be
	printed. If the printer driver does not allow the use of fanfold paper, the size
	of the detail band is limited by the size of the paper used.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new report and specify 8.5-by-11-inch paper.
	
	2. Drag the Detail band to approximately 15 inches.
	
	3. Enter text on the report at approximately 1 inch and 14 inches within the
	  Detail band.
	
	4. Preview the report. The text at 1 inch will appear, but the text at 14 inches
	  will not.
	
	Additional query words: 2.01 cut off
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
