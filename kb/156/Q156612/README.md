---
layout: page
title: "Q156612: Using WinNT 3.5x Uptomp.exe to Upgrade 4.0 Systems to multiproc"
permalink: /kb/156/Q156612/
---

## Q156612: Using WinNT 3.5x Uptomp.exe to Upgrade 4.0 Systems to multiproc

{% raw %}

	Article: Q156612
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While trying to use the Uptomp.exe utility that shipped in the Windows NT
	version 3.5x Resource Kit, the following error message may appear:
	
	  The Txtsetup.sif file in the specified path is not formatted correctly.
	  Verify the correct disk and files can be found in the specified path.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following:
	
	- Use the Uptomp.exe from the Windows NT 4.0 Resource Kit.
	
	-or-
	
	- Copy these files from the Windows NT 4.0 CD into a temporary directory on the
	  system you want to upgrade to multiprocessor.
	
	Select the HAL that applies to your computer from the list below and copy it to
	the temporary directory.
	
	Halast.dll    = "AST Manhattan SMP"
	Halsp.dll     = "Compaq SystemPro Multiprocessor or 100% Compatible"
	Halcbus.dll   = "Corollary C-bus Architecture"
	Halmca.dll    = "IBM PS/2 or other Micro Channel-based PC"
	Halapic.dll   = "MPS Uniprocessor PC"
	Halmps.dll    = "MPS Multiprocessor PC"
	Halncr.dll    = "NCR System 3000 Model 3360/3450/3550"
	Haloli        = "Olivetti LSX5030/40"
	Hal.dll       = "Standard PC"
	Hal486c.dll   = "Standard PC with C-Step i486"
	Halwyse7.dll  = "Wyse Series 7000i Model 740MP/760MP"
	
	Then the following 5 files:
	
	KERNEL32.DLL
	WINSRV.DLL
	NTDLL.DLL
	NTKRNLMP.EXE
	WIN32K.SYS
	
	Copy the Txtsetup.sif file from the Windows NT 3.51 CD found under the supporting
	platforms directory (i.e. copy D:\I386\Txtsetup.sif to the temporary
	directory).
	
	Modify the Txtsetup.inf (from Windows NT version 3.51) to add Win32k.sys under
	these sections.:
	
	[Smash]
	win32k.sys = 1
	
	[Files]
	win32k.sys  = dx,d1,,2,0,0
	
	Modify the Uptomp.inf file from the Windows NT 3.51 Resource Kit and add the
	following entry under:
	
	[SystemFilesToCopy] section:
	Win32k.sys = 0, 2,
	
	Run Uptomp.exe again, using the modified Uptomp.inf file, type in the temporary
	directory name in the "NEW HAL FILE PATH" box, and then select the correct HAL
	from the "HAL TO INSTALL" box.
	
	The upgrade should complete without errors and successfully upgrade you to
	Multiprocessor support. Restart the computer and when the Windows NT kernel
	loads, ensure that it displays "Multiprocessor Kernel" during startup.
	
	MORE INFORMATION
	================
	
	The Txtsetup.sif file that shipped with Windows NT 4.0 is not backwards
	compatible with the Windows NT 3.5x resource utility Uptomp.exe.
	
	Additional query words: reskit
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
