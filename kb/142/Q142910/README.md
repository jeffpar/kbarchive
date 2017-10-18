---
layout: page
title: "Q142910: WinCim 2.0.1 Err Msg: Winsock Error: Host Not Found"
permalink: kb/142/Q142910/
---

## Q142910: WinCim 2.0.1 Err Msg: Winsock Error: Host Not Found

	Article: Q142910
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install the CompuServe WinCim version 2.0.1 software in Windows NT 3.5
	or 3.51, the following error message appears:
	
	  Winsock error: Host not found.
	  Would you like more information?
	
	CAUSE
	=====
	
	This problem occurs when the WinCim installation program detects that you are
	using the Windows NT Winsock support. The following message appears when you
	install the Windows NT Winsock software:
	
	  Windows NT does not allow the CompuServe Dialer to be used in place of its
	  native Winsock support.
	
	By default, the CompuServe Dialer Winsock is enabled when you start WinCim. This
	does not allow Windows NT to use its native Winsock service.
	
	RESOLUTION
	==========
	
	To correct this problem, disable the WinCim Winsock support. In WinCim, select
	Session Settings from the the Special menu in WinCim. Select Option and clear
	the Use Winsock check box.
	
	The WinCim product discussed here is manufactured by CompuServe, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
