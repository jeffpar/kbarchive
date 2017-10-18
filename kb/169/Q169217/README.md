---
layout: page
title: "Q169217: XADM: Two Copies of Subfolder Found if Replication Not Specified"
permalink: kb/169/Q169217/
---

## Q169217: XADM: Two Copies of Subfolder Found if Replication Not Specified

	Article: Q169217
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a subfolder for a top-level public folder that resides on another
	Exchange Server computer, the content of that subfolder will be replicated to
	the Exchange Server computer with the top-level folder. However, your home
	public folder server (which is specified in Public Folder Server on the General
	Tab of the Private Information Store Properties dialogue box) still keeps a copy
	of the subfolder for a period of time; this copy will be deleted eventually.
	
	
	Additional query words: resources replica
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
