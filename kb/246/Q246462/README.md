---
layout: page
title: "Q246462: Print Jobs Randomly Stop Responding with HP JetDirect Printing"
permalink: /kb/246/Q246462/
---

## Q246462: Print Jobs Randomly Stop Responding with HP JetDirect Printing

	Article: Q246462
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a large TCP/IP-based network that uses Hewlett-Packard (HP) JetDirect
	printing, print jobs may randomly become stuck in the print queue, and the
	Spooler service may need to be stopped and restarted several times a day. Using
	the HP JetAdmin software to reestablish a connection with the printer also
	restarts print jobs.
	
	CAUSE
	=====
	
	This problem is most likely to occur when there are many router hops between the
	print server and the printer, and there is a large number of printers per print
	server. In large TCP/IP-based networks with many hops between print servers and
	the printers, JetAdmin has difficulty maintaining a connection with the
	JetDirect adapter.
	
	RESOLUTION
	==========
	
	As a workaround, either move the print server to the same network segment as the
	printers, or use LPR printing instead of JetDirect printing when there is a
	large number of router hops between the print server and the printers.
	
	Additional query words: nt 4.0 queue
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
