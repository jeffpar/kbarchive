---
layout: page
title: "Q88752: Err Msg: Full API Support Was Not Loaded... IBM OS/2 LAN"
permalink: /kb/088/Q88752/
---

## Q88752: Err Msg: Full API Support Was Not Loaded... IBM OS/2 LAN

{% raw %}

	Article: Q88752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Windows in 386 enhanced mode on an IBM DOS LAN Requester
	1.3 system connected to an OS/2 LAN Server 1.3 system, one of the following
	error messages may appear.
	
	Windows 3.0, 3.0a
	-----------------
	
	  Full API support was not loaded.
	  Microsoft LAN Manager driver cannot be loaded.
	
	Windows 3.1, Windows for Workgroups 3.1
	---------------------------------------
	
	  Full API Support was not loaded.
	  DOS LAN Requester Windows Driver cannot be loaded.
	
	Windows for Workgroups 3.11
	---------------------------
	
	  Full API support was not loaded. WLR0103
	  DOS LAN Requester Windows Driver cannot be loaded.
	
	WORKAROUND
	==========
	
	To Resolve the Problem in Windows 3.0
	-------------------------------------
	
	When you run Windows 3.0 on this configuration, the DOS LAN Requester 1.3
	requires the following lines to be added to the DOSLAN.INI file (which is
	located in the DOSLAN subdirectory if DOS LAN Requester was installed using the
	defaults):
	
	     /NMS:2
	     /NVS:1
	     /API
	
	When you run Windows 3.1 on this configuration, the error may occur if the
	network option in Windows Setup is incorrect.
	
	To Resolve the Problem in Windows 3.1 or Windows for Workgroups 3.1
	-------------------------------------------------------------------
	
	1. From the WINDOWS directory at an MS-DOS prompt, type "setup" (without the
	  quotation marks).
	
	2. Once the System Information screen appears, highlight the currently installed
	  network, then press ENTER.
	
	3. From the list, choose IBM OS/2 LAN Server (without /API option), then press
	  ENTER.
	
	Full API support is network specific and it helps developers to write
	network-ready and client-server applications for Windows.
	
	To Resolve the Problem in Windows for Workgroups 3.11
	-----------------------------------------------------
	
	You receive this error message with Windows for Workgroups 3.11 and IBM LAN
	Server because the LANSRV.DRV file does not work with IFSMGR.386. To work around
	this problem, do one of the following:
	
	- Set up Windows for Workgroups 3.11 as a Microsoft Compatible Network (LAN
	  Server is an SMB-based network so the Microsoft Compatible driver will work)
	
	  -or-
	
	- Install support for Windows for Workgroups Networking.
	
	If you aren't using 32-Bit File Access and you want to use the IBM DOS LAN
	Requester driver as the only network, remove the following statement from the
	[386Enh] section of your SYSTEM.INI file:
	
	     device=ifsmgr.386
	
	This allows the LAN Server drivers to work correctly.
	
	NOTE: After removing this statement, you will not be able to use 32-bit file
	access until you put the statement back in.
	
	IBM OS/2 LAN Server is manufactured by IBM, a vendor independent of Microsoft. We
	make no guarantee, implied or otherwise, regarding this product's performance of
	reliability.
	
	Additional query words: OS2 OS/2 LAN Error 3.00 3.00a 3.10 3.11 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
