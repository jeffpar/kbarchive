---
layout: page
title: "Q251413: XADM: How to Export the Directory Schema"
permalink: /kb/251/Q251413/
---

## Q251413: XADM: How to Export the Directory Schema

	Article: Q251413
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to export the schema from an Exchange Server computer. The default
	schema is in the Schema.csv file on the Exchange Server distribution CD-ROM, but
	in some cases you may want to export the current schema for your site. For
	example, you may want to compare an old schema export to a new schema export to
	see the effects of a service pack update on the schema.
	
	MORE INFORMATION
	================
	
	To export the schema, perform the following steps:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. On the View menu, click Raw Directory.
	
	3. In the left pane, click the Schema object. Wait for the schema to appear in
	  right pane.
	
	4. Click any item in the right pane.
	
	5. On the File menu, click Save Window Contents. Type a name for the file, and
	  then click OK.
	
	This exports the schema to a .csv file that contains two columns, the Display
	Name column and the Modified column.
	
	Additional query words: directory export
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
