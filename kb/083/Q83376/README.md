---
layout: page
title: "Q83376: SMARTDrive ElementSize Should Precede CacheSizes"
permalink: /kb/083/Q83376/
---

## Q83376: SMARTDrive ElementSize Should Precede CacheSizes

{% raw %}

	Article: Q83376
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDrive (SMARTDRV.EXE) is a disk caching program provided with the Microsoft
	Windows operating system version 3.1.
	
	SMARTDRV.EXE version 4.0 includes a parameter, /e:ElementSize. The ElementSize
	specifies the amount of the cache (in bytes) SMARTDrive moves at a time.
	
	The ElementSize should precede the CacheSize(s) to work as documented. If the
	ElementSize is loaded after the InitCacheSize and/or the WinCacheSize, the
	actual cache size and allocated memory values may differ from those specified
	when SMARTDrive is executed.
	
	MORE INFORMATION
	================
	
	The SMARTDRV.EXE cache driver version 4.0 is loaded in the AUTOEXEC.BAT file.
	Its parameters include ElementSize, InitCacheSize, WinCacheSize, and
	BufferSize.
	
	Switches and/or parameters for some device drivers and commands are not
	order-specific; however, the ElementSize for SMARTDRV.EXE version 4.0 should
	precede the CacheSize(s) for SMARTDrive to allocate the intended cache size(s).
	
	The ElementSize specifies the amount of the cache SMARTDrive moves at a time.
	Valid values are 1024, 2048, 4096, and 8192 bytes. The default value is 8192
	bytes.
	
	If a value for the ElementSize is not set to the default of 8192 bytes and the
	ElementSize appears on the SMARTDrive command line after the CacheSize(s), these
	CacheSizes will be reduced in direct proportion to the reduced ElementSize.
	
	For example:
	
	  SMARTDRV 2048 1024 /e:4096
	
	In the above example, 2048 is the InitCacheSize (in kilobytes), 1024 is the
	WinCacheSize (in kilobytes), and 4096 (in bytes) is the ElementSize. Because the
	ElementSize of 4096 bytes is one-half of the default size (8192 bytes), the
	InitCacheSize as well as the WinCacheSize would be reduced by one-half,
	adjusting their values to 1024 and 512, respectively. This is reflected by the
	MS-DOS MEM and SMARTDRV /S commands.
	
	When the ElementSize follows the (Init or Win)CacheSize parameter, the actual
	cache size is determined by the ElementSize multiplied by the number of
	elements. The number of elements is determined by the CacheSize parameter; if
	CacheSize is 2048k, then the number of elements is 256. A CacheSize of 1024K
	yields 128 elements; a CacheSize of 512K yields 64 elements; and so on.
	
	Additional query words: Smart Drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
