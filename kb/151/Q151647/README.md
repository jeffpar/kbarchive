---
layout: page
title: "Q151647: Multimedia: Hourglass Icon or Program Stops Responding"
permalink: kb/151/Q151647/
---

## Q151647: Multimedia: Hourglass Icon or Program Stops Responding

	Article: Q151647
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed above, the mouse pointer
	changes to an hourglass, but the program does not start. Additionally, the
	program may stop responding (hang).
	
	Or, when you try to play a video in the multimedia program listed above, the
	video screen is black, and then the program stops responding.
	
	CAUSE
	=====
	
	This issue can occur if there is an extremely low amount of free global memory
	available. For example, Bookshelf '96-'97 does not start if there is less than
	2.25 MB of total free RAM (Random Access Memory) memory plus "virtual" memory
	(which uses free hard-drive space). If the Windows virtual memory feature is
	turned off, these problems become noticeable very quickly.
	
	For example, if you have a computer with only 4 MB of RAM, approximately 1 MB is
	used for Conventional and Upper Memory, and perhaps 1 MB for disk caching. That
	leaves 2 MB of Extended (XMS) memory for Windows to use. Then, if you start
	several programs, you run out of physical memory (RAM). Windows attempts to use
	virtual memory, but if this feature is not turned on, you receive an "out of
	memory" message. If the available memory is extremely low, you may experience
	other, unpredictable results.
	
	RESOLUTION
	==========
	
	If you have the recommended amount of RAM, installing more RAM does not usually
	resolve these problems. Instead, use the following troubleshooting methods. Step
	through each method in the order in which they are listed. After each method,
	text the program to see if the issue is resolved. If the issue continues,
	proceed to the next method.
	
	Check Amount of RAM
	-------------------
	
	When your computer first boots, it counts the amount of total RAM. For example,
	if you have 4 MB of RAM, the count stops at 4192. For 8 MB, the count stops at
	8192. If you do not have the recommended amount of RAM required to run the
	multimedia program, you need to install more RAM or return the program to the
	place of purchase. The system requirements for the program are printed on the
	program's box.
	
	Windows 3.1: Checking Amount of Total Free Memory
	-------------------------------------------------
	
	1. On the Help menu in Program Manager, click About Program Manager.
	
	2. Make sure your computer is configured to run in Enhanced mode; Standard mode
	  cannot use virtual memory.
	
	3. Note the "Memory" figure listed. This is your total free memory at this
	  moment, which is free RAM plus free virtual memory.
	
	Windows 95/98: Checking The Total Amount Of Physical Memory
	-----------------------------------------------------------
	
	1. Right-click My Computer, and then click Properties.
	
	2. The amount of RAM installed in the computer is listed at the bottom of the
	  "Computer:" section on the General tab. Note this figure.
	
	This is not the amount of RAM that is free, but the total amount available to
	Windows. If you do not have the recommended amount for the multimedia program,
	you need to install more RAM or return the program for a refund
	
	Check Windows Virtual Memory Settings
	-------------------------------------
	
	Make sure Virtual Memory is turned on, and is set to at least 10,000k (10 MB).
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	Close any other Programs that are Running
	-----------------------------------------
	
	Closing programs frees up memory and makes it available to your multimedia
	program.
	
	Free Up More Hard-Disk Space
	----------------------------
	
	Your hard disk is used for virtual memory. You can free up hard-disk space by
	deleting files you no longer need.
	
	MORE INFORMATION
	================
	
	Windows 95/98 32-bit programs require virtual memory for 32-bit paging. It is
	recommended that you keep a minimum of 20 MB free on the hard disk at all times.
	It is also recommended that you have Windows manage the Virtual Memory setting.
	For example, Encarta 96 World Atlas requires a minimum of 24 MB of memory (RAM
	plus virtual memory). If you have 8 MB of RAM, at least 16 MB needs to be free
	on the hard disk (with virtual memory enabled), for World Atlas to run
	properly.
	
	For Windows 3.1 programs, virtual memory can be disabled if you have a large
	amount of RAM.
	
	For more information about memory requirements and troubleshooting, please refer
	to the Readme file located on the multimedia program compact disc.
	
	Additional query words: 1995 '96 96 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbBookShelf1996 kbBookShelf1997 kbEncartaWorldAtlas1996
	
	=============================================================================
	
