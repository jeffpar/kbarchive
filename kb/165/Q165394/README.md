---
layout: page
title: "Q165394: XADM: Importing a Carriage Return in Multi-Valued Fields"
permalink: kb/165/Q165394/
---

## Q165394: XADM: Importing a Carriage Return in Multi-Valued Fields

	Article: Q165394
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to import a CSV through the Microsoft Exchange Server Administrator
	program, it may be necessary to include a carriage return within a field.
	
	A carriage return can be signified within a field by using '\r\n'. For example,
	to specify the address
	
	  1 Microsoft Way
	  Redmond, WA 98052
	
	in a CSV you type:
	
	  " 1 Microsoft Way\r\nRedmond, WA 98052 " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
