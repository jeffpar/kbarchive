---
layout: page
title: "Q135227: Err Msg: Error Starting Program: Regserv.exe Linked to Missing"
permalink: kb/135/Q135227/
---

## Q135227: Err Msg: Error Starting Program: Regserv.exe Linked to Missing

	Article: Q135227
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
	
	When you start Windows 95, you may receive the following error message:
	
	  Error Starting Program:
	  REGSERV.EXE Linked To Missing Export KERNEL32.DLL;Vxdcall3
	
	CAUSE
	=====
	
	This problem can occur if you installed Windows 95 over a Beta version of
	Windows 95.
	
	RESOLUTION
	==========
	
	Remove the remote registry service in Network properties. After you remove the
	service, reinstall it using the Have Disk button in the Select Network Service
	dialog box.
	
	MORE INFORMATION
	================
	
	The remote registry service (Regserv.exe) allows other computers to connect to
	the registry on your computer. The Regserv.exe file is located in the Admin
	folder on the Windows 95 CD-ROM.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
