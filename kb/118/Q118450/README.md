---
layout: page
title: "Q118450: COMSPEC Environment Is Not Set When Using 4DOS"
permalink: kb/118/Q118450/
---

## Q118450: COMSPEC Environment Is Not Set When Using 4DOS

	Article: Q118450
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
	
	The COMSPEC environment variable is not set after Windows 95 has started.
	
	CAUSE
	=====
	
	This environment variable is not set if you are using J.P. Software 4DOS.COM
	instead of MS-DOS COMMAND.COM on the SHELL line in your CONFIG.SYS file.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Upgrade to 4DOS version 4.02 or later.
	
	  -or-
	
	- Set the COMSPEC variable in the AUTOEXEC.BAT file by adding the following
	  statement to the AUTOEXEC.BAT file
	
	  set comspec=c:\<directory name>\4dos.com
	
	  where <directory name> is the directory in which you installed 4DOS.
	
	  -or-
	
	- Use COMMAND.COM, in place of 4DOS.COM, on the SHELL statement in your
	  CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	4DOS is manufactured by J.P. Software, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: fourdos 4 dos 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
