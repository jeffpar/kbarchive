---
layout: page
title: "Q93921: PRB: SDK INSTALL Having Problems Opening INSTALL.INF"
permalink: kb/093/Q93921/
---

## Q93921: PRB: SDK INSTALL Having Problems Opening INSTALL.INF

	Article: Q93921
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs when attempting to install the Windows
	Software Development Kit (SDK):
	
	  Install is having problems opening INSTALL.INF
	  Please check to see that this file is available.
	
	CAUSE
	=====
	
	INSTALL searches the current directory for INSTALL.INF; therefore, it must be
	run from the floppy drive containing the install disk.
	
	Note: the same problem occurs when INSTALL.INF resides on a CD-ROM disc and that
	drive is not the current drive.
	
	RESOLUTION
	==========
	
	Run INSTALL from the floppy or CD-ROM drive. For example, type
	
	  " a: <CR> install " (without the quotation marks)
	
	rather than:
	
	  " a:install " (without the quotation marks)
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
