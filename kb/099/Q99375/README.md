---
layout: page
title: "Q99375: How to Repair a Bad Sector in a Compressed Volume File (CVF)"
permalink: /kb/099/Q99375/
---

## Q99375: How to Repair a Bad Sector in a Compressed Volume File (CVF)

	Article: Q99375
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If part of your DoubleSpace-compressed volume file (CVF) occupies a bad sector
	on the host drive, you may be unable to mount your host drive, or you may
	receive errors similar to the following:
	
	  data error reading drive <x>
	  sector not found reading drive <x>
	
	You can work around this problem by using a third-party surface scan utility
	(such as Symantec's Norton Utilities Norton Disk Doctor [NDD.EXE] or Central
	Point Software's DiskFix) or you can use the MS-DOS 6 programs.
	
	NOTE: If you cannot mount your DoubleSpace-compressed drive, contact Microsoft
	Product Support Services.
	
	MORE INFORMATION
	================
	
	Determining If Your CVF Occupies a Bad Sector on the Host Drive
	---------------------------------------------------------------
	
	To determine if your CVF occupies a bad sector on the host drive:
	
	1. Clear the file attributes on the CVF by typing the following at the MS-DOS
	  prompt and pressing ENTER:
	
	  " attrib -r -s -h <drive>:\dblspace.* " (without the quotation marks)
	
	  where <drive> is the host drive letter.
	
	  To determine which drive is the host drive, type "dblspace /list" (without the
	  quotation marks) (without the quotation marks) at the MS-DOS command prompt
	  and press ENTER.
	
	2. Copy the following files to the host drive (so that you can then unmount
	  it):
	
	  COMMAND.COM
	  DBLSPACE.INF
	  DBLSPACE.EXE
	  DBLSPACE.BIN
	  DBLSPACE.HLP
	
	  For example, if your compressed drive is C and your host drive is H, type
	  "copy c:\dos\command.com h:" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	3. Unmount the CVF. For example, if your compressed drive is C and your host
	  drive is H, type "dblspace /unmount c:" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	4. Copy the CVF to the MS-DOS NUL device. For example, if the CVF is on drive C,
	  type the following at the MS-DOS command prompt and press ENTER:
	
	  " copy /b c:\dblspace.000 nul " (without the quotation marks)
	
	  If you encounter a data error reading the file, it indicates a bad sector
	  exists on the host drive.
	
	  If you encounter a seek error or a "sector not found" error reading the file,
	  confirm that the CMOS settings for the drive are correct. If the CMOS
	  settings are correct, you most likely have a bad sector on the host drive.
	
	Correcting the Bad Sector with Third-Party Surface Scan Utilities
	-----------------------------------------------------------------
	
	If the DoubleSpace-compressed drive mounts you can use a third-party surface scan
	utility to correct the problem:
	
	1. Use Microsoft Backup or Microsoft Backup for Windows to back up your data
	  from the compressed drive.
	
	2. Copy the following files to the host drive (so that you can then unmount
	  it):
	
	  COMMAND.COM
	  DBLSPACE.INF
	  DBLSPACE.EXE
	  DBLSPACE.BIN
	  DBLSPACE.HLP
	
	  For example, if your compressed drive is C and your host drive is H, type
	  "COPY C:\DOS\COMMAND.COM H:" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	3. Unmount the compressed volume file (CVF). For example, if your compressed
	  drive is C and your host drive is H, type "dblspace /unmount c:" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	4. Run the third-party surface scan program to correct the bad sector(s).
	
	5. Restart your computer.
	
	6. If the DoubleSpace-compressed drive mounts, run CHKDSK /F to ensure there are
	  no file-allocation errors on the compressed drive. If any files are damaged,
	  restore them from your backups. If the DoubleSpace- compressed drive does not
	  mount, contact Microsoft Product Support Services.
	
	Correcting the Bad Sector with MS-DOS 6 Programs
	------------------------------------------------
	
	If the DoubleSpace-compressed drive mounts, you can use MS-DOS 6 programs to
	correct the problem; however, this process is not as easy as running a
	third-party surface scan utility.
	
	1. Run SETUP /F to make a Startup disk. For more information, see the "Making a
	  Startup Disk" section in the "User's Guide."
	
	2. Use Microsoft Backup or Microsoft Backup for Windows to back up the data on
	  your compressed drive.
	
	3. Format the host drive. For example, type "format h: /s" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	  To determine your host drive, type "dblspace /list" (without the quotation
	  marks) at the MS-DOS command prompt and then press ENTER.
	
	4. If the bad sector was not on your boot drive, skip to step 7.
	
	5. Put the Startup disk in drive A and restart your computer.
	
	6. Install MS-DOS 6 Upgrade (including the MS-DOS-based version of Microsoft
	  Backup).
	
	7. Run DBLSPACE.EXE to compress your drive.
	
	8. Run MSBACKUP.EXE and perform the compatibility test.
	
	9. Run MSBACKUP.EXE and restore your data.
	
	10. Restart your computer.
	
	Additional query words: 6.00 dblspace double space msbackup mwbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
