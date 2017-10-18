---
layout: page
title: "Q168815: XCON: MTA Doesn't Start, Event IDs 9228 and 4300"
permalink: kb/168/Q168815/
---

## Q168815: XCON: MTA Doesn't Start, Event IDs 9228 and 4300

	Article: Q168815
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) may not start; one or
	both of the following event ID's will be seen in the event viewer:
	
	  Event ID: 9228
	  Source: MSExchangeMTA
	  Type: ERROR
	  Category: Configuration
	
	  A fatal resource limit was reached while attempting to open an
	  association. The number of network type 2 listen control blocks
	  requested is too high. Number requested: 2. Number configured: 1. [BASE
	  IL MAIN BASE 1 250] (16)
	
	  Event ID: 4300
	  Source: MSExchangeMTA
	  Type: ERROR
	  Category: Configuration
	
	  Unable to initialize due to a bad configuration. Contact Microsoft
	  Product Support Services. Error code=%1 [%2 %3 %4 %5] (16)
	
	CAUSE
	=====
	
	This is caused by an inadequate number of control blocks allocated to a
	transport stack. In the above error message, the "network type 2" refers to TP4
	protocol. Two control blocks were requested; however, there is one allocated
	control blocks. The content of this error message may vary, dependent on the
	mis-configured control blocks for the network type.
	
	  Network Types    Numbers
	
	  Type     0x01    TCP/IP RFC 1006
	  Type     0x02    TP4
	  Type     0x03    Eicon X.25
	  Type     0x04    Named pipes over RAS connection
	  Type     0x05    RPC
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To correct the problem, do the following:
	
	1. Start Windows NT registry editor (Regedit or regedt32).
	
	2. Modify the following value to 0x2
	
	     HKEY_Local_Machine\System\CurrentControlSet\Services
	     \MSExchangeMTA\Parameters\TP4 control blocks: Value 0x2
	
	There must be at least two control blocks allocated to TP4 in the registry. This
	is true regardless of whether TP4 protocol is used or installed on the server.
	
	The default registry value for TP4 is 0x14H or 20 Decimal.
	
	
	MORE INFORMATION
	================
	
	For information about the limit on the number of allowed socket control blocks
	for TCP and TP4, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q166602 XCON: MTA Only AllowS 64 TCP/IP or TP4 Connections
	
	Additional query words: resource Xcon
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
