---
layout: page
title: "Q121348: Err Msg: Cardware Requires 386 Enhanced Mode"
permalink: /kb/121/Q121348/
---

## Q121348: Err Msg: Cardware Requires 386 Enhanced Mode

{% raw %}

	Article: Q121348
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Windows in standard mode or when you run Windows or Windows
	for Workgroups Setup, you receive one of the following messages:
	
	  Cardware requires 386 enhanced mode.
	
	  -or-
	
	  Setup error Cardware requires 386 enhanced mode.
	
	CAUSE
	=====
	
	Cardware is a memory-resident device driver that requires a protected-mode
	interface. When Windows initializes real mode during Setup, Cardware interrupts
	with an error message and discontinues Setup.
	
	WORKAROUND
	==========
	
	To work around this problem, use the uninstall utility located on the Cardware
	installation disks. Run the uninstall utility once, run Windows Setup, then
	reinstall Cardware. (This is the preferred method.) As an alternative, you can
	edit the CONFIG.SYS file to remove the reference to Cardware and then restart
	your system. Windows Setup will then run without generating the aforementioned
	errors. After you install Windows, you must reinstall the Cardware utility to
	update the appropriate files.
	
	MORE INFORMATION
	================
	
	Cardware is manufactured by Award Software International, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: 3.10 3.11 protect mode enh win /s err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
