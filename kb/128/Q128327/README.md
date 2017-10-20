---
layout: page
title: "Q128327: How Windows 95 Manages Virtual Memory"
permalink: /kb/128/Q128327/
---

## Q128327: How Windows 95 Manages Virtual Memory

{% raw %}

	Article: Q128327
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): diskmem win95 win98 kbWinME kbDiskMemory
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	If this article does not describe your hardware-related issue, please see the following Microsoft Web site to view more articles about hardware: 
	
	  http://support.microsoft.com/support/windows/topics/hardware/hwddresctr.asp
	
	SUMMARY
	=======
	
	This article contains information and commonly asked questions about virtual
	memory in Microsoft Windows.
	
	Windows uses a dynamic virtual memory manager to handle swap file duties. You
	should use the default virtual memory settings whenever possible. However, if
	you have limited hard disk space you may want to set some of the virtual memory
	settings manually.
	
	MORE INFORMATION
	================
	
	In order to provide more memory to applications than is physically present in
	the computer in the form of RAM, Windows uses hard disk space to simulate RAM.
	The amount of RAM in the computer plus the size of the paging file (also known
	as the swap file) equals the total physical memory, or virtual memory, size.
	Windows uses a dynamic paging file that remains at a size of 0K until it is
	needed. The paging file can grow to use all the available space on the hard disk
	if it is necessary. This is the default setting for the paging file. You should
	use this setting if possible.
	
	If you have limited hard disk space, other applications may reduce the amount of
	virtual memory below that needed by Windows and its applications. If this
	occurs, choose the "Let me specify my own virtual memory settings" option button
	on the Performance tab of the My Computer property sheet. You can use this
	option to set a minimum and maximum size for the paging file. Setting this too
	low can result in "out of memory" errors or worse when virtual memory
	requirements exceed the maximum limit.
	
	You can also choose to use no virtual memory. You should use this option only if
	there is enough RAM to meet all the needs of Windows and the applications you
	run.
	
	NOTE: The Disable Virtual Memory option is unavailable on computers with 8 MB of
	RAM or less.
	
	QUESTIONS AND ANSWERS
	---------------------
	
	1. 
	
	  
	   Q. In Microsoft Windows version 3.x, a temporary swap file is slower
	      than a permanent swap file. Will letting Windows 95/98/Me set my
	      virtual memory slow down my computer?
	
	   A. No. The temporary swap file in Windows 3.x has to switch between
	      real mode and protected mode, slowing down the computer. As Windows
	      95/98/Me runs only in protected mode, the swap file is as fast or
	      faster than the permanent swap file in Windows 3.x.
	
	2. 
	
	   Q. I compressed my hard disk with DriveSpace. Can I still select my
	      own virtual memory settings? In Windows 3.x I cannot use a
	      permanent swap file on a compressed drive.
	
	   A. If your compressed drive is supported by a protected-mode driver,
	      it is better to use the compressed drive for the paging file. If
	      the compressed drive is not supported by a protected-mode driver
	      then you must place the paging file on the host drive.
	
	3. 
	
	  
	   Q. How can I determine whether my compressed drive is supported by a
	      protected-mode driver?
	
	   A. At this time there are protected-mode drivers only for DoubleSpace
	      and DriveSpace compressed drives. You can also check the IOS.INI
	      file (if it exists) in the Windows directory to see which drives
	      require real-mode support.
	
	Additional query words: HWMEM
	
	======================================================================
	Keywords          : diskmem win95 win98 kbWinME kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
