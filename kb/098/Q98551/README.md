---
layout: page
title: "Q98551: Setting Up WFWG on a Workstation Without a Hard Disk"
permalink: /kb/098/Q98551/
---

## Q98551: Setting Up WFWG on a Workstation Without a Hard Disk

	Article: Q98551
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbnetwork kbsetup kbhw kbfasttip
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups version 3.1 is fully supported running on a
	computer with one 5.25-inch or 3.5-inch high-density disk drive and a hard disk
	with 9.5 megabytes (MB) available memory (14.5 MB is recommended).
	
	This article contains information on installing Windows for Workgroups 3.1 for
	use on workstations without hard disks. Microsoft does not support running
	Windows for Workgroups with any type of "diskless" workstation.
	
	Windows for Workgroups was not designed to be installed on workstations without
	hard disks (that is, computers without hard disks that are connected to a
	network). However, there is a workaround that may allow Windows for Workgroups
	to be set up on such workstations.
	
	NOTE: A true diskless workstation (one with no floppy disk drive or hard disk
	drive) using a network adapter with a boot ROM does not work with Windows for
	Workgroups. This is because the boot ROM establishes a network connection and
	does not allow the Windows for Workgroups network drivers to coexist with the
	boot ROM.
	
	MORE INFORMATION
	================
	
	To set up Windows for Workgroups on workstations without hard disk drives that
	are connected to a network, use the procedures below.
	
	Setting Up and Sharing Windows for Workgroups on the Server
	-----------------------------------------------------------
	
	Select a computer with an 80386 or higher processor and at least 4 MB of RAM to
	be the file server that shares the Windows for Workgroups program files. This
	computer must run Windows for Workgroups whenever any other workstation is also
	running Windows for Workgroups from the shared directory. This computer also
	requires at least 22 MB free hard disk space, plus at least an additional 1 MB
	of free disk space per user. To set up the server, do the following:
	
	1. Install Windows for Workgroups using the SETUP /A command. When prompted for
	  the network directory, use the name WFWSHARE. This expands and copies the
	  Windows for Workgroups files to this directory. It does not set up Windows
	  for Workgroup itself; setup will be accomplished in the next step.
	
	  NOTE: Users upgrading from Windows 3.1 created with SETUP /A should remove the
	  Windows 3.1 shared directory before continuing. For more information on
	  upgrading a shared networked Windows directory, query on the following words
	  in the Microsoft Knowledge Base:
	
	  setup /n and attrib and sdl
	
	2. Run SETUP /N from the WFWSHARE directory. Enter your computer name, workgroup
	  name, and confirm your network adapter. After this installation is complete,
	  you can restart your computer and run Windows for Workgroups by typing WIN.
	  Any errors from the CONFIG.SYS file, AUTOEXEC.BAT, or Windows for Workgroups
	  should be resolved before proceeding.
	
	  NOTE: Windows 3.1 directories created with SETUP /N can only be upgraded to
	  Windows for Workgroups with SETUP /N. Windows 3.1 installations created with
	  SETUP must be upgraded by SETUP.
	
	3. Open File Manager and select the WFWSHARE directory from the directory tree.
	  Share the directory by choosing Share As from the Disk menu or choosing the
	  Share Directory button.
	
	4. Create a user directory for Windows for Workgroups workstations without hard
	  disks. This directory may be named C:\WFWUSERS. Share the WFWUSERS directory
	  (as in step 3), but grant the users full access by selecting the Full Access
	  option button. This directory will be used to keep Windows for Workgroups
	  user directories for each workstation. For example:
	
	  C:\WFWUSERS\STEVE
	  C:\WFWUSERS\TERRI
	  C:\WFWUSERS\JOHN
	
	Making a Workstation Boot Disk
	------------------------------
	
	A workstation boot disk contains the MS-DOS operating system and files necessary
	to establish a network connection to the file server created in the steps above.
	Once Windows for Workgroups is set up for each workstation, this boot disk will
	no longer be needed. To create this disk, do the following:
	
	1. Format a high-density 5.25-inch or 3.5-inch MS-DOS bootable system disk. The
	  disk size depends on the bootable floppy drive of your workstation. To format
	  and transfer the operating system to a floppy disk, open File Manager, and
	  choose Make System Disk from the Disk menu; or, type format "a: /s" (without
	  the quotation marks) at the MS-DOS command prompt.
	
	2. Quit Windows for Workgroups on the file server. Using the disk created in the
	  previous step, reboot the file server and change to the drive and directory
	  where the WFWSHARE files are located.
	
	3. Run SETUP /I /N from the WFWSHARE directory. Choose Custom Setup and change
	  the directory to C:\WFWTEMP. Select your temporary computer name, workgroup
	  name, workstation network adapter, and its settings.
	
	  NOTE: This temporary directory is needed only to create the workstation boot
	  disk and can be removed after the files have been copied and the
	  configuration files (AUTOEXEC.BAT and CONFIG.SYS) have been updated.
	
	  During the setup process, the following error message appears:
	
	  Setup cannot find or cannot update your system files on drive A:. If you
	  started your system from a floppy disk, be sure to remove write-protection
	  from your system startup (boot) disk. Then insert the disk into drive A and
	  choose Retry.
	
	  To copy system files to your Windows directory choose Cancel.
	
	  This is normal. Choose the Retry button.
	
	4. After Setup is complete, copy the SYSTEM.INI file from the WFWTEMP directory
	  to the network boot disk. Edit this SYSTEM.INI file and add the following
	  line to the [network] section:
	
	        [network]
	        AutoStart=full
	
	  The boot disk should now contain the following files:
	
	  Filename        Size  Date      Time    Function
	  -------------------------------------------------------------------
	
	  COMMAND  COM     47845 04-09-91   5:00a  MS-DOS Command Interpreter
	  NET      MSG     70629 10-01-92   3:11a  Message help file for NET.EXE
	  CONFIG   OLD        22 02-18-93  12:24p  Old CONFIG.SYS before setup
	  AUTOEXEC OLD        24 02-18-93  12:29p  Old AUTOEXEC.BAT before setup
	  EMM386   EXE    110174 10-01-92   3:11a  386 expanded memory manager
	  HIMEM    SYS     13824 10-01-92   3:11a  Manages extended memory
	  RAMDRIVE SYS      5873 10-01-92   3:11a  RAM disk device driver
	  SMARTDRV EXE     43609 10-01-92   3:11a  Disk cache
	  PROTOCOL INI       636 02-18-93   2:34p  Protocol initialization file
	  NETH     MSG    104570 10-01-92   3:11a  Message help file for NET.EXE
	  WORKGRP  SYS      7268 10-01-92   3:11a  WFWG real mode device driver
	  NET      EXE    415252 10-01-92   3:11a  WFWG redirector
	  PROTMAN  DOS     21680 10-01-92   3:11a  Protocol manager
	  PROTMAN  EXE     13760 10-01-92   3:11a  Protocol manager accessory
	  NDISDRVR DOS     24666 10-01-92   3:11a  NDIS network adapter driver
	                                           (name depends on adapter)
	  PROTOCOL 000         0 02-18-93   2:34p  Old PROTOCOL.INI
	  CONFIG   SYS       204 02-18-93   2:38p  New CONFIG.SYS
	  AUTOEXEC BAT       117 02-18-93   2:38p  New AUTOEXEC.BAT
	  SYSTEM   INI      3800 02-18-93   2:37p  Copied from WFWTEMP directory
	         19 file(s)     883953 bytes       114343
	
	                        251689 bytes free
	
	  The following lines should have been added to the AUTOEXEC.BAT and CONFIG.SYS
	  files:
	
	  AUTOEXEC.BAT                      CONFIG.SYS
	  --------------------------------------------------------------
	
	  A:\SMARTDRV.EXE                   DEVICE=A:\HIMEM.SYS
	  A:\net start                      device=A:\protman.DOS /i:A:\ 
	  PATH=C:\WFWTEMP;c:\wfwshare       device=A:\workgrp.sys
	  SET TEMP=C:\WFWTEMP\TEMP          device=A:\NDISDRVR.DOS
	                                    STACKS=9,256
	                                    LASTDRIVE=Z
	
	5. With all disks removed, reboot the file server and start Windows for
	  Workgroups by typing WIN at the MS-DOS command prompt and pressing ENTER.
	
	The workstation boot disk can now be used to start up workstations on the network
	and set up Windows for Workgroups as instructed in the section below. If any
	errors from the CONFIG.SYS or AUTOEXEC.BAT are reported, they should be resolved
	before proceeding.
	
	NOTE: If there are different types of network adapters on the workstations, the
	steps 1-5 above may need to be repeated for each type of network adapter so that
	individual workstations with different types of network adapters can access the
	network.
	
	Setting Up Windows for Workgroups on the Workstation(s)
	-------------------------------------------------------
	
	This process requires that you boot the workstation with the network boot disk
	created in the section above, then replace the disk with a blank formatted
	system disk before running Windows for Workgroups Setup. For more information on
	formatting system disks, see step 1 under "Making a Workstation Boot Disk."
	
	1. Start each workstation with a network boot disk. Confirm logon name and enter
	  a password. Verify the creation of password cache list file, which has the
	  extension .PWL.
	
	2. Connect to the WFWSHARE and WFWUSERS directories on the file server by typing
	  the following commands at the MS-DOS command prompt and pressing ENTER after
	  each
	
	  net use d: \\<servername>\wfwshare
	  net use c: \\<servername>\wfwusers
	
	  where <servername> is the name of the computer assigned in step 2 under
	  the "Setting Up and Sharing Windows for Workgroups on the Server" section. If
	  the connection was made successfully the message "Command Completed
	  Successfully" will appear for each command issued.
	
	3. Replace the network boot disk with a formatted system disk in the floppy disk
	  drive. This system disk will be used as a permanent network boot disk for
	  this workstation.
	
	4. Change to network drive D and run the SETUP /N command. Choose Custom Setup
	  and change the directory to C:\<NAME> (where <NAME> is the
	  workstation name). Select your computer name and workgroup name, then confirm
	  your network adapter.
	
	5. After this installation is complete, return to the MS-DOS command prompt and
	  copy the SYSTEM.INI file from C:\<NAME> to your permanent network boot
	  disk. Edit this SYSTEM.INI file and add the following line to the [network]
	  section:
	
	  [network]
	  AutoStart=Full
	
	  NOTE: The value "Full" can be changed to "Basic" to save approximately 30
	  kilobytes (K) of the amount of memory used by the network redirector.
	
	6. Reboot the workstation with your permanent network boot disk and log in and
	  verify the creation of password cache list file, which has the extension
	  .PWL. Connect to the WFWSHARE and WFWUSERS directories on the file server
	  with the following commands, pressing ENTER after each line:
	
	  net use d: \\<servername>\wfwshare
	  net use c: \\<servername>\wfwusers
	
	  where <servername> is the name of the computer assigned in step 2 under
	  the "Setting Up and Sharing Windows for Workgroups on the Server" section. If
	  the connection was made successfully, the message "Command Completed
	  Successfully" appears for each command issued.
	
	You should now be able to run Windows for Workgroups on this workstation. Repeat
	the above steps 1-6 for each workstation without a hard disk on the network.
	
	NOTE: If there are different types of network adapters on the workstations, steps
	1-5 under the "Making a Workstation Boot Disk" section may need to be repeated
	for each type of network adapter so that individual workstations with different
	types of network adapters can access the network.
	
	Notes on Using Workstations Without Hard Disks
	----------------------------------------------
	
	- A workstation without a hard disk must meet the same system requirements for
	  running Windows for Workgroups 3.1 as a workstation with a hard disk. Note
	  that the RAM requirement may be greater if you are using a RAM drive.
	
	- Since a SYSTEM.INI file resides on both the network boot disk and the user's
	  directory; changes made in the Networks dialog box in Control Panel do not
	  update the SYSTEM.INI file on the boot disk. If you make changes in the
	  Networks dialog box in Control Panel, you must recopy the SYSTEM.INI to the
	  boot floppy disk before changes can take effect.
	
	- To share local workstations resources (such as floppy disk drives, printers,
	  and CD-ROM drives), you must create a RAM drive and change your SET TEMP
	  environment variable to its location. The RAM drive must be of considerable
	  size (2048K or larger) if you are planning to share a local printer because
	  Print Manager queues jobs into the RAM drive. To set up a 2-MB RAM drive, add
	  the following line to your CONFIG.SYS file:
	
	  device=a:\ramdrive.sys 2048 /e
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
