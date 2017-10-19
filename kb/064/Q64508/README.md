---
layout: page
title: "Q64508: Novell XMSNETx.COM and EMSNETx.COM with Windows"
permalink: /kb/064/Q64508/
---

## Q64508: Novell XMSNETx.COM and EMSNETx.COM with Windows

	Article: Q64508
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses compatibility issues with Novell Netware and Microsoft
	Windows.
	
	In the following information, "x" in the driver names refers the MS-DOS version
	being used at the workstation in question. For example, if the workstation is
	running MS-DOS 4.01, then NET4.COM should be used.
	
	MORE INFORMATION
	================
	
	XMSNET.COM or EMSNETX.COM and Windows 3.0
	-----------------------------------------
	
	If you encounter problems while using Novell NetWare's XMSNETx.COM or EMSNETx.COM
	in conjunction with Microsoft Windows version 3.0 or 3.0a, try using the
	NETx.COM instead. If the symptoms disappear after this change is made, please
	report the problem to Novell through the regular support channels or by calling
	Novell.
	
	XMSNET.COM or EMSNETX.COM and Windows 3.1
	-----------------------------------------
	
	It has been reported that when you run under Microsoft Windows 3.1, the
	XMSNETx.COM shell works fine in all modes. However, XMSNETx.COM can cause
	
	  Out of Memory
	
	errors with Windows 3.1 after multiple Windows sessions. After you enter and exit
	Windows 3.1 three or more times with XMSNETx.COM loaded, the errors appear and
	Windows cannot run until you reboot the system. To prevent this problem, use
	NETx.COM instead of XMSNETx.com.
	
	MSNETx.COM is NOT supported with Windows 3.1 in 386 enhanced mode. These Novell
	XMSNETx.COM and EMSNETx.COM drivers have been updated for Windows 3.1, and
	should be available from your local Novell NetWare dealer.
	
	Additional query words: NET3.COM NET4.COM XMSNET3.COM XMSNET4.COM EMSNET3.COM EMSNET4.COM 3.01 3.00 3.0 3.0a 3.00a 3.1 3.11 NOVELL.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
