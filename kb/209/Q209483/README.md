---
layout: page
title: "Q209483: WD97: Printing Slow When Printing Text Boxes Under Windows NT 4"
permalink: kb/209/Q209483/
---

## Q209483: WD97: Printing Slow When Printing Text Boxes Under Windows NT 4

	Article: Q209483
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; winnt:4.0
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a Word document containing text in text boxes on a
	Hewlett-Packard LaserJet printer, the document print file may be very large and
	the document prints slowly.
	
	CAUSE
	=====
	
	This is a known problem with the Hewlett-Packard LaserJet printer drivers
	shipped with Microsoft Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, download and install the latest Hewlett-Packard
	LaserJet printer driver available for your printer. To download the latest
	Hewlett-Packard printer driver, please visit the following Hewlett-Packard Web
	address:
	
	  http://www.hp.com
	
	For information about how to contact Hewlett-Packard, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	When you print using a Hewlett-Packard LaserJet printer driver, font information
	for the text is usually downloaded to the printer. However, the shipped
	Hewlett-Packard LaserJet printer drivers cannot understand a text box, so the
	printer driver converts it to a bitmap. The bitmap causes the increased file
	size and the slower than normal printing of the document.
	
	
	Additional query words: hp hplj laser jet
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbOSWinNT400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : WINDOWS:97; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
