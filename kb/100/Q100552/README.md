---
layout: page
title: "Q100552: Total of Report Bands Cannot Exceed Page Length"
permalink: /kb/100/Q100552/
---

## Q100552: Total of Report Bands Cannot Exceed Page Length

{% raw %}

	Article: Q100552
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbprint kbPrinting kbvfp
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The total of the Page Header, Page Footer, group header (optional), group footer
	(optional), Detail, and Summary bands of a report created with the Report Writer
	in FoxPro for Windows cannot exceed the page length that the Windows printer
	driver is using.
	
	For example, if you create a Detail band that is 11 inches long (the length of
	the page) and place items in the group header and group footer bands, the Detail
	band will be truncated during printing in order to fit in the header and footer.
	This is a limitation of the FoxPro for Windows Report Writer.
	
	NOTE: In Visual FoxPro 3.0 the error "<Band_Name> too large to fit on Page"
	will appear, where <band_name> is the name of the band that exceeds the
	limit. The error will occur in Visual FoxPro 3.0 only when a single band exceeds
	the page length, not when the sum of the bands exceeds the length.
	
	Additional query words: cut off shortened disappear not appearing Rwriter kbvfp300 kbvfp600 kbReportWriter
	
	======================================================================
	Keywords          : kbProgramming kbprint kbPrinting kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP600
	Version           : WINDOWS:2.5,2.5a,3.0,6.0
	
	=============================================================================
	

{% endraw %}
