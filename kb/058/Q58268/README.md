---
layout: page
title: "Q58268: Using ALT+TAB with Attachmate Extra! (Windows 3.0)"
permalink: kb/058/Q58268/
---

## Q58268: Using ALT+TAB with Attachmate Extra! (Windows 3.0)

	Article: Q58268
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	You cannot ALT+TAB out of an MS-DOS application that is performing
	constant network access, such as Attachmate "Extra!", under Microsoft
	Windows 3.0 standard or real modes.
	
	Using ALT+TAB is not a problem in Windows 3.0 386 enhanced mode because in
	this mode, Windows can run MS-DOS applications in the background; thus, the
	constant network access may continue.
	
	Extra! is constantly receiving datagram Network Control Blocks (NCBs)
	while it is loaded (even when run as a TSR). If you ALT+TAB out during
	its operation, Extra! freezes in the current mode and loses the
	connection.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
