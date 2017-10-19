---
layout: page
title: "Q168132: After Applying Service Pack NT Reports Single Processor"
permalink: /kb/168/Q168132/
---

## Q168132: After Applying Service Pack NT Reports Single Processor

	Article: Q168132
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you apply a Windows NT service pack on a multiprocessor system, you find
	that Windows NT now only reports a single processor installed.
	
	Prior to installing the service pack, you were running with multiprocessor
	versions of the Hal.dll and Ntoskrnl.exe files.
	
	Applying a Windows NT service pack on a multi-processor computer may cause the
	computer to stop responding (hang) on reboot immediately after the installation.
	This may occur during the logon sequence and can appear to be a service or
	device failure.
	
	CAUSE
	=====
	
	When Windows NT was originally installed on the computer, it may have contained
	only a single processor and later had a hardware upgrade to multiple
	processors.
	
	On Compaq computers, you can upgrade Windows NT to support multiple processors by
	using the Compaq Software Support Diskette (SSD) and Choosing the Multiprocessor
	support option. This installs the necessary files to support multiprocessors.
	
	Alternately, the Windows NT Resource Kit utility called Uptomp.exe allows you to
	upgrade Windows NT to support multiprocessors.
	
	The problem is that neither of these 2 utilities, Compaq SSD or the Windows NT
	3.5x Uptomp.exe utility, update the Setup.log file found in the
	%SystemRoot%\Repair directory.
	
	
	NOTE: The "Windows NT 4.0 Resource Kit" does correctly update the Setup.log
	file.
	
	The Setup.log was created when Windows NT was first installed and contains
	information about the files copied to your system during Windows NT setup.
	Consequently, the file reflects the information for a single processor computer.
	When service packs are installed, the Setup.log file is parsed looking for the
	correct Hal.dll and Ntoskrnl.exe to replace. Because the Setup.log shows single
	processor components, the service pack Update.exe program replaces the
	multiprocessor files with single processor files (thus taking you back to the
	single processor environment). Furthermore, additional support files are
	different between single and multiprocessor computers.
	
	
	RESOLUTION
	==========
	
	By modifying the %SystemRoot%\Repair\Setup.log file, you can tell the service
	pack Update.exe program to load the correct multiprocessor components (thus
	taking you back to multiprocessor support and at the same time ensuring that
	future service packs install correctly).
	
	Steps to fix the Setup.log and restore your system to multiprocessors:
	
	1. Remove the read only and hidden attributes on the
	  %SystemRoot%\Repair\Setup.log file.
	
	2. Make a backup copy of the %SystemRoot%\Repair\Setup.log.
	
	3. Open the Setup.log using notepad.
	
	4. Search for and modify the following lines, being careful to use the correct
	  operating system version section and proper HAL for your computer type:
	
	   HALSP.DLL = For Compaq Systempro, Systempro/XL, ProLiant 2000, 4000, and 4500 systems only.
	
	   HALMPS.DLL = Multiprocessor HAL for APIC support and for the Compaq ProLiant 1500 and 5000
	
	  Windows NT version 3.5
	  ----------------------
	
	  Modify the entries under [Files.WinNt] section to the following:
	
	  \<%SystemRoot%>\System32\Ntoskrnl.exe = "NTKRNLMP.EXE","bc81d"
	  \<%SystemRoot%>\System32\Kernel32.dll = "KERNEL32.DLL","65c96"
	  \<%SystemRoot%>\System32\Winsrv.dll = "WINSRV.DLL","1ac2a1"
	  \<%SystemRoot%>\System32\Ntdll.dll = "NTDLL.DLL","47eca"
	
	  Then select one of the following HALs and modify the line.
	
	  \<%SystemRoot%>\System32\hal.dll = "HALSP.DLL","15d8d"
	  \<%SystemRoot%>\System32\hal.dll = "HALMPS.DLL","1b729"
	
	  NOTE: %SystemRoot% represents the directory name where Windows NT is
	  installed.
	
	  Windows NT version 3.51
	  -----------------------
	
	  Modify the entries under [Files.WinNt] section to the following:
	
	  \<%SystemRoot%>\System32\Ntoskrnl.exe = "NTKRNLMP.EXE","cb271"
	  \<%SystemRoot%>\System32\Kernel32.dll = "KERNEL32.DLL","5d99a"
	  \<%SystemRoot%>\System32\Winsrv.dll = "WINSRV.DLL","155a67"
	  \<%SystemRoot%>\System32\Ntdll.dll = "NTDLL.DLL","5830f"
	
	  Then select one of the following HALs and modify the line.
	
	  \<%SystemRoot%>\System32\hal.dll = "HALSP.DLL","1905a"
	  \<%SystemRoot%>\System32\hal.dll = "HALMPS.DLL","18039"
	
	  NOTE: %SystemRoot% represents the directory name where Windows NT is
	  installed.
	
	  Windows NT version 4.0
	  ----------------------
	
	  Modify the entries under [Files.WinNt] section to the following:
	
	  \<%SystemRoot%>\System32\Ntoskrnl.exe = "NTKRNLMP.EXE","e76ab"
	  \<%SystemRoot%>\System32\Kernel32.dll = "KERNEL32.DLL","5b7f8"
	  \<%SystemRoot%>\System32\Winsrv.dll = "WINSRV.DLL","37b4e"
	  \<%SystemRoot%>\System32\Ntdll.dll = "NTDLL.DLL","59c19"
	  \<%SystemRoot%>\System32\win32k.sys = "WIN32K.SYS","132603"
	
	  Then, select one of the following HALs and modify the line:
	
	  \<%SystemRoot%>\System32\hal.dll = "HALSP.DLL","0f337"
	  \<%SystemRoot%>\System32\hal.dll = "HALMPS.DLL","1a01c"
	
	  NOTE: %SystemRoot% represents the directory name where Windows NT is
	  installed.
	
	  Windows NT version 4.0 Terminal Server Edition
	  ----------------------------------------------
	
	  Modify the entries under [Files.WinNt] section to the following:
	
	  \<%SystemRoot%>\System32\Ntoskrnl.exe = "NTKRNLMP.EXE","fe754"
	  \<%SystemRoot%>\System32\Kernel32.dll = "KERNEL32.DLL","700ee"
	  \<%SystemRoot%>\System32\Winsrv.dll = "WINSRV.DLL","3e526"
	  \<%SystemRoot%>\System32\Ntdll.dll = "NTDLL.DLL","62b31"
	  \<%SystemRoot%>\System32\win32k.sys = "WIN32K.SYS","140e95"
	
	  Then select one of the following HALs and modify the line:
	
	  \<%SystemRoot%>\System32\hal.dll = "HALSP.DLL","15a34"
	  \<%SystemRoot%>\System32\hal.dll = "HALMPS.DLL","1a062"
	
	  NOTE: %SystemRoot% represents the directory name where Windows NT is
	  installed.
	
	5. Save the modified Setup.log to the %SystemRoot%\Repair directory.
	
	6. Re-apply the service pack to take you back to MPS support.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q124541 Use UPTOMP.EXE to Upgrade Single-Processor to Multiprocessor
	  Q156612 Using NT V3.5x Uptomp.exe to Upgrade V4.0 Systems to Multiprocessor
	  Q148245 Upgrading from Uni- to Multi-Processor Requires Service Pack.
	
	Additional query words: C0000249 sp1 sp2 sp3 sp4 sp5 ntmp
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
