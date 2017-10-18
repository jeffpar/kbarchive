---
layout: page
title: "Q182333: Excessive Processor Usage on Print Servers"
permalink: kb/182/Q182333/
---

## Q182333: Excessive Processor Usage on Print Servers

	Article: Q182333
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Print servers show high processor usage (70 percent to 90 percent) in
	Performance Monitor. The print servers also receive RPC Server Too Busy errors,
	and clients report slow printing problems.
	
	CAUSE
	=====
	
	These symptoms occur because named pipe connections and server sessions are not
	timing out and disconnecting, which causes an excessive load on the server.
	Other symptoms of this issue are a high handle count for Spoolss.exe (more than
	15,000) and a high number of named pipes or spoolss sessions for any one user
	connected to the server.
	
	RESOLUTION
	==========
	
	Windows NT 3.51
	---------------
	
	To resolve this problem, obtain the following fix.
	
	This fix should have the following time stamp for Windows NT 3.51
	
	+----------------------------------------------------+
	| 04/09/98 | 03:17p | 72,896 win32spl.dll  | (Intel) | 
	+----------------------------------------------------+
	| 04/09/98 | 03:19p | 111,376 win32spl.dll | (Alpha) | 
	+----------------------------------------------------+
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	This is a client fix that will result in idle pipes from the client to the print
	server being closed. The more clients it is applied to, the more relief the
	print server will experience.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00 spooler CPU utilization
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
