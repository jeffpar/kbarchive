---
layout: page
title: "Q97630: Using the Report Writer with ImageWriter or LaserWriter"
permalink: /kb/097/Q97630/
---

## Q97630: Using the Report Writer with ImageWriter or LaserWriter

	Article: Q97630
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are printing a report on both an Apple ImageWriter and a LaserWriter and
	are using any version of the Apple System software, including System versions
	7.0 and later, you must create two different reports.
	
	To create the reports:
	
	1. Select the LaserWriter printer through the Chooser, and create a report.
	
	2. Save the report.
	
	3. Use the Save As command to save a copy of the report with a name appropriate
	  to the ImageWriter.
	
	4. Use the Chooser to select the ImageWriter printer. Reformat the report as
	  required.
	
	Another option is to create a report for the ImageWriter and print it on the
	LaserWriter at 96 percent, but this method is not always feasible.
	
	MORE INFORMATION
	================
	
	This behavior occurs because FoxBASE+/Mac uses Apple's printer drivers. Apple's
	printers expect a header file (which FoxBASE+/Mac prepares with the creation of
	a report) to be sent along with any text sent to the printer. The format of this
	header file has changed since the evolution of the LaserWriter.
	
	Therefore, if an ImageWriter receives a header file prepared for the LaserWriter,
	it will not automatically use the default printer settings. The same is true for
	sending an ImageWriter header file to the LaserWriter.
	
	Additional query words: 2.01 report
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
