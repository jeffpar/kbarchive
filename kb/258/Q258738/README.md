---
layout: page
title: "Q258738: XADM: Moving Distribution List to Different Recipients Container"
permalink: kb/258/Q258738/
---

## Q258738: XADM: Moving Distribution List to Different Recipients Container

	Article: Q258738
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to move distribution lists (DLs) from one Recipients container to
	another. This article provides the steps that are required to move a
	distribution list from one Recipients container to another in the same site.
	
	MORE INFORMATION
	================
	
	To move a DL to a different container:
	
	1. Click the container that includes the DL that you want to move.
	
	2. On the Tools menu, click Directory Export.
	
	3. Click the file that you want to export the information to.
	
	  NOTE: If no file exists, type a name to create a new file.
	
	4. Make sure that the container that the DL currently resides in is displayed in
	  the Container box.
	
	5. Under Export Objects, click only Distribution Lists.
	
	  NOTE: All of the other settings can be left at the default settings.
	
	6. Click Export.
	
	7. When the export is complete, delete the DL from the original Recipients
	  container.
	
	  NOTE: If you are moving many DLs and do not want to manually delete them:
	
	  a. Open the .csv file that you created by using Microsoft Excel or a text
	     editor such as Notepad.
	
	  b. Add a field called "Mode" in the header of the .csv file, following the
	     Obj-Class field.
	
	  c. In each row, type "Delete" (without the quotation marks) in the Mode
	     field.
	
	  d. Save the .csv file, and then import it into the Recipients container that
	     currently holds the DLs that you want to delete. This deletes all of the
	     DLs that are specified in the .csv file.
	
	8. Open the .csv file that you created by using Excel or a text editor such as
	  Notepad.
	
	9. Delete any rows other than the first row (which contains column headers) and
	  the row that contains the DL that you want to move.
	
	10. Save the .csv file.
	
	11. In the Exchange Server Administrator program, click the container that you
	  want to move the DL to.
	
	12. On the Tools menu, click Directory Import.
	
	13. Make sure that the destination container is displayed in the Container box.
	
	14. Click "Always use selected container".
	
	15. Click Import File, and then click the updated .csv file.
	
	  NOTE: All of the other settings can be left at the default settings.
	
	16. Click Import.
	
	The DL is now displayed in the destination container.
	
	For additional information about directory export and import, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
