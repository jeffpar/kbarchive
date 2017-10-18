---
layout: page
title: "Q223383: XCLN: Lotus cc:Mail Importer Asserts Migrating Archive Files"
permalink: kb/223/Q223383/
---

## Q223383: XCLN: Lotus cc:Mail Importer Asserts Migrating Archive Files

	Article: Q223383
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to migrate a Lotus cc:Mail archive file using the Microsoft
	Importer for Lotus cc:Mail Archives, you receive one or both of the following
	Microsoft Visual C++ Runtime error messages:
	
	  Assertion Failed!
	  Source and Code:
	  ccmail.cpp @ 217
	  assert(i < MAX_ITEMS)
	
	  Assertion Failed!
	  G:\migrate\src\ccmarch\ccmail.cpp
	  Line: 998
	  Expression: ptime
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Ccmarch.exe | 5.5.2588.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
