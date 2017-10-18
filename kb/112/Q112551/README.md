---
layout: page
title: "Q112551: Reinstalling Windows 3.10 Files over Windows 3.11"
permalink: kb/112/Q112551/
---

## Q112551: Reinstalling Windows 3.10 Files over Windows 3.11

	Article: Q112551
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how reconfigure your Windows 3.11 installation to run
	Windows 3.10 using your original Windows 3.10 disks.
	
	
	MORE INFORMATION
	================
	
	To install Windows 3.10 files over a local installation of Windows 3.11:
	
	1. Quit Microsoft Windows.
	
	2. Create a backup directory. For example, to create a backup directory off the
	  root of drive C, type "md c:\backup" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	3. Copy the files listed below from your Windows SYSTEM subdirectory to the
	  backup directory or a floppy disk.
	
	  COMMDLG.DLL
	  GDI.EXE
	  KRNL386.EXE
	  PSCRIPT.DRV
	  SHELL.DLL
	  UNIDRV.DLL
	  USER.EXE
	
	  To do this, use the following syntax
	
	  copy <drive>:\<windir>\system\<filename>
	  <drive>:\<backdir>
	
	  where <drive> is your hard disk drive, <windir> is your Windows
	  directory, <filename> is the file you are copying, and <backdir>
	  is your backup directory.
	
	  For example, if your hard disk drive is C, your Windows directory is named
	  WINDOWS, you are copying COMMDLG.DLL, and your backup directory is named
	  C:\BACKUP, type the following:
	
	  copy c:\windows\system\commdlg.dll c:\backup
	
	  Repeat this command for the remaining files.
	
	4. Using the table at the end of this article, insert the appropriate disks, one
	  by one, and expand the following files to your Windows SYSTEM subdirectory.
	
	  COMMDLG.DL_
	  GDI.EX_
	  KRNL386.EX_
	  PSCRIPT.DR_
	  UNIDRV.DL_
	  SHELL.DL_
	  USER.EX_
	
	  For example, insert Disk 4 of the 3.5 inch, 1.44-megabyte (MB) disk set and
	  type the following at the MS-DOS command prompt:
	
	  expand a:\commdlg.dl_ c:\windows\system\commdlg.dll
	
	  PSCRIPT.DR_ should be expanded to PSCRIPT.DRV, .DL_ files should be expanded
	  to .DLL, and .EX_ files should be expanded to .EXE.
	
	  NOTE: After you copy the new USER.EXE file to your Windows SYSTEM
	  subdirectory, your registered user and company name will be blank.
	
	5. If you use Novell NetWare connectivity, do the following:
	
	  a. Use a text editor (such as Windows Notepad) to open your SYSTEM.INI file,
	     which is located in your Windows directory.
	
	  b. In the [386Enh] section, change DEVICE=VTDA.386 to DEVICE=*VTD.
	
	  c. Save the file and quit the text editor.
	
	To install Windows 3.10 files over a network installation of Windows 3.11:
	
	1. Determine the location of your SYSTEM.INI file and the network share that
	  contains your shared Windows files. For example, if the network drive
	  containing your Windows program files is Q, the location of your shared
	  Windows files may be Q:\WINSHARE and your user directory may be
	  Q:\USER\YOURNAME (or your user directory may be located on your local hard
	  disk drive).
	
	2. Quit Microsoft Windows.
	
	3. Create a backup directory. For example, to create a backup directory off the
	  root of drive C, type MD C:\BACKUP at the MS-DOS command prompt and then
	  press ENTER.
	
	4. Copy the following files from the network share to the backup directory on
	  your hard disk drive using the following syntax at the MS-DOS command prompt
	  and then press ENTER.
	
	  copy <netdrive>:\<netshare>\<filename>
	  <harddrive>:\<backdir>
	
	  where <netdrive> is the network drive, <netshare> is the network
	  share containing your SYSTEM.INI file, <filename> is the file you are
	  copying, <harddrive> is your hard disk drive, and <backdir> is
	  your backup directory.
	
	  For example, if your network drive is Q, the network share is WINSHARE, the
	  file you want to copy is COMMDLG.DLL, your hard disk drive is C, and your
	  backup directory is named C:\BACKUP, type the following:
	
	  copy q:\winshare\commdlg.dll c:\backup
	
	  Repeat this command for the remaining files:
	
	  COMMDLG.DLL
	  GDI.EXE
	  KRNL386.EXE
	  PSCRIPT.DRV
	  UNIDRV.DLL
	  SHELL.DLL
	  USER.EXE
	
	5. Remove the read-only file attributes on the shared Windows files using the
	  MS-DOS ATTRIB command.
	
	6. Using the table at the end of this article, insert the appropriate disks, one
	  by one, and expand the following files to the network drive and share that
	  contains your Windows files:
	
	  COMMDLG.DL_
	  GDI.EX_
	  KRNL386.EX_
	  PSCRIPT.DR_
	  UNIDRV.DL_
	  SHELL.DL_
	  USER.EX_
	
	  For example, insert Disk 4 of the 5.25-inch, 1.2-MB disk set and type the
	  following at the MS-DOS command prompt:
	
	  expand a:\commdlg.dl_ q:\winshare\commdlg.dll
	
	  PSCRIPT.DR_ should be expanded to PSCRIPT.DRV, .DL_ files should be expanded
	  to .DLL, and .EX_ files should be expanded to .EXE.
	
	  NOTE: After you copy the new USER.EXE file to your Windows SYSTEM
	  subdirectory, your registered user and company name will be blank.
	
	7. Reset the read-only file attributes on the shared Windows files using the
	  MS-DOS ATTRIB command.
	
	8. If you use Novell NetWare connectivity, do the following:
	
	  a. Use a text editor (such as Windows Notepad) to open your SYSTEM.INI file.
	
	  b. In the [386Enh] section, change DEVICE=VTDA.386 to DEVICE=*VTD.
	
	  c. Save the file and quit the text editor.
	
	DISK LOCATION OF FILES TO EXPAND
	--------------------------------
	
	                                       Disk Number
	Filename      5.25-inch, 1.2-MB    3.5-inch, 1.44-MB    3.5-inch, 720K
	----------------------------------------------------------------------
	
	COMMDLG.DL_            4                     4                    10
	GDI.EX_                1                     1                     3
	KRNL386.EX_            2                     2                     4
	PSCRIPT.DR_            7                     6                    11
	SHELL.DL_              5                     4                     8
	UNIDRV.DL_             7                     6                    12
	USER.EX_               3                     2                     2
	
	Additional query words: appnote 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
