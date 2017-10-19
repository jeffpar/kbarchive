---
layout: page
title: "Q159702: Exception Error in Nwconv.exe During Migration"
permalink: /kb/159/Q159702/
---

## Q159702: Exception Error in Nwconv.exe During Migration

	Article: Q159702
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtoolkbfaq
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to migrate user accounts and data from Novell NetWare 3.1x
	servers to Windows NT 3.5, 3.51, or 4.0 servers using the Migration Tool for
	Netware (Nwconv.exe), the Migration Tool for NetWare may stop responding with an
	exception error 0xc0000005 in Nwconv.exe and generate a Drwtsn32.log file.
	
	CAUSE
	=====
	
	During migration, the Migration Tool for NetWare builds a Printer Operators
	member list. It enumerates all the print servers on the NetWare server and then
	builds the user list of who is in the Printer Operator group associated with the
	respective print server. The Migration Tool for NetWare sets a buffer size to
	hold a print server name less than or equal to 20 characters, including the null
	character. NetWare allows less than or equal to 47 characters for the print
	server name. Unexpected results may occur when you read a string into the buffer
	of a smaller size. In this case, the result is an exception error in Nwconv.exe.
	
	RESOLUTION
	==========
	
	Rename all the print servers to be less than or equal to 19 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0.
	
	
	Additional query words: NWPrintOpsEnum NWPrintServersEnum GSNW Migration Utility watson nwconv convert migrate
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
