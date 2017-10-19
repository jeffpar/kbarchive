---
layout: page
title: "Q86440: Protocol Independence of RAS"
permalink: /kb/086/Q86440/
---

## Q86440: Protocol Independence of RAS

	Article: Q86440
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The information in this article applies to Microsoft LAN Manager
	
	version 2.1 running under MS OS/2 version 1.31.
	-----------------------------------------------
	
	This article discusses an often overlooked feature of RAS (remote access server),
	which is "network independence." If you use RAS, even though you may have one
	only network stack (AsyBEUI), you can log on to any server on any network the
	remote access server is using (any network the client dialed into). That is, a
	RAS client can log on to and use a TCP/IP server, a UBXNS server, or even a
	UBLOOP server, provided that the RAS server dialed into uses these protocols.
	
	Normally, on the "real" network, you cannot communicate with another server
	unless the server and the client share the same protocol. RAS "breaks" this
	protocol barrier. This also means that the RAS clients have more free memory
	because they do NOT require that dual or triple stacks be loaded. Eventually,
	AsyBEUI may become even smaller.
	
	Also, Windows 3.0/3.1 enhanced mode offers multiple MS-DOS boxes, 32-bit
	execution, more than 1 megabyte (MB) of memory, and virtual memory). Just start
	Windows 3.1 and use RAS.
	
	
	The File Manager displays network drives, and you have several remote printers.
	You can drag and drop a document you were working on at work onto your local
	hard disk and finish that document from home. You can then drag and drop your
	local document onto the printer icon to print your document at work remotely.
	
	Additional query words: 2.10 RAS Protocols
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
