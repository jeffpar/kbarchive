---
layout: page
title: "Q84647: WD97: &quot;Margins Set Outside Printable Area of Page&quot;"
permalink: /kb/084/Q84647/
---

## Q84647: WD97: &quot;Margins Set Outside Printable Area of Page&quot;

	Article: Q84647
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbualink97 kbPrintingkbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you set your document margins closer to the edge of the paper than your
	printer is capable of printing, Microsoft Word for Windows returns the following
	warning message for each copy you send to the printer:
	
	  One or more margins are set outside the printable area of the page. Choose
	  the Fix button to increase the appropriate margins.
	
	CAUSE
	=====
	
	Most laser printers, such as the Hewlett-Packard (HP) LaserJet, cannot print
	closer to the edge of the paper than 0.25 inch. Some laser printers, such as the
	HP LaserJet Series II, require 0.5-inch margins. Most PostScript and dot-matrix
	printers have their own internal printer driver setting for margins.
	
	WORKAROUND
	==========
	
	When you receive the warning message, clicking the Fix button increases any
	margin in the unprintable region to the minimum margin setting.
	
	MORE INFORMATION
	================
	
	To determine what the document margins can be set to, start WordPad in Windows
	from the Accessories group.
	
	1. On the File menu, click Page Setup.
	
	2. Set one of the margins to zero (0) and click OK.
	
	3. On the File menu, click Page Setup, and the margin that you set to zero(0)
	  will display the minimum margin setting.
	
	Additional query words: errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg kbprint kbualink97 kbPrinting kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
