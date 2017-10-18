---
layout: page
title: "Q198828: XFOR: Embedded OLE not Supported in cc:Mail Archive Importer"
permalink: kb/198/Q198828/
---

## Q198828: XFOR: Embedded OLE not Supported in cc:Mail Archive Importer

	Article: Q198828
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Lotus cc:Mail archives that contain embedded OLE objects in messages are not
	properly migrated by the cc:Mail Archive Importer. The resulting messages
	contain attachments rather than OLE links.
	
	CAUSE
	=====
	
	OLE embedded objects are only supported by the cc:Mail Release 8 client.
	
	RESOLUTION
	==========
	
	Change the OLE links back to normal attachments, or do not use the cc:Mail
	Release 8 client.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
