---
layout: page
title: "Q214683: WD97: Duplex Printing Does Not Work with Objects on Page"
permalink: kb/214/Q214683/
---

## Q214683: WD97: Duplex Printing Does Not Work with Objects on Page

	Article: Q214683
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document that contains objects on the page and choose duplex
	printing, the document does not duplex print. This happens when you print the
	document to a LaserJet printer in PCL mode.
	
	CAUSE
	=====
	
	When a page contains objects, Word automatically enables the printer's "Print
	TrueType as graphics" option. This change requires a reset of the printer, and
	the reset takes place between pages. Thus it forces the next page onto a new
	sheet of paper, rather than on the back of the first page.
	
	WORKAROUND
	==========
	
	To work around this problem, turn on the printer's "Print TrueType as graphics"
	option. This ensures that this option is always selected; therefore the printer
	does not have to be reset while printing.
	
	To turn on this option, follow these steps:
	
	1. On the Start menu, point to Settings, and then click Printers.
	
	2. Click the appropriate PCL HP LaserJet printer icon.
	
	3. On the File menu, click Properties.
	
	4. In the Properties dialog box, click the Fonts tab.
	
	5. In the Fonts dialog box, under TrueType fonts, select "Print TrueType as
	  graphics" and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem does not occur in Word 2000.
	
	Additional query words: logo
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
