---
layout: page
title: "Q157135: WD97: Newsletter Footer Doesn't Print Using Default Settings"
permalink: /kb/157/Q157135/
---

## Q157135: WD97: Newsletter Footer Doesn't Print Using Default Settings

	Article: Q157135
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbtemplate word97 kblayout kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print a newsletter that you created using the Newsletter Wizard, the
	footer and/or the bottom border does not print.
	
	CAUSE
	=====
	
	This problem occurs when you click Page Setup on the File menu, click the
	Margins tab, and type a value in the Footer box that is outside the printable
	range for the printer.
	
	For example, this problem occurs when you type a value of .24 inch in the Footer
	box, and then print to a Hewlett-Packard DeskJet printer. The position is
	outside of the printable range because the Hewlett-Packard DeskJet printer
	cannot print a footer that is positioned lower than .67 inch from the edge of
	the paper.
	
	WORKAROUND
	==========
	
	To work around this problem, increase the value in the Footer box. To do this,
	use the following steps:
	
	1. On the File menu, click Page Setup.
	
	2. Click the Margins tab.
	
	3. In the Footer box under From Edge, type a larger value and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbtemplate word97 kblayout kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
