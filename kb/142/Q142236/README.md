---
layout: page
title: "Q142236: QEMM 8.0 Causes GP Fault in Safe Mode"
permalink: kb/142/Q142236/
---

## Q142236: QEMM 8.0 Causes GP Fault in Safe Mode

	Article: Q142236
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Windows 95 in Safe mode, you may receive the following
	error message when Windows 95 is loading:
	
	  MSGSRV32
	
	  An error has occurred in your program. To keep working anyway, click Ignore
	  and save your work in a new file. To quit this program click Close. You will
	  lose information you entered since you last saved.
	
	Clicking either Close or Ignore produces the following error message:
	
	  MSGSRV32
	  This program has performed an illegal instruction and will be shut down.
	
	Clicking Details produces the following information:
	
	  MSGSRV32 caused a General Protection Fault in module Rsrcmgr.dll
	
	Clicking Close causes the computer to stop responding (hang).
	
	CAUSE
	=====
	
	This error can occur if QEMM 8.0 by Quarterdeck is installed and the real- mode
	QEMM memory management files (Dosdata.sys and Qemm386.sys) are not loaded in
	memory when Rsrcmgr.dll is loaded from the System.ini file.
	
	RESOLUTION
	==========
	
	To correct this situation, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode Command Prompt Only.
	
	2. Use any text editor (such as Edit.com) to open the System.ini file in the
	  Windows folder.
	
	3. Disable the "drivers=rsrcmgr.dll" line or the "drivers=c:\qemm\ freemeg.dll"
	  line in the [boot] section of the System.ini file by placing a semicolon (;)
	  at the beginning of the line.
	
	4. Add the following line below the line you disabled in step 3:
	
	  drivers=mmsystem.dll
	
	5. Save and then close the System.ini file.
	
	6. Restart your computer.
	
	MORE INFORMATION
	================
	
	This situation can occur if QEMM 8.0 is installed on a Windows 3.x-based
	computer that is later upgraded to Windows 95. The Rsrcmgr.dll file is a
	resource manager file included with QEMM 8.0 for use with Windows 3.x. This file
	is not for use with Windows 95. If you install QEMM 8.0 in Windows 95, the
	Rsrcmgr.dll file is not loaded.
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: gpf safemod
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
