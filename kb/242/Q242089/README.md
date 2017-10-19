---
layout: page
title: "Q242089: New Application Installation Programs Will Not Run"
permalink: /kb/242/Q242089/
---

## Q242089: New Application Installation Programs Will Not Run

	Article: Q242089
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click any setup program, nothing may happen. Also, trying to use
	the Add/Remove Programs tool in Control Panel or running the setup program from
	a command prompt may have no effect.
	
	CAUSE
	=====
	
	This issue can occur for either of the following reasons:
	
	- Many setup programs are 16-bit. If any .dll files listed in the 'KnownDLLs'
	  value at the following registry location are missing or damaged, Microsoft NT
	  Virtual DOS Machine (NTVDM), which is required to run 16-bit applications,
	  does not run properly:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WOW
	
	- The Config.nt file or the Autoexec.nt file is missing, damaged, or contains
	  unexpected values.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Verify that all of the files listed in the 'KnownDLLs' value at the following
	  registry key are present in either the %SystemRoot%\System32 folder and/or
	  the %SystemRoot%\System folder:
	
	 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WOW
	
	2. To replace any files missing from the above list, copy them from a Windows NT
	  4.0-based computer that has a properly working NTVDM to the
	  %SystemRoot%\System32 and %SystemRoot%\System folder.
	
	  NOTE: Not all of the .dll files in the list reside both in the System32 folder
	  and the System folder, but many do. It does not harm your computer to have
	  them duplicated in both locations.
	
	3. If no files are missing, ensure that all the files are undamaged by replacing
	  them with the same files from a Windows NT 4.0-based computer that has a
	  properly working NTVDM.
	
	4. Restart the computer.
	
	MORE INFORMATION
	================
	
	The files listed in the 'KnownDLLs' value include:
	
	  Comm.drv
	  Commdlg.dll
	  Ctl3dv2.dll
	  Ddeml.dll
	  Keyboard.drv
	  Lanman.drv
	  Mapi.dll
	  Mmsystem.dll
	  Mouse.drv
	  Netapi.dll
	  Olecli.dll
	  Olesvr.dll
	  Pmspl.dll
	  Shell.dll
	  Sound.drv
	  System.drv
	  Toolhelp.dll
	  Vga.drv
	  Wfwnet.drv
	  Win87em.dll
	  Winoldap.mod
	  Winsock.dll
	  Winspool.exe
	  Wowdeb.exe
	  Timer.drv
	  Rasapi16.dll
	  Compobj.dll
	  Storage.dll
	  Ole2.dll
	  Ole2disp.dll
	  Ole2nls.dll
	  Typelib.dll
	  Msvideo.dll
	  Avifile.dll
	  Msacm.dll
	  Mciavi.drv
	  Mciseq.drv
	  Mciwave.drv
	  Progman.exe
	  Avicap.dll
	
	Additional query words: setup.exe NTVDM wow
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
