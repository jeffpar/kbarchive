---
layout: page
title: "Q151251: XCLN: Printing Blank Page with Exchange Client for Windows 3.x"
permalink: kb/151/Q151251/
---

## Q151251: XCLN: Printing Blank Page with Exchange Client for Windows 3.x

	Article: Q151251
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Microsoft Exchange client for Windows 3.x to an HP III
	series printer or an HP DeskJet 820Cse, an extra sheet will be ejected. Nothing
	will be printed on this sheet.
	
	CAUSE
	=====
	
	This is due to the way that the printer driver deals with low memory situations.
	Microsoft Exchange attempts to do printing on Win16 using banding. This is not
	always the case and these printers exhibit this. When we try to print to these
	printers, the first band it gives is a text-only band covering the entire page.
	Each band after this will be a graphics only band covering part of the page.
	Because we only ask for graphics bands, we ignore the text-only band and just
	use the graphics bands. Since the HP driver will ignore text primitives in a
	graphics only band, you only see the graphics primitives when you print.
	
	WORKAROUND
	==========
	
	There are several possible workarounds to this issue.
	
	- Try to add the following setting to the options section of the Exchng.ini
	  file:
	
	     UsePrintBanding=0
	
	  If the problem persists, add more memory if the computer has 8-megabytes (MB)
	  or less
	
	  -or-
	
	- If every font in your message is a TrueType font, you can select the Print
	  TrueType as graphics checkbox (open the File menu, click Print, click the
	  Setup button, and click the Options button). This will print your message
	  correctly but it will not print any fonts that are not TrueType.
	
	  -or-
	
	- If the HP printer has PostScript, you can use it as the Postscript driver
	  does not exhibit this behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0, of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
