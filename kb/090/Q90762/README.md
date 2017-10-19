---
layout: page
title: "Q90762: Information on System Resources in Windows"
permalink: /kb/090/Q90762/
---

## Q90762: Information on System Resources in Windows

	Article: Q90762
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbusage kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses system resources for Microsoft Windows versions 3.0 and
	3.1, explains how the "System Resources: XX% Free" value is calculated, and
	describes what to do if system resources become depleted.
	
	MORE INFORMATION
	================
	
	System Resources in Windows 3.0
	-------------------------------
	
	When you choose About Program Manager from the Help menu in Program Manager,
	Windows reports a "System Resources: XX% Free" value. This percentage is derived
	from two of the three major Windows components, USER.EXE and GDI.EXE. (The third
	component is KRNL286.EXE or KRNL386.EXE, depending on the mode in which Windows
	is running.)
	
	USER.EXE and GDI.EXE each have a data segment (that is, heap) limited to 64K. The
	8086/80286 platform architecture imposes this 64K limit. Program Manager checks
	the percentage of free heap space for both USER.EXE and GDI.EXE. It then reports
	the smaller of the two percentages. For example, if USER.EXE has 50 percent free
	heap space, and GDI.EXE has 70 percent free heap space, Program Manager reports
	50 percent.
	
	USER.EXE and GDI.EXE
	--------------------
	
	The USER.EXE heap contains information about windows being used by active
	applications. The data structure for each window, including any minimized
	windows, is stored in this heap. Examples of windows include application
	windows, dialog boxes, and controls (such as buttons and check boxes).
	
	The GDI.EXE heap contains graphical objects, such as pens, brushes, cursors,
	fonts, and icons.
	
	System Resources in Windows 3.1
	-------------------------------
	
	A large number of items that originally occupied space in the USER.EXE heap in
	Windows 3.0 were moved into separate heaps in Windows 3.1.
	
	Two new heaps were created, each limited to 64K. Menu structures are now stored
	in one heap; menu and window text strings are stored in another heap. Also,
	window data structures, which are stored in the USER.EXE heap, are slightly
	smaller than in Windows 3.0.
	
	The GDI.EXE heap capacity in Windows 3.1 decreased slightly. All the objects
	stored in the GDI.EXE heap were enlarged by 1 byte, making its capacity slightly
	less than it was in Windows 3.0.
	
	The percentage of available free space is computed for each of the four heaps
	separately. The lowest value is then reported as the percentage of available
	system resources, as in Windows 3.0.
	
	Running Out of System Resources
	-------------------------------
	
	In Windows 3.1, as in version 3.0, you can run out of system resources
	occasionally because the GDI.EXE heap is still limited to 64K. The entire
	GDI.EXE heap can become full with buttons, dials, and other graphical objects,
	causing a low system resources error, even if the other heaps are relatively
	empty.
	
	Closing Windows applications, frees most USER.EXE objects. However, GDI.EXE
	objects such as pens and brushes are not always freed, even when heavily
	graphics-oriented applications are closed. Some portion of the GDI.EXE heap may
	be lost until you restart Windows.
	
	Reducing System Resources Usage
	-------------------------------
	
	In Windows 3.0 Program Manager, each displayed icon in a group consumes
	approximately one-half of one percent of the "System Resources: XX% Free"
	figure. System resources are not released if the group is minimized or if the
	icon is deleted during a Windows session. However, if you keep a group minimized
	when you exit Windows, the next time you start Windows the icons in the group do
	not take up system resources until you open the group.
	
	NOTE: In Windows 3.1, each group takes just one window, regardless of the number
	of icons in it.
	
	If your system resources are often low, keeping few applications running is
	probably the best solution; however, you may also want to do the following:
	
	- Minimize seldom-used groups to conserve system resources.
	
	- Don't use wallpaper or use a small bitmap and tile it.
	
	- Try not to keep groups that have many icons open.
	
	- If you run an application that uses system resources every time it runs, try
	  to keep it open instead of closing and reopening it many times during the
	  day.
	
	- Try not to load fonts that aren't needed.
	
	- Check your screen savers to make sure that they are not leaking resources.
	
	Additional query words: 3.11 3.10 3.00 3.00a iconized insufficient
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
