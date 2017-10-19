---
layout: page
title: "Q149280: XCLN: Win16 Client Fails on Real Mode TCP/IP Protocol"
permalink: /kb/149/Q149280/
---

## Q149280: XCLN: Win16 Client Fails on Real Mode TCP/IP Protocol

	Article: Q149280
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows 3.x Exchange client with Windows 3.1 and the real mode
	Microsoft Client 3.0 TCP/IP protocol, the Exchange client may not be able to
	communicate with the server. The following errors may occur when trying to
	perform a Check Name in a profile including the Exchange Server provider:
	
	  The name could not be resolved. The Microsoft Exchange Address Book was
	  unable to log on to the Microsoft Exchange Server computer. Contact your
	  system administrator if the problem persists.
	
	CAUSE
	=====
	
	The default installation of The Microsoft real mode Network Client TCP/IP
	version 3.0 for MS-DOS does not copy one of the files (Wsahdapp.exe) that is
	necessary for Windows Sockets support. This file is located on the Windows NT
	versions 3.5 and 3.51 Server CD-ROM. You may find this file in uncompressed
	format in \Clients\Msclient\Netsetup directory.
	
	RESOLUTION
	==========
	
	To correct the problem follow these steps:
	
	1. Manually copy Wsahdapp.exe from the CD-ROM to the directory where the Network
	  Client for MS-DOS is installed; by default it is C:\Net.
	
	2. Manually configure the Microsoft client, not the Exchange client, for Sockets
	  support. For information on how to configure sockets support for Windows
	  manually, please see the following article in the Microsoft Knowledge Base:
	
	  Q128751 No "Advanced" button in Client TCP/IP Configuration
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	for Windows 3.x. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword3 kbNetworkClientSearch kbNetworkClient300DOS kbExchange400DOS kbExchange500DOS
	Version           : WINDOWS:4.0,5.0; winnt:3.0
	Issue type        : kbbug
	
	=============================================================================
	
