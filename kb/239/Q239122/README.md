---
layout: page
title: "Q239122: XFOR: SNADS Documentation Chap03.doc on Exchange CD Is Corrupted"
permalink: /kb/239/Q239122/
---

## Q239122: XFOR: SNADS Documentation Chap03.doc on Exchange CD Is Corrupted

	Article: Q239122
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open the Chap03.doc file in the
	Docs\Word_Docs\Connectivity\Snads folder on the Exchange Server 5.5 CD-ROM with
	Word 2000, you are prompted with a File Conversion dialog box. If you attempt to
	open the file in Word 95 or Word 97, the file appears corrupted.
	
	CAUSE
	=====
	
	The Chap03.doc file is corrupted.
	
	RESOLUTION
	==========
	
	To obtain the new file, Snads.rtf, you need to apply Exchange Server 5.5 Service
	Pack 3 (SP3) for the Exchange SNADS Connector. To do so, you must run
	Snaconn.exe from the Exchconn\Setup\I386\Snaconn folder on the SP3 CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: hosed as/400 sna bad
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
