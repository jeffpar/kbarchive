---
layout: page
title: "Q164346: XCLN: Newprof.Exe Requires a Value for HomeServer"
permalink: /kb/164/Q164346/
---

## Q164346: XCLN: Newprof.Exe Requires a Value for HomeServer

	Article: Q164346
	Product(s): Microsoft Exchange
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 10-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Newprof.exe is run with the -S parameter, the following error message
	appears in the Newprof.exe window:
	
	  Unable to configure message service [Microsoft Exchange Server].
	  Deleting service [Microsoft Exchange Server].
	
	CAUSE
	=====
	
	The Default.prf file is missing a "homeserver" entry.
	
	RESOLUTION
	==========
	
	Add HomeServer=exchange_server_name to the ServiceX section of the default.prf
	file (where "X" is the number of the Microsoft Exchange Server section and
	exchange_server_name is the user's home Server).
	
	Example:
	
	If the following section exists in the Default.prf file
	
	     [Service List]
	     Service1 = Microsoft Exchange Client
	     Service2 = Microsoft Exchange Server
	     Service3 = Personal Address Book
	
	add Homeserver= to the Service 2 section so it appears as follows:
	
	     [Service2]
	     ConversionProhibited=TRUE
	     HomeServer=exchangesvr
	
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 1.0
	
	=============================================================================
	
