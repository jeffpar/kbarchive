---
layout: page
title: "Q201407: STOP 0x7B After Applying Service Pack 4 on AST Manhattan"
permalink: /kb/201/Q201407/
---

## Q201407: STOP 0x7B After Applying Service Pack 4 on AST Manhattan

	Article: Q201407
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 01-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart your AST Manhattan 6200 computer after applying Service Pack 4
	(SP4), the computer will stop with an error code of 0x0000007B.
	
	CAUSE
	=====
	
	The HAL used on AST Manhattan computers (Halapic.dll or Hal.mps) uses
	information provided by the BIOS to determine system configuration. Windows NT,
	prior to SP4, does not query the BIOS information for slot 0 on PCI buses. This
	change uncovered an issue with the AMI BIOS version that is unique to the AST
	Manhattan 6200 systems.
	
	STATUS
	======
	
	AST is aware of this problem. For more information, contact AST Technical
	Support at (800) 727-1278 or visit AST's Web site.
	
	The third-party products discussed here are manufactured by AST, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	
	Additional query words: AST 0x7b
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbbug
	
	=============================================================================
	
