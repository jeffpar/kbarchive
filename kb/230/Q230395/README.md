---
layout: page
title: "Q230395: XADM: How to Display Multiple Users from the Address Book"
permalink: /kb/230/Q230395/
---

## Q230395: XADM: How to Display Multiple Users from the Address Book

	Article: Q230395
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to display hidden multiple users from the Address
	Book without having to modify each mailbox individually.
	
	MORE INFORMATION
	================
	
	To display hidden multiple users from the Address Book, perform the following
	steps:
	
	1. In the Exchange Administrator program menu, on the Tools menu, click
	  Directory Export.
	
	2. In Directory Export, select the container (and subcontainers if necessary)
	  where the hidden recipients are located.
	
	3. Choose an export filename.
	
	4. Select the types of objects that you want to unhide.
	
	5. Check the "Include hidden objects" check box, and click Export.
	
	6. When the export is finished, open the <filename>.csv file in a suitable
	  editor (for example, Microsoft Excel). The exported file will include a
	  column entitled "Hide from AB."
	
	7. Change the attribute value from 1 to 0 in that column for those entries that
	  you want to make visible, and save the file.
	
	8. In the Exchange Administrator program menu, on the Tools menu, select
	  Directory Import, and click Import File.
	
	9. Use the Browse window to select the file that you modified.
	
	10. Leave the other settings at the default settings.
	
	When the import is done, the hidden recipients will be visible.
	
	Additional query words: directory export import
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
