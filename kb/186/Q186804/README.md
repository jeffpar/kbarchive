---
layout: page
title: "Q186804: Drive Mappings Not Processed During NDS Login Script Execution"
permalink: kb/186/Q186804/
---

## Q186804: Drive Mappings Not Processed During NDS Login Script Execution

	Article: Q186804
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging on to a NetWare NDS Tree from Windows NT, NetWare login script
	execution may fail intermittently, resulting in drive mappings not being
	processed.
	
	CAUSE
	=====
	
	When a Windows NT client logs on to NDS, the NetWare server that processes the
	users login script requires a licensed connection. If this server is out of
	licenses, a connection cannot be established and the login script fails to run.
	
	MORE INFORMATION
	================
	
	The following is a sample frame for trace comparison.
	
	With an NDS login that works correctly, an NCP command "Change Connection
	Authority State" is processed, followed by an NCP command "Open Stream."
	
	In this example, a failure response is returned for the NCP command "Change
	Connection Authority State." The failure code is E0.
	
	Frame   Time    Src MAC Addr  Dst MAC Addr  Protocol Description
	Src Other Addr  Dst Other Addr  Type Other Addr
	171     74.962  0001FA16B959  0001FAD45FFF  NCP      Reply:   Change
	Connection Authority State  - Failure             A091053.0000000
	A091000.0001FAD IPX/XNS
	
	+ FRAME: Base frame properties
	+ TOKENRING: Length =  55, Priority Normal (No token) LLC Frame
	+ LLC: UI DSAP=0xE0 SSAP=0xE0 C
	+ IPX: NCP Packet - A091053.000000000001.451 -> A091000.0001FAD45FFF.4050 -
	0 Hops
	 NCP: Reply:   Change Connection Authority State  - Failure
	     NCP: NCP Reply Header = 33 33 21 B5 01 00 E0 00
	         NCP: Request Type = Reply
	         NCP: Sequence Number = 33 (0x21)
	         NCP: Connection Number Low = 181 (0xB5)
	         NCP: Header Task Number = 1 (0x1)
	         NCP: Connection Number High = 0 (0x0)
	         NCP: Completion Code = Failure
	         NCP: Connection Status = Connection OK
	     NCP: Command = Change Connection Authority State
	
	00000:  10 40 00 01 FA D4 5F FF 00 01 FA 16 B9 59 E0 E0   .@...._......Y..
	00010:  03 FF FF 00 26 00 11 0A 09 10 00 00 01 FA D4 5F   ....&.........._
	00020:  FF 40 50 0A 09 10 53 00 00 00 00 00 01 04 51 33   .@P...S.......Q3
	00030:  33 21 B5 01 00 E0 00                              3!.....
	
	Note the line above: 00030: 33 21 B5 01 00 E0 00. The error indicates no
	connection is available on the NetWare server during a connection attempt.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
