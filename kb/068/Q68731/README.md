---
layout: page
title: "Q68731: ALR 386 Computers with Memory Cache Require EMMExclude"
permalink: /kb/068/Q68731/
---

## Q68731: ALR 386 Computers with Memory Cache Require EMMExclude

	Article: Q68731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Microsoft Windows, Advanced Logic Research (ALR) recommends using
	the "EMMEXCLUDE=" parameter in the [386Enh] section of the SYSTEM.INI file when
	the memory cache and/or the shadow RAM feature is enabled.
	
	For example:
	
	     [386Enh]
	     EMMEXCLUDE=E000-FFFF
	
	MORE INFORMATION
	================
	
	Most newer ALR 386 computers feature a 32K or 64K static memory cache or 128/64
	dual memory cache. The cache is always set to the E000-FFFF memory range.
	Windows should not use this range if this feature is enabled.
	
	The products included here, ALR computers, are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these product's performance or reliability.
	
	Additional query words: 3.00a 3.10 3.11 umb uma
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
