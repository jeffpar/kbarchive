---
layout: page
title: "Q82763: PS/2 Appears to Hang When Exiting Windows 3.1"
permalink: /kb/082/Q82763/
---

## Q82763: PS/2 Appears to Hang When Exiting Windows 3.1

{% raw %}

	Article: Q82763
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some IBM PS/2 models may appear to stop responding (hang) when you exit Windows
	version 3.1. The computer eventually restarts; however, it remains frozen for up
	to a minute while the mouse port is reinitialized.
	
	This problem is most severe on PS/2 models 56 and 57. It also occurs on models
	50z, 55sx, 70, 80, 90, and 95.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the IBM PS/2 mouse BIOS.
	
	WORKAROUND
	==========
	
	The problem can be corrected by adding the following line to the [386Enh]
	section of SYSTEM.INI:
	
	  InitPS2MouseAtExit=FALSE
	
	This prevents Windows from attempting to reinitialize the PS/2-style mouse port
	prior to exiting to MS-DOS. This may cause problems when you run some
	mouse-aware, MS-DOS-based applications after exiting Windows.
	
	
	PS/2 products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 InitPS2MouseAtExit ps2 hangs init slow Initps2mouseportatexit
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
