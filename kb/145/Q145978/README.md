---
layout: page
title: "Q145978: XCLN: Shiva Does Not Always Prompt to Hang Up Connection"
permalink: kb/145/Q145978/
---

## Q145978: XCLN: Shiva Does Not Always Prompt to Hang Up Connection

	Article: Q145978
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Shiva does not always prompt you to Hang-up the connection. It neither hangs up
	the connection nor displays a prompt.
	
	WORKAROUND
	==========
	
	Because the Shiva software supports MS-DOS operations, as well as Windows, the
	Connectw.exe program will not disconnect if it is exited to support further
	connection status with MS-DOS applications. You are not prompted to terminate
	the connection.
	
	You can leave the Connectw.exe application running minimized and it will
	disconnect properly.
	
	This is a Shiva issue.
	
	Additional query words: third party modem dialup
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
