---
layout: page
title: "Q143380: XGEN: Exchange Server Services and Their Dependencies"
permalink: kb/143/Q143380/
---

## Q143380: XGEN: Exchange Server Services and Their Dependencies

	Article: Q143380
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbother exc4 exc5 exc55
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the services created and used by Microsoft Exchange Server,
	the files executed when the service starts, and the service dependencies.
	
	MORE INFORMATION
	================
	
	MSExchangeSA - Microsoft Exchange System Attendant
	File:          EXCHSRVR\BIN\MAD.EXE
	Depends on:    EventLog
	              OLE (%windir%\system32\scm.exe)
	              NtLmSsp (NT LM Security Support Provider - Services.exe)
	              RPCLocator (%windir%\system32\locator.exe)
	              RPCSS (RPC Server Service - %windir%\system32\rpcss.exe)
	              LanmanWorkstation
	              LanmanServer
	
	MSExchangeDS - Microsoft Exchange Directory Service
	File:          EXCHSRVR\BIN\DSAMAIN.EXE
	Depends on:    MSExchangeSA
	
	MSExchangeIS - Microsoft Exchange Information Store
	File:          EXCHSRVR\BIN\STORE.EXE
	Depends on:    MSExchangeDS
	
	MSExchangeMTA - Microsoft Exchange Message Transfer Agent
	File:           EXCHSRVR\BIN\EMSMTA.EXE
	Depends on:     MSExchangeDS
	
	MSExchangeDX - Microsoft Exchange Directory Synchronization
	File:          EXCHSRVR\BIN\DXA.EXE
	Depends on:    MSExchangeMTA
	
	MSExchangeFB - Microsoft Exchange Schdplus Free/Busy Connector
	File:          EXCHSRVR\CONNECT\MSFBCONN\MSFBCONN.EXE
	Depends on:    MSExchangeDS
	              MSExchangeIS
	              EventLog
	
	MSExchangeIMC - Microsoft Exchange Internet Mail Connector
	File:           EXCHSRVR\CONNECT\MSEXCIMC\MSEXCIMC.EXE
	Depends on:     MSExchangeIS
	               MSExchangeMTA
	               TCPIP (%windir%\system32\drivers\tcpip.sys)
	
	MSExchangeMSMI - Microsoft Exchange Mail Connector Interchange
	File:            EXCHSRVR\CONNECT\MSMCON\BIN\MT.EXE
	Depends on:      MSExchangeDS
	                EventLog
	
	MSExchangeKMS - Microsoft Exchange Key Management Server
	File:           SECURITY\BIN\KMSERVER.EXE
	Depends on:     MSExchangeDS
	
	MSExchangeATMTA - Microsoft Exchange Mail Connector(Apple Talk) MTA
	File:             EXCHSRVR\CONNECT\MSMCON\BIN\MACGATE.EXE
	Depends on:       EventLog
	                 MSExchangeMSMI
	                 LanmanServer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
