---
layout: page
title: "Q160668: PRB: Printing Dialog Increments Indefinitely, Prints Nothing"
permalink: /kb/160/Q160668/
---

## Q160668: PRB: Printing Dialog Increments Indefinitely, Prints Nothing

{% raw %}

	Article: Q160668
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a report or label is printed in Visual FoxPro for Macintosh, the Printing
	dialog box is displayed but the pages count up very quickly and higher than the
	number of pages that could possibly be printed for the report. In addition to
	this, nothing prints. The report or label may print properly on some printers
	but not others. If this is the case, it probably prints on a LaserWriter while
	it does not print properly on an ImageWriter.
	
	This problem has not been reported when using QuickDraw GX.
	
	CAUSE
	=====
	
	The detail band of the report is too long and has a report expression or some
	text past the 10.5-inch mark.
	
	WORKAROUND
	==========
	
	Shorten the detail band of the report so it is no longer than 10.5 inches and
	move any expressions or text objects so that their bottom edge is above the 10.5
	inch mark.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem usually occurs when the detail band is between 10.5 and 11.5 inches
	when printing to 8.5 x 11 inch paper in portrait orientation, the Whole Page
	Print Area option is selected in Page Setup for the report and there is a report
	expression or some text below the 10.5-inch mark. For landscape reports or
	different paper sizes, the problem occurs at other detail band sizes based on
	the paper size. The size of the page header and page footer also has an effect
	on this. This article assumes that both page header and footer have been
	collapsed to a height of zero.
	
	Previewing the report or label may show a blank page. If the Print Area option is
	changed to Printable Page and the report is previewed, the following error
	message may appear:
	
	  Detail band is too large to fit on page.
	
	By default, many printers have a margin that they cannot print to. For most laser
	printers, this is 1/4 inch on each side. That is why for 8.5 x 11 inch paper the
	problem length of the detail band is at 10.5 inches. Depending on the size of
	this default margin on the printer that the report is designed on, it may print
	properly if the detail band is 10.75 inches. But when it is printed on a
	different printer, such as a LaserWriter, it may experience the problem
	described above.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure QuickDraw GX is not loaded and that the LaserWriter printer driver
	  is chosen in Chooser.
	
	2. In Visual FoxPro, create a new report.
	
	3. The page header and page footer of the new report should be zero in size.
	
	4. Add a table to the DataEnvironment of the report.
	
	5. Place a field from the table in the DataEnvironment to the detail band of the
	  report.
	
	6. Size the detail band so it is about 11 inches tall.
	
	7. At about the 10.75-inch mark, place a text object. The top position of the
	  text object can be viewed on the Visual FoxPro status bar by choosing the
	  Show Position command from the View menu.
	
	8. On the File menu, click Page Setup. In the Page Setup dialog box, click Whole
	  Page for the Print Area option.
	
	9. Preview the report. It will likely appear blank.
	
	10. Save and close the report and try to print it with the following command in
	  the Visual FoxPro Command window:
	
	  " REPORT FORM <name>.frx TO PRINT NEXT 2 ENVIRONMENT " (without the
	  quotation marks)
	
	11. The Printing dialog box appears and the pages count off very quickly and way
	  past the number of pages (2) that should print. But nothing prints.
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
