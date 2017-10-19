---
layout: page
title: "Q163006: Section Heading of 32 or More Characters Truncated"
permalink: /kb/163/Q163006/
---

## Q163006: Section Heading of 32 or More Characters Truncated

	Article: Q163006
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install a third-party program or device driver and the .inf file
	specifies a section header of 32 or more characters in the System.ini or Win.ini
	file, the section header (including spaces) may be truncate to 31 characters.
	
	MORE INFORMATION
	================
	
	This behavior can occur if the string length defined for the .ini file is 32 or
	more characters.
	
	The following example demonstrates a section header that is truncated to 31
	characters:
	
	  Header specified in the .inf file:
	
	  [update.win]
	  win.ini,"Frontier Technologies Corporation" (33 characters)
	
	  Header created in the Win.ini file entry:
	
	  [Frontier Technologies Corporati] (31 characters)
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
