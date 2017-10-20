---
layout: page
title: "Q134576: PostScript Errors Printing with Bitstream Facelift 2.0"
permalink: /kb/134/Q134576/
---

## Q134576: PostScript Errors Printing with Bitstream Facelift 2.0

{% raw %}

	Article: Q134576
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a PostScript printer with Bitstream Facelift version 2.0
	enabled, the following error message is printed:
	
	  ERROR: undefined
	  OFFENDING COMMAND: fpp
	  STACK:
	
	CAUSE
	=====
	
	Facelift 2.0 uses internal PostScript commands that are defined by the Windows
	3.1 PostScript driver. These commands are different in the Windows 95 PostScript
	driver.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, please contact Bitstream.
	
	MORE INFORMATION
	================
	
	Facelift is manufactured by Bitstream, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
