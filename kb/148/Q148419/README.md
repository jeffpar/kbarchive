---
layout: page
title: "Q148419: XCLN: Exchange GP Fault in Winsock.dll Using DEC Pathworks"
permalink: kb/148/Q148419/
---

## Q148419: XCLN: Exchange GP Fault in Winsock.dll Using DEC Pathworks

	Article: Q148419
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Windows 3.x client on DEC Pathworks
	network clients, you may get a General Protection Fault (GP fault) from the
	process EXCHNG in WINSOCK.DLL.
	
	CAUSE
	=====
	
	The Microsoft Exchange Win16 Client requires the latest WINSOCK.DLL (version
	6.0.58 or higher) from Digital Equipment Corp. (DEC). This specifically
	addresses a Microsoft Exchange GPF at Winsock bind().
	
	RESOLUTION
	==========
	
	The patch is located on the Internet or Digital Online Services. Search on
	PW-DOS PWV51E04 Pathworks 5.1 for MS-DOS and Windows. The zip file contains
	WINSOCK.DLL, WINSOCKD.DLL, and a minimal README.TXT.
	
	Contact the Digital Customer Support Center for compatability and further
	information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
