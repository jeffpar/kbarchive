---
layout: page
title: "Q254037: XFOR: Access Violation Occurs in Nnotes.dll w/ Lotus Notes 4.6a"
permalink: /kb/254/Q254037/
---

## Q254037: XFOR: Access Violation Occurs in Nnotes.dll w/ Lotus Notes 4.6a

	Article: Q254037
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Exchange Server Migration Wizard and the Lotus Notes 4.6a Client to
	migrate from Lotus Notes may cause an access violation to occur in Nnotes.dll.
	
	CAUSE
	=====
	
	This is a rare and extreme situation which occurs when a buffer allocated from
	heap memory ends exactly at the end of a memory page and the next address points
	to memory that is not readable. The Notes API call, DNCanonicalize, is reading
	one byte past the end of the string. In this case, the string is terminated on a
	page boundary, which causes the access violation.
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use Lotus Notes 5.x or later clients with the
	Exchange Migration Wizard when you migrate from Lotus Notes.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : Migration
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
