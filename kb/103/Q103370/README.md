---
layout: page
title: "Q103370: Print Job Priority Incorrect in Advanced Server Concepts Guide"
permalink: kb/103/Q103370/
---

## Q103370: Print Job Priority Incorrect in Advanced Server Concepts Guide

	Article: Q103370
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Page 128 of the Microsoft Windows NT Advanced Server "Concepts and
	Planning Guide" incorrectly states the following:
	
	  If two logical printers are associated with a single
	  printing device, jobs routed to the printer with the highest
	  priority level (lowest number) print first.
	
	It should state the following:
	
	  If two logical printers are associated with a single
	  printing device, jobs routed to the printer with the highest
	  priority level (highest number) print first.
	
	Thus, the higher the number, the higher the priority of the print job.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
