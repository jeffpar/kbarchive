---
layout: page
title: "Q120442: Using Hard Disk Utilities with Windows 95"
permalink: /kb/120/Q120442/
---

## Q120442: Using Hard Disk Utilities with Windows 95

	Article: Q120442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): diskmem win95 appscomp kbAppCompatibility kbDiskMemory
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Most hard disk utility programs released before Windows 95 and Windows NT 4.0
	require an update. If you use a non-long filename-aware hard disk utility, you
	may lose long filenames and you are at risk of losing data.
	
	If the file maintenance utility you use is not written to support long filenames,
	it will likely damage your long filenames. Examples of such programs include the
	following:
	
	  4DOS
	  Disk utilities in Stacker 4.0 or earlier
	  MS-DOS DOSSHELL
	  NDOS
	  Norton Desktop
	  Norton Utilities
	  PC-Tools PCShell
	  PC-Tools Utilities
	  Windows File Manager
	  XTree
	  XTree Gold
	  XTree Pro
	  XTreeNet 3.0
	
	For more information about the problems caused by third-party hard disk
	utilities, please contact the manufacturer.
	
	MORE INFORMATION
	================
	
	The following MS-DOS commands run from MS-DOS (not an MS-DOS command prompt) may
	also cause long filename damage:
	
	- COPY - This command results in a mismatched long filename when you copy a
	  short filename in the 32-bit entry beneath an orphaned long filename.
	
	- DEFRAG - Using DEFRAG from MS-DOS version 6.0, 6.2, 6.21, or 6.22 causes you
	  to lose long filenames because it re-sorts the structure of short filenames
	  on your disk without taking into account their associated long filenames.
	
	  Windows 95 Defrag does not re-sort the filenames due to the possibility of
	  file corruption in a multitasking environment.
	
	- DEL/DELTREE - These commands result in orphaned long filenames. DEL applies
	  to files only. DELTREE applies to files and folders, but only affects the
	  topmost folder that it is run on as all subsequent folders and files are
	  deleted, including their long filenames.
	
	- MD - This command results in a mismatched long filename. The damage occurs
	  when you make a short filename folder in the 32-bit entry beneath an orphaned
	  long filename.
	
	- MOVE - This command causes mismatched or orphaned long filenames. If MOVE is
	  performed within the context of the same folder (a modified rename) then a
	  mismatched long filename will result. If MOVE is performed outside of the
	  folder, then an orphaned long filename will result. This applies to both
	  files and folders.
	
	- RD - This command results in an orphaned long filename. The damage occurs
	  when you remove a short filename folder in the 32-bit entry beneath its
	  associated long filename.
	
	- REN - This command results in a mismatched long filename. The damage occurs
	  when you rename a short filename in the 32-bit entry beneath its associated
	  long filename. The REN command will not fix a previously mismatched long
	  filename.
	
	- SCANDISK - This command does not account for the long filename structure when
	  it writes corrections to your disk; therefore, it corrupts long filenames.
	
	If you need to use an earlier version of a hard disk utility in Windows 95,
	perform the following steps:
	
	NOTE: The long filename backup utility (Lfnbk.exe) is not supported in Windows NT
	4.0. There is no comparable utility for Windows NT 4.0.
	
	1. Run Lfnbk.exe, which is a long filename (LFN) backup utility available in the
	  \\Admin\Apptools\Lfnback folder of the Windows 95 CD.
	
	  Lfnbk.exe removes your long filenames and saves them to a data file. Read
	  LFNBK.TXT for more information.
	
	2. Restart your computer and use the appropriate step below:
	
	   - If you need to run an MS-DOS-based utility, press the F8 key when you see
	     the "Starting Windows 95" message, and then choose Command Prompt Only
	     from the Startup menu.
	
	     -or-
	
	   - If you need to run a Windows-based utility, allow Windows 95 to start
	     normally.
	
	3. After you run the utility, restart your computer and run Lfnbk.exe to restore
	  your long filenames.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: corrupt prodnt w95hwfaq
	
	======================================================================
	Keywords          : diskmem win95 appscomp kbAppCompatibility kbDiskMemory 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	
	=============================================================================
	
