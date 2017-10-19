---
layout: page
title: "Q143140: Using Ipxroute to Determine IPX Address and Computer Name"
permalink: /kb/143/Q143140/
---

## Q143140: Using Ipxroute to Determine IPX Address and Computer Name

	Article: Q143140
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Ipxroute.exe tool, included with Windows NT Server, provides the following
	options:
	
	1. The Ipxroute Config option displays the current IPX settings, including frame
	  type, IPX network number, and internal network number, if one is configured.
	
	2. The Ipxroute Table option displays the IPX routing table.
	
	3. The Ipxroute Servers option displays the SAP table.
	
	NOTE: The default setting is all server types. In the [/type=<xxxx>]
	setting, <xxxx> refers to the server type.
	
	4. The Ipxroute Stats option displays or clears IPX internal routing statistics.
	
	NOTE: The [/Show] setting displays the internal routing table and the [/Clear]
	setting clears the table.
	
	These options provide information on RIP, SAP, and statistics. Use the Ipxroute
	utility to display and modify information about the source routing tables used
	by IPX.
	
	MORE INFORMATION
	================
	
	If the client computer is running the NWLink IPX/SPX protocol, RIP for NWLink,
	IPX, and SAP, you can use the Ipxroute Servers option to determine the client's
	IPX address, server type, and name.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
