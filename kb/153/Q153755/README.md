---
layout: page
title: "Q153755: XCLN: Mac Err Msg: Microsoft Exchange Could not be Started"
permalink: /kb/153/Q153755/
---

## Q153755: XCLN: Mac Err Msg: Microsoft Exchange Could not be Started

	Article: Q153755
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Macintosh client requires that the Windows NT Macintosh
	Codepage support be installed on the Microsoft Exchange Server.
	
	SYMPTOMS
	========
	
	You see the following errors in the Windows NT Event Log on the Microsoft
	Exchange Server:
	
	  Event ID = 10012, Source = MacFile, "The File Server for Macintosh service
	  failed to start because a critical error occurred while trying to initialize
	  the AppleTalk Filing Protocol driver (SfmSrv.sys) with server parameters."
	
	  Event ID = 7024, Source = Service Control Manager, "The File Server for
	  Macintosh service terminated with service specific error 2."
	
	You will see the following errors when you attempt to start the Microsoft
	Exchange Macintosh client:
	
	  Microsoft Exchange could not be started. The Microsoft Exchange Server
	  computer is not configured to support your codepage. Contact your system
	  administrator.
	
	  Microsoft Exchange could not be started. The action could not be completed.
	
	
	RESOLUTION
	==========
	
	1. Start the Windows NT Registry Editor, Regedt32.exe, on the Microsoft Exchange
	  Server and locate the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Nls\Codepage
	
	2. From the Edit menu, click Add Value.
	
	3. Enter a value name of 10000, set the data type to REG_SZ, click OK, set
	  String to c_10000.nls, and click OK.
	
	4. Exit the Registry Editor.
	
	5. Verify that the C_10000.nls file is located in the <Windows NT install
	  folder>\system32 directory.
	
	MORE INFORMATION
	================
	
	The Macintosh codepage (10000) is normally loaded during the installation of
	Windows NT.
	
	The SFM services are not required for a Microsoft Exchange Macintosh client to
	connect using the TCP/IP protocol stack.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q102987 REG: CurrentControlSet, PART 1
	
	  Q102996 REG: Network Services Entries, Part 2
	
	Additional query words: code page XADM
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
