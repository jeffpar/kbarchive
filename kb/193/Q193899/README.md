---
layout: page
title: "Q193899: Event ID 1008, 4005 with Missing TCP/IP Performance Counters"
permalink: kb/193/Q193899/
---

## Q193899: Event ID 1008, 4005 with Missing TCP/IP Performance Counters

	Article: Q193899
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Event Viewer Application log may generate multiple Event ID 1008
	and 4005 logs every few seconds. The event descriptions are:
	
	  Event ID:  1008
	  Source:    Perflib
	  Description:
	  The Open Procedure for service "Tcpip" in DLL "Perfctrs.dll" failed.
	  Performance data for this service will not be available. Status code
	  returned is DWORD 0.
	  Data: 0000: 0000007F (in words)
	
	  Event ID:  4005
	  Source:    perfctrs
	  Description:
	  Load of INETMIB1.DLL failed. Make sure the DLL file is in the PATH.
	  WIN32 Error number is returned in the data.
	
	CAUSE
	=====
	
	This problem is caused by the failure of Inetmib1.dll to initialize properly
	upon loading where memory is allocated during initialization, but not
	de-allocated during clean-up.
	
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
	
	Additional query words: memory leak TCPIP perfmon SNMP
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
