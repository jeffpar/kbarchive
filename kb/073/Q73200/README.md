---
layout: page
title: "Q73200: Using the Uninstall Disk to Create a Dual-Boot Configuration"
permalink: /kb/073/Q73200/
---

## Q73200: Using the Uninstall Disk to Create a Dual-Boot Configuration

	Article: Q73200
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can keep MS-DOS version 5.0 on your hard drive and boot from the previous
	version of MS-DOS to run applications that won't run in MS-DOS 5.0. However,
	several precautions must be taken. For example, MS-DOS 3.2x and earlier do not
	support partitions over 32 megabytes (MB) or extended DOS partitions. If one of
	these MS-DOS versions is started up, MS-DOS will not recognize the partition,
	and the data there will be inaccessible. The same problem occurs with MS-DOS 3.3
	with single partitions of greater than 32 MB. Other problems may occur due to
	nonstandard hard drives or third-party disk managers.
	
	MORE INFORMATION
	================
	
	Caution: In the procedure below, you can cause the hard disk to become
	inaccessible. Type in commands from the command prompt in all capitals, and
	press the ENTER key at the end of each line. Before following this procedure,
	type in the following from the command prompt:
	
	  " PROMPT $P$G" (without the quotation marks)
	
	This command causes the prompt to display the current directory. In the following
	instructions, make sure that the commands are typed in from the same directory
	as given in the examples. For demonstration purposes, the sample commands are
	given as if you wanted to make MS-DOS 3.3 start up under MS-DOS 5.0.
	
	To keep MS-DOS version 5.0 on your hard drive and boot from the previous version
	of MS-DOS to run applications that won't run in MS-DOS 5.0, do the following
	(after taking the precautions listed above):
	
	1. Boot the earlier version of MS-DOS from the original MS-DOS floppy disks.
	
	2. Check to make sure that each partition of the hard drive is accessible in the
	  earlier version of MS-DOS. To do this, move to the root directory in each
	  drive, and type "DIR" (without the quotation marks). For example, to make
	  sure that drive C is accessible, type the following:
	
	  " A:\>C:
	  C:\>DIR" (without the quotation marks)
	
	  If any error occurs in either of these steps, do not attempt this procedure.
	
	3. If all drives are accessible, insert the disk that contains the MS-DOS FORMAT
	  command for the earlier version of MS-DOS. The FORMAT command is normally on
	  the bootable disk. If it is not, check all of the other MS-DOS disks. To do
	  this, remove the boot disk and check each MS-DOS disk by inserting each disk
	  in drive A and typing:
	
	  " A:\>DIR FORMAT.*" (without the quotation marks)
	
	  When you find the disk that contains FORMAT, leave that disk in drive A.
	
	4. From the command prompt, type the following:
	
	  " A:\>FORMAT A: /S" (without the quotation marks)
	
	  When prompted, remove the disk in drive A, insert a blank disk, and follow the
	  instructions.
	
	  Remove this disk and label it as a bootable disk for the MS-DOS version that
	  the disk contains.
	
	5. Create a new directory on one of the accessible partitions on the hard drive
	  to copy the MS-DOS files of the earlier MS-DOS version. For example, if you
	  are creating an MS-DOS 3.3 bootable disk with MS-DOS 5.0 on the hard drive,
	  create a directory called DOS33 with the following command from the root
	  directory of drive C.
	
	      C:\>MKDIR C:\DOS33
	
	6. Change to the directory that you have just created and copy all of the files
	  from the OLD_DOS.1 directory into the current directory. For example:
	
	      C:\>CD \DOS33
	      C:\DOS33>COPY C:\OLD_DOS.1\*.*
	
	7. Insert the Uninstall #1 disk that was created when the operating system was
	  upgraded to MS-DOS 5.0. Copy the files CONFIG.DAT and AUTOEXEC.DAT to the
	  DOS33 directory. For example:
	
	      C:\DOS33>COPY A:\CONFIG.DAT C:\DOS33\CONFIG.DAT
	      C:\DOS33>COPY A:\AUTOEXEC.DAT C:\DOS33\AUTOEXEC.DAT
	
	8. Insert the bootable disk that was created in step 4. Copy the CONFIG.DAT and
	  AUTOEXEC.DAT files to the floppy disk, renaming them CONFIG.SYS and
	  AUTOEXEC.BAT, respectively.
	
	      C:\DOS33>COPY C:\DOS33\CONFIG.DAT A:\CONFIG.SYS
	      C:\DOS33>COPY C:\DOS33\AUTOEXEC.DAT A:\AUTOEXEC.BAT
	
	9. Change the CONFIG.SYS file on the floppy disk and on the hard drive so that
	  the following conditions are met:
	
	  a. It is critical that all device drivers match the version of MS-DOS that is
	     being booted. To make it easier, we recommend that you keep the device
	     drivers in the same directory as the MS-DOS files.
	
	  b. The CONFIG.SYS file must contain a SHELL= statement. For example, the
	     MS-DOS 3.3 CONFIG.SYS file should have the following statement:
	
	         SHELL=C:\DOS33\COMMAND.COM C:\DOS33\  /P
	
	     The MS-DOS 5.0 CONFIG.SYS file should have the following statement:
	
	         SHELL=C:\DOS\COMMAND.COM C:\DOS\ /P
	
	     If your CONFIG.SYS file does not have a SHELL= statement as shown above,
	     add or modify it.
	
	  c. Make sure that both MS-DOS subdirectories contain the proper version of
	     the file COMMAND.COM.
	
	10. The AUTOEXEC.BAT file on the hard disk and on the floppy disk must be
	  changed so the following conditions are met:
	
	  a. If there is a statement that begins "COMSPEC=", delete it.
	
	  b. The path statement must be changed so that the proper directory is
	     searched for each version of MS-DOS. In this example, the bootable floppy
	     disk should have a path that contains C:\DOS33, while the MS-DOS 5.0 path
	     statement will contain C:\DOS.
	
	If you want to keep an earlier version of MS-DOS on the hard drive and boot
	MS-DOS 5.0 from a floppy disk, use the following procedure. The commands for
	creating a directory and copying files are the same as given above.
	
	1. Install DOS 5.0, following the directions given in the version 5.0 "Microsoft
	  MS-DOS Getting Started" manual.
	
	2. Create a new directory called DOS5.
	
	3. Copy all of the DOS files from the DOS directory to the DOS5 directory.
	
	4. Copy the following files from the root directory of drive C to the DOS5
	  directory:
	
	     COMMAND.COM (if it is in the root directory)
	     AUTOEXEC.BAT
	     CONFIG.SYS
	     WINA20.386
	
	5. Format a disk with the "/S" parameter.
	
	6. Copy the AUTOEXEC.BAT, CONFIG.SYS, and WINA20.386 files from the DOS5
	  directory to the disk in drive A.
	
	7. Edit the CONFIG.SYS and AUTOEXEC.BAT files on the floppy disk so that the
	  conditions outlined in steps 9 and 10 above are met. The WINA20.386 file
	  should be left untouched. It is only necessary if you want to run Microsoft
	  Windows 3.0 in enhanced mode.
	
	8. Insert the Uninstall #1 disk and reboot the computer. At the first screen,
	  press R to uninstall MS-DOS 5.0.
	
	The procedure is complete.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
