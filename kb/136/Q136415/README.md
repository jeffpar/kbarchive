---
layout: page
title: "Q136415: Err Msg: SUWIN Caused a General Protection Fault in Module..."
permalink: kb/136/Q136415/
---

## Q136415: Err Msg: SUWIN Caused a General Protection Fault in Module...

	Article: Q136415
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95, you may receive the following error
	message:
	
	  SUWIN caused a General Protection Fault in module SUWIN.EXE at 0006:6EB8
	
	CAUSE
	=====
	
	This error can occur when you upgrade an installation of Windows 3.x with more
	than 1200 TrueType fonts installed. This error halts Setup and may require you
	to restart your computer.
	
	RESOLUTION
	==========
	
	You can still run Windows 3.x after you receive this error message. Remove some
	of the TrueType fonts in Windows 3.x so that the total number of installed
	TrueType fonts is 1200 or less, and then run Windows 95 Setup again.
	
	
	Additional query words: gpf w95set
	
	======================================================================
	Keywords          : kberrmsg kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Hardware          : x86
	
	=============================================================================
	
