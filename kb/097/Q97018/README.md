---
layout: page
title: "Q97018: Err Msg: &quot;Not Enough Memory&quot; or System Hangs with Clipper"
permalink: /kb/097/Q97018/
---

## Q97018: Err Msg: &quot;Not Enough Memory&quot; or System Hangs with Clipper

	Article: Q97018
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to MS-DOS 6.0 or later, a "not enough memory" error message
	may appear or your system may stop responding (hang) when you try to run an
	application generated with Computer Associates' Clipper program.
	
	WORKAROUND
	==========
	
	To correct this problem, add the NOEMS and NOVCPI switches to the EMM386.EXE
	command in your CONFIG.SYS file. For example:
	
	  device=c:\dos\emm386.exe noems novcpi
	
	The application generated with Clipper should now run on your system.
	
	MORE INFORMATION
	================
	
	You can also work around this problem by using the RAM switch instead of the
	NOEMS switch with EMM386.EXE or you can remove the DEVICE= statement for
	EMM386.EXE from your CONFIG.SYS file.
	
	EMM386.EXE is a Virtual Control Program Interface (VCPI) server. VCPI is a
	program interface that allows expanded memory services (EMS) emulators and DOS
	extenders to coexist within a 80386/80486 environment.
	
	NOTE: Clipper is an XBASE compiler.
	
	Clipper is manufactured by Computer Associates International, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
