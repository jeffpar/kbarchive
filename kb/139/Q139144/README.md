---
layout: page
title: "Q139144: PRB: Can't Print a Plain, Unformatted Report to a File"
permalink: kb/139/Q139144/
---

## Q139144: PRB: Can't Print a Plain, Unformatted Report to a File

	Article: Q139144
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbHWMAC kbPrinting kbvfp
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are unable to print a plain, unformatted report to a file. The only option
	appears to be a PostScript-formatted file.
	
	CAUSE
	=====
	
	There is no generic text printer driver in the Macintosh operating system, so
	FoxPro for Macintosh is unable to create a text-only report through a report
	layout.
	
	WORKAROUND
	==========
	
	You can use one of the following workarounds:
	
	- Use the TEXT ... END TEXT commands.
	
	- Code the reports manually.
	
	- Obtain the third-party program PRINT2PICT. PRINT2PICT is a shareware printer
	  driver extension published by a vendor independent of Microsoft. It previews
	  and saves printed pages to a PICT file format. This extension requires System
	  7 or later and has online Help available. Support for this product is
	  provided by its author, not by Microsoft. Any issues resulting from the use
	  of this product should be referred to the author of PRINT2PICT. For more
	  information on this utility, you can reach the author, Baudouin Raoult, at
	  the following address:
	
	  17 Home Farm Close
	  RG2 7TD Reading Berkshire
	  England
	  E-mail: mab@ecmwf.co.uk
	
	  This information about PRINT2PICT was taken from the documentation provided by
	  B. Raoult and is not warranted or guaranteed by Microsoft in any capacity.
	
	Although it doesn't make use of a report, another workaround is to use a SQL
	SELECT statement to create a text file from a data source. For example, you
	could use the following statement to place data from the Customer table into a
	text file named Test.txt:
	
	     SELECT * FROM customer NOCONSOLE TO FILE test.txt
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: ASCII mac layout print
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbHWMAC kbPrinting kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
