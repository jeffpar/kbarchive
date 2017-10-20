---
layout: page
title: "Q137596: PPT7: Can't Print Multiple Copies to HP DeskJet Printer"
permalink: /kb/137/Q137596/
---

## Q137596: PPT7: Can't Print Multiple Copies to HP DeskJet Printer

{% raw %}

	Article: Q137596
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In PowerPoint for Windows 95, version 7.0, when you attempt to print more than
	one copy at a time, and if you are printing to a Hewlett-Packard (HP) DeskJet
	500C, 540C, 550C or 560C, only a single copy is printed (rather than the
	multiple copies you specified).
	
	CAUSE
	=====
	
	This behavior is caused by a limitation in the HP DeskJet printer driver, which
	does not support multiple copy printing in PowerPoint for Windows 95 version
	7.0.
	
	
	RESOLUTION
	==========
	
	To print multiple copies to the HP DeskJet 550C or 560C, you must click the
	Print command for every print job desired.
	
	To work around this problem, enter the entire slide range into the Slides portion
	of the print dialog box. For example, if you wanted three copies of slides 1
	through 4, you would type the following in the Slides portion of the Print Range
	section in the Print dialog box:
	
	  1-4,1-4,1-4
	
	
	MORE INFORMATION
	================
	
	The products discussed here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 7.00 7.0 w_powerpt powerpnt powerpt single multiple only one DJ550c DJ560c
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
