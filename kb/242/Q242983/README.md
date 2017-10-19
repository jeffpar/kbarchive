---
layout: page
title: "Q242983: Error Message: Stop 0x0000001E in Win32k!GreRealizePalette()"
permalink: /kb/242/Q242983/
---

## Q242983: Error Message: Stop 0x0000001E in Win32k!GreRealizePalette()

	Article: Q242983
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer that is running both the Citrix Metaframe client and the
	Netscape Communicator Web browser software to communicate with a computer
	running Windows NT Server 4.0, Terminal Server Edition, the server may stop
	responding (hang) and display the following error message on a blue screen:
	
	  STOP1E: UNHANDLED KERNEL EXCEPTION
	  (0xC00000005,0xA3053380,0x000000000,0x00000008)
	
	NOTE: The second parameter may vary, but the memory dump always indicates the
	address falls in the win32k!GreRealizePalette() address space.
	
	CAUSE
	=====
	
	This problem occurs because GreRealizePallette() was not checking for a NULL
	object in some cases.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Server, Terminal
	Server Edition. This problem was first corrected in Windows NT 4.0 Server,
	Terminal Server Edition, Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
