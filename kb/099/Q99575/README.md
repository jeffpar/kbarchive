---
layout: page
title: "Q99575: FIX: Phar Lap err 58 Running MASM From Read-Only Drive"
permalink: /kb/099/Q99575/
---

## Q99575: FIX: Phar Lap err 58 Running MASM From Read-Only Drive

{% raw %}

	Article: Q99575
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run the Microsoft Macro Assembler (MASM) version 6.1 fails and
	MASM generates the following message:
	
	  Phar Lap err 58: Can't create VM swap file of size 0 in directory
	
	This error does not occur when MASM runs in an MS-DOS window in Microsoft
	Windows.
	
	CAUSE
	=====
	
	MASM is installed on a read-only drive, possibly a network drive. The error
	occurs because the DOSXNT DOS extender attempts to create a virtual memory swap
	file on the drive DOSXNT runs from when the operating system does not support
	virtual memory.
	
	RESOLUTION
	==========
	
	To work around this problem, you can run DOSXNT on a read/write drive listed in
	your PATH MS-DOS environment variable. In addition, you can specify one of the
	following two environment variable settings to prevent DOSXNT from attempting to
	create a swap file on the read-only network drive:
	
	- Set the DOSX environment variable to prevent DOSXNT from using any virtual
	  memory. Edit your AUTOEXEC.BAT file to include the following:
	
	  set dosx=-novm
	
	- Set the DOSX environment variable to specify where DOSXNT creates the virtual
	  memory swap file. Edit your AUTOEXEC.BAT file to include the following:
	
	  set dosx=-swapdir <path>
	
	  where <path> specifies the drive and directory on which to create the
	  temporary swap file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.1. This problem
	was corrected in MASM version 6.1a.
	
	Additional query words: 6.10 PharLap buglist6.10 fixlist6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610
	Version           : :6.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
