---
layout: page
title: "Q239575: Err Msg: STOP: 0X00002B PANIC_STACK_SWITCH"
permalink: /kb/239/Q239575/
---

## Q239575: Err Msg: STOP: 0X00002B PANIC_STACK_SWITCH

	Article: Q239575
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Microsoft SQL Server 7.0 Service Pack 1 (SP1) on an
	Alpha-based computer with a Powerstorm 4d20 video adapter (using the Tga2
	driver), the computer may stop responding (hang) with the following error
	message shortly after the user validation phase of SQL 7.0 SP1 Setup:
	
	  STOP: 0X00002B (0xDE05CFA4,0x00000003,0Xfffffff0,0xf657c000)
	  PANIC_STACK_SWITCH
	  Microsoft Windows NT [0xf0000565]
	  Machine State at Call to Bug Check PC : 800c0364 PSR : 0000001E
	
	  Callee-Sp Return -Ra Dll Base - Name
	  806d9e00 800c0364 : 80080000 - ntoskrnl.exe
	  FFFFFFF0 DE05CFA8 80080000 - ntoskrnl.exe
	
	  Callee-SP Return-RA Call Site
	
	  806d90f0 800b854c : ntkrnlmp!DbgBreakPointWithStatus+0x4
	  806d90f0 800bfde0 : ntkrnlmp!KeBugCheckEx+0x254
	  806d9620 800c2694 : ntkrnlmp!KiMemoryManagementException+0xf4
	  806d9820 800c255c : ntkrnlmp!KiLookupFunctionEntry+0x74
	  806d9840 800b84a0 : ntkrnlmp!KeDumpMachineState+0x17c
	  806d98d0 800c0360 : ntkrnlmp!KeBugCheckEx+0x1a8
	  806d9e00 de05cfa4 : ntkrnlmp!KiPanicException+0x8
	  fffffff0 80174230 : win32k!W32pThreadCallout+0x4
	  00000010 00000000 : ntkrnlmp!PsConvertToGuiThread+0x250
	
	WORKAROUND
	==========
	
	To work around this behavior, use the standard VGA video driver on the computer
	instead of the Powerstorm 4d20 (Tga2) driver. The files for the Powerstorm 4d20
	video driver are listed below.
	
	  Date        Time    File name  
	  -----------------------------
	  01/22/1998  10:14a  Tga2.dll
	  01/22/1998  10:18a  Tga2.sys   
	
	MORE INFORMATION
	================
	
	
	This problem can occur on the following Alpha-based computers:
	
	- AlphaServer 1200
	- AlphaServer 4000/4100
	- AlphaServer 8200/8400
	- Digital Ultimate Workstation
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
