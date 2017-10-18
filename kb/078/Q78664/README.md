---
layout: page
title: "Q78664: Generating an Updated IPX.COM File for Novell Network"
permalink: kb/078/Q78664/
---

## Q78664: Generating an Updated IPX.COM File for Novell Network

	Article: Q78664
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	If you are upgrading to Microsoft MS-DOS 5.0 and using Windows 3.0 with a Novell
	network, you must use IPX.COM version 3.02a and NET5.COM version 3.1. Using
	Windows 3.0 without the updated files may produce a variety of problems with
	printing, enhanced mode operation, network operation, and Windows.
	
	MORE INFORMATION
	================
	
	To generate IPX.COM version 3.02a, do the following:
	
	1. Expand and rename the IPX.OB_ and NET5.CO_ files from the MS-DOS 5.0 disks
	  (disk 6 [5.25-inch set] or disk 3 [3.5-inch set]) to the appropriate
	  directory, as follows:
	
	     expand ipx.ob_ c:\ipx.obj
	     expand net5.co_ c:\net5.com
	
	2. If the customer owns NetWare DOS/Windows Workstation update (shell kit), go
	  to step 4.
	
	3. Copy the new IPX.OBJ file to the Novell disk labeled:
	
	     SHGEN-1 (NetWare 286)
	
	  -or-
	
	     WSGEN (NetWare 386)
	
	4. Copy the new IPX.OBJ to the Novell Windows workstation update disk labeled:
	
	     NetWare   DOS/Windows WORKSTATION
	
	5. Use the SHGEN (NetWare 286) or WSGEN (NetWare 386) program on this disk to
	  generate a new IPX.COM file. For more information about creating an IPX.COM
	  file or using the NET5.COM file, see the Novell documentation.
	
	6. Restart the Novell network using the updated IPX.COM and NET5.COM files.
	
	Novell NetWare and NetWare DOS/Windows Workstation are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	MS-DOS 5.0 README.TXT file, pages 12-13
	
	Additional query words: 5.00 noupd 3.00 3.0a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0; WINDOWS:3.0
	
	=============================================================================
	
