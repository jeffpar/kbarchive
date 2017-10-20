---
layout: page
title: "Q65438: Low-System Memory Messages in Virtual Machines of Windows"
permalink: /kb/065/Q65438/
---

## Q65438: Low-System Memory Messages in Virtual Machines of Windows

{% raw %}

	Article: Q65438
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the MS-DOS Prompt from Microsoft Windows in 386 enhanced mode, you
	see less than the 640K total system memory if you run utilities such as CHKDSK.
	
	CAUSE
	=====
	
	If Windows 3.0 or 3.1 is installed on a system with an earlier version of
	Windows (including run-time versions), the system may have retained the [pif]
	section in the WIN.INI file. The [pif] section was used in earlier Windows
	versions to set the memory size for certain applications. In particular, it may
	have a memory size listed for COMMAND.COM that limits the size of the virtual
	machine created when you run the MS-DOS Prompt. As a result, you may get an
	inaccurate reading of your system memory.
	
	If you have these limited [pif] settings, you may also generate the
	
	  Insufficient memory
	
	messages when you try to execute the MS-DOS Prompt, or the "Processing cannot
	continue" message when you execute commands from within the MS-DOS virtual
	machine.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 invoke run start dos window mode
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
