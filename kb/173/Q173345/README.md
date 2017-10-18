---
layout: page
title: "Q173345: XADM: PerfWiz Allows Memory Limit to be Set to Less than 16 MB"
permalink: kb/173/Q173345/
---

## Q173345: XADM: PerfWiz Allows Memory Limit to be Set to Less than 16 MB

	Article: Q173345
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When you run the Microsoft Exchange Performance Optimizer (PerfWiz) in batch
	mode, it will allow you to specify a memory limit less than 16MB. This will not
	generate any errors. If PerfWiz detects an entry less than 16MB, it will be
	ignored and treated as having no limit. This is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
