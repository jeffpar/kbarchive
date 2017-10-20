---
layout: page
title: "Q92660: Using Windows 3.1 with Quarterdeck QEMM386"
permalink: /kb/092/Q92660/
---

## Q92660: Using Windows 3.1 with Quarterdeck QEMM386

{% raw %}

	Article: Q92660
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1 works correctly with versions 5.1 and later of the QEMM386
	memory manager. This article discusses the following issues:
	
	- Behavior of Windows Setup
	
	- Using the Stealth Option with Third-Party Display Drivers
	
	- Optimize Utility Loads SMARTDRV.EXE 4.0 High
	
	- Data Loss with SMARTDrive
	
	- Windows May Use B000-B7FF
	
	- Setup Err Msg: Incorrect MS-DOS Version
	
	Behavior of Windows Setup
	-------------------------
	
	Windows Setup should detect QEMM386 if it is running when you install Windows. If
	you are running QEMM386 version 5.1, 5.11, or 5.12, Setup adds the following
	line to the [386enh] section of the SYSTEM.INI file:
	
	       device=*qemmfix
	
	This line causes Windows to load the QEMMFIX virtual device driver when starting
	in 386 enhanced mode. This device, developed jointly by Quarterdeck Office
	Systems and Microsoft, modifies the behavior of these versions of QEMM386 to
	make them compatible with Windows 3.1. The device driver is built into
	WIN386.EXE and is not visible as a separate file on your disk.
	
	Note: QEMM386 versions 5.13 and later do not require the QEMMFIX device driver.
	
	Using the Stealth Option with Third-Party Display Drivers
	---------------------------------------------------------
	
	A few third-party Windows display drivers may have conflicts with the Stealth
	option in QEMM386 version 6. These conflicts can create video problems or
	prevent you from starting Windows in 386 enhanced mode.
	
	In most cases, such conflicts can be resolved by configuring QEMM386 to NOT
	overlay the video ROM with high RAM. To do this, add "X=C000-C7FF" to the
	QEMM386 command line in your CONFIG.SYS file. Depending on your configuration,
	you may be able to exclude a smaller range of memory and leave more memory
	available. In some cases, you may need to use "XST=C000" or disable the Stealth
	option altogether. Consult your QEMM386 documentation for more information.
	
	Optimize Utility Loads SMARTDRV.EXE 4.0 High
	--------------------------------------------
	
	If you load SMARTDRV.EXE version 4.0 with the /DOUBLE_BUFFER option, earlier
	versions of the Quarterdeck Optimize utility may recommend loading SMARTDRV.EXE
	in an upper memory block (UMB). SMARTDRV.EXE /DOUBLE_BUFFER does not function
	correctly if it is loaded high. Make sure the SMARTDRV.EXE line in CONFIG.SYS
	does not include the LOADHI.SYS command.
	
	Data Loss with SMARTDrive
	-------------------------
	
	If SMARTDrive is NOT flushing its buffers on exit, you are probably using a
	version of QEMM prior to 6.02. Earlier versions of QEMM trap the INT 2Fh call.
	If INT 2Fh is trapped, SMARTDrive does not receive the system shutdown broadcast
	message and does not flush its buffers when you quit Windows or press
	CTRL+ALT+DEL. In addition, SMARTDrive does not switch its cache size back to the
	MS-DOS mode value.
	
	Windows May Use B000-B7FF
	-------------------------
	
	By default, Windows 3.1 uses UMA addresses B000-B7FF. Many expanded memory
	managers also attempt to use this area, which causes a conflict with Windows. To
	correct this problem, do one of the following:
	
	- Exclude the B000-B7FF range with the memory manager.
	
	  -or-
	
	- Install MONOUMB2.386 with the following steps:
	
	  1. Copy and expand the MONOUMB2.38_ file that is on your Windows disk to your
	     Windows SYSTEM directory. For example, type the following at the MS-DOS
	     command prompt:
	
	  expand a:\monoumb2.38_ c:\windows\system\MONOUMB2.386
	
	     where "\windows\system" is the name of your Windows SYSTEM directory.
	
	  2. Add the following setting to the [386Enh] section of the SYSTEM.INI file:
	
	  device=monoumb2.386
	
	Setup Err Msg: Incorrect MS-DOS Version
	---------------------------------------
	
	Windows Setup may display the following error message:
	
	  Incorrect MS-DOS Version - You Must Have Version 3.1 or Later
	
	If you use QEMM386 version 5.x or 6.x to load MS-DOS resource files in the upper
	memory area (UMA), the Windows 3.1 Setup program may fail. This error is likely
	to occur during a network installation because more file handles are being used
	by the system on startup.
	
	To correct this problem, try increasing the FILES= statement in the CONFIG.SYS
	file. Quarterdeck recommends increasing the number of files in increments of
	five until the error is corrected.
	
	The products included here are manufactured by Quarterdeck Office Systems, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
