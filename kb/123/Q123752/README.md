---
layout: page
title: "Q123752: Application Icon Does Not Minimize to the Taskbar"
permalink: /kb/123/Q123752/
---

## Q123752: Application Icon Does Not Minimize to the Taskbar

	Article: Q123752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you minimize an application, it does not minimize to the taskbar; instead,
	the icon disappears.
	
	CAUSE
	=====
	
	Some applications register a shell hook but do not forward it to the Windows
	shell, even though Windows programming documentation indicates this should be
	done. Because Windows 95 runs mainly in Ring 3, it cannot detect this hook and
	therefore cannot keep track of the application's icon.
	
	NOTE: If one application has this problem, it can prevent other applications from
	minimizing to the taskbar as well.
	
	The following applications are known to cause this problem:
	
	- Audio Control (AUDCNTRL.EXE). This file is included with the Toshiba T4800Ct.
	
	- TextBridge version 3.0 by Xerox Imaging Systems.
	
	- EclipseFind by Phoenix Technologies.
	
	
	WORKAROUND
	==========
	
	Although you cannot see the minimized icon, you may be able to use the ALT+TAB
	key combination to cycle through the running applications.
	
	If you do not load the application that causes this problem, your other
	applications minimize correctly.
	
	NOTE: Applications can be executed automatically at Windows startup from the
	Startup folder or the Load and Run lines of the WIN.INI file.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
