---
layout: page
title: "Q76531: Windows Err Msg: Cannot Connect Printers..."
permalink: /kb/076/Q76531/
---

## Q76531: Windows Err Msg: Cannot Connect Printers...

	Article: Q76531
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Printers icon from the Control Panel in Windows, you may
	receive the error message:
	
	  Cannot connect printers because the [ports] section of the WIN.INI file is
	  missing; Choose cancel and edit the WIN.INI file or choose OK to continue.
	
	CAUSE
	=====
	
	This error message may be caused by one of the following:
	
	- The [ports] section of the WIN.INI file is missing. If this is the case, make
	  sure you have a section in the WIN.INI file, as follows:
	
	        [Ports]
	        LPT1:=
	        LPT2:=
	        LPT3:=
	        COM1:=9600,n,8,1
	        COM2:=9600,n,8,1
	        COM3:=9600,n,8,1
	        COM4:=9600,n,8,1
	        EPT:=
	        FILE:=
	        LPT1.OS2=
	        LPT2.OS2=
	
	- The WIN.INI file is corrupted. In this case, if you have a good backup copy
	  of WIN.INI, copy this file into your Windows directory. If you don't have a
	  good backup copy, expand the file WIN.SRC from the original Microsoft Windows
	  disks to the Windows directory. Use the following command:
	
	  c:\windows\expand a:win.src c:\windows\win.ini
	
	  NOTE: Renaming the WIN.INI file does not solve the problem. The [ports]
	  section will still be missing.
	
	- Microsoft Windows cannot find the WIN.INI file, or does not recognize it. You
	  need to reinstall Windows to create a new WIN.INI.
	
	  If Windows is on a network, you should install Microsoft Windows on your local
	  hard drive. This eliminates any problems that might arise through the "share"
	  and "user" directories.
	
	Additional query words: 3.00 win30 win31 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
