---
layout: page
title: "Q82262: Windows Err Msgs: Out of Memory Errors with Lotus 1-2-3"
permalink: /kb/082/Q82262/
---

## Q82262: Windows Err Msgs: Out of Memory Errors with Lotus 1-2-3

{% raw %}

	Article: Q82262
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Out of memory errors with Lotus 1-2-3 version 1.0 for Windows may be the result
	of incorrect installation of Lotus 1-2-3, low system resources in Windows, or
	insufficient free memory. The information that follows discusses each of the
	three situations in more detail.
	
	MORE INFORMATION
	================
	
	Incorrect Installation
	----------------------
	
	Incorrect installation of Lotus 1-2-3 version 1.0 for Windows may result in the
	following error message when attempting to run the program:
	
	  Insufficient memory to run application; Close one or more applications to
	  increase available memory and try again.
	
	Lotus for Windows requires at least 2 MB of free XMS memory. You can only choose
	"2 MB" or "4 MB" to indicate available memory during the Lotus Setup program.
	However, if you don't actually have the available memory needed on your system,
	the above error message appears.
	
	To illustrate this problem, suppose your machine was sold as a "2 MB" machine,
	meaning that the machine contains 640K of conventional memory, 384K of memory
	reserved for the adapter segment (the UMA), and only 1 MB of free XMS memory. If
	you try to complete setup by choosing the 2 MB option (the lowest choice
	available), the "Insufficient memory to run application error" message appears
	when you run Lotus 1-2-3 because you did not actually have 2 MB of free XMS
	memory available to Lotus on the system.
	
	Allocating less memory to utilities such as SMARTDRV.SYS, RAMDRIVE.SYS, and
	EMM386.EXE may solve the problem. If you have a 386-based computer, you may also
	avoid the error by creating or enlarging a permanent swap file.
	
	Low System Resources
	--------------------
	
	When starting Lotus 1-2-3 for Windows, you may get the following error message:
	
	  Not enough system resources available to run 1-2-3. End an application and
	  try 1-2-3 for Windows again.
	
	After receiving the above error message, choose About Program Manager from the
	Help menu in Microsoft Windows version 3.0 Program Manager. If there is less
	than 29% Free System Resources, Lotus 1-2-3 for Windows will not load. You will
	need to close applications that are running, and free some system resources so
	Lotus 1-2-3 for Windows can load.
	
	Insufficient Free Memory
	------------------------
	
	If you are running Lotus 1-2-3 for Windows while other Windows 3.0 or
	MS-DOS-based applications are running, you may encounter the following error
	message:
	
	  1-2-3 for Windows Memory Full
	
	Under very low-memory conditions, the system may stop responding (hang).
	
	This problem occurs even when there is ample memory according to the About
	Program Manager dialog box (choose About Program Manager from the Help menu). In
	addition, this problem can occur when you are using another application and
	Lotus 1-2-3 for Windows is minimized.
	
	To overcome this problem, try one of the following steps:
	
	1. Create a permanent swap file that may correct this problem.
	
	2. Closing other applications will usually correct this problem, although you
	  may need to restart Lotus 1-2-3 for Windows for it to see the free memory.
	
	3. Disable use of the SmartIcons in Lotus. To do this, choose SmartIcons from
	  the Tools menu, and select the Hide Palette check box.
	
	4. Cancel the Undo selection (turn it off). When Undo is turned on, the amount
	  of memory available can vary significantly after each command you use. For
	  example, if you erase a large range, Undo stores the erased range, which uses
	  a large amount of memory.
	
	  Note: You can disable Undo by choosing User Setup from the Tools menu and
	  clearing the Enable Edit Undo check box.
	
	The problems discussed here are in Lotus 1-2-3's memory usage and requirements,
	not in Windows 3.0 or 3.1.
	
	
	The Lotus 1-2-3 product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For more information, contact Lotus technical support.
	
	Additional query words: 3.0 3.0a 3.1 123w 3.00a lotus-123 123 low memory 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	
	=============================================================================
	

{% endraw %}
