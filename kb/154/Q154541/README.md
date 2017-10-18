---
layout: page
title: "Q154541: Clients Open Many &#92;Pipe&#92;Spoolss Connections to WinNT Print Srv"
permalink: kb/154/Q154541/
---

## Q154541: Clients Open Many &#92;Pipe&#92;Spoolss Connections to WinNT Print Srv

	Article: Q154541
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT client workstations may open large numbers of \pipe\spoolss
	connections to a print server. This usually occurs when you start an application
	(such as Microsoft Word) that queries printers. The spoolss process on both the
	client and the server will open a large number of handles related to these
	connections.
	
	CAUSE
	=====
	
	When the application opens the printer, the spooler detects that some of the
	printer attributes on the server have changed and the local cache is invalid.
	The client then refreshes the cache, including form information. For each form,
	a WM_DEVMODECHANGE is issued, which causes the problem. When winword.exe sees
	this message, it thinks the printer configuration has changed and reopens it. A
	lot of these messages are sent, causing Word to go into a tight loop opening
	printers.
	
	
	A Remote Procedure Call (RPC) requires one named pipe instance for every active
	RPC call. Because there are all these OpenPrinter calls (which are hanging), RPC
	needs many named pipes. RPC won't destroy these instances until all context
	handles (that is, all OpenPrinters) have been closed.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below. Apply this fix to the Windows NT client
	system(s) to correct the problem.
	
	
	MORE INFORMATION
	================
	
	For related information, see the following article in the Microsoft Knowledge
	Base:
	
	Q182333Excessive Processor Usage on Print Servers
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt threads handle leak rpc
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
