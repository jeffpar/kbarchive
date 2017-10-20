---
layout: page
title: "Q73829: Windows/386 2.1x Compatibility with MS-DOS 5.0 or Later"
permalink: /kb/073/Q73829/
---

## Q73829: Windows/386 2.1x Compatibility with MS-DOS 5.0 or Later

{% raw %}

	Article: Q73829
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 386 versions 2.1 and 2.11 cannot run when EMM386.EXE from MS-DOS 5.0 or
	later is loaded in the CONFIG.SYS file. Attempting to use this configuration
	results in the following error message:
	
	  Error: Protected mode software already installed
	
	This problem occurs regardless of which switches are used with EMM386.EXE. To run
	Windows/386 2.1x, you cannot use EMM386.EXE to emulate expanded memory or load
	drivers high.
	
	MORE INFORMATION
	================
	
	Other device drivers from the Microsoft MS-DOS 5.0 Upgrade to be aware of are
	listed in the README.TXT file section 4.5.
	
	The following is an excerpt from the README.TXT file:
	
	4.5 "High Memory Area in Use" Message (Windows/386 2.1)
	-------------------------------------------------------
	
	You cannot run Windows/386 2.1 when MS-DOS 5.0 is loaded into the high memory
	area. Also, the MS-DOS 5.0 versions of SMARTDRV.SYS and RAMDRIVE.SYS are not
	compatible with Windows/386 2.1. To run Windows/386 2.1 with MS-DOS 5.0, use the
	versions of SMARTDRV.SYS and RAMDRIVE.SYS that came with Windows and remove the
	DOS=HIGH command, if any, from your CONFIG.SYS file.
	
	Additional query words: 5.00 5.00a 6.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
