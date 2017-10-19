---
layout: page
title: "Q142254: Problems Installing Network Protocol That Uses TDI Interface"
permalink: /kb/142/Q142254/
---

## Q142254: Problems Installing Network Protocol That Uses TDI Interface

	Article: Q142254
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may stop responding (hang) with different results on different
	Computers when you try to install a network protocol that uses the TDI
	interface.
	
	This problem occurs only if the Microsoft TCP/IP protocol is already installed
	when you try to add the other protocol, or when you try to add the Microsoft
	TCP/IP protocol after installing another protocol that uses the TDI interface.
	
	CAUSE
	=====
	
	The TDI interface provider (Vtdi.386) included with Windows 95 supports only one
	protocol using that interface. The TCP/IP protocol included with Windows 95 uses
	the TDI interface, causing a conflict if you install an additional protocol that
	uses the TDI interface.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This problem was reported with the ICL Workgroup OSI protocol by International
	Computers Limited.
	
	For additional information about the function of the TDI layer, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q101871 Information on the TDI Layer
	
	  Q128233 Comparison of Windows NT Network Protocols
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
