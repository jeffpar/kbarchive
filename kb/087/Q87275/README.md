---
layout: page
title: "Q87275: BACKSPACE Key Does Not Delete Characters in VT100 Emulation"
permalink: kb/087/Q87275/
---

## Q87275: BACKSPACE Key Does Not Delete Characters in VT100 Emulation

	Article: Q87275
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Terminal version 3.0 or 3.1 in VT100 terminal emulation to connect
	to a VAX, the BACKSPACE key does not erase previously typed characters (that is,
	it does not move the cursor back one space, and it does not remove the previous
	character.)
	
	RESOLUTION
	==========
	
	The correct way to backspace in Terminal when connected to a VAX is to press the
	CTRL+H key combination. The function of the BACKSPACE key varies with the host
	environment.
	
	Additional query words: 3.00 3.00a 3.10 3.11 vt 100 vax delete remove
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
