---
layout: page
title: "Q96083: DoubleSpace Err Msg: Drive Is Too Fragmented to Resize"
permalink: /kb/096/Q96083/
---

## Q96083: DoubleSpace Err Msg: Drive Is Too Fragmented to Resize

{% raw %}

	Article: Q96083
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When you try to resize a DoubleSpace drive, you may receive the following error
	message
	
	  Drive <X> is too fragmented to resize. Before resizing drive <X>,
	  defragment it by typing DEFRAG.EXE /H /Q <X>: at the MS-DOS command
	  prompt.
	
	where <X> is the drive letter of the compressed drive.
	
	CAUSE
	=====
	
	If running DEFRAG /H /Q <X>: does not correct this problem, one or more of
	the following statements apply to your system:
	
	- You have a system file located at the end of your DoubleSpace drive (possibly
	  IO.SYS, MSDOS.SYS, or a system file created by a delete- tracking, disk
	  image, erase protect, or format protection program).
	
	- You have a bad sector on your host drive near the end of the DoubleSpace
	  compressed volume file (CVF).
	
	- Software installed on your system uses a copy-protection schemes that use
	  clusters marked as "bad" to store data.
	
	The following programs write system files at the end of a drive and therefore
	commonly cause the error message noted above:
	
	  Program Name                  Program File Name      System File Created
	  ------------------------------------------------------------------------
	
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
	
	RESOLUTION
	==========
	
	If you know some of your software is copy-protected, follow the instructions in
	the "Copy-Protected Software Is Installed on the Computer" section below.
	
	If you are not using copy-protected software, use the following steps:
	
	1. If you are running MS-DOS 6.2, run ScanDisk on your host drive. For example,
	  type "scandisk <host drive>: /surface" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER. If you are running MS-DOS
	  6.0, unmount the DoubleSpace-compressed drive and run a third-party surface
	  scan product, such as Symantec's Norton Utilities Norton Disk Doctor
	  (NDD.EXE) or Central Point Software's DiskFix.
	
	  If the surface-scan program detects and corrects a bad cluster, you should be
	  able to resize your drive. If you still cannot resize the drive, continue
	  following this procedure.
	
	2. Use the DIR command to search for hidden system files on the
	  DoubleSpace-compressed drive. For example, if your DoubleSpace- compressed
	  drive is drive C, type "dir c: /s /as /p" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	3. Use ATTRIB to remove the file attributes on the system files you find in step
	  2. For example, if you have a Mirror file on drive C, type the following at
	  the MS-DOS command prompt and then press ENTER:
	
	  " attrib -r -s -h c:\mirorsav.fil " (without the quotation marks)
	
	  NOTE: If the system files you find are used by a delete-tracking program
	  (refer to the table in the CAUSE section), you need to reboot your computer
	  without loading the corresponding program file before you change the file
	  attributes on the system file. To do so, reboot your computer and press F5
	  when the "Starting MS-DOS..." prompt is displayed.
	
	4. Run Microsoft Defragmenter.
	
	You should now be able to resize the DoubleSpace-compressed drive.
	
	If you were able to successfully resize the DoubleSpace-compressed drive, reset
	the file attributes on the system file addressed in step 3. For example, type
	the following at the MS-DOS command prompt and then press ENTER:
	
	  " attrib +r +s +h c:\mirorsav.fil " (without the quotation marks)
	
	If you were not able to resize the DoubleSpace-compressed drive, edit the
	DBLSPACE.INI file and increase the MaxFileFragments setting by using the
	following steps:
	
	1. Remove the Read-Only, System, and Hidden file attributes on the DBLSPACE.INI
	  file. For example, if drive H is your host drive, type the following at the
	  MS-DOS command prompt and press ENTER:
	
	  " attrib -r -s -h h:\dblspace.ini " (without the quotation marks)
	
	  NOTE: To determine which drive is your host drive, type "dblspace /list"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	2. Using MS-DOS Editor, edit the DBLSPACE.INI file and increase the value for
	  MaxFileFragments; 2000 is a good number to try.
	
	3. Save the DBLSPACE.INI file and exit MS-DOS Editor.
	
	4. Restart your computer and try to resize the drive.
	
	Copy-Protected Software Is Installed on the Computer
	----------------------------------------------------
	
	If you are using copy-protected software, you may be able to work around this
	problem by using a third-party disk-edit program, such as Symantec's Norton
	Utilities or Central Point Software's PC Tools, to change the cluster's status
	from "bad" to "unused" (without the quotation marks) (that is, change the status
	from FFF7 to 0). However, this usually leaves the third-party copy-protected
	software unusable. If possible, uninstall the third-party copy-protected
	software, resize the DoubleSpace drive, and then reinstall the copy- protected
	software. For more information about removing your software's copy-protection
	scheme, contact the vendor of the software.
	
	MORE INFORMATION
	================
	
	Decreasing the size of a compressed drive causes the file allocation table (FAT)
	to be truncated. If a FAT entry past the truncation point is marked as anything
	other than "free," DoubleSpace displays the error noted above. To maintain
	compatibility with copy-protection schemes and programs that use clusters marked
	as "bad" to store data, DoubleSpace does not shrink the FAT past a "bad"
	cluster.
	
	The Symantec and Central Point products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 6.00 6.20 6.21 6.22 3rdparty dblspace double space third party third-party hidden
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
