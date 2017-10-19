---
layout: page
title: "Q72006: AST Premium 286 Does Not Require Selection During Setup"
permalink: /kb/072/Q72006/
---

## Q72006: AST Premium 286 Does Not Require Selection During Setup

	Article: Q72006
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The AST Premium 286 is noted with an asterisk in the "Windows Version
	3.0 Hardware Compatibility List," indicating that it needs special
	handling during the installation process. This computer does not need
	special handling; the "MS-DOS and PC-DOS machines" entry should be
	chosen.
	
	When the "All 80386 and 80486 based AST machines" entry is chosen, an
	EMMExclude statement is added to the [386enh] section of the
	SYSTEM.INI file. This statement is unnecessary for 80286 machines.
	
	Additional query words: 3.0 3.00 win30 hcl
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
