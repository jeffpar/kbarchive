---
layout: page
title: "Q113225: NE2000 Failure on Windows NT/NTAS"
permalink: /kb/113/Q113225/
---

## Q113225: NE2000 Failure on Windows NT/NTAS

	Article: Q113225
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a network application on an Intel 80486 Windows NT client with a NE2000
	network adapter connected to a Windows NT server results in a lost network
	connection. These errors are displayed:
	
	  The network path was not found.
	
	  -OR-
	
	  System Process - lost delayed write data:
	  The system was attempting to transfer file data from buffers to
	  <\address\address>. The write operation failed and only some of the
	  data may have been written to the file.
	
	CAUSE
	=====
	
	During performance tests, the NE2000 card stops transmitting data, although it
	still responds to polls from the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt freeze disconnect
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
