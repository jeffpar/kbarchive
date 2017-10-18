---
layout: page
title: "Q84564: Windows Err Msg: Setup Error #S019. Cannot Create... WIN.COM"
permalink: kb/084/Q84564/
---

## Q84564: Windows Err Msg: Setup Error #S019. Cannot Create... WIN.COM

	Article: Q84564
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message while attempting to perform a
	
	  Setup Error #S019
	  Setup cannot create the file WIN.COM, which it needs to set Windows up. Setup
	  cannot continue.
	
	CAUSE
	=====
	
	Either of the following may cause this error:
	
	- You are trying to run Setup from the Windows 3.1 floppy disks by using the /N
	  switch.
	
	  -or-
	
	- You are using Novell NetWare and have not regenerated IPX.COM from the
	  IPX.OBJ file included with Windows 3.1. For more information on regenerating
	  the IPX.COM file, please see section 2.10 of the NETWORKS.WRI file.
	
	
	MORE INFORMATION
	================
	
	Running Setup /N from the Floppy Disks
	--------------------------------------
	
	Setup /N was designed to be run from a network installation of Windows 3.0, 3.0a,
	or 3.1. The above error message will appear when running Windows 3.1 Setup from
	a floppy disk using "Setup /N" (without the quotation marks) or "NETSETUP=TRUE"
	(without the quotation marks) in the [Data] section of the SETUP.INF file.
	NETSETUP=TRUE Setup will automatically perform a network setup.
	
	The Setup /N command must be performed from the Windows 3.1 shared directory on
	the file server, as explained on page 8 of the "Getting Started with Microsoft
	Windows" manual for version 3.1. Page 9 of the "Getting Started with Microsoft
	Windows" manual outlines the procedure to place the Windows files on the file
	server.
	
	Regenerating IPX.COM from IPX.OBJ
	---------------------------------
	
	If you are using Novell NetWare, you must regenerate the IPX.COM file for each
	computer where you intend to run Windows 3.1. Usually, you can do this either
	before or after you run Setup. However, when you are running Setup with the /N
	option (Setup /N), you may need to regenerate IPX.COM before running Setup to
	avoid receiving Setup Error #S019.
	
	For more information on using Novell NetWare software and Windows 3.1, please see
	section 2.10 of the NETWORKS.WRI file.
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 Gen ReGen 3rdparty net ware light
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
