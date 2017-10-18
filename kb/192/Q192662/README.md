---
layout: page
title: "Q192662: SMS: Remote Control GPFs with Certain Mouse Drivers"
permalink: kb/192/Q192662/
---

## Q192662: SMS: Remote Control GPFs with Certain Mouse Drivers

	Article: Q192662
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, you may receive the following error message
	when you take Remote Control of clients running Windows 95 OEM Service Release
	2.5 (OSR 2.5):
	
	  WUSER32.EXE caused an invalid page fault in module COEXIST.DLL.
	
	CAUSE
	=====
	
	This problem can occur if the computer is using Primax mouse drivers.
	
	WORKAROUND
	==========
	
	To work around this problem, you can disable the mouse drivers from the
	Autoexec.bat file. To do this, perform the following steps:
	
	1. On the Start menu, click Run and type "Sysedit". Click OK.
	
	2. On the Window menu, click Autoexec.bat. Locate the following entry:
	
	     c:\drivers\pmouse\pmouse.com
	
	3. Change this entry to read:
	
	     REM c:\drivers\pmouse\pmouse.com
	
	The next time Windows 95 restarts, the standard default mouse driver will be
	loaded. If you want to enable the Primax mouse driver again, repeat this
	process, but remove "REM" from the line in Step 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest version of mouse driver from Primax
	or use the standard mouse driver that is installed by Windows 95.
	
	Additional query words: prodsms general protection fault gp gpf win95 win
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
