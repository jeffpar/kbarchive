---
layout: page
title: "Q155023: XCLN: HP Deskjet 600C Series Prints Blank Page"
permalink: /kb/155/Q155023/
---

## Q155023: XCLN: HP Deskjet 600C Series Prints Blank Page

	Article: Q155023
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,97
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from a Microsoft Exchange client for Windows 3.x to an
	HP Deskjet 600 series printer or a HP Deskjet 870cxi, a blank page is printed
	with a page number at the bottom of the page.
	
	WORKAROUND
	==========
	
	There are two workarounds for this problem. Either use the HP Deskjet 500 driver
	(no color support) or add the following entry to the [Options] section of the
	Exchng.ini file:
	
	  UsePrintBanding=0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Microsoft Exchange client
	for Windows 3.x running on Microsoft Windows for Workgroups and Microsoft
	Windows 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 660C 600CSE
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,97
	
	=============================================================================
	
