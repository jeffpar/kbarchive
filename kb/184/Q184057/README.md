---
layout: page
title: "Q184057: Printing Wide Carriage with Generic/Text Only Print Driver"
permalink: kb/184/Q184057/
---

## Q184057: Printing Wide Carriage with Generic/Text Only Print Driver

	Article: Q184057
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the built in Generic/Text Only print driver to print, the driver
	defaults to 80 columns. Sometimes, it is necessary to use the Generic/Text Only
	driver to print 132 or more columns.
	
	MORE INFORMATION
	================
	
	You can use the following steps to make the Generic/Text Only print driver
	default to 132 or more columns:
	
	1. Click Start, point to Setting, and then click Printers.
	
	2. On the File menu, click Server Properties, and then click the Forms tab.
	
	3. Click Create a New Form and enter Wide132 for the Form Description.
	
	4. Adjust the measurements as follows:
	
	   - Under Paper Size, make the Width 13.2in (or wider if you require more
	     columns) and the Height 11.68in.
	
	   - Under Printer Area Margins, leave the margins at zero.
	
	5. Click Save Form, and then click OK when complete.
	
	6. Right-click the Generic/Text Only Printer, select Document Defaults, and then
	  click the Advanced tab.
	
	7. Under Paper Output, click Paper Size, and then select Wide132 from the list
	  at the bottom.
	
	8. Click OK when complete.
	
	This procedure will save Wide132 as the selected paper size for the Generic/Text
	Only printer.
	
	Additional query words: wide wider small column
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
