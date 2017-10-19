---
layout: page
title: "Q108296: 9-to-25 Pin RAS Null Modem Cabling"
permalink: /kb/108/Q108296/
---

## Q108296: 9-to-25 Pin RAS Null Modem Cabling

	Article: Q108296
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Remote Access Help file includes tables showing the correct
	wiring of a null modem cable for use with RAS. The two tables included show the
	correct wiring for a 9-pin null modem cable and a 25-pin null modem cable. The
	following table contains the proper null modem wiring that must be used when the
	cable connects a 9-pin serial port to a 25-pin serial port.
	
	  25-pin Connector       to    9-pin Connector
	  ----------------------------------------------------
	  2 (transmit data)      <->   2 (receive data)
	  3 (receive data)       <->   3 (transmit data)
	  4 (request to send)    <->   8 (clear to send)
	  5 (clear to send)      <->   7 (request to send)
	  6,8 (data send ready,
	       carrier detect)   <->   4 (data terminal ready)
	  7 (ground)             <->   5 (ground)
	  20 (data terminal
	      ready)             <->   6,1 (data send ready,
	                                     carrier detect)
	
	Additional query words: prodnt nul
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
