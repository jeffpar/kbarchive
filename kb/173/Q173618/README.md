---
layout: page
title: "Q173618: Windows 95 Client Trap in SnaBase Using IPX on Windows NT"
permalink: /kb/173/Q173618/
---

## Q173618: Windows 95 Client Trap in SnaBase Using IPX on Windows NT

	Article: Q173618
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Windows 95 client gets an application exception in SnaBase when all of
	the following conditions are met:
	
	- The SNA Windows 95 client is installed on a Windows NT system.
	
	- The SNA Windows 95 client is configured to use IPX/SPX as the transport
	  protocol.
	
	- The SNA Windows 95 client is configured with a client mode of Remote and the
	  sponsor servers are listed by server name.
	
	- The SNA Windows 95 client is configured to use bindery emulation to locate
	  the SNA Server computers.
	
	The application exception in Snabase.exe will generate a Drwtsn32.log file in the
	Windows NT root directory that will be similar to the following:
	
	  Application exception occurred:
	  App: exe\snabase.DBG (pid=<process id #>)
	  When: <date> @ <time>
	  Exception number: c0000005 (access violation)
	
	In addition, the Windows NT Application Event Log will contain an event similar
	to the following when this problem occurs:
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: The application, exe\snabase.DBG, generated an application
	  exception error.
	  The error occurred on <date> @ <time>. The exception generated
	  was
	  c0000005 at
	  address 00000000 (<no symbols>).
	
	CAUSE
	=====
	
	Service Pack 1 for SNA Server 3.0 added a new feature that allows the
	integration of SNA Server with Novell's NDS (NetWare Directory Service). This
	problem was introduced as a result of the NDS changes that were made to the SNA
	Windows 95 client for SP1. Specifically, the InitNDS() function does not clear
	the SNANDS32 module handle after the GetNdsTreeAndContext() call failed causing
	the NdsFindSnaServer() function to call a NULL pointer. The application
	exception in snabase.exe occurs when the NULL pointer is called.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Configure the SNA Windows 95 client with a client mode of Local and use the
	  SNA Subdomain name to locate the SNA Server computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SNA Windows 95 client
	version 3.0 Service Pack 1 (SP1). This problem was corrected in the latest SNA
	Server version 3.0 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
