---
layout: page
title: "Q104526: Unable to Print After Installing Phone Net PC"
permalink: /kb/104/Q104526/
---

## Q104526: Unable to Print After Installing Phone Net PC

	Article: Q104526
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Farallon's Phone Net PC version 3.0, you may receive an error
	message similar to one of the following:
	
	  Windows cannot print this file. Disk may be full.
	
	  -or-
	
	  Windows cannot write to this file. Disk may be full.
	
	The print job may not appear in Print Manager.
	
	NOTE: This problem does not occur on every system or configuration that is
	running Phone Net PC. This error is also generated if Windows for Workgroups is
	installed over Wollongong TCP/IP and is not configured as outlined in Q108007.
	
	CAUSE
	=====
	
	This error occurs if you try to print from MS-DOS.
	
	Farallon Technical Support has noted an error in the Phone Net PC documentation
	that states you must use MS-DOS for printing. This is untrue. You should still
	print from the Windows port, not LPTx.DOS.
	
	WORKAROUND
	==========
	
	To work around this problem, Farallon Technical Support suggests that you edit
	the SYSTEM.INI file to remove PNTALK.DRV from the NETWORK.DRV line. This entry
	should be blank as follows:
	
	  Network.drv=
	
	After making this change, you can still access the Phone Net PC network without
	any problems.
	
	
	MORE INFORMATION
	================
	
	Phone Net PC is not a supported network with Windows; Setup does not provide
	this network option.
	
	Phone Net PC is manufactured by Farallon Computing Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty kbnetwork wfw wfwg print wps
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
