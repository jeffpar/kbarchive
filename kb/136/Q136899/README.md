---
layout: page
title: "Q136899: DriveSpace Restartability in Windows 95 and MS Plus!"
permalink: kb/136/Q136899/
---

## Q136899: DriveSpace Restartability in Windows 95 and MS Plus!

	Article: Q136899
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	NOTE: If power is lost during an upgrade to DriveSpace 3, turn the
	computer back on when the power is restored and DriveSpace will
	automatically restart where it was interrupted.
	
	SUMMARY
	=======
	
	This article discusses restartable DriveSpace compression operations in Windows
	95 and Microsoft Plus! for Windows 95. Restartable operations are operations
	that can restart automatically if the operation is interrupted and the computer
	reboots.
	
	MORE INFORMATION
	================
	
	DriveSpace Restartability
	-------------------------
	
	DriveSpace operations are restartable either because the computer may be rendered
	unusable if the operation is interrupted, or because the operation requires that
	the computer be restarted to finish. The following DriveSpace operations are
	restartable:
	
	- Compressing an existing drive
	
	- Uncompressing a DoubleSpace or DriveSpace drive
	
	- Creating a new, empty DriveSpace drive
	
	- Changing the size of a DoubleSpace or DriveSpace drive
	
	- Changing the estimated compression ratio (ECR) for a DoubleSpace or
	  DriveSpace drive
	
	- Mounting a DoubleSpace or DriveSpace drive
	
	- Upgrading (converting) a DoubleSpace or DriveSpace drive to DriveSpace 3
	  format
	
	Some of these operations may prevent Windows 95 from starting properly if the
	computer is rebooted before the operation is complete. For example, while
	compressing the directories that contain the Windows 95 system files, the
	Windows 95 files may be located on two different drives. If the computer
	restarts at this point, Windows 95 may be unable to start until the compression
	process is finished. Other operations, such as mounting a DriveSpace or
	DoubleSpace drive, may simply need to restart the computer to ensure that the
	DriveSpace driver is loaded and is configured with the appropriate settings. To
	ensure restartability, DriveSpace uses one of two methods, determined as
	follows:
	
	- If a new, empty DriveSpace drive is being created, DriveSpace uses the quick
	  restartability method.
	
	- If the operation being performed involves a drive for which an
	  exclusive-access file system lock cannot be obtained, DriveSpace uses the
	  full restartability method.
	
	  NOTE: DriveSpace is unable to obtain an exclusive lock on any drive containing
	  open files. The drive that contains the Windows folder, the drive that
	  contains the Windows swap file, and a drive from which a program is currently
	  running all typically contain open files.
	
	- If none of the above conditions apply, DriveSpace uses quick restartability.
	
	Essentially, quick restartability is used if DriveSpace is sure that the
	operation being performed does not endanger the Windows 95 files, and that at no
	point during the operation would Windows 95 be unable to load. In this case,
	DriveSpace creates a Restart.drv file to indicate which operation is being
	performed, and places the following command in the RunOnce key in the registry:
	
	  DRVSPACE /RESTART /INTERACTIVE
	
	Placing this command in the registry causes DriveSpace to be restarted
	automatically if the computer reboots. When the operation is complete, this
	registry entry and the Restart.drv file are removed.
	
	Full restartability is used when the operation being performed may temporarily
	prevent Windows 95 from starting. This method uses mini- Windows, which is a
	Windows 3.1 subset that is also used by the Windows 95 Setup program. By placing
	a copy of the mini-Windows files on the physical boot drive before beginning the
	operation, DriveSpace ensures that a GUI operating environment will be available
	in the event of a reboot. DriveSpace performs the following steps to prepare for
	full restartability:
	
	1. Finds the physical boot drive (PBD), which is the drive that would be drive C
	  if no disk compression software were loaded. This drive is guaranteed to
	  always be available.
	
	2. Creates a file called Restart.drv in the root directory of the PBD. This file
	  contains information about which operation is being performed, and what the
	  current status of that operation is.
	
	3. Creates a Failsafe.drv directory on the PBD and copies the mini-Windows files
	  to this directory. The mini-Windows files are stored in the Mini.cab cabinet
	  file, which the Setup program copies to the Windows\System directory.
	
	  NOTE: The Failsafe.drv directory is not automatically deleted from the PBD
	  when the current operation is successfully completed. This eliminates the
	  need for DriveSpace to create the directory and copy the mini-Windows files
	  to it during future operations that require full restartability.
	
	4. Ensures that there are copies of the Config.sys and Autoexec.bat files on the
	  PBD. If the files are not present on the PBD, but drive C is compressed and
	  copies of the files are present there, the files are copied from drive C to
	  the PBD. If the files are not present on the PBD and drive C is not
	  compressed, new copies of the Config.sys and Autoexec.bat files are created
	  on the PBD.
	
	5. Copies itself into the Failsafe.drv directory, using the name W31space.exe.
	  This copy is then updated to appear compatible with Windows 3.1.
	
	6. Replaces the current SHELL= line in the mini-Windows System.ini file with the
	  following line: SHELL=W31SPACE.EXE This causes mini-Windows to run DriveSpace
	  when it starts. It automatically recognizes the current scenario and infers
	  the missing /RESTART switch.
	
	7. Looks at each line in the Config.sys file on the PBD, and copies each driver
	  referenced in that file from its original location to the Failsafe.drv
	  directory. The lines in the Config.sys file are then changed to reference
	  this copy of the file, instead of the original copy (in the Config.sys file,
	  the PBD is always referenced as drive C, regardless of its current drive
	  letter).
	
	  NOTE: Backup copies of the Config.sys and Autoexec.bat files are copied to the
	  Failsafe.drv directory and named Config.pss and Autoexec.pss. In addition,
	  DriveSpace temporarily disables any line in the Config.sys file that loads
	  Emm386.exe, to make sure that problems do not arise on computers with
	  unusable upper memory blocks (UMBs). If mini-Windows cannot start, the
	  Emm386.exe line is re-enabled and mini-Windows attempts to start again.
	
	8. Modifies the Autoexec.bat file on the PBD so that it runs Dosx.exe from the
	  Failsafe.drv directory, which starts mini-Windows.
	
	9. If drive C is compressed, the line in the Dblspace.ini or Drvspace.ini file
	  that causes drive C to be mounted is removed. This ensures that the PBD is
	  always drive C.
	
	  NOTE: When you compress drive C, the Failsafe.drv directory is not compressed,
	  and can be found on the uncompressed host drive when the operation is
	  complete.
	
	Upgrading a Drive to DriveSpace 3
	---------------------------------
	
	When you convert an existing DoubleSpace or DriveSpace drive to DriveSpace 3,
	DriveSpace performs the following steps:
	
	1. Renames the existing DoubleSpace or DriveSpace compressed volume file (CVF)
	  to Dblspace.030 or Drvspace.030. If a file with that name already exists, the
	  extension .031 is tried instead. If a file with that name already exists, the
	  extension .032 is tried, and so on until a unique file name is found.
	
	2. Creates a new CVF in DriveSpace 3 format.
	
	3. Mounts the new CVF using the protected-mode DriveSpace 3 driver.
	
	4. Mounts the original DoubleSpace or DriveSpace CVF.
	
	5. Moves all data from the original CVF to the new CVF.
	
	6. Unmounts and then deletes the original CVF.
	
	======================================================================
	Keywords          : kbtool diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
