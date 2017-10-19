---
layout: page
title: "Q193505: Event 2048 When Trying to Connect from French Client Workstation"
permalink: /kb/193/Q193505/
---

## Q193505: Event 2048 When Trying to Connect from French Client Workstation

	Article: Q193505
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to an English version of Terminal Server from a French
	version of Windows NT Workstation or a French version of Windows 95, running the
	Terminal Server client software, the client get a Terminal Server Client
	Disconnect message box with the following message:
	
	  Terminal server has ended the connection.
	
	On the Terminal Server, an event 2048 is logged in the System Log:
	
	  The RDP protocol component RDP detected an error in the protocol stream
	  and has disconnected the client.
	
	The data section of this event ID shows the following information:
	
	  Data:
	  0000: 00 00 04 00 02 00 5c 00
	  0008: 00 00 00 00 00 08 0a c0
	  0010: 00 00 00 00 00 08 0a c0
	  0018: 00 00 00 00 00 00 00 00
	  0020: 00 00 00 00 00 00 00 00
	  0028: d9 00 00 00
	
	CAUSE
	=====
	
	Data encryption is prohibited within France.
	
	When the Terminal Server client is loaded on a French workstation, the client
	recognizes this and disables encryption, according to French law. When the
	Terminal Server client attempts to connect to a non-French Terminal Server, the
	Terminal Server attempts to negotiate an encryption level with the client. The
	client cannot do this and, therefore, the connection fails.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The same situation exists when you have the French clients mentioned with a
	French Terminal Server installed as a Member Server in an English domain. If the
	backup domain controller that will be authenticating the Terminal Server
	sessions is English with higher encryption (such as 128-bit), the clients will
	receive the same error message ("Terminal server has ended the connection") and
	event 2048 will be generated. This is because of the process; the clients are
	not logging on to the Terminal Server, they are logging on through Terminal
	Server to the domain. The domain controller negotiates the encryption level from
	Terminal Server to the domain controller and authenticates the user. Therefore,
	even though it is French from the client to the Terminal Server, it is French on
	the Terminal Server to English on the domain controller and generates event
	2048.
	
	
	Additional query words: terminalsrv RDP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
