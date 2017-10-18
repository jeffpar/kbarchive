---
layout: page
title: "Q238078: Microsoft Fax Does Not Dial Complete Phone Number"
permalink: kb/238/Q238078/
---

## Q238078: Microsoft Fax Does Not Dial Complete Phone Number

	Article: Q238078
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95 win98 win98se
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax using Microsoft Fax, you may not dial the complete
	phone number. For example, if you are dialing 555-1212, Microsoft Fax dials only
	555-121.
	
	CAUSE
	=====
	
	This issue can occur because there is a limit of the number of characters that
	the fax header can contain. The To box and the "Phone number" box can contain a
	combined total of 56 characters. Any spaces in these boxes are counted as
	characters.
	
	RESOLUTION
	==========
	
	To resolve this issue, use less characters in the To box of your fax message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
