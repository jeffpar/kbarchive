---
layout: page
title: "Q173585: General Protection Faults Printing to Color PostScript Printer"
permalink: /kb/173/Q173585/
---

## Q173585: General Protection Faults Printing to Color PostScript Printer

{% raw %}

	Article: Q173585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbprint appscomp kbAppCompatibility
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a color PostScript printer, you may experience either of the
	following symptoms:
	
	- General protection (GP) faults in Pscript.drv.
	
	- Image Color Matching (ICM) does not function.
	
	CAUSE
	=====
	
	This behavior can occur if Adobe Type Manager version 3.01 or earlier is
	installed on your computer.
	
	RESOLUTION
	==========
	
	To work around this issue, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "win.ini" (without the quotation marks), and then click
	  OK.
	
	3. Add the following line to the [Pscript.drv] section of the file:
	
	  ATMWorkaround=1
	
	4. Save the file, and then quit Notepad.
	
	5. Restart Windows normally.
	
	Or, you can contact Adobe for information about upgrading your version of Type
	Manager.
	
	MORE INFORMATION
	================
	
	Type Manager version 3.01 and earlier does not support some of the fields that
	Windows 95 ICM expects. If these fields are empty, one of the symptoms listed
	above may occur.
	
	With the "ATMWorkaround=1" entry in the Win.ini file, ICM does not function
	during text output from any program. Remove this line if you install an updated
	version of Type Manager.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.0 3.0x 3.xx atm gpf
	
	======================================================================
	Keywords          : kberrmsg kbprint appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
