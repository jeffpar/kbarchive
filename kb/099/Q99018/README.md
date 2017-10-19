---
layout: page
title: "Q99018: Clipper Err Msg with MS-DOS: Illegal Format in Loadable File"
permalink: /kb/099/Q99018/
---

## Q99018: Clipper Err Msg with MS-DOS: Illegal Format in Loadable File

	Article: Q99018
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a program that has been compiled with Computer Associate's Clipper,
	version 5.01 or 5.01a, on an MS-DOS 6.0 or later system, you may receive the
	following error message:
	
	  ERROR: EST0001:Illegal Format in Loadable File
	
	After displaying this message, the system stops responding (hangs).
	
	You can compile and link with Clipper, version 5.01 or 5.01a, on a system running
	MS-DOS 6.0 or 6.2. However, when you execute the compiled and linked file, you
	may receive the error message above.
	
	NOTE: You can also run the compiled program on an MS-DOS 5.0 system even though
	it was compiled and linked on an MS-DOS 6.0 or 6.2 system.
	
	CAUSE
	=====
	
	This error is caused by an incompatibility with Clipper Linker, version 3.13
	(which ships with Clipper 5.01 and 5.01a) and HIMEM.SYS, versions 3.09 and 3.10.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Use HIMEM.SYS, version 3.07 (which is provided with Windows 3.1).
	
	-or-
	
	- Upgrade from version 5.01 or 5.01a of Clipper to version 5.2. (Linker,
	  version 3.14b, ships with Clipper 5.2).
	
	STATUS
	======
	
	Computer Associates Product Support has confirmed this to be a problem with
	Clipper Linker, version 3.13. For more information, call Computer Associates
	Technical Support.
	
	Clipper is manufactured by Computer Associates, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 6.00 6.20 3rd party third-party third
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
