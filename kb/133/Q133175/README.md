---
layout: page
title: "Q133175: Troubleshooting DriveSpace in Windows 95"
permalink: /kb/133/Q133175/
---

## Q133175: Troubleshooting DriveSpace in Windows 95

	Article: Q133175
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,95
	Operating System(s): 
	Keyword(s): kbtool kbtshoot win95
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot the following problems with
	DriveSpace in Windows 95:
	
	- DriveSpace displays an error message
	
	- Your computer stops responding (hangs) during compression
	
	- Your computer does not boot properly after compressing a drive
	
	MORE INFORMATION
	================
	
	DriveSpace Displays an Error Message
	------------------------------------
	
	If you receive an error message while running DriveSpace, check the Microsoft
	Knowledge Base for existing articles about that error message. Some of the most
	common errors are:
	
	  Q124558 DriveSpace Err Msg: Mini.cab File Is Missing or Damaged...
	
	  Q132883 Err Msg: Drive C Contains Errors That Must Be Corrected...
	
	  Q123441 Windows 95 DriveSpace Err Msg: Windows Cannot Perform...
	
	  Q154839 Err Msg: Windows Has Detected a Compressed Drive Access Error
	
	  Q134859 DriveSpace VxD and Real-Mode Driver Are Mismatched
	
	  Q142919 Error Message: ID Number DRVSPACE125
	
	  Q155689 Error Message: Mini.cab Is Missing or Corrupt
	
	Computer Hangs During Compression
	---------------------------------
	
	If your computer hangs while DriveSpace is running, follow these steps:
	
	1. If DriveSpace stops when it is 25 percent finished, see the following article
	  in the Microsoft Knowledge Base:
	
	  Q136830 DriveSpace May Fail to Start in Mini-Windows Mode
	
	2. If DriveSpace stops when it is between 25 and 100 percent finished, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q136899 DriveSpace Restartability in Windows 95 and MS Plus!
	
	3. If DriveSpace stops while you are uncompressing or resizing a compressed
	  drive, follow these steps:
	
	  a. Start your computer with your Windows 95 or Microsoft Plus! Startup disk.
	     When you see the "Starting Windows 95" message, press the F8 key, and then
	     choose Step-By-Step Confirmation from the Startup menu. Press N when you
	     are prompted to load the DoubleSpace or DriveSpace driver.
	
	     NOTE: If you did not create a Startup disk during Windows 95 Setup, or you
	     did not update your Startup disk during Microsoft Plus! Setup, you can
	     create a Startup disk manually.
	
	     For information about creating or updating a Startup disk, please see the
	     following articles in the Microsoft Knowledge Base:
	
	  Q138991 Problems Using Windows 95 or Microsoft Plus! Startup Disk
	
	  Q136900 Manually Updating the Startup Disk After Installing Microsoft Plus!
	
	     IMPORTANT: If your computer uses software that translates disk geometry
	     (such as OnTrack Disk Manager or Micro House EZ-Drive), make sure to load
	     the translation software when you start your computer with the Startup
	     disk.
	
	  b. Verify that you have the correct DriveSpace and ScanDisk files on drives A
	     and C.
	
	     Check the Startup disk for the correct Drvspace.bin and Scandisk.exe files
	     with the following commands:
	
	  dir /a a:\drvspace.bin
	  dir a:\scandisk.exe
	
	     NOTE: The Startup disk does not contain a Dblspace.bin file. The
	     Drvspace.bin file should have the file size and date noted below,
	     depending on whether or not Microsoft Plus! is installed. If you did not
	     install Microsoft Plus!, the Scandisk.exe file should be 134,738 bytes in
	     size. If you installed Microsoft Plus!, the Scandisk.exe file should be
	     137,836 bytes in size.
	
	     If you do not have the correct versions of these files, extract new copies
	     from your original disks or CD-ROM to the root folder of drive A.
	
	     For information about using the Extract tool, please see the following
	     article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	     Make sure that both the Drvspace.bin and Dblspace.bin files exist in the
	     root folder of drive C. To check for these files, type the following
	     command:
	
	  "dir /a c:\d??space.bin" (without the quotation marks)
	
	     If you did not install Microsoft Plus!, you should see the following
	     files:
	
	        File name      Date/Time            Size
	        ------------------------------------------
	        Drvspace.bin   07-11-95 9:50 A.M.   71,287
	        Dblspace.bin   07-11-95 9:50 A.M.   71,287
	
	     If you did install Microsoft Plus!, you should see the following files:
	
	        File name      Date/Time             Size
	        -------------------------------------------
	        Drvspace.bin   07-14-95 12:00 A.M.   64,135
	        Dblspace.bin   07-14-95 12:00 A.M.   64,135
	
	     If you are using Windows 95 OEM Service Release 2, you should have the
	     following files whether or not Microsoft Plus! is installed:
	
	        File name      Date/Time             Size
	        -------------------------------------------
	        Drvspace.bin   08-24-96 11:11 A.M.   65,271
	        Dblspace.bin   08-24-96 11:11 A.M.   65,271
	
	     IMPORTANT: Drvspace.bin and Dblspace.bin are the same files with different
	     names. Copy the Drvspace.bin file to Dblspace.bin on the Startup disk with
	     the following commands before you proceed:
	
	  attrib -s -h -r a:\drvspace.bin
	  copy a:\drvspace.bin a:\dblspace.bin
	  attrib +s +h +r a:\d??space.bin
	
	  c. Make sure that either a Drvspace.ini or Dblspace.ini file exists in the
	     root folder of drive C. To check, type the following command:
	
	  "dir /a c:\d??space.ini" (without the quotation marks)
	
	  d. If neither a Drvspace.ini or Dblspace.ini file exists on the hard disk,
	     create one using the EDIT command from the Startup disk. To do this, type
	     "edit c:\drvspace.ini" (without the quotation marks), and then press
	     ENTER. Then, save the Drvspace.ini file and close the editor.
	
	  e. Restart your computer and do not press the F8 key. The computer should
	     boot into Windows 95 and the contents of the compressed drive should be
	     available.
	
	     Check for a Restart.drv file in the root folder of drive C or its host
	     drive by typing the following command:
	
	  "dir /a <drive>:\restart.drv" (without the quotation marks)
	
	     This file is required by DriveSpace to restart a failed operation. If the
	     Restart.drv file exists, copy the Config.pss and Autoexec.pss files from
	     the Failsafe.drv folder to the root folder of the physical boot drive by
	     typing the following commands at a command prompt:
	
	  "copy <drive>:\failsafe.drv\config.pss <drive>:\config.sys
	  copy <drive>:\failsafe.drv\autoexec.pss <drive>:\autoexec.bat"
	  (without the quotation marks)
	
	     Then, edit the Drvspace.ini or Dblspace.ini file and place a semicolon (;)
	     before the "ActivateDrive" line for compressed drive C (if it is being
	     mounted). For example,
	
	  ";ActivateDrive=H,C0" (without the quotation marks)
	
	     This causes the computer to boot to the physical boot drive containing the
	     Failsafe.drv folder and the Restart.drv file.
	
	     NOTE: If there are multiple "ActivateDrive" lines that reference drive C,
	     place the semicolon before the line that ends with "C0." The Drvspace.ini
	     file is a hidden, system, read-only file stored in the root folder of the
	     physical boot drive. To edit the file you must first remove the Hidden,
	     System, and Read-Only attributes. To do so, type the following line at a
	     command prompt:
	
	  "attrib -s -h -r <drive>:\d??space.ini" (without the quotation marks)
	
	     Restart your computer and DriveSpace should try to complete the failed
	     operation in mini-Windows mode.
	
	  f. If the Restart.drv file does not exist, DriveSpace cannot restart the
	     failed operation automatically. Format the drive and restore data from a
	     recent backup, or contact Microsoft Technical Support for additional
	     assistance.
	
	     NOTE: It may be impossible to recover data at this point. It may be
	     necessary to format the drive and restore from a recent backup or to
	     reinstall Windows 95.
	
	
	4. If you are troubleshooting a problem with one of the following DriveSpace
	  operations that was not completed successfully, these operations can be
	  continued after the underlying problems are resolved (provided you have not
	  made manual changes to the DriveSpace configuration, such as changing an .ini
	  file setting or renaming a CVF):
	
	   - Compressing an existing drive
	
	   - Uncompressing a DoubleSpace or DriveSpace drive
	
	   - Creating a new, empty DriveSpace drive
	
	   - Changing the size of a DoubleSpace or DriveSpace drive
	
	   - Changing the estimated compression ratio (ECR) for a DoubleSpace or
	     DriveSpace drive
	
	   - Mounting a DoubleSpace or DriveSpace drive
	
	   - Upgrading (converting) a DoubleSpace or DriveSpace drive to DriveSpace 3
	
	5. If you are not troubleshooting a problem with one of the DriveSpace
	  operations listed above, verify that the compressed drive is mounted by
	  trying to access the drive letter that was created when you originally
	  compressed the drive.
	
	  For example, if you compressed drive C and DriveSpace created drive letter H
	  for the host drive, type "h:" (without the quotation marks) and press ENTER.
	  If you receive an "Invalid drive specification" error message, the compressed
	  drive is not mounted.
	
	
	6. Use ScanDisk to repair or mount the unmounted CVF. To do so, type the
	  following line:
	
	  "scandisk <drive>:" (without the quotation marks)
	
	  where <drive> is the letter of the compressed drive if it was mounted in
	  step 5, or type
	
	  "Scandisk /mount=<YYY><drive>" (without the quotation marks)
	
	  where <YYY> is the extension of the unmounted CVF and <drive> is
	  the drive containing the CVF.
	
	  When you are prompted to check the host drive first, do so. Perform a surface
	  scan on all drives, and fix any errors found.
	
	  If you receive an error message stating that you cannot use compressed drive C
	  because it is not mounted, restart your computer and then repeat step 5.
	
	  NOTE: If there is insufficient memory available for ScanDisk to check the
	  compressed drive, repeat the command after modifying your Startup disk to
	  load the compression driver in upper memory. To do so, create a Config.sys
	  file on the Startup disk that includes at least the following commands
	
	  dos=umb
	  device=<drive>:\failsafe.drv\windows\himem.sys
	  device=<drive>:\failsafe.drv\windows\emm386.exe noems
	  devicehigh=<drive>:\failsafe.drv\command\drvspace.sys /move
	
	  where <drive> is either drive C or its host drive. The Failsafe.drv
	  folder is a hidden folder on the physical boot drive that is used by
	  DriveSpace to restart interrupted disk compression operations. This folder
	  should be available even if your compressed drive is not mounted.
	
	  The Failsafe.drv folder may also contain a Config.emm file that can be used to
	  optimize conventional memory. However, you must change the drive letter
	  designation on the "device=" and "devicehigh=" lines to reference the host
	  for drive C if drive C is a compressed drive that is mounted when you boot
	  with the Startup disk.
	
	  IMPORTANT: If your hardware configuration requires upper memory to be excluded
	  when using Emm386.exe, include the appropriate "x=mmmm-nnnn" syntax on the
	  Emm386.exe command line.
	
	7. Scan your computer for viruses using the latest anti-virus software available
	  to you. If you upgraded from Microsoft MS-DOS 6.0 or later and you have
	  Microsoft Anti-Virus for MS-DOS installed, run Msav.exe to detect and clean
	  all logical drives.
	
	  WARNING: The presence of a computer virus may lead to partial or complete data
	  loss when you perform the following troubleshooting steps. For additional
	  information about computer viruses, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129972 Description of Computer Viruses
	
	8. Perform a thorough surface scan on your hard disk. To do so, follow these
	  steps:
	
	  a. Edit the Scandisk.ini file on the Startup disk to include the following
	     lines:
	
	  [Environment] ScanTimeOut=On NumPasses=5
	
	  b. Save and close the Scandisk.ini file.
	
	  c. Type the following line to scan the hard disk
	
	  "scandisk <drive>:" (without the quotation marks)
	
	     where <drive> is the compressed drive, if it is mounted. If the
	     compressed drive is not mounted, use the host drive letter instead. Note
	     that the host drive letter is the same as the drive letter you normally
	     use for the compressed drive (when you are not having a problem with the
	     compressed drive).
	
	     When you are prompted, instruct ScanDisk to perform the following actions:
	
	      - check the host drive first
	
	      - mount any unmounted CVFs
	
	      - perform a surface scan on both drives
	
	      - fix all errors found
	
	      - view, and save, a log file
	
	     NOTE: This procedure may take some time, particularly if you have a large
	     hard disk or more than one hard disk. To automate this procedure so that
	     ScanDisk does not prompt you for instructions, include the following lines
	     in the Scandisk.ini file:
	
	        [Environment]
	        LfnCheck      = Off
	        Mount         = Always
	
	        [Custom]
	        DriveSummary  = Off
	        AllSummary    = Auto
	        Surface       = Always
	        CheckHost     = Always
	        SaveLog       = Overwrite
	        Undo          = Never
	
	        DS_Header     = Fix
	        FAT_Media     = Fix
	        Okay_Entries  = Fix
	        Bad_Chain     = Fix
	        Crosslinks    = Fix
	
	        Boot_Sector   = Fix
	        Invalid_MDFAT = Fix
	        DS_Crosslinks = Fix
	        DS_LostClust  = Fix
	        DS_Signatures = Fix
	        Mismatch_FAT  = Fix
	        Bad_Clusters  = Fix
	        Bad_Entries   = Delete
	        LostClust     = Save
	
	     Then, run ScanDisk using the following command:
	
	  "scandisk <drive>: /custom" (without the quotation marks)
	
	     ScanDisk creates a Scandisk.log file that you can examine to determine
	     whether ScanDisk fixed any problems on the drive. The problem should now
	     be resolved unless you are troubleshooting a failed DriveSpace operation
	     that is restartable. If this is not the case, you may want to review the
	     troubleshooting steps.
	
	Your Computer Does Not Boot Properly After Compressing a Drive
	--------------------------------------------------------------
	
	A compressed drive may not be mounting correctly. To troubleshoot this problem,
	follow steps 5-8 above.
	
	If the compressed drive is mounted correctly but Windows 95 still does not load,
	see the following article in the Microsoft Knowledge Base:
	
	  Q136337 Troubleshooting Windows 95 Startup Problems and Error Messages
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbtshoot win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbOPKSearch kbZNotKeyword3 kbPlus95
	Version           : :2.0,95
	Issue type        : kbhowto
	
	=============================================================================
	
