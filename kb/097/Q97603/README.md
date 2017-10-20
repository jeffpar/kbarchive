---
layout: page
title: "Q97603: Cannot Resize Microsoft Backup for Windows"
permalink: /kb/097/Q97603/
---

## Q97603: Cannot Resize Microsoft Backup for Windows

{% raw %}

	Article: Q97603
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.0, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to resize Microsoft Backup for Windows or other Windows- based
	applications. The complete contents of the window may not be visible when it is
	maximized; part of the interface may be truncated.
	
	CAUSE
	=====
	
	The Helv= setting in the [FontSubstitutes] section of the WIN.INI file has been
	modified or the MS Sans Serif font is not installed.
	
	WORKAROUND
	==========
	
	To correct this problem, do the following:
	
	1. Edit the WIN.INI file and change the Helv= setting in the [FontSubstitutes]
	  section so that it matches the following:
	
	  Helv=MS Sans Serif
	
	2. Ensure "MS Sans Serif=Arial" in not in the WIN.INI file.
	
	3. Check the [fonts] section in WIN.INI file to make sure it has the correct
	  entry. For example, if you are using the VGA video driver, the entry should
	  read as follows:
	
	  MS Sans Serif 8,10,12,14,18,24 (VGA res)=SSERIFE.FON
	
	4. If the MS Sans Serif font is not installed, choose the Font icon in Control
	  Panel to install it.
	
	
	Additional query words: 6.22 6.00 6.20 button font fonts display window windowed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
