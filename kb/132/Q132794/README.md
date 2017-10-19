---
layout: page
title: "Q132794: MS-DOS Programs That Try to Restart the Computer May Fail"
permalink: /kb/132/Q132794/
---

## Q132794: MS-DOS Programs That Try to Restart the Computer May Fail

	Article: Q132794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install an MS-DOS-based program that attempts to restart the computer,
	the MS-DOS-based program may simply disappear from the system.
	
	CAUSE
	=====
	
	Most MS-DOS-based programs are unaware of multitasking, and allowing those
	programs to restart the computer may result in the loss of data. To protect
	system data integrity, Windows 95 intercepts the most common ways that MS-
	DOS-based programs attempt to restart the computer and silently terminates those
	programs.
	
	RESOLUTION
	==========
	
	Instead of allowing the MS-DOS-based program to restart the computer, perform a
	restart in the standard manner by clicking the Start button, clicking Shut Down,
	and selecting the Restart The Computer option.
	
	Additional query words: reboot int 19h qemm install setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
