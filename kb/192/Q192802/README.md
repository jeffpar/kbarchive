---
layout: page
title: "Q192802: Two CD-ROM Drive Letters Appear in My Computer"
permalink: kb/192/Q192802/
---

## Q192802: Two CD-ROM Drive Letters Appear in My Computer

	Article: Q192802
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95 win98
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view My Computer or Windows Explorer, two CD-ROM drives may be
	displayed even though you have only one CD-ROM drive in your computer. When you
	try to access either CD-ROM drive, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if you have both the real-mode CD-ROM device drivers and
	the Windows 95/98 CD-ROM device drivers installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the System Configuration Editor (Sysedit.exe) to
	disable the real-mode CD-ROM device drivers. To do so, follow these steps:
	
	1. Click Start, click Run, type "sysedit" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the Windows menu, click Autoexec.bat, locate the line that loads the
	  real-mode CD-ROM device drivers, and then type "rem" (without the quotation
	  marks) followed by a space at the beginning of the line. For example, the
	  line in your Autoexec.bat file may be similar to the following line:
	
	  C:\Windows\Command\Mscdex.exe /d:mscd001
	
	3. On the Windows menu, click Config.sys, locate the line that loads the
	  real-mode CD-ROM device drivers, and then type "rem" (without the quotation
	  marks) followed by a space at the beginning of the line. For example, the
	  line in your Config.sys file may be similar to the following line:
	
	  Device=C:\Cdrom\Cdrom.sys /d:mscd001
	
	4. On the File menu, click Exit.
	
	5. Click Yes when you are prompted to save the Config.sys and Autoexec.bat
	  files.
	
	6. Restart your computer.
	
	
	======================================================================
	Keywords          : kbenv kbtool win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
