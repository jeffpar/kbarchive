---
layout: page
title: "Q163329: Fatal Exception 0E in WSIPX Using Windows Sockets Program"
permalink: /kb/163/Q163329/
---

## Q163329: Fatal Exception 0E in WSIPX Using Windows Sockets Program

	Article: Q163329
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a program that uses Windows Sockets over the IPX/SPX
	protocol, you may receive either of the following error messages in Windows 95:
	
	- A fatal exception 0E has occurred at <00xx:xxxxxxxx> in VxD WSIPX(01) +
	  <xxxxxxxx>. The current application will be terminated.
	
	- An exception 0E has occurred at <00xx:xxxxxxxx> in VxD WSIPX(01) +
	  <xxxxxxxx>. This was called from <00xx:xxxxxxxx> in VxD NDIS(01)
	  + <xxxxxxxx>. It may be possible to continue normally.
	
	CAUSE
	=====
	
	These errors can occur if a buffer being used by a Windows Sockets program is
	freed by Windows Network Sockets for IPX (WSIPX) inadvertently and the
	IPX/SPX-compatible protocol (NWLINK) then tries to access the buffer.
	
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
