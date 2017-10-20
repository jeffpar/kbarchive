---
layout: page
title: "Q84347: Change the Blinking Cursor to a Solid Cursor"
permalink: /kb/084/Q84347/
---

## Q84347: Change the Blinking Cursor to a Solid Cursor

{% raw %}

	Article: Q84347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change the cursor within an application to a constant "ON" (non- blinking)
	state:
	
	1. Open the WIN.INI file using any text editor (for example Notepad or MS-DOS
	  Editor).
	
	2. Locate the [Windows] section.
	
	3. Change "CursorBlinkRate=" to a value of -1.
	
	MORE INFORMATION
	================
	
	Setting "CursorBlinkRate=-1" causes the cursor to remain in the "ON" state.
	
	When a cursor is displayed in a Windows-based application, it appears as a
	blinking cursor. As default, "CursorBlinkRate=530" is set in the WIN.INI file's
	[Windows] section. This blink rate is normally changed from the Desktop setting
	in Control Panel. When the Desktop Blink Rate is set to Slow, the WIN.INI file
	is changed to "CursorBlinkRate=1200". If the Blink Rate is set to Fast, the
	WIN.INI file is changed to "CursorBlinkRate=200". This setting determines how
	much time, in milliseconds, the cursor will be displayed and, accordingly, how
	much time it will be off.
	
	If you are using a Microsoft Mouse, you may want to call the Microsoft Sales
	Information Center (MSIC) at (800) 426-9400 for information about obtaining the
	Mouse Driver 8.20 kit, which comes with a utility that allows you to change the
	size of the mouse pointer.
	
	Additional query words: 3.0 3.00a 3.1 blink
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
