---
layout: page
title: "Q160118: XADM: How to Print Out Members of a DL from Exchange"
permalink: /kb/160/Q160118/
---

## Q160118: XADM: How to Print Out Members of a DL from Exchange

	Article: Q160118
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to print out the members of a distribution list (DL)
	from Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	To print out the members of a DL:
	
	1. In the Microsoft Exchange Server Administrator program, go to the Recipients
	  container where the distribution list resides.
	
	2. View the properties of the distribution list by either double-clicking on the
	  list or clicking the list and clicking Properties on the File menu.
	
	3. On the General tab of the property page, click Modify.
	
	4. Select all of the list's users to highlight them, and press CTRL-C to copy
	  the members to the clipboard.
	
	5. Open a Notepad document and press CTRL-V to paste the members. Save the
	  document as c:\Dlist.txt
	
	6. Open the document in Microsoft Excel by clicking Open on the File menu, and
	  point to the c:\Dlist.txt file.
	
	7. In the Text Import Wizard, click Delimited, then click Next.
	
	8. From the Delimiters box, click Semicolon only, and click Finish.
	
	  The contents of the Dlist.txt file are now in Excel. The following steps will
	  line up names in a single column and print the list.
	
	9. In Microsoft Excel, select the entire list of names to highlight it, and
	  press CTRL- C.
	
	10. Open a blank Excel document, highlight cell A-1, and on the Edit menu, click
	  Paste Special.
	
	11. Click Transpose, then click OK.
	
	12. On the File menu, click Print to print the list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	
	=============================================================================
	
