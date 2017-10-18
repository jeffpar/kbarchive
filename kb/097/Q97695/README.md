---
layout: page
title: "Q97695: Complete Communicator Software May Need to Be on Host Drive"
permalink: kb/097/Q97695/
---

## Q97695: Complete Communicator Software May Need to Be on Host Drive

	Article: Q97695
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you have a compressed drive and you are using Complete Communicator software
	that uses voice files, you may notice that the voice playback quality has
	diminished.
	
	CAUSE
	=====
	
	According to Complete PC Technical Support, Complete Communicator software that
	uses voice files may need to be stored on an uncompressed drive. If you store
	voice files on a volume that has been compressed (with DoubleSpace or Stacker
	for example), the playback quality may diminish as the drive fills up or becomes
	fragmented.
	
	This problem occurs with any disk-compression software because the voice files
	are already compressed and cannot be properly decompressed when they are
	retrieved from a compressed drive.
	
	WORKAROUND
	==========
	
	Run Microsoft Degragmenter (Defrag) to defragment the drive. If this does not
	correct the problem, you need to move your Complete Communicator software
	installation to an uncompressed or host drive.
	
	NOTE: You cannot move the data files to the host drive without moving the entire
	directory structure. The Complete Communicator software program requires that
	the program files be in the same directory as the voice files.
	
	If you have already installed DoubleSpace and you need to move your Complete
	Communicator software to the host drive, do the following:
	
	1. Change to the MS-DOS command prompt for the directory that contains the
	  Complete Communicator software.
	
	2. Use the DIR command to determine the total size of the directory (including
	  subdirectories). For example, type "dir /s" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	  Write down the size of the Complete Communicator software directory.
	
	3. Run DoubleSpace (DBLSPACE.EXE).
	
	4. From the Drive menu, choose Change Size.
	
	5. Increase the New Free Space setting to the value you determined in step 2,
	  and then choose the OK button.
	
	6. From the Drive menu, choose Exit.
	
	7. Type "dblspace /list" (without the quotation marks) at the MS-DOS command
	  prompt, and then press ENTER to determine the host drive for the compressed
	  drive that contains the Complete Communicator software.
	
	8. Use the XCOPY command to copy the Complete Communicator directory (COMPPC) to
	  the host drive. For example, if H is your host drive, type "xcopy
	  c:\comppc\*.* h:\comppc\*.* /s" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	9. Confirm that all your files were copied to the host drive.
	
	10. Using MS-DOS Editor, edit the CONFIG.SYS file and change the path for any
	  device drivers for Complete Communicator to point to the host drive.
	
	11. Using MS-DOS Editor, edit the AUTOEXEC.BAT file and change the path for any
	  programs called from the Complete Communicator directory on the host drive.
	  You should also change the PATH statement to include the Complete
	  Communicator software directory on the host drive.
	
	12. Restart your computer and run the Complete Communicator software.
	
	13. If everything is working correctly, you can delete the Complete Communicator
	  software directory from the compressed drive. For example, type "deltree /y
	  c:\comppc" (without the quotation marks) at the MS-DOS command prompt and
	  then press ENTER.
	
	
	Additional query words: 6.00 dblspace double space sound 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
