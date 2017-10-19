---
layout: page
title: "Q254646: XFOR: URL Path Result When Converting Notes Doclink"
permalink: /kb/254/Q254646/
---

## Q254646: XFOR: URL Path Result When Converting Notes Doclink

	Article: Q254646
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Connector for Lotus Notes offers three options to handle
	the conversion of a Notes doclink: as a Rich Text Format (RTF) attachment, an
	OLE document link, or a Uniform Resource Locator (URL) shortcut.
	
	MORE INFORMATION
	================
	
	If you select the option to use a URL shortcut, a message from Notes is sent
	that includes a Notes doclink. This doclink points to a document in a database
	on a Notes Domino server (other than the Notes Domino server to which Exchange
	Server is directly connected); the doclink points to the database on the
	original Notes Domino server from which the document was linked.
	
	Simply put, the Notes doclink is not handled dynamically, and the URL that
	results points to the original document in the original database on the original
	Notes Domino server that the Notes sender pointed the doclink to.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
