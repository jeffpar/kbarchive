---
layout: page
title: "Q92661: MoreFonts May Cause GP Fault in Windows 3.1 Help"
permalink: /kb/092/Q92661/
---

## Q92661: MoreFonts May Cause GP Fault in Windows 3.1 Help

{% raw %}

	Article: Q92661
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access any help files in Windows 3.1 or 3.11 after you have upgraded
	from Windows 3.0, the following error message may be displayed:
	
	  WINHELP has caused a General Protection Fault in module MFTYPE.DLL
	
	CAUSE
	=====
	
	This error message may be caused by an earlier installation of MicroLogic
	MoreFonts in Windows 3.0. MicroLogic Technical Support has confirmed that an
	updated version is required to run MoreFonts correctly with Windows 3.1.
	
	
	WORKAROUND
	==========
	
	To avoid this error, do the following:
	
	1. Use Microsoft Windows Notepad to open the SYSTEM.INI file.
	
	2. Remove the following lines from the [boot] section:
	
	        mf.system.drv=system.drv
	        system.drv=mfsystem.drv
	
	3. Insert the following line in the [boot] section:
	
	        system.drv=system.drv
	
	4. Quit Notepad and save your changes.
	
	5. Quit and restart Windows.
	
	MicroLogic Technical Support has confirmed that an updated version is required to
	run MoreFonts correctly with Windows 3.1. The updated version can be obtained by
	calling MicroLogic. To determine if the updated version of MoreFonts is already
	installed, choose About from the MoreFonts Control menu; updates have serial
	numbers of 3051 or higher. For more information, please contact Micrologic
	Technical Support.
	
	MoreFonts is manufactured by MicroLogic Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
