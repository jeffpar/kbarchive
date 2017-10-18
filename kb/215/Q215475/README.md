---
layout: page
title: "Q215475: Slow Performance with GSNW on Terminal Server"
permalink: kb/215/Q215475/
---

## Q215475: Slow Performance with GSNW on Terminal Server

	Article: Q215475
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you access NetWare resources or run a login script, the response is very
	slow.
	
	Reading a trace using Microsoft Network Monitor shows the following items
	multiple times.
	
	  NCP Request: Read Property Value
	  NCP Reply: Read Property Value - No Such Object
	  NCP Disconnect
	
	When Terminal Server does an NCP read property value, the NetWare server responds
	with No Such Object, and then the Terminal Server computer disconnects.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	After applying Service Pack 4 for Terminal Server, ensure that the following
	registry entry is configured:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NwRdr\Parameters
	
	Use the following information for configuring:
	
	  Disconnect REG_DWORD
	  1 Original Behavior, Disconnect (Default)
	  0 New Behavior, Do not Disconnect
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: tse-sp4
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
