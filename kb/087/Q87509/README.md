---
layout: page
title: "Q87509: No Text When Using Stealth and Running MS-DOS in a Window"
permalink: /kb/087/Q87509/
---

## Q87509: No Text When Using Stealth and Running MS-DOS in a Window

	Article: Q87509
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Diamond technical support has confirmed that if you use a Stealth graphics
	accelerator card and start MS-DOS Prompt in a window, the window will be blank
	except for a blinking cursor. When you type, the cursor moves but still no text
	can be seen.
	
	This behavior occurs when using Microsoft Windows VGA and Super VGA drivers with
	the Diamond Stealth graphics accelerator card.
	
	WORKAROUND
	==========
	
	1. Start MS-DOS Prompt in full-screen mode, then run it in a window by pressing
	  ALT+ENTER.
	
	  -or-
	
	2. If MS-DOS Prompt was started in a window, change to full-screen mode by
	  pressing ALT+ENTER. This will make the text visible. If ALT+ENTER is later
	  pressed to run MS-DOS Prompt in a window, the text will remain visible.
	
	  -or-
	
	3. Try installing the VGA (version 3.0) display driver that comes with Windows
	  3.1.
	
	The Diamond Stealth product is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3rdparty see can't invisible
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
