---
layout: page
title: "Q234765: STOP 0x0000000a or 0x0000004e Errors with Citrix Metaframe"
permalink: kb/234/Q234765/
---

## Q234765: STOP 0x0000000a or 0x0000004e Errors with Citrix Metaframe

	Article: Q234765
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Citrix Metaframe server-based software on your computer running
	Windows NT 4.0, Terminal Server Edition, the computer may crash and either of
	the following error messages may be displayed on a blue screen:
	
	  
	
	- STOP 0000000a : 39b880ce 00000002 00000000 801335d8
	  IRQL_NOT_LESS_OR_EQUAL
	
	- STOP 0000004e : 00000007 00000e32 00000001 00000000
	
	NOTE: The parameters may be different, depending on your system configuration.
	
	CAUSE
	=====
	
	In certain conditions, Metaframe's kernel mode driver (Cdm.sys) dereferences
	physical pages that are not referenced. This creates a condition where the
	reference count of a physical page is 0, but the share count is still 1 (the
	page is still on some lists).
	
	To preserve system integrity, Terminal Server Edition is set to crash when these
	conditions are present.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Citrix to obtain a fix for this problem. The
	latest updates to the Metaframe Cdm.sys driver should also contain this fix.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
