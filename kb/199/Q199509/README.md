---
layout: page
title: "Q199509: XFOR: NNTP Protocol Commands are Case Insensitive"
permalink: kb/199/Q199509/
---

## Q199509: XFOR: NNTP Protocol Commands are Case Insensitive

	Article: Q199509
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Exchange Server has implemented the NNTP protocol commands as case insensitive.
	For example, if you send a search or group command for a folder alt.test, the
	commands will return entries from alt.test and alt.TEST.
	
	NOTE: The content of the search will maintain its case sensitivity.
	
	This is by design.
	
	MORE INFORMATION
	================
	
	The decision was made not to support case sensitivity to be more flexible on the
	data that is returned.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
