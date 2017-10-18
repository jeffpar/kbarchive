---
layout: page
title: "Q222162: STOP 0x21a on Terminal Server Because of Invalid RPC Response"
permalink: kb/222/Q222162/
---

## Q222162: STOP 0x21a on Terminal Server Because of Invalid RPC Response

	Article: Q222162
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using a Terminal Server computer in the role of a member server in a
	domain served by a non-Windows NT domain controller running SAMBA. When logging
	on to the Terminal Server, the system stops with the following blue screen error
	message:
	
	  STOP: c000021a {Fatal System Error}
	  The Windows Logon Process system process terminated unexpectedly with a status
	  of 0x00000000 (0x00000000,0x0000000)
	  The system has been shut down
	
	RESOLUTION
	==========
	
	To work around this issue, do not use SAMBA 2.0.x as a domain controller.
	According to the product's developers, it is not qualified for use as a domain
	controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	MORE INFORMATION
	================
	
	SAMBA is a third-party implementation of the SMB networking protocol used by
	Windows NT.
	
	
	The Terminal Server computer does a remote registry query against the domain
	controller. An invalid response to this query causes the Terminal Server to
	crash.
	
	NOTE: This problem does not occur when using a Windows NT domain controller.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
