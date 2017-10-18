---
layout: page
title: "Q152347: BUG: Hairline and Dotted Pen Lines Print as Single Point Width"
permalink: kb/152/Q152347/
---

## Q152347: BUG: Hairline and Dotted Pen Lines Print as Single Point Width

	Article: Q152347
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbprint kbHWMAC kbPrinting kbvfpkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although the report designer allows lines to be set to Hairline or Dotted,
	Visual FoxPro will print hairlines and dotted lines as single point solid lines.
	This behavior will occur regardless of the printer driver used.
	
	WORKAROUND
	==========
	
	Use a report picture with a hairline or dotted line graphic rather than the line
	tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Report. Add three lines to the report and select the first line.
	
	2. From the Format menu, select Pen, then Hairline. Select the second line.
	
	3. From the Format menu, select Pen, then Dotted. Select the third line.
	
	4. From the Format menu, select Pen, then 1-Point.
	
	5. Run the Report.
	
	There is no visible distinction between the hairline, the dotted, and the 1-
	point line.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbHWMAC kbPrinting kbvfp kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	Issue type        : kbbug
	
	=============================================================================
	
