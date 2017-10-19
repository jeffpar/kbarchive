---
layout: page
title: "Q176520: XADM: Limiting Memory Usage of Exchange Server"
permalink: /kb/176/Q176520/
---

## Q176520: XADM: Limiting Memory Usage of Exchange Server

	Article: Q176520
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may use the Microsoft Exchange Performance Optimizer to limit the amount of
	memory that Microsoft Exchange Server uses, but you cannot manually set this
	value within the registry of an Exchange Server computer.
	
	Microsoft Exchange Performance Optimizer includes an option to limit the amount
	of memory that Microsoft Exchange Server has access to. By default this value is
	set to zero, which allows Microsoft Exchange Server access to all of the
	available RAM on the server.
	
	If you want to limit the amount of memory that Microsoft Exchange Server can
	access, you can run Microsoft Exchange Performance Optimizer and enter the
	amount of memory you want the Exchange Server computer to use. The value should
	be 24 MB or more. 32 MB or more is recommended.
	
	MORE INFORMATION
	================
	
	The size of the Microsoft Exchange Server memory cache is adjusted automatically
	when you use the Performance Optimizer. By default, Microsoft Exchange Server
	uses all of the physical memory available. If you run other programs on your
	servers, you can restrict the amount of memory used by Microsoft Exchange
	Server.
	
	When you run the Performance Optimizer, it analyzes the servers resources and
	configures the server as follows:
	
	The Performance Optimizer detects the amount of physical memory in the server and
	calculates the size of the caches for the directory and the information store
	based on the information you provide about how the server will be used.
	
	The default values for the directory and information store caches are appropriate
	for most installations. Although larger caches may provide better performance in
	some circumstances, performance depends on the amount of physical memory
	available.
	
	Based on the values computed by Performance Optimizer, changes are made to the
	registry; these values cannot be manually computed and modified in the registry.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
