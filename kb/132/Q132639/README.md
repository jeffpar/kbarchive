---
layout: page
title: "Q132639: Windows 95 Setup Error Message: Warning SU-0019"
permalink: /kb/132/Q132639/
---

## Q132639: Windows 95 Setup Error Message: Warning SU-0019

{% raw %}

	Article: Q132639
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows 95 Setup program, you may receive the following error
	message after the Non-Disclosure Agreement window:
	
	  Warning SU-0019
	
	  Setup has found commands in your Autoexec.bat or Config.sys files that are not
	  compatible with Windows.
	
	  Setup will make backup copies of your existing Autoexec.bat and Config.sys
	  files and create new ones, if needed.
	
	CAUSE
	=====
	
	Setup has detected non-MSDOS commands in the Autoexec.bat and Config.sys files.
	
	RESOLUTION
	==========
	
	Remove the non-MSDOS commands from the Autoexec.bat and Config.sys files and run
	Setup again.
	
	MORE INFORMATION
	================
	
	The unsupported commands in the Autoexec.bat file are as follows:
	
	  GOSUB
	  HILOAD
	  RETURN
	  SWITCH
	
	The unsupported commands in the Config.sys file are as follows:
	
	  CHAIN
	  GOSUB
	  HIBUFFERS
	  HIDEVICE
	  HIDOS
	  HIINSTALL
	  HISTORY
	  RETURN
	  SWITCH
	  TIMEOUT
	  BASEDEV
	  DEVINFO
	  DISKCACHE
	  IFS
	  IOPL
	  LIBPATH
	  MAXWAIT
	  MEMMAN
	  PRINTMONBUFSIZE
	  PRIORITY_DISK_IO
	  PROTECTONLY
	  PROTSHELL
	  SWAPPATH
	  THREADS
	
	The non-MSDOS commands listed above are placed in the Autoexec.bat or Config.sys
	files by other operating systems, such as DR.DOS.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
