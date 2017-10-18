---
layout: page
title: "Q198449: Protocol Field Explanation from KERNROUT PRINT Output"
permalink: kb/198/Q198449/
---

## Q198449: Protocol Field Explanation from KERNROUT PRINT Output

	Article: Q198449
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Routing and Remote Access provides the KERNROUT command-line utility to manage
	and/or view routing in Windows NT. When using this command to display the
	Routing Table by specifying the PRINT parameter, such as in KERNROUT PRINT, one
	of the columns in the information displayed is Protocol. This information shows
	the Protocol used by the computerto learn a route. However, the output shows
	just a number instead of the protocol name.
	
	The following table shows the protocol numbers and the protocols these numbers
	represent.
	
	+----------------------------------------------------------+
	| Number | Name    | Explanation                           | 
	+----------------------------------------------------------+
	| 1      | Other   | Protocol not in this list             | 
	+----------------------------------------------------------+
	| 2      | Local   | Learned from computer's configuration | 
	+----------------------------------------------------------+
	| 3      | NETMGMT | Network Management                    | 
	+----------------------------------------------------------+
	| 4      | ICMP    | Internet Control Message Protocol     | 
	+----------------------------------------------------------+
	| 9999   | BOOTP   | Boot Protocol                         | 
	+----------------------------------------------------------+
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
