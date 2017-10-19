---
layout: page
title: "Q155675: IPX Headers Not Returned to WinSock Program"
permalink: /kb/155/Q155675/
---

## Q155675: IPX Headers Not Returned to WinSock Program

	Article: Q155675
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Windows Sockets setsockopt() API is called with the IPX_RECVHDR option
	set, the call will return a status of "success," but IPX headers will not be
	received when the recv() API is called.
	
	CAUSE
	=====
	
	There is a problem in the Windows Sockets support using the Microsoft
	IPX/SPX-compatible protocol, in that IPX headers are not returned with the
	WinSock data, even though it appears that the IPX_RECVHDR option is successfully
	set when calling setsockopt().
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	/BLOCKQUOTE>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
