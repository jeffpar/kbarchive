---
layout: page
title: "Q133348: Windows 95/98: How to Read MS-DOS Mem Command Information"
permalink: /kb/133/Q133348/
---

## Q133348: Windows 95/98: How to Read MS-DOS Mem Command Information

{% raw %}

	Article: Q133348
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to read the results of the MS-DOS Mem command in
	Windows 95/98. To use the Mem command type the following at the MS-DOS command
	prompt and press ENTER:
	
	  " mem " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The Mem command shows the amount of total, used and free memory on your computer
	for each of the following memory areas:
	
	- Conventional: Up to the first 640K of memory on a computer.
	
	- Upper: The 384K of memory above your computer's 640K of conventional memory.
	
	- Reserved: The memory located on add-on boards such as video adapter boards.
	
	- Extended: Memory beyond 1 MB on computers with 80286, 80386, or 80486
	  processors.
	
	- Total Memory
	
	- Total Under 1 MB
	
	The Mem command also shows the following information:
	
	- Largest Executable Program Size: The largest contiguous block of conventional
	  memory available for a program.
	
	- Largest Free Upper Memory Block: The largest area of upper memory available
	  for a program.
	
	- MS-DOS Is Resident In The High Memory Area: Indicates that MS-DOS is running
	  in the first 64K of extended memory rather than in conventional memory.
	
	
	Additional query words: kbhowto Win95 1995 MEM
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
