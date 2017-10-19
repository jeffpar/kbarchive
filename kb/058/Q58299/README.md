---
layout: page
title: "Q58299: System Integrity Violated Pasting with VT52.SYS"
permalink: /kb/058/Q58299/
---

## Q58299: System Integrity Violated Pasting with VT52.SYS

	Article: Q58299
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you paste into an MS-DOS application under Microsoft Windows 3.0 enhanced
	mode with VT52.SYS loaded, you may receive a
	
	  system integrity violation
	
	error.
	
	CAUSE
	=====
	
	This error is due to a problem in the VT52.SYS device driver, which has no
	overflow checking for its buffer.
	
	WORKAROUND
	==========
	
	Turning off the Allow Fast Paste option in the PIF file may help to correct the
	problem.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
