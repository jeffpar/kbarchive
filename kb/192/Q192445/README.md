---
layout: page
title: "Q192445: Fatal Exception Errors in Wsipx.vxd"
permalink: /kb/192/Q192445/
---

## Q192445: Fatal Exception Errors in Wsipx.vxd

{% raw %}

	Article: Q192445
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork win95
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that uses Windows sockets over the IPX/SPX protocol to
	transfer large quantities of datagrams, you may receive either of the following
	error messages:
	
	  - An exception 0E has occurred at 0028:C1029F6C in VxD
	  WSIPX(01) +00000DBC.
	  This was called from 0028:C0043174 in VxD NDIS(01) +00000D7C
	
	  - A fatal exception has occurred at 0028:C10297D1 in VxD
	  WSIPX(01)+00000621.
	  The current application will be terminated.
	
	Also, your computer may stop responding (hang), or the client process on the
	remote computer may report transmission errors. Note that this problem is more
	likely to occur with slower computers.
	
	CAUSE
	=====
	
	This problem can occur if a buffer being used by a Windows sockets program is
	inadvertently freed twice by Windows Network Sockets for IPX (WSIPX) and the
	IPX/SPX-compatible protocol (NWLINK) then tries to access this buffer.
	
	
	
	RESOLUTION
	==========
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	
	MORE INFORMATION
	================
	
	This problem is known to occur in conjunction with database backup operations
	using Sybase SQL Anywhere Network Server Version 5.5.01.
	
	
	REFERENCES
	==========
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
