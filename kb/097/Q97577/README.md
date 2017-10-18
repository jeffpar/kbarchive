---
layout: page
title: "Q97577: Your Computer Fails the Microsoft Backup Compatibility Test"
permalink: kb/097/Q97577/
---

## Q97577: Your Computer Fails the Microsoft Backup Compatibility Test

	Article: Q97577
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Your computer fails the Microsoft Backup compatibility test.
	
	CAUSE
	=====
	
	Your computer may fail the Microsoft Backup compatibility test for the following
	reasons:
	
	- The floppy drive controller card does not support direct memory access (DMA).
	
	- A software compatibility problem exists in MS-DOS.
	
	- You are using a third-party virtual device driver (VxD) in Windows.
	
	- The floppy disk is not properly seated.
	
	- The floppy disks you are using are failing or are formatted incorrectly.
	
	- You are loading APPEND.EXE, causing the following error message:
	
	  The file <filename> does not exist. The file cannot be compared.
	
	- You are running POWER.EXE.
	
	- You are using a third-party extended memory manager (such as QEMM with FL=0
	  and FEMS).
	
	- The buffers and files settings in your CONFIG.SYS file are inadequate.
	
	- You don't have enough free disk space for Microsoft Backup to create
	  temporary files.
	
	WORKAROUND
	==========
	
	Troubleshooting the MS-DOS-Based Version of Microsoft Backup
	------------------------------------------------------------
	
	If you are running the MS-DOS-based version of Microsoft Backup, start your
	computer with the Clean Start function key (F5) and try the compatibility test
	again.
	
	If the compatibility test still fails, check the CONFIG.SYS file for the
	following settings:
	
	  buffers=30
	  files=30
	  stacks=9,256
	
	If the buffers and files are not at least 30, increase them to 30 and save the
	CONFIG.SYS file. Restart the computer using an interactive boot (F8). Respond
	"Y" only to buffers and files, and then retry the compatibility test. If the
	test fails again, follow the instruction in the "Manual Backup to Path Test"
	section below.
	
	Troubleshooting Microsoft Backup for Windows
	--------------------------------------------
	
	If you are running Microsoft Backup for Windows:
	
	1. Run File Manager and format a floppy disk to see if you are having problems
	  formatting floppy disks from Windows.
	
	2. Try running Windows in standard mode and then running the compatibility
	  test.
	
	  If the compatibility test works in standard mode but does not work in 386
	  enhanced mode, remove any virtual device drivers (VxDs) that may conflict
	  with VFINTD.386. For example, tape backup VxDs may conflict with VFINTD.386.
	
	  The following software VxDs (loaded in the [386enh] section of the SYSTEM.INI
	  file) can cause the compatibility test to fail:
	
	     DEVICE=MYABU.386
	     DEVICE=FASTBACK.386
	     DEVICE=VFD.386
	     DEVICE=CPBVXD.386
	     DEVICE=VIRWT.386
	     DEVICE=CMSTAPE.386
	     DEVICE=CMSTAPED.386
	     DEVICE=CMSDTAPE.386
	     DEVICE=ABACKUP.386
	
	NOTE: Backup for Windows may fail by either dropping to the MS-DOS command
	prompt, blanking the screen, or hanging the system when it reaches 99%
	completion.
	
	Manual Backup to Path Test
	--------------------------
	
	If the compatibility test fails, you cannot back up to drive A or B using the
	specific drive options. Instead, you must back up to the MS-DOS path.
	
	When you back up to the MS-DOS path, all your floppy disks must be formatted
	before you begin backing up. This feature (backing up to the MS-DOS path) is
	implemented in Microsoft Backup to provide maximum compatibility with the
	various hardware being produced.
	
	NOTE: Be sure the disks being used for the compatibility test are formatted using
	the MS-DOS FORMAT command. The disks may have been pre-formatted, or formatted
	using a third-party utility, such as PC Tools or Norton Utilities. This may
	cause the compatibility test to fail. To find out if they were formatted using
	such a utility, check the date on the FORMAT.COM in the DOS directory. It should
	be 3-10-93 for MS-DOS 6.0.
	
	To test backing up to the MS-DOS path, do the following:
	
	1. Start Microsoft Backup or Microsoft Backup for Windows.
	
	2. Choose the Select Files Button and select approximately 2 MB of files--enough
	  that all the files cannot fit on one floppy disk.
	
	  For more information on selecting files, see the Selecting Files For Backup
	  Help topic.
	
	3. After you have selected approximately 2 MB of files, choose the OK button.
	
	4. In the Backup To box, select MS-DOS Path.
	
	5. In the Backup To text box, type "A:\" (without the quotation marks) or "B:\"
	  (without the quotation marks) and then choose the Start Backup button.
	
	6. Change the disk in the floppy disk drive when you are prompted to do so.
	
	7. When Microsoft Backup has completed the backup, choose the OK button.
	
	8. Choose the Compare button.
	
	9. Choose the Select Files Button and select the files you backed up.
	
	10. Choose the Start Compare button.
	
	If the compare successfully completes, you can safely back up to the MS-DOS
	path.
	
	
	Additional query words: 6.00 6.20 MSBACKUP.EXE MWBACKUP.EXE diskette win31 disks bad fail failure trouble shoot shooting troubeshoot troubleshooting tshoot t-shoot lockup device=c:\windows c:\mybackup c:\abackup MSBACKUP MWBACKUP
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
