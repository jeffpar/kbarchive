---
layout: page
title: "Q195612: Local Named Object Is Mistakenly Created in Global Name Space"
permalink: kb/195/Q195612/
---

## Q195612: Local Named Object Is Mistakenly Created in Global Name Space

	Article: Q195612
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): TSESP4Fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When developing an application to run under Windows Terminal Server, a call to
	the RpcServerUseProtseqEp() API may cause any subsequent named objects to be
	created in the global name space versus the name space of the client user. Any
	Win32 API which creates names objects may be affected if called following a call
	to RpcServerUseProtseqEp().
	
	For example, if a named pipes application were to create an event object using
	the CreateEvent() API following a call to the RpcServerUseProtseqEp() API, the
	event object would be created in the global name space instead of the preferred
	local name space of the Windows Terminal Server user. If the named object is
	created before calling the above offending RPC API, the named object is created
	in the correct user name space.
	
	CAUSE
	=====
	
	The problem is that the RcpServerUseProtSeqEp() API does not properly restore
	the user environment when returning from kernel mode.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
