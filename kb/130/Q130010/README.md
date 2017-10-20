---
layout: page
title: "Q130010: File Manager: Windows NT Server Tools Security Menu Missing"
permalink: /kb/130/Q130010/
---

## Q130010: File Manager: Windows NT Server Tools Security Menu Missing

{% raw %}

	Article: Q130010
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11; Win2000:3.1; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	After you install Windows NT Server Tools on your computer running Windows
	3.1 or Windows for Workgroups 3.11, and reboot the computer, File Manager
	does not display the expected Security menu and toolbar icon with the
	Windows NT Server managing tools.
	
	NOTE: Windows NT Server Tools are available on the Windows NT Server CD in
	the CLIENTS\SRVTOOLS\WINDOWS directory.
	
	CAUSE
	=====
	
	Windows cannot find the necessary tools because the installation does not
	automatically modify the AUTOEXEC.BAT and CONFIG.SYS files. Instead it saves the
	necessary changes in the following two files in the directory where the tools
	are installed:
	
	  NEW-VARS.BAT
	  NEW-CONF.SYS
	
	RESOLUTION
	==========
	
	To correct this situation:
	
	1. Back up your AUTOEXEC.BAT and CONFIG.SYS files.
	
	2. Use a text editor to modify the original AUTOEXEC.BAT and CONFIG.SYS files to
	  include the information in NEW-VARS.BAT and NEW-CONF.SYS files, respectively.
	
	3. Reboot your computer running Windows or Windows for Workgroups for the
	  changes to take effect.
	
	Additional query words: prodnt 3.10 3,50 3.11 wfwg wfw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW311
	Version           : WINDOWS:3.11; Win2000:3.1; winnt:3.5
	
	=============================================================================
	

{% endraw %}
