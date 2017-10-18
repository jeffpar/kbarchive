---
layout: page
title: "Q241359: Err Msg: STOP 0x0000001E in RDR.SYS on Terminal Server"
permalink: kb/241/Q241359/
---

## Q241359: Err Msg: STOP 0x0000001E in RDR.SYS on Terminal Server

	Article: Q241359
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
	
	The following error message on a blue screen may appear on a computer running
	Windows NT Server 4.0, Terminal Server Edition:
	
	  Stop 0x0000001E (0xC0000005, 0xf6f21e23, 0x00000000, 0x00000008)
	
	NOTE: The second parameter may vary, but always falls within the memory range of
	Rdr.sys.
	
	NOTE: Another way of identifying this particular problem is that this behavior
	takes place during the shutdown process while clients are still connected to the
	Terminal server.
	
	CAUSE
	=====
	
	This problem is caused by a null security entry being passed into the
	redirector.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Terminal Server.
	This problem was first corrected in Windows NT 4.0 Server, Terminal Server
	Edition, Service Pack 5.
	
	
	Additional query words: 0x1e
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
