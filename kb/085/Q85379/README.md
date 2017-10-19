---
layout: page
title: "Q85379: Manual Installation of Windows Resource Kit Version 3.1"
permalink: /kb/085/Q85379/
---

## Q85379: Manual Installation of Windows Resource Kit Version 3.1

	Article: Q85379
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to use only certain components of the Windows Resource Kit (WRK) for
	Windows 3.1, you should perform a manual installation.
	
	NOTE: The information in this article does not apply to version 2.0 of the
	Windows Resource Kit for Windows 3.1. DECOMP.EXE is not included with version
	2.0 of the WRK.
	
	MORE INFORMATION
	================
	
	To manually install WRK utilities, follow the steps below (where x represents
	the floppy drive letter of the WRK disk):
	
	1. Create a directory on the hard drive where the WRK files will be stored. For
	  example, from the MS-DOS prompt, enter the following command to create a
	  directory called WRK31:
	
	  md wrk31
	
	2. Copy the file DECOMP.EXE from the WRK disk to the WRK31 directory on the hard
	  drive by entering the following command:
	
	  copy x:\decomp.exe c:\wrk31
	
	3. Decompress the files by entering the following command from the WRK directory
	  on the hard drive:
	
	  decomp x:\wrk\*.*
	
	4. Rename all of the files in the C:\WRK31 directory to their appropriate names
	  by entering the following four commands from the resource kit directory:
	
	  rename *.ex$ *.exe
	  rename *.wr$ *.wri
	  rename *.dl$ *.dll
	  rename *.hl$ *.hlp
	
	5. Copy the files TOPHOOK.DLL and FILESIZE.DLL into the WINDOWS directory (or
	  into the user directory if it is a network installation) by entering the
	  following commands at the MS-DOS prompt:
	
	  copy c:\wrk31\tophook.dll c:\windows
	  copy c:\wrk31\filesize.dll c:\windows
	
	6. Copy the file VBRUN100.DLL into the \WINDOWS\SYSTEM subdirectory, or into the
	  shared directory on the network by entering the following command at the
	  MS-DOS prompt:
	
	  copy c:\wrk31\vbrun100.dll c:\windows\system
	
	7. Create icons for the WRK utilities by following the steps outlined in pages
	  78-81 of the "Microsoft Windows User's Guide" version 3.1 manual.
	
	Additional query words: 3.10 3.1 3.11 rkit wrkit
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
