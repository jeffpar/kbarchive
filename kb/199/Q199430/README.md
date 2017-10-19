---
layout: page
title: "Q199430: XFOR: Err Msg: Initialization of the Dynamic Link Library"
permalink: /kb/199/Q199430/
---

## Q199430: XFOR: Err Msg: Initialization of the Dynamic Link Library

	Article: Q199430
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Server Internet Mail Connector
	running on Windows NT Server version 4.0, the administrator may receive the
	following error message:
	
	  drwatsn32.exe - DLL Initialization Failed
	  ------------------------------------------
	  Initialization of the dynamic link library
	  <drive>:\%SystemRoot%\system32\USER32.dll failed. The process is
	  terminating abnormally.
	
	Where "%SystemRoot%" is the directory that Windows NT Server version 4.0 is
	located and "drive" is the disk drive that it is installed on.
	
	When you attempt to start Internet Mail Service on a computer running Exchange
	Server 5.0 and Windows NT 4.0, the administrator may receive the following error
	message:
	
	  Dr. Watson for Windows NT
	  -------------------------
	  An application error has occurred and an application error log has been
	  generated.
	
	  Msexcimc.exe
	
	  Exception: Access violation (0xc0000005), Address: memory_address
	
	Where "memory address" is the actual address of the memory violated.
	
	When you attempt to start the Exchange Server 5.5 Internet Mail Service on a
	computer running Windows NT 4.0, the administrator may receive the following
	error message:
	
	  WMS Idle: msexcimc.exe - Application Error
	  ------------------------------------------
	  X The instruction at "0x004467c8" referenced memory at "0x00000000". The
	  memory could not be written.
	
	
	CAUSE
	=====
	
	The X.400 E-mail Address for the Administrator's Mailbox of the Internet Mail
	Connector has been removed.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Right-click Internet Mail Connector, and then click Properties.
	
	2. Select a new Administrator's mailbox, or re-create the X.400 E-mail Address
	  for the existing Administrator's mailbox manually from the mailbox properties
	  E-mail Addresses tab.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server 4.0 uses X.400 as its backbone. Therefore, an X.400
	E-mail Address is required for all Exchange Server users.
	For additional information about User32.dll errors, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q175875 Dr. Watson Causing Fault in USER32
	
	Additional query words: admin smtp recipients container error 1067
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
