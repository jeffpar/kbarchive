---
layout: page
title: "Q94604: Incorrect SMARTDrive BufferSize Setting Hangs System"
permalink: kb/094/Q94604/
---

## Q94604: Incorrect SMARTDrive BufferSize Setting Hangs System

	Article: Q94604
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDrive version 4.0, the disk-caching utility supplied with Windows, has a
	switch, /b:BufferSize, that enables you to change the default size of
	SMARTDrive's buffer. If this switch contains an invalid entry, the result could
	hang the system during startup, requiring a boot (system) disk to start the
	computer.
	
	MORE INFORMATION
	================
	
	SMARTDrive's buffer is separate from the cache. Data is initially transferred to
	the buffer's memory, then written to the cache in portions, as determined by the
	/e:ElementSize switch. The default element size is 8192 bytes.
	
	The BufferSize setting is measured in bytes and has a default value of 16K. Page
	540 of the "Microsoft Windows User's Guide" states that the valid values for
	BufferSize can be any multiple of the ElementSize setting. The guide provides no
	upper limit. However, there is an upper limit on the BufferSize setting based on
	how much memory is available in the upper memory area (UMA) or in conventional
	memory.
	
	The valid entries for ElementSize and BufferSize are as follows:
	
	  If This Value
	  Is Used for /e        Use This Value for /b
	  ------------------------------------------------------------------
	
	  /e:1024               Multiples of /e up to and including /b:16384
	  /e:2048               Multiples of /e up to and including /b:32768
	  /e:4096               Multiples of /e up to and including /b:57344
	  /e:8192               Multiples of /e up to and including /b:57344
	
	If you attempt to use any other values, you may experience one of the following
	problems:
	
	- The system stops responding (hangs).
	
	- The error message "Sector not found reading drive x" (where "x" is the drive
	  being accessed after SMARTDrive is loaded) appears.
	
	- The size of SMARTDrive's buffer will not match the BufferSize setting.
	
	For additional information about SMARTDrive, refer to pages 539-541 in the
	"Microsoft Windows User's Guide."
	
	Additional query words: 3.10 3.1 smartdrv smartdrv.exe buffer size crash lock lockup DocErr smart drive
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
