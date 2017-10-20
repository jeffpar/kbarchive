---
layout: page
title: "Q133220: Setup Does Not Recognize Bootcon Multiple Configurations"
permalink: /kb/133/Q133220/
---

## Q133220: Setup Does Not Recognize Bootcon Multiple Configurations

{% raw %}

	Article: Q133220
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
	
	After you upgrade to Windows 95, you may receive various error messages when you
	start Windows 95 stating that items in the Config.sys and Autoexec.bat files
	could not be loaded. These error messages may indicate that specific hardware is
	not accessible because a real-mode driver could not be loaded.
	
	CAUSE
	=====
	
	Setup does not recognize multiple configurations created by a third-party tool
	such as Bootcon, and may not properly modify the configuration.
	
	RESOLUTION
	==========
	
	If you cannot start Windows 95, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F5 key.
	
	2. Edit the Config.sys and Autoexec.bat files as necessary. You can use the
	  Sysedit tool to edit these files. To do so, click the Start button, click
	  Run, type "sysedit" (without the quotation marks) in the Open box, then click
	  OK.
	
	Note that Windows 95 does not require a Config.sys or Autoexec.bat file. These
	files are necessary only for backward compatibility. If there is no such need in
	your configuration, remove or rename the Config.sys and Autoexec.bat files and
	then restart your computer.
	
	If the files are required, rename them (for example, change Config.sys to
	Config.sav and Autoexec.bat to Autoexec.sav) and then install Windows 95.
	
	After you install Windows 95, restore the files to their original names. You may
	need to edit the files to make sure that Windows 95 drivers and other drivers
	are loaded correctly.
	
	You may want to use the Windows 95 multiple configuration feature instead of a
	third-party tool such as Bootcon. For information about using multiple
	configurations in Windows 95, search for "multiple configurations" in Windows 95
	Help.
	
	MORE INFORMATION
	================
	
	Bootcon uses REM statements to delimit multiple boot configurations. Setup may
	not recognize the separate configurations and may modify the wrong
	configuration.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
