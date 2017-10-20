---
layout: page
title: "Q94032: &quot;Cannot Write to Device Aux&quot; Error When Using Norton's Sleeper"
permalink: /kb/094/Q94032/
---

## Q94032: &quot;Cannot Write to Device Aux&quot; Error When Using Norton's Sleeper

{% raw %}

	Article: Q94032
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when attempting to run either MS-DOS
	Prompt or an MS-DOS-based application in Windows 386 enhanced mode while the
	Norton Desktop for Windows screen saver Sleeper is activated:
	
	  Cannot write to device aux
	
	This error can occur with either NDW.EXE or PROGMAN.EXE as the shell.
	
	CAUSE
	=====
	
	According to Symantec, this problem is caused by a problem in Sleeper.
	
	This problem can also be caused by a bad sound driver in the [drivers] section of
	the SYSTEM.INI file. If the driver identified in the "Aux=<filename>" line
	is bad or not in the path, this message may be displayed when Windows 3.1 is
	booted.
	
	WORKAROUND
	==========
	
	A patch is available on Symantec's BBS that corrects the problem with the
	Sleeper screen saver. This patch (COMPAT.EXE) allows Sleeper to work with
	Windows in 386 enhanced mode. For additional information, contact Symantec
	Technical Support.
	
	If the problem is caused by a bad sound driver, use Windows Control Panel to
	remove the driver from the installed drivers section.
	
	Norton Desktop for Windows is manufactured by Symantec Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 err msg auxiliary
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
