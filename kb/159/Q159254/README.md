---
layout: page
title: "Q159254: Windows Sockets Programs Using WSIPX May Not Work"
permalink: /kb/159/Q159254/
---

## Q159254: Windows Sockets Programs Using WSIPX May Not Work

{% raw %}

	Article: Q159254
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork msnets win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbfixlist
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows Sockets programs that use the IPX protocol in Windows 95 may not work
	correctly. The program may indicate an "out of memory" error message.
	
	One such program is Attachmate Extra Personal Client, which may not finish Setup
	successfully or generate error messages when it lists servers. After creating a
	socket, the program's Windows Sockets Bind() call fails with WSAENOBUFS(10055).
	
	CAUSE
	=====
	
	WSIPX calls IFSMGR to allocate memory from IFSMGR's heap. If IFSMGR is out of
	heap space and the allocation request is for less than one page (4 KB), IFSMGR
	does not grow the heap because it assumes this is an interrupt time allocation.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95, and later
	versions of this file:
	
	   WSIPX.VXD  version 4.0.953  dated 11/4/96  14,545 bytes
	
	A version of this file that also resolves this problem is included in the Windows
	Sockets 2.0 Update for Windows 95. For information about obtaining this update,
	see the following article in the Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	
	
	The updated WSIPX resolves this problem by calling IFSMGR, when needed, to
	explicitly grow the heap.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. An update
	to address this problem is now available, but is not fully regression tested and
	should be applied only to computers experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft does not recommend
	implementing this update at this time. Contact Microsoft Technical Support for
	additional information about the availability of this update.
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q171352 Large Data Transfer Using WinSock Over SPX May Not Work
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork msnets win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
