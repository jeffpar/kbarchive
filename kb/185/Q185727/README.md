---
layout: page
title: "Q185727: BUG: closesocket() Fails with 10038 After _open_osfhandle()"
permalink: kb/185/Q185727/
---

## Q185727: BUG: closesocket() Fails with 10038 After _open_osfhandle()

	Article: Q185727
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The _open_osfhandle() function allocates a C run-time file handle and sets it to
	point to the operating-system file handle. When _open_osfhandle() function is
	used on a socket descriptor, both _close() and closesocket() should be called
	before exiting. However, on Windows NT 4.0 Service Pack 3, closesocket() after
	_close() returns 10038.
	
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
	
	This bug is not present in Windows NT 4.0 Service Pack 1, Service Pack 2, or the
	original build of Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	When _open_osfhandle is used on a socket descriptor, both _close() and
	closesocket() should be called before exiting. _close() only closes the file
	handle. closesocket() has to be called as well to close the socket descriptor
	and clean up the underlying socket object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
