---
layout: page
title: "Q189171: WinSock Applications May Fail or Stop Responding"
permalink: kb/189/Q189171/
---

## Q189171: WinSock Applications May Fail or Stop Responding

	Article: Q189171
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a WinSock application on a Windows NT computer, one or more of the
	following symptoms may occur:
	
	- If a WinSock 1.1 application sets the SO_OPENTYPE sockopt, or a WinSock 2.0
	  application does not specify WSA_FLAG_OVERLAPPED to WSASocket(), the socket
	  handle returned by WSPSocket() is supposed to be non-overlapped, and usable
	  by ReadFile/Writefile etc. If a layered service provider (LSP) is installed,
	  the non-overlapped flag is ignored and all sockets created are overlapped.
	  This causes any application that uses file I/O calls to hang or fail.
	
	- When sending a 4 KB packet over NetBEUI followed by a receive packet, the 4
	  KB send returns success, but does not make it to the remote end and the
	  subsequent receive fails with c000013b or error code 1726
	  (RPC_S_CALL_FAILED). This happens with or without security, and only with
	  buffers greater than or equal to 4 KB.
	
	- When running a script with the WinSock function AfdAllocateMdlChain, when
	  WSASend bufferPointer is set to NULL and/or bufferLength is set to zero (0),
	  WSARecv and WSARecvFrom return SUCCESS but report that they transferred zero
	  bytes even though there is data available to be received. This call should
	  not succeed with the amount of data available to be transferred. WSASend and
	  WSASendTo return WSAEFAULT, which is correct behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: hung hangs crash fails unresponsive
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
