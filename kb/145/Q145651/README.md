---
layout: page
title: "Q145651: Windows Sockets Program Generates Errors In WSIPX"
permalink: /kb/145/Q145651/
---

## Q145651: Windows Sockets Program Generates Errors In WSIPX

	Article: Q145651
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a multi-threaded Windows Sockets program using the IPX
	protocol, Windows 95 may stop responding (hang), or you may receive an error
	message similar to the following on a blue screen:
	
	  An exception 0E has occurred at [segment]:[address] in VxD WSIPX(01) +
	  [offset]. This was called from [segment]:[address] in VxD NWLINK(01) +
	  [offset]. It may be possible to continue normally.
	
	CAUSE
	=====
	
	When a multi-threaded Windows Sockets program uses the IPX protocol, a page
	fault can occur if an invalid pointer to a buffer used by Windows Sockets over
	IPX is used.
	
	Note that this error occurs only with multi-threaded Windows Sockets programs; it
	does not occur with single-threaded programs.
	
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
	Keywords          : kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
