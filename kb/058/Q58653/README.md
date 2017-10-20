---
layout: page
title: "Q58653: CodeView Does Not Support Debugging Spawned Process"
permalink: /kb/058/Q58653/
---

## Q58653: CodeView Does Not Support Debugging Spawned Process

{% raw %}

	Article: Q58653
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	-------------------------------------------------------------------------------
	
	The following are several reasons why CodeView doesn't provide
	debugging support for spawned processes in MS-DOS:
	
	1. MS-DOS is not a multitasking operating system. CodeView cannot start another
	  thread/process to watch the execution of the spawned process.
	
	2. MS-DOS does not provide debugging support for the MS-DOS BIOS calls
	  (Interrupt 21h). Since all spawn() and exec() functions in MS-DOS must go
	  through the BIOS to run, CodeView cannot follow the spawned program.
	
	3. MS-DOS only recognizes 640K of memory; therefore, there is insufficient
	  memory to debug a large program, since both the parent and child processes
	  must reside in memory at the same time.
	
	Additional query words: kbinf 2.20 3.00 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS
	Version           : :2.2,3.0,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
