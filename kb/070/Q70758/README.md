---
layout: page
title: "Q70758: Floating-Point Calculations in Windows Using WIN87EM.DLL"
permalink: /kb/070/Q70758/
---

## Q70758: Floating-Point Calculations in Windows Using WIN87EM.DLL

	Article: Q70758
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WIN87EM.DLL is a dynamic link library (DLL) that supplies floating-point
	calculation routines for Windows applications that support math coprocessors.
	Windows by itself does not use WIN87EM.DLL, but some Windows applications that
	carry out floating-point calculations require WIN87EM.DLL to be present in the
	Windows\SYSTEM subdirectory.
	
	For example, Microsoft Excel version 3.0 requires WIN87EM.DLL to be present
	whether or not your computer has a math coprocessor chip. If WIN87EM.DLL is not
	present, Excel generates the error message:
	
	  Cannot find Win87em.dll" and will not load
	
	If WIN87EM.DLL is damaged, Excel 3.0 attempts to run a second instance of
	Windows, leaving you in real mode with the error message:
	
	  Cannot run this application in real mode
	
	Other Windows applications may require WIN87EM.DLL and may display similar
	behavior.
	
	MORE INFORMATION
	================
	
	Microsoft Windows installs WIN87EM.DLL in the Windows\SYSTEM subdirectory.
	Windows itself does not generate an error upon loading if it is missing. The
	error does not occur until an application is loaded and requests the dynamic
	link library (DLL). If the file is missing or damaged, just expand it from your
	Windows disks into your Windows\SYSTEM subdirectory.
	
	WIN87EM.DLL is on the following Windows 3.0 disks:
	
	  5.25-inch  1.2 MB   Disk 2
	  5.25-inch  360K     Disk 5
	  3.5-inch   720K     Disk 3
	
	WIN87EM.DLL is on the following Windows 3.1 disks:
	
	  5.25-inch  1.2 MB   Disk 4
	  3.5-inch   1.44 MB  Disk 4
	
	For information on expanding files, please refer to the README.TXT file in the
	WINDOWS directory.
	
	REFERENCES
	==========
	
	"Microsoft Windows Guide to Programming," Microsoft Press, section 14.5.7.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
