---
layout: page
title: "Q85022: Windows Err Msg: Protected Mode Violation... with DTK 486"
permalink: /kb/085/Q85022/
---

## Q85022: Windows Err Msg: Protected Mode Violation... with DTK 486

{% raw %}

	Article: Q85022
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to start Windows version 3.0 in standard mode on a DTK 486 computer,
	the following error may occur:
	
	  Protected-mode violation; try running in real mode.
	
	To resolve this problem, you should disable the Memory Relocate option in the
	computer's CMOS settings.
	
	MORE INFORMATION
	================
	
	For Windows 3.0 to operate correctly in standard mode, the Memory Relocate
	option should be disabled in the CMOS, according to DTK technical support. If
	the Memory Relocate option is set at 256K, the machine is set to protected mode,
	which produces the above Windows error message.
	
	To enter the CMOS and disable the Memory Relocate option:
	
	1. Press ESC after the machine starts. This displays the CMOS Setup options.
	
	2. Select Symphony Chip Set setup.
	
	3. Choose the Memory Relocate option and use the arrow keys to toggle between
	  256K and 0K (zero K).
	
	4. Choose 0K (zero K).
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
