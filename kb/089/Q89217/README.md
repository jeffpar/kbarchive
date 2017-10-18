---
layout: page
title: "Q89217: Working Copy Demonstration of Ami Pro 2.0 May Cause GP Faults"
permalink: kb/089/Q89217/
---

## Q89217: Working Copy Demonstration of Ami Pro 2.0 May Cause GP Faults

	Article: Q89217
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ami Pro has confirmed that after installing the "Working model" of Ami Pro 2.0
	under Windows 3.1, general protection (GP) faults may occur when you restart
	Windows.
	
	MORE INFORMATION
	================
	
	This problem occurs because the following four files are copied by the Ami Pro
	installation program into the Windows SYSTEM subdirectory:
	
	- SHELL.DLL
	
	- OLECLI.DLL
	
	- OLESVR.DLL
	
	- COMMDLG.DLL
	
	To correct the problem, expand the four files from the Windows 3.1 disks into the
	Windows SYSTEM subdirectory.
	
	Disk locations are as follows:
	
	                 Disk Size
	Filename     1.44MB  1.2MB  720K
	---------------------------------
	
	SHELL.DL_      4       5       8
	OLECLI.DL_     5       4       A
	OLESVR.DL_     4       5       8
	COMMDLG.DL_    4       4       A
	
	For more information, contact Ami technical support.
	
	Ami Pro 2.0 is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding the product's performance or
	reliability.
	
	Additional query words: gpf 3.10 3.11 3rdparty demonstration demo
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
