---
layout: page
title: "Q85257: Banyan Err Msg: This Application Has Violated System..."
permalink: /kb/085/Q85257/
---

## Q85257: Banyan Err Msg: This Application Has Violated System...

{% raw %}

	Article: Q85257
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run multiple MS-DOS sessions on a Banyan VINES version 4.11 workstation
	running Microsoft Windows version 3.1 in 386 enhanced mode, you may receive the
	following error message:
	
	  This application has violated system integrity due to execution of an invalid
	  instruction.
	
	This problem does not occur when you run a single MS-DOS session.
	
	CAUSE
	=====
	
	This problem is caused by the Banyan drivers; Banyan is aware of the problem.
	
	RESOLUTION
	==========
	
	To solve this problem, obtain current drivers from Banyan.
	
	As a temporary workaround, try the following:
	
	1. Open the SYSTEM.INI file in a standard ASCII text editor (for example,
	  Notepad).
	
	2. Under the section titled [386Enh], add the following line:
	
	  ModifyDOSInt2A=FALSE
	
	
	This does not completely correct the problem, but it reduces the frequency of the
	error messages.
	
	MORE INFORMATION
	================
	
	For additional information, contact Banyan Systems, Inc.
	
	The Banyan products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 banyun
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
