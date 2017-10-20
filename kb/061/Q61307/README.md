---
layout: page
title: "Q61307: Do Not Start Programmer's WorkBench by Typing PWBED"
permalink: /kb/061/Q61307/
---

## Q61307: Do Not Start Programmer's WorkBench by Typing PWBED

{% raw %}

	Article: Q61307
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You should not start the Programmer's WorkBench (PWB) by typing PWBED. This is
	incorrect. Type PWB to start the Programmer's WorkBench environment.
	
	MORE INFORMATION
	================
	
	In the REAL MODE directory specified during setup, there will be two executables
	for the PWB, PWB.COM and PWBED.EXE. PWB.COM actually spawns PWBED.EXE. If you
	use PWBED to start the PWB, it will consume approximately 500K of memory. By
	executing a DOS SHELL from within the PWB and running CHKDSK, you will notice
	there is very little memory left.
	
	When you invoke the PWB the correct way (by typing PWB), then shell- out and do a
	CHKDSK, you will see that the PWB has only consumed approximately 8K of
	available memory.
	
	The PWB appears to work correctly if you invoke it with PWBED. However, since it
	is using so much memory, you will receive memory problems, such as "out of
	memory," "cannot compile," "cannot build," "program too big to fit in memory,"
	and "could not execute C1.EXE." These are caused because there is not enough
	memory to spawn either NMAKE, the compiler, or the linker.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	
	=============================================================================
	

{% endraw %}
