---
layout: page
title: "Q196857: WD97: First Page Prints on Back of Last Page with Duplex"
permalink: kb/196/Q196857/
---

## Q196857: WD97: First Page Prints on Back of Last Page with Duplex

	Article: Q196857
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the duplex option to print multiple copies of a document to a
	PostScript printer, and if the document contains an odd number of pages, the
	first page of the second copy prints on the back of the last page of the first
	copy.
	
	NOTE: This does not occur with non-PostScript (PCL) printers.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Insert text on the page that you want to be blank, and then format the color
	  of that text to be white.
	
	  -or-
	
	- Install the Windows 3.x PostScript driver. For information about using
	  Windows 3.x drivers in Windows 95, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q132946 How to Install Windows 3.1 Drivers in Windows 95
	
	  NOTE: Windows 3.x printer drivers cannot take advantage of some of the
	  printing enhancements in Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the PostScript printer driver
	included with Windows 95.
	
	
	Additional query words: 8.0 8.00 7.0 print duplex double-sided two- sided both sides
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
