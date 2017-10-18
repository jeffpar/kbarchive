---
layout: page
title: "Q87929: PRB: CTRL+BREAK, CTRL+ALT+SYSRQ, CTRL+C Do Not Return Control"
permalink: kb/087/Q87929/
---

## Q87929: PRB: CTRL+BREAK, CTRL+ALT+SYSRQ, CTRL+C Do Not Return Control

	Article: Q87929
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging an MS-DOS program using CodeView 4.0, 4.01, 4.05, or 4.1 the
	CTRL+C, CTRL+BREAK, and CTRL+ALT+SYSRQ key combinations do not return control to
	CodeView as they do with earlier CodeView versions.
	
	CAUSE
	=====
	
	This behavior is by design. The DPMI server (Windows or 386MAX) traps these
	interrupts for other purposes.
	
	MORE INFORMATION
	================
	
	There are three ways to work around this limitation.
	
	- Run CodeView outside of Windows and without 386MAX loaded. Without a DPMI
	  server, the break should occur normally. Drivers like HIMEM, EMM386, and QEMM
	  can be used to provide access to extended memory. Note that if EMM386.EXE is
	  used, VCPI memory is provided and the recommended settings for EMM386.EXE
	  change when running CodeView without Windows. Uncomment the following line in
	  the CONFIG.SYS file to change the settings accordingly, or remove EMM386.EXE
	  (then HIMEM will provide XMS memory)
	
	  rem device=c:\windows\emm386.exe m9 2048 ram
	
	  Note that 2048 might be too low a setting in some cases.
	
	- Set strategic breakpoints in your code to force return of control.
	
	- Break when you know an MS-DOS function is being called. During an MS-DOS
	  interrupt, breaks should occur normally.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.05,4.1
	
	=============================================================================
	
