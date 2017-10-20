---
layout: page
title: "Q89788: SMARTDRV /S Output Defined"
permalink: /kb/089/Q89788/
---

## Q89788: SMARTDRV /S Output Defined

{% raw %}

	Article: Q89788
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDrive 4.0, which is included with Windows 3.1, is able to report
	information about the performance of SMARTDrive. Typing in the command SMARTDRV
	/S reports cache hits, misses, element size, and disk caching status. This
	information indicates the effectiveness of SMARTDrive.
	
	MORE INFORMATION
	================
	
	Loading SMARTDrive (SMARTDRV.EXE) at the command line by typing
	
	  smartdrv.exe 2048 2048
	
	and then typing
	
	  smartdrv /s
	
	provides information similar to the following:
	
	  Room for 256 elements of 8,192 bytes each
	  There have been 8,980 cache hits
	  and 1,966 cache misses
	
	  Cache size: 2,097,152 bytes
	  Cache size while running Windows: 2,097,152 bytes
	
	              Disk Caching Status
	  drive   read cache   write cache   buffering
	  --------------------------------------------
	  A:       yes          no            no
	  B:       yes          no            no
	  C:       yes          yes           no
	
	DEFINITIONS
	-----------
	
	The following information defines the output of each line in SMARTDRV /S.
	
	Room for 256 Elements of 8,192 Bytes Each
	-----------------------------------------
	
	The number of elements is modified depending upon the specified cache size and
	the element size. In this case, 2,097,152 (the specified cache size) divided by
	8,192 (the element size) is 256 (the number of elements). Therefore, there are
	256 elements, each containing 8,192 bytes. Element size is the number of bytes
	that will be moved at one time by SMARTDrive.
	
	The number of elements reported can only be modified by changing the element size
	or the cache size. The number of elements cannot be modified directly.
	Information on how to change the cache size and element size can be found on
	page 539 of the "Microsoft Windows User's Guide" for version 3.1.
	
	There Have Been 8,980 Cache Hits and 1,966 Cache Misses
	-------------------------------------------------------
	
	The number of hits indicates how many times an element has been found in the
	cache before going to the hard disk. The number of misses indicates the element
	was not found in the read cache and a hard disk access occurs.
	
	Generally a larger specified cache size results in a higher hit-to-miss ratio,
	although this depends on the type of usage. Because the cache size is larger,
	more data will be found in the cache and should result in a higher amount of
	hits. Note that allocating too much memory to SMARTDrive can cause memory
	problems because there may not be adequate memory for other programs.
	
	Cache Size: 2,097,152 Bytes, Cache Size While Running
	
	Windows: 2,097,152 Bytes
	------------------------
	
	Cache size is determined by the number of elements multiplied by the number of
	bytes in each element. In the above example, 256 (elements) multiplied by 8,192
	(number of bytes in each element) is 2,097,152.
	
	Disk Caching Status
	-------------------
	
	This reports the caching status of each drive (read cache, write cache). It also
	reports buffering of each drive. For each drive that is being cached, it can
	have one of three values in the buffering column:
	
	  yes, no, or -
	
	"Yes" indicates that double buffering is needed. "No" indicates that buffering is
	not needed. "-" indicates that SMARTDrive has not yet determined the necessity
	of double buffering. If the buffering column has all no's in it, the
	double-buffer driver is unneeded.
	
	In most cases, double buffering is not needed. If it is determined that double
	buffering is needed and Windows 3.1 Setup did not install it, see page 541 of
	the "Microsoft Windows User's Guide" for information about installing SMARTDrive
	in the CONFIG.SYS file with double buffering.
	
	For more information about SMARTDrive, see page 537 of the "Microsoft Windows
	User's Guide" and page 252 of the "Microsoft Windows Resource Kit" manual.
	
	Additional query words: 3.10 3.11 optimize smart drive SMARTDRV
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
