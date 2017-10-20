---
layout: page
title: "Q87354: Intel SatisFAXtion File CASMGR.EXE May Cause Windows to Hang"
permalink: /kb/087/Q87354/
---

## Q87354: Intel SatisFAXtion File CASMGR.EXE May Cause Windows to Hang

{% raw %}

	Article: Q87354
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Intel Technical Support has confirmed that the Intel SatisFAXtion driver,
	CASMGR.EXE, may cause Windows 3.1 to hang when entering 386 enhanced mode if
	CASMGR is configured to use expanded memory.
	
	CAUSE
	=====
	
	The SatisFAXtion Setup program sets up CASMGR.EXE to start from the AUTOEXEC.BAT
	file. CASMGR uses expanded memory if it's available, and this may conflict with
	the page frame that Windows 386 enhanced mode establishes.
	
	WORKAROUND
	==========
	
	To disable CASMGR's use of expanded memory:
	
	1. From the FAX subdirectory, type "setup" (without the quotation marks).
	
	2. Choose the Advanced option.
	
	3. Choose Technical Options.
	
	4. In the CASMGR Usage section, choose the option to not use expanded memory.
	
	Disabling this option should allow SatisFAXtion to work in Windows 386 enhanced
	mode.
	
	For more information on this problem, contact Intel Technical Support at (503)
	629-7000.
	
	Intel Satisfaxtion is manufactured by vendors independent of Microsoft; we make
	no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.10 3.11 hang lockup not load expanded Satisfaction EMS 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
