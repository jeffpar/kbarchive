---
layout: page
title: "Q82473: HyperKey Does Not Function Properly in an MS-DOS VM"
permalink: /kb/082/Q82473/
---

## Q82473: HyperKey Does Not Function Properly in an MS-DOS VM

{% raw %}

	Article: Q82473
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; Win95:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HyperKey, part of the HyperDisk SpeedKit, does not work properly in an MS-DOS
	virtual machine (VM) under Microsoft Windows.
	
	HyperKey can cause several problems in an MS-DOS VM:
	
	- Keystroke repeats may stop.
	
	- Keys pressed may display sporadically.
	
	- Sound may continuously play from Windows if a sound was playing just before
	  switching to an MS-DOS VM.
	
	CAUSE
	=====
	
	HyperKey is explicitly documented as not being compatible with Windows. Page 5
	of the HyperKey manual states the following:
	
	  When Microsoft Windows is active, a device driver such as HyperKey cannot
	  intercept keystrokes. Therefore, HyperKey is inoperative in the Windows
	  environment.
	
	WORKAROUND
	==========
	
	If these problems occur, remove HyperKey from the CONFIG.SYS or AUTOEXEC.BAT
	file.
	
	MORE INFORMATION
	================
	
	HyperKey is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 win31 3.11 hyper key 3rdparty wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11; Win95:
	
	=============================================================================
	

{% endraw %}
