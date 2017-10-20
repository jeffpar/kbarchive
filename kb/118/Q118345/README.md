---
layout: page
title: "Q118345: Problems Using Publisher's Paintbrush 2.0 in Windows 95"
permalink: /kb/118/Q118345/
---

## Q118345: Problems Using Publisher's Paintbrush 2.0 in Windows 95

{% raw %}

	Article: Q118345
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31 win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- When you copy an image onto the Clipboard (using CUT, COPY, or Print Screen)
	  and then paste that image into Publisher's Paintbrush 2.0, you receive a
	  general protection (GP) fault.
	
	- Selecting an unavailable font in Publisher's Paintbrush 2.0 generates a GP
	  fault.
	
	- When you run Publisher's Paintbrush 2.0 under Windows 95, you see a window
	  title that displays only the letter "W."
	
	CAUSE
	=====
	
	GP Fault When Pasting an Image
	------------------------------
	
	Publisher's Paintbrush 2.0 expects the Clipboard to contain a device- independent
	bitmap (DIB). If a DIB is present, Publisher's Paintbrush 2.0 assumes that it is
	a 1-, 8-, or 24-bit bitmap. If a 4-bit DIB is on the Clipboard, a GP fault
	occurs.
	
	GP Fault When Selecting Unavailable Font
	----------------------------------------
	
	This problem is caused by a limitation in Publisher's Paintbrush 2.0.
	
	Window Title with Only the Letter "W" Visible
	---------------------------------------------
	
	This particular window is known as a "child window" and should read "Width." This
	child window is of a fixed sized; therefore, it cannot be changed. You cannot
	read the entire word "Width" because Windows 95 adds the Close button in the
	upper-right corner of the window.
	
	RESOLUTION
	==========
	
	For information about whether the latest version of PC Paintbrush corrects these
	problems, contact SoftKey.
	
	MORE INFORMATION
	================
	
	SoftKey purchased ZSoft and replaced Publisher's Paintbrush 2.0 with PC
	Paintbrush 1.0.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.10 prntscrn err msg bmp 3rdparty
	
	======================================================================
	Keywords          : win31 win95 appscomp kbAppCompatibility 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.0,3.0a,3.1,3.11
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
