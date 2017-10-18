---
layout: page
title: "Q122525: LPQ Command Not Supported with the HP Jet Direct Card"
permalink: kb/122/Q122525/
---

## Q122525: LPQ Command Not Supported with the HP Jet Direct Card

	Article: Q122525
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	The LPQ command line utility does not work when used with a Hewlett-Packard
	Jet Direct card. The following error message appears:
	
	  Error: <server> did not respond correctly.
	
	This is because the Jet Direct card does not have the ability to monitor
	print queues. The LPQ command will work properly with a server that has a
	print queue.
	
	MORE INFORMATION
	================
	
	When using TCP/IP printing services, LPQ can be used to obtain the status of a
	print queue on a host running the Line Printer Daemon (LPD) server. The
	following is the syntax for the LPQ command:
	
	  lpq  -Sserver -Pprinter [-l]
	
	  Options:
	
	  -S server    Name or IP address of the host providing LPD service
	  -P printer   Name of the print queue
	  -l           Verbose output
	
	
	For information regarding the discontuance of JetAdmin, consult the following
	url: http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	There you will find information on the remaining support life of the JetAdmin
	product recommendations on substitute products for customers.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
