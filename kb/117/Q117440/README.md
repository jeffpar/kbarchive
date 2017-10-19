---
layout: page
title: "Q117440: Novell NetWare 3.12 and 4.0 Support in Windows 3.11"
permalink: /kb/117/Q117440/
---

## Q117440: Novell NetWare 3.12 and 4.0 Support in Windows 3.11

	Article: Q117440
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 3.11 includes all necessary Windows support files to use with Novell
	NetWare versions 3.12 and 4.0. The "Novell NetWare (Shell Versions 4.0 and
	above)" option in Windows Setup supports both NetWare 3.12 and 4.0 using Shell
	versions 4.0 and above (VLM).
	
	To enable NetWare 3.12 or 4.0 functionality in Windows 3.11, verify that you have
	all the necessary MS-DOS-level drivers already working (for example, the new VLM
	redirector). You can obtain the MS-DOS-level drivers by installing the client
	software for NetWare 3.12 or 4.0. The latest version of this software is
	available in the Novell forum on CompuServe.
	
	You should be able to log on and attach to a NetWare server before installing
	Windows 3.11 support for NetWare. If you can log on to your NetWare server at
	MS-DOS, use the following steps to enable NetWare functionality in Windows
	3.11:
	
	1. In the Main group, run Windows Setup.
	
	2. From the Options menu, choose Change System Settings.
	
	3. Select "Novell NetWare (Shell Versions 4.00 and above)" for Network.
	
	Windows then prompts you for the appropriate disks and makes changes to your
	Windows configuration to support NetWare Shell versions 4.0 and above.
	
	MORE INFORMATION
	================
	
	The following changes are made when you set up Windows 3.11 for Novell NetWare
	Shell versions 4.0 and above.
	
	NOTE: Some files have different names on the distribution disks than what they
	are expanded to by Setup. This is necessary to differentiate the Windows support
	files for NetWare 3.x, 3.12, and 4.0. If you need to manually expand a NetWare
	support file from the Windows 3.11 distribution disks, note the filename on the
	distribution disks and the expanded filename below.
	
	Setup expands the following files to the Windows directory:
	
	  NWCALLS.DLL
	  NWNET.DLL
	  NWIPXSPX.DLL
	  NWLOCALE.DLL
	  NWPSRV.DLL
	  TASKID.COM
	  TBMI240.CO_   expands to    TBMI2.COM
	
	Setup expands the following files into the Windows SYSTEM subdirectory:
	
	  NW40.DR_      expands to    NETWARE.DRV
	  VIPX40.38_    expands to    VIPX.386
	  NW40.HL_      expands to    NETWARE.HLP
	  VNW40.38_     expands to    VNETWARE.386
	  NWPOP40.EX_   expands to    NWPOPUP.EXE
	
	Setup creates a Windows NLS subdirectory and expands the following files to it:
	
	  UNI_1252.001
	  1252_UNI.001
	  UNI_MON.001
	  UNI_COL.001
	
	Setup creates a Windows NLS\ENGLISH subdirectory and expands the following files
	to it:
	
	  TASKID.MSG
	  TBMI2.MSG
	  NW40.HL_     expands to NETWARE.HLP
	
	Also, the following changes are made to the SYSTEM.INI and WIN.INI files:
	
	SYSTEM.INI
	----------
	
	     [Boot]
	     Network.drv=Netware.drv
	
	     [386Enh]
	     Network=*vnetbios,vnetware.386, vipx.386
	     OverlappedIO=off
	     TimerCriticalSection=10000
	     ReflectDOSInt2A=True
	     UniqueDOSPSP=True
	     PSPIncrement=5
	
	WIN.INI
	-------
	
	  Load=nwpopup.exe
	
	Additional query words: 3.11 3.10 3.1 4.00 vlm
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
