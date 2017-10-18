---
layout: page
title: "Q146881: XCLN: Column Order Changed After Group By Operation"
permalink: kb/146/Q146881/
---

## Q146881: XCLN: Column Order Changed After Group By Operation

	Article: Q146881
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange client, the column order is not retained and will be
	altered after you apply a Group By condition and remove the Group By condition.
	
	CAUSE
	=====
	
	This is by design. Microsoft Exchange does not store the view that you were
	using before you did a Group By, so it can not restore the column order.
	
	The default is to put the column that you were grouping by as the first column
	with a column width of 1 character.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
