---
layout: page
title: "Q123286: WINNT /D Does Not Delete System Files"
permalink: /kb/123/Q123286/
---

## Q123286: WINNT /D Does Not Delete System Files

	Article: Q123286
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you attempt to run WINNT.EXE with the
	/D switch (for example: WINNT /D:C:\WINNT) to delete Windows NT:
	
	  Setup was unable to open the log file named below.
	
	  C:\WINNT\SETUP.LOG
	
	  Setup is unable to remove Windows NT files from the specified directory.
	
	If you copy the SETUP.LOG file from the %SYSTEMROOT%\REPAIR directory (where it
	resides with Windows NT version 3.5) into the %SYSTEMROOT% directory (in this
	example, C:\WINNT), the following error message appears:
	
	  Setup is unable to find the Repair.WinntFiles section in the setup log file
	  named below.
	
	  C:\WINNT\SETUP.LOG
	
	  Setup is unable to remove Windows NT files from the specified directory.
	
	CAUSE
	=====
	
	WINNT.EXE is looking for the SETUP.LOG file in the %SYSTEMROOT% directory, where
	it resides with Windows NT version 3.1, instead of %SYSTEMROOT%\REPAIR, where it
	resides with Windows NT version 3.5. WINNT.EXE is also looking for the section
	names as they exist under Windows NT version 3.1; for example,
	Repair.WinntFiles, which is actually named Files.Winnt with Windows NT version
	3.5.
	
	WINNT.EXE /D is designed to delete Windows NT system files from %SYSTEMROOT%. It
	is not designed to delete the entire directory structure, nor is it designed to
	delete the boot files or modify the boot sector.
	
	RESOLUTION
	==========
	
	As a workaround, you can manually remove Windows NT by proceeding with the
	following.
	
	NOTE: The following assumes that your system is currently configured to start
	into Windows NT or MS-DOS (that both are startup options) and that your system
	partition is using the FAT file system. If your configuration differs from that
	just mentioned, do not proceed with the following. Instead, contact Microsoft
	Product Support for other uninstall/configuration options.
	
	1. Start your system from an MS-DOS bootable floppy disk that contains the file
	  SYS.COM.
	
	2. From the A:\ prompt, type "sys c:" (without the quotation marks).
	
	3. Start your system from the hard drive to ensure that the system starts from
	  the hard drive into MS-DOS.
	
	4. Use the MS-DOS ATTRIB command (for example, ATTRIB -r -h -s <filename>)
	  to remove the read only, hidden, and system attributes from the following
	  files, found in the root directory of your system partition:
	
	     BOOT.INI
	     BOOTSECT.DOS
	     NTBOOTDD.SYS (if it exists)
	     NTDETECT.COM
	     NTLDR
	
	5. Delete the files mentioned in step 4 above and the file PAGEFILE.SYS.
	
	6. Delete the directory %SYSTEMROOT%\SYSTEM32 and %SYSTEMROOT%\REPAIR.
	
	7. Optionally, you can also delete the USERS and WIN32APP directories, found in
	  the root directory, provided there are no important user files located there.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt deinstall
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
