---
layout: page
title: "Q153082: Garbled Text on Dell Computers with S3 Chip Set"
permalink: kb/153/Q153082/
---

## Q153082: Garbled Text on Dell Computers with S3 Chip Set

	Article: Q153082
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Windows NT 3.51 on a Dell computer with built-in S3 chip set
	765 video (this was tested on Dell OptiPlex GXM 5166) the text shown on the
	monitor is unusually garbled and unreadable, although the graphics look fine.
	
	MORE INFORMATION
	================
	
	This is due to problem with the S3.sys driver that was shipped on the Windows NT
	3.51 Server and Windows NT Workstation compact disc (s3.sys, size 49232, dated
	5/26/95.)
	
	RESOLUTION
	==========
	
	To correct this problem, copy the S3.SYS from the latest Service Pack for
	Windows NT 3.51 to <Winntroot>\System32\Drivers subdirectory and override
	the existing S3.sys.
	
	STATUS
	======
	
	Dell computers are manufactured by ,Dell Computer Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: "s3 chip set"
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.5 3.51
	
	=============================================================================
	
