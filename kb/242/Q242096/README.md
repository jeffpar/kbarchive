---
layout: page
title: "Q242096: Cannot run System Editor."
permalink: /kb/242/Q242096/
---

## Q242096: Cannot run System Editor.

{% raw %}

	Article: Q242096
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
	
	When you attempt to run Sysedit.exe from the command line or from the Run dialog
	box, nothing may happen.
	
	CAUSE
	=====
	
	Sysedit.exe is a 16-bit program. If any of the .dll files listed in the
	KnownDLLs value in the following registry key are missing or corrupted, the
	Windows NT Virtual DOS Machine (NTVDM), which is required to run 16-bit
	programs, does not run properly:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WOW
	
	The same problem occurs if the Config.nt or Autoexec.nt file is missing or
	corrupted, or contains unexpected values.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Make sure that all of the .dll files listed in the KnownDLLs value in the
	  following registry key are uncorrupted and present in either the
	  %SystemRoot%\System32 or the %SystemRoot%\System folder:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WOW
	
	2. To replace any missing files, copy them from a Windows NT 4.0-based computer
	  that has a properly working NTVDM to the %SystemRoot%\System32 and
	  %SystemRoot%\System folders.
	
	  NOTE: Not all of the .dll files in the list reside in both the System32 folder
	  and the System folder, but many do. It does not harm your computer to have
	  them duplicated in both folders.
	
	3. If no files are missing, ensure that all the files are uncorrupted by
	  replacing them with the same files from a Windows NT 4.0-based computer that
	  has a properly working NTVDM.
	
	4. Restart the computer.
	
	MORE INFORMATION
	================
	
	The files listed in the KnownDLLs value include:
	
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
	
	Additional query words: 16-bit ntvdm wow system
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
