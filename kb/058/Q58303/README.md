---
layout: page
title: "Q58303: SYSTEM.INI Setting Required for AST VGA Plus"
permalink: /kb/058/Q58303/
---

## Q58303: SYSTEM.INI Setting Required for AST VGA Plus

	Article: Q58303
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	For proper operation in Microsoft Windows  386 enhanced mode on the
	AST VGA Plus card, the following line is required in the [386Enh]
	section of the SYSTEM.INI file:
	
	     EMMEXCLUDE=C000-C500
	
	This requirement is due to nonstandard ROM mapping by the AST VGA Plus.
	
	If this line is not included, the system may stop responding (hang or lock
	up) when starting or running Windows in 386 enhanced mode.
	
	Additional query words: 3.00 3.0 3.0a 3.00a hang lock freeze win30 KBHW 3.10 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
