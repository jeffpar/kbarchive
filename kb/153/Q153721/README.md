---
layout: page
title: "Q153721: XCLN: TCPIP Clarification for Win16 Client in SP2 Readme.wri"
permalink: kb/153/Q153721/
---

## Q153721: XCLN: TCPIP Clarification for Win16 Client in SP2 Readme.wri

	Article: Q153721
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Readme.wri file for the Microsoft Exchange client for Windows 3.x
	released in Service Pack 2, it states:
	
	  1.13.4 Using TCP/IP
	  If you are having problems with TCP/IP stacks, you can try tuning parameters
	  related to sockets, window size, and buffer size as follows:
	
	  Protocol TCPIP
	  tcp_window 8192
	
	  Link Support
	  Buffers 8 1500
	  MemPool 8192
	
	There is no additional information on where to make these configuration changes.
	
	MORE INFORMATION
	================
	
	The above information applies if you are running Microsoft Windows 3.x and
	Novell's LanWorkPlace TCPIP for DOS. The above settings would be made in the
	Net.cfg file normally located in the C:\nwclient directory or the installation
	directory of the Novell TCPIP protocol.
	
	For additional information about the TCPIP settings in the Net.cfg file, consult
	your Novell LanWorkPlace for DOS Documentation.
	
	Additional query words: LanWorkplace
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	
