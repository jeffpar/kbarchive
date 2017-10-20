---
layout: page
title: "Q89278: Novell Err Msg: Device Load Failed; IPX Not Installed"
permalink: /kb/089/Q89278/
---

## Q89278: Novell Err Msg: Device Load Failed; IPX Not Installed

{% raw %}

	Article: Q89278
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Windows on Novell NetWare, you may receive the following error
	message:
	
	  Cannot load a device specified in the initialization file for Windows in 386
	  enhanced mode. The performance of Windows will not be affected.
	  C:\WINDOWS\system\vnetware.386 VIPX: Device load failed. IPX is not installed
	  or not the right version.
	
	  Press any key to continue ...
	
	This error is caused by one of the following conditions:
	
	- IPX.COM is not the correct version.
	
	- The VIPX.386 file located in the WINDOWS\SYSTEM directory is not the correct
	  version.
	
	MORE INFORMATION
	================
	
	IPX.COM Is Not the Correct Version
	----------------------------------
	
	To check the version of IPX being used, exit Windows and type "IPX I" at the
	MS-DOS command prompt. The IPX version for Windows 3.1 should be 3.10. The IPX
	version for Windows 3.0 should be at least 3.02a. If you have an earlier IPX
	version, you must generate a new IPX.COM file. Please refer to your system
	administrator or your Novell manual for the process.
	
	VIPX.386 Located in WINDOWS\SYSTEM Directory Is Not Correct Version
	-------------------------------------------------------------------
	
	Search the entire hard drive and make sure the only VIPX.386 file on the system
	is located in the WINDOWS\SYSTEM directory, and is the same date as the rest of
	the Windows files.
	
	For more information on VIPX.386 version requirements, query on the following
	words in the Microsoft Knowledge Base:
	
	  VIPX.386 and required and windows and 3.1
	
	Additional query words: 3.00 3.00a 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
