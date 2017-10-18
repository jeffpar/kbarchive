---
layout: page
title: "Q161179: WinSock Zero-Length Packet Not Sent on Network"
permalink: kb/161/Q161179/
---

## Q161179: WinSock Zero-Length Packet Not Sent on Network

	Article: Q161179
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, if the Windows Sockets Send() function is used to send
	zero-length packets using a stream-oriented socket over IPX/SPX, the function
	returns a success status, but no packet is sent on the network.
	
	CAUSE
	=====
	
	The WinSock specifications do not require that a Send() function with a length
	of zero actually result in a packet being sent over the network when the Send()
	function is called on a stream-oriented socket. Windows 95 does not actually
	send a packet across the network when the Send() function is called with a
	length of zero over a stream-oriented socket over SPX/IPX.
	
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	According to the WinSock 2.0 specification, calling the Send() function with a
	length of zero is to be treated by implementations as successful. In this case,
	the Send() function may return 0 as a valid return value. For message-oriented
	sockets, a zero-length transport datagram is sent.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
