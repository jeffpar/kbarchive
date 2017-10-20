---
layout: page
title: "Q73322: Backfill for EMM386.EXE Cannot Be Disabled"
permalink: /kb/073/Q73322/
---

## Q73322: Backfill for EMM386.EXE Cannot Be Disabled

{% raw %}

	Article: Q73322
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use EMM386.EXE on an 80386 machine with less than 640 kilobytes (K) of
	conventional memory and an expansion memory card configured for extended memory,
	conventional memory may be backfilled to 640K.
	
	If you try to run Microsoft Windows in 386 enhanced mode on such a machine, the
	following error message may be displayed:
	
	  Unable to start enhanced mode windows due to base memory backfill
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in EMM386.EXE version 4.20 (which
	is provided with MS-DOS 5.0) and version 4.33 (which is provided with MS-DOS
	5.00a). This problem does not occur with later versions of EMM386.EXE.
	
	CAUSE
	=====
	
	Backfilling uses memory from the expansion card to fill the empty conventional
	memory area up to 640K. EMM386.EXE redirects the empty conventional memory
	addresses up to 640K to the chips on the expansion card. This means that there
	are no physical memory chips on the motherboard at these addresses; rather, the
	addresses are used for memory chips on the expansion card.
	
	There is no way to disable the backfilling that EMM386.EXE performs. The /X
	switch excludes only within the range from 640K to 1024K. The /B switch raises
	the base only for the backfill up to 256K, which is not useful here because it
	does not extend to 640K. Effectively, this means that there is no way to change
	the way EMM386.EXE handles memory between 256K and 640K.
	
	For a machine running Windows, this means that you cannot run Windows in 386
	enhanced mode, because the backfilling interferes with the operation of the
	Windows memory managers. When you type "win" (without the quotation marks) at
	the command prompt on such a machine, Windows returns an error message stating
	that the memory from xxxK to 640K has been backfilled and that the backfilling
	must be disabled to run Windows in 386 enhanced mode.
	
	WORKAROUND
	==========
	
	To work around this problem, use EMM386.EXE version 4.44 or later (Windows 3.1
	contains version 4.44). Later versions do not backfill as the previous two
	versions that shipped with MS-DOS 5.0 and 5.0a did (versions 4.20 and 4.33
	respectively).
	
	There is no other workaround for this problem other than to not use EMM386.EXE,
	or to upgrade the motherboard so that it can provide conventional memory up to
	640K.
	
	Additional query words: 5.00 5.00a err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
