---
layout: page
title: "Q96386: Cannot Lower Estimated Compression Ratio with DoubleSpace"
permalink: /kb/096/Q96386/
---

## Q96386: Cannot Lower Estimated Compression Ratio with DoubleSpace

{% raw %}

	Article: Q96386
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	DoubleSpace doesn't allow you to lower the estimated compression ratio (ECR).
	
	CAUSE
	=====
	
	When you lower the ECR, you effectively reduce the size of the compressed drive.
	Reducing the size of the compressed drive requires reducing the size of the file
	allocation table (FAT). If there is an entry in use near the end of the FAT,
	DoubleSpace cannot reduce the size (lower the ECR).
	
	The following are examples of conditions that can prevent DoubleSpace from
	lowering the ECR:
	
	- Lost allocation units at the end of the compressed drive
	
	- Heavily fragmented files on the compressed drive
	
	- A file (with Hidden and/or System attributes set) stored at the end of the
	  compressed drive
	
	WORKAROUND
	==========
	
	To correct the lost allocation unit problem, run ScanDisk on the compressed
	drive (if you are using MS-DOS 6.0, run CHKDSK /F).
	
	To correct the fragmented drive problem, run DEFRAG /F /H on the compressed
	drive.
	
	To correct the hidden-system file problem:
	
	1. Use the DIR command to search for system files on the compressed drive. For
	  example, if your compressed drive is drive C, type "dir c /s /as /p" (without
	  the quotation marks) at the MS-DOS command prompt and then press ENTER. Make
	  note of the files that are listed.
	
	  The following chart lists programs that are known to write system files at the
	  end of a drive:
	
	  Program name                  Program filename      System file created
	  -----------------------------------------------------------------------
	
	  Microsoft MS-DOS Mirror           MIRROR.COM              MIRORSAV.FIL
	  Central Point Mirror              MIRROR.COM              MIRORSAV.FIL
	  Symantec Norton Image             IMAGE.EXE               IMAGE.IDX
	  Symantec Norton Format Recover    FR.EXE                  FRECOVER.IDX
	  Microsoft MS-DOS 5.0 Undelete     MIRROR.COM              PCTRACKR.DEL
	  Microsoft MS-DOS 6.0/6.2 Undelete
	   - Delete Tracker                 UNDELETE.EXE            PCTRACKR.DEL
	   - Delete Sentry                  UNDELETE.EXE            CONTROL.FIL
	  Central Point Undelete
	   - Delete Tracker                 UNDELETE.EXE            PCTRACKR.DEL
	   - Delete Sentry                  UNDELETE.EXE            CONTROL.FIL
	
	2. Use ATTRIB to remove the file attributes on the system files you found in
	  step 1. For example, if you have a Mirror file on drive C, type the following
	  at the MS-DOS command prompt and then press ENTER:
	
	  " attrib -r -s -h c:\mirorsav.fil" (without the quotation marks)
	
	  NOTE: If the system files you found are used by a delete-tracking program
	  (refer to the table in step 1), you need to reboot your computer without
	  loading the corresponding program file before you change the file attributes
	  on the system file. To do so, reboot your computer and press F5 when the
	  "Starting MS-DOS..." prompt is displayed.
	
	3. Run Microsoft Defragmenter on the compressed drive. Change to the compressed
	  drive and type "defrag /f /h" (without the quotation marks) at the MS-DOS
	  command prompt.
	
	You should now be able to lower the ECR on the DoubleSpace-compressed drive.
	
	If you were able to successfully lower the ECR on the compressed drive, reset the
	file attributes on the system file addressed in step 2. For example, type the
	following at the MS-DOS command prompt and then press ENTER:
	
	  " attrib +r +s +h c:\mirorsav.fil" (without the quotation marks)
	
	NOTE: The DoubleSpace ECR is not based solely on the expected compressibility of
	new data; it is also dependent on the size of the compressed volume file (CVF).
	You may need to resize the compressed drive to change the ECR to the desired
	value.
	
	
	
	Additional query words: 6.00 6.20 double space drive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
