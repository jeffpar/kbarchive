---
layout: page
title: "Q89701: Using Both the Retail and Debug Kernel of Windows"
permalink: /kb/089/Q89701/
---

## Q89701: Using Both the Retail and Debug Kernel of Windows

	Article: Q89701
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The D2N.BAT and N2D.BAT files shipped with the Windows SDK provide a way to
	switch between the retail and debug kernels of Windows within the same
	installation. One problem with this approach is that the entire kernel of
	Windows gets swapped during the copying process. This article describes a way to
	use the debug and retail kernel at the same time with much less overhead
	involved.
	
	MORE INFORMATION
	================
	
	The following steps are involved to provide coexisting debug and retail
	installations of Windows:
	
	1. Make a copy of the SYSTEM.INI file (for example, copy it to SYSTEM.RET).
	
	2. Copy renamed versions of the debug kernel .EXE files to your Windows system
	  directory (for example, copy GDI.EXE from the debug subdirectory of the SDK
	  disks to GDIDBG.EXE in the Windows subdirectory).
	
	3. In SYSTEM.INI, add the following lines to the [boot] section:
	
	        gdi.exe = gdidbg.exe
	        <add lines for the updated USER.EXE, KRNL286.EXE, KRNL386.EXE
	        and MMSYSTEM.DLL files>
	
	4. Make a copy of the new SYSTEM.INI file (for example, copy it to SYSTEM.DBG).
	
	Now you can switch between the debug and retail kernels just by copying
	SYSTEM.DBG or SYSTEM.RET to SYSTEM.INI before booting Windows.
	
	Notice that this technique does not work for the debugging version of WIN386.EXE
	because that file actually reads SYSTEM.INI. To install the debug version of
	WIN386.EXE, you still need to replace WIN.386 with the version that is being
	shipped with the Windows Device Development Kit.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
