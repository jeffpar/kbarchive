---
layout: page
title: "Q147448: Cannot Print to Epson Stylus Printer"
permalink: /kb/147/Q147448/
---

## Q147448: Cannot Print to Epson Stylus Printer

{% raw %}

	Article: Q147448
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to an Epson Stylus printer, the Epson Spool Manager may stop
	responding (hang), or you may receive the following error message:
	
	  Error: Printer Not Responding
	
	CAUSE
	=====
	
	This behavior can occur if you are using Epson's Stylus driver version 2.02E. In
	some configurations (especially over a network), the Epson spooler may not be
	able to communicate with the printer port.
	
	RESOLUTION
	==========
	
	Configure the Epson Spool Manager to use Print Manager to spool print jobs
	instead of using its internal spooler. For information about configuring the
	Epson Spool Manager, please contact Epson.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: ESCP/2 ESC Color II Iis Pro XL 800
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
