---
layout: page
title: "Q187830: Performance Decrease Transmitting Data over the Network"
permalink: kb/187/Q187830/
---

## Q187830: Performance Decrease Transmitting Data over the Network

	Article: Q187830
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix sbs
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TransmitFile() Win32 API call reads the file data directly from the file
	system cache and sends it out over the wire. However, during periods of stress,
	applications that use this API to transfer files across the network may see that
	the transfer is not as fast when there are less than 4 KB streams of data being
	transmitted.
	
	CAUSE
	=====
	
	Windows NT is reading 4 KB at a time as opposed to larger (and more efficient)
	units.
	
	
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
	
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
