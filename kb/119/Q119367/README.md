---
layout: page
title: "Q119367: Error When Printing PageMaker 5.0 File to QMS 860 Printer"
permalink: /kb/119/Q119367/
---

## Q119367: Error When Printing PageMaker 5.0 File to QMS 860 Printer

{% raw %}

	Article: Q119367
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
	
	When you print a file that includes a TIFF image from Adobe PageMaker 5.0 to a
	QMS 860 PostScript printer, you receive the following error message:
	
	  Error: undefined Offending Command: colorimage
	
	CAUSE
	=====
	
	By default, PageMaker 5.0 sends print output with PostScript level 2 operators.
	PageMaker does not check the PostScript level of the printer first. The QMS 860
	printer is a level 1 printer and generates errors when attempting to handle the
	level 2 operations. This problem is not caused by the Windows 95 PostScript
	printer driver.
	
	STATUS
	======
	
	Adobe Systems, Inc. is aware of the issue and is currently working on correcting
	it. For additional information, contact Adobe.
	
	MORE INFORMATION
	================
	
	PageMaker 5.0 is manufactured by Adobe Systems, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: page maker pscript ps 3rdparty err msg color image
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
