---
layout: page
title: "Q156263: Some Text Not Printed When Using HP DeskJet 855c"
permalink: /kb/156/Q156263/
---

## Q156263: Some Text Not Printed When Using HP DeskJet 855c

	Article: Q156263
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document to a Hewlett-Packard (HP) DeskJet 855c, you may notice
	that some of the text is missing or has been clipped from the page. The same
	document can be printed correctly from Microsoft Windows 95.
	
	CAUSE
	=====
	
	The Windows NT 4.0 printer driver for the HP DeskJet 855c has a larger
	unprintable area than the printer driver included with Windows 95.
	
	RESOLUTION
	==========
	
	To print your documents correctly, use one of the following methods:
	
	- Use Windows 95 to print to the HP DeskJet 855c.
	
	- Adjust the text in the document into the printable region on the page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The unprintable region on the page is the region outside the margins allowed by
	the printer driver. The following table lists the unprintable region (in inches)
	for the HP DeskJet 855c printer drivers in Windows NT 4.0 and Windows 95:
	
	  Windows version   Top   Bottom   Left   Right
	  ---------------------------------------------
	  Windows NT 4.0     .7    .33     .25     .25
	  Windows 95        .25    .25     .04     .46
	
	Additional query words: prodnt missing characters
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
