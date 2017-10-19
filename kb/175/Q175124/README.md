---
layout: page
title: "Q175124: XADM: Error Message &quot;The file mqrt.dll was not found.&quot;"
permalink: /kb/175/Q175124/
---

## Q175124: XADM: Error Message &quot;The file mqrt.dll was not found.&quot;

	Article: Q175124
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the server is started and Microsoft Exchange Server services are started or
	when the services are stopped and restarted you may receive the following error
	message:
	
	  The file mqrt.dll was not found.
	
	The applications that trigger this message are as follows and occur in this
	order
	
	  Dsamain.exe
	  Store.exe
	  Emsmta.exe
	  Msaexcimc.exe
	
	and then an OleWinMainThread function.
	
	Although this error message is generated, Exchange Server functionality is not
	impaired. All services start and function properly.
	
	CAUSE
	=====
	
	The problem occurs because Microsoft Message Queue Server (MSMQ) was installed
	and improperly uninstalled.
	
	The errors occur because Microsoft Exchange Server checks for the following
	registry key
	
	  \\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ServerProtocols\ncadg_mq
	
	and the client related key
	
	  \\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ClientProtocols\ncadg_mq
	
	Both of these keys should have been removed using the uninstall process.
	
	RESOLUTION
	==========
	
	Remove these two keys and the error message should stop appearing.
	
	MORE INFORMATION
	================
	
	The release version of MSMQ is included with Microsoft Windows NT Server
	Enterprise edition and is referred to as the Enterprise Edition. This is a tool
	for developing asynchronous, store-and-forward applications.
	
	The Exchange Connector runs with Microsoft Exchange versions 4.0 or 5.0
	
	The setup process includes setting up an Exchange mailbox of type MSMQ. The
	mailbox points to an MSMQ queue and forwards all the mail to the queue as
	messages. This process uses the MSMQ API set.
	
	Microsoft Message Queue Server is a fast store-and-forward service for Microsoft
	Windows NT Server Enterprise Edition that requires Microsoft SQL Server version
	6.5 to store the Message Queue Information Store (MQIS).
	
	Additional query words: sql msmq (NTS/E)
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
