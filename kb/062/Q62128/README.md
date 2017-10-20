---
layout: page
title: "Q62128: Windowed MS-DOS NIF Safety Tip"
permalink: /kb/062/Q62128/
---

## Q62128: Windowed MS-DOS NIF Safety Tip

{% raw %}

	Article: Q62128
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following information applies to the Microsoft MS-DOS LAN Manager versions
	2.0, 2.1, 2.1a, and 2.2 running under Windows versions 3.0 and 3.1.
	
	The network interface (NIF) is presented to the user upon typing the NET or NET
	ADMIN command. This interface allows network access, control, and maintenance.
	
	If MS-DOS LAN Manager's NET.EXE is run full screen inside Windows, an MS-DOS
	mouse driver (MOUSE.SYS or MOUSE.COM for the Microsoft mouse) must be run in
	order to use a mouse with NET.EXE. However, if Windows is running and ALT+ENTER
	is pressed at the full-screen command prompt, thus converting the full-screen
	command prompt into a windowed command prompt inside the Windows screen group
	(using OS/2 terminology), NET.EXE will work inside the Windows screen group.
	
	However, whether or not an MS-DOS mouse driver is installed, the mouse cannot be
	used to access the NET.EXE menus. Instead, use the keyboard accelerators. This
	appears to be a mouse contention problem with running a mouse-aware MS-DOS
	application in a windowed command prompt inside the Windows screen group. (That
	is, no mouse-aware MS-DOS applications can use the mouse when run in this
	windowed command prompt; it is not a limitation of NET.EXE.)
	
	Additional query words: 2.00 2.10 2.10a 2.20 3.00 3.10 win31 dos mouse
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
