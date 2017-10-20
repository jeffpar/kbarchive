---
layout: page
title: "Q106423: Repartitioning Your Hard Disk to Upgrade to 6.0 or 6.2"
permalink: /kb/106/Q106423/
---

## Q106423: Repartitioning Your Hard Disk to Upgrade to 6.0 or 6.2

{% raw %}

	Article: Q106423
	Product(s): Microsoft Disk Operating System
	Version(s): 6.0,6.2,6.21
	Operating System(s): 
	Keyword(s): msdos kbgraphxlinkcritical
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine whether you need to repartition your
	hard disk before you install MS-DOS 6 or 6.2 Upgrade and how to complete the
	procedure if it is necessary.
	
	DO YOU NEED TO REPARTITION?
	---------------------------
	
	In most cases, you don't need to repartition your hard disk to install MS-DOS
	version 6.0 or 6.2. You need to repartition your hard disk only if:
	
	- The primary DOS partition on your hard disk is too small (less than 2
	  megabytes [MB]).
	
	- The size of the clusters or sectors on your hard disk is incompatible with
	  MS-DOS version 6.0 or 6.2.
	
	- There are more than four primary partitions on your hard disk.
	
	- The primary DOS partition is inaccessible.
	
	- A disk-partitioning program that is not compatible with the Setup program for
	  MS-DOS was used to partition your hard disk.
	
	- Your primary DOS partition is incompatible with the Setup program for MS-DOS.
	  (This may be the case if you receive an error message when trying to run
	  Setup.)
	
	If you don't need to repartition your hard disk for any of the preceding reasons,
	but you still would like to, see "Optionally Repartitioning Your Hard Disk" at
	the end of this document. If you have determined that you cannot install MS-DOS
	version 6.0 or 6.2 without repartitioning your hard disk, use the procedures in
	the "Preparing to Repartition" section.
	
	Warning: Once you repartition your hard disk, you can no longer use the Uninstall
	disk to return to your previous version of MS-DOS.
	
	PREPARING TO REPARTITION
	------------------------
	
	Before you partition your hard disk, you need the following:
	
	- Enough floppy disks to back up your hard disk. Make sure your floppy disks
	  are newly formatted.
	
	- A single floppy disk on which to install MS-DOS 6.0 or 6.2.
	
	Repartitioning your hard disk involves:
	
	- Creating an MS-DOS Startup disk
	
	- Backing up your hard disk
	
	- Repartitioning your hard disk by using the Fdisk program
	
	- Formatting your hard disk
	
	- Restoring your backed-up files
	
	- Upgrading your system to MS-DOS 6.0 or 6.2
	
	  Warning: If you are using software such as Disk Manager, SpeedStor(R),
	  Priam(R), or Everex to replace the BIOS in interactions between MS-DOS and
	  the hard disk controller, do not repartition your hard disk with the MS-DOS
	  Fdisk program. Instead, use the disk-partitioning program you originally used
	  to partition your hard disk.
	
	  To determine whether you have one of these disk-partitioning programs on your
	  computer, search for the following files: DMDRVR.BIN (Disk Manager),
	  SSTOR.SYS (SpeedStor), HARDRIVE.SYS (Priam), and EVDISK.SYS (Everex). If you
	  need help in repartitioning your hard disk or are unsure whether the BIOS is
	  being replaced, contact the manufacturer of your original disk- partitioning
	  software.
	
	Creating a Startup Disk:
	
	Begin by creating an MS-DOS version 6.0 or 6.2 Startup disk. To do so:
	
	1. Start your computer with your current version of MS-DOS.
	
	2. Insert MS-DOS 6.0 or 6.2 Setup Disk 1 in drive A.
	
	3. Type "A:SETUP /F" (without the quotation marks) at the MS-DOS command prompt,
	  press ENTER, and then follow the instructions on your screen.
	
	  Setup expands key MS-DOS files onto your floppy disk. You'll use this floppy
	  disk with the expanded files to temporarily run MS-DOS version 6.0 or 6.2.
	
	Backing Up Your Files:
	
	You should back up files on every partition and each logical drive of your hard
	disk.
	
	Warning: Make sure you back up your files before using the Fdisk program. When
	you delete or modify a partition, all files on that partition are deleted.
	
	Use the MS-DOS BACKUP command to back up all the files on your hard disk to a
	floppy disk by typing the following at the MS-DOS command prompt and pressing
	ENTER
	
	  " backup <drive>:\*.* <floppy>: /s" (without the quotation marks)
	
	where <drive> is your hard disk drive and <floppy> is your floppy
	disk drive. The /S switch specifies that every file in every directory will be
	backed up. For example, to back up every file in every directory on hard disk
	drive C onto disks in floppy disk drive A, type the following command and press
	ENTER:
	
	  " backup c:\*.* a: /s" (without the quotation marks)
	
	NOTE: Use the backup command to back up files on every partition and each logical
	drive of your hard disk.
	
	You can use your current version of the MS-DOS BACKUP command because it should
	be compatible with the RESTORE command provided with MS-DOS 6.0 and 6.2. Because
	MS-DOS 6.0 and 6.2 include the full-screen version of Microsoft Backup for
	MS-DOS and Microsoft Backup for Windows, the MS-DOS command prompt version of
	BACKUP is not included with the product. However, the RESTORE command is still
	provided.
	
	NOTE: Before using your current version of the backup command and repartitioning,
	you should back up a few files and use the restore command provided with MS-DOS
	6 Upgrade or MS-DOS 6.2 Upgrade to restore the files. This should be done as a
	safety precaution to ensure you are not using an original equipment manufacturer
	(OEM) version of backup that is not compatible with the MS-DOS restore command.
	
	If you do not want to use BACKUP and RESTORE, you can use a third- party backup
	program such as Fastback, Norton Utilities(R) Backup, PC Tools Backup, and so
	forth.
	
	Repartitioning Your Hard Disk:
	
	Repartitioning your hard disk involves:
	
	- Deleting any non-DOS partitions
	
	- Deleting the logical drives in the extended DOS partition, if your system has
	  any
	
	- Deleting the extended DOS partition, if your system has one
	
	- Deleting any primary DOS partitions
	
	- Creating a new primary DOS partition
	
	- Specifying the maximum disk size for the partition, and making the partition
	  active
	
	Before you repartition your hard disk, make sure you write down the volume label
	for each partition. You will need this information later. To find the volume
	label for your hard disk drive, type the following at the MS-DOS command prompt
	and press ENTER
	
	  " vol <drive>:" (without the quotation marks)
	
	where <drive> is your hard disk drive. For example, if you want to
	determine the volume label for drive C, type the following command:
	
	  " vol c:" (without the quotation marks)
	
	To repartition your hard disk:
	
	1. If you are not already running MS-DOS 6.0 or 6.2, insert your Startup disk in
	  drive A, and then restart your computer by pressing CTRL+ALT+DEL.
	
	2. If you have not already done so, insert the Startup disk (which you created
	  using the procedure in the "Creating a Startup Disk" section) in drive A.
	
	3. At the MS-DOS command prompt, type "FDISK" (without the quotation marks) and
	  press ENTER. The FDISK Options screen appears.
	
	   -----------------------------------------------------------------
	                         MS-DOS Version 6.2
	                      Fixed Disk Setup Program
	               (C)Copyright Microsoft Corp. 1983-1993
	
	                            FDISK Options
	
	   Current fixed disk drive: 1
	
	   Choose one of the following:
	
	   1. Create DOS partition or Logical DOS Drive
	   2. Set active partition
	   3. Delete partition or Logical DOS Drive
	   4. Display partition information
	
	   Enter choice: [1]
	
	   Press ESC to exit FDISK
	   -----------------------------------------------------------------
	
	4. Press 3 to choose Delete Partition Or Logical DOS Drive, and then press
	  ENTER. The Delete DOS Partition Or Logical DOS Drive screen appears.
	
	   -----------------------------------------------------------------
	              Delete DOS Partition or Logical DOS Drive
	
	   Current fixed disk drive: 1
	
	   Choose one of the following:
	
	   1. Delete Primary DOS Partition
	   2. Delete Extended DOS Partition
	   3. Delete Logical DOS Drive(s) in the Extended DOS Partition
	   4. Delete Non-DOS Partition
	
	   Enter choice: [ ]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	5. If any of your partitions were created with a third-party disk- partitioning
	  utility or installation program, press 4 to choose Delete Non-DOS Partition,
	  and then press ENTER. If all your partitions were created with MS-DOS, press
	  ESC to return to the FDISK Options screen, then skip to step 10 of this
	  procedure.
	
	  If you chose option 4, the Delete Non-DOS Partition screen appears.
	
	   -----------------------------------------------------------------
	                      Delete Non-DOS Partition
	
	   Current fixed disk drive: 1
	
	   Partition  Status  Type   Volume Label  Mbytes System Usage
	   C: 1         A    PRI DOS                 23    FAT16  33%
	      2              Non-DOS                 23           33%
	      3              EXT DOS                 23           33%
	
	   Total disk space is 69 Mbytes (1 Mbyte=1048576 bytes)
	
	   WARNING! Data in the deleted Non-DOS Partition will be lost.
	   What non-DOS partition do you want to delete..? [1]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	6. Type the number of the partition you want to delete, and then press ENTER.
	
	7. To confirm the deletion, press Y, and then press ENTER.
	
	8. Press ESC to return to the FDISK Options screen.
	
	9. Repeat steps 4 - 8 if you have any other partitions that were created with a
	  third-party disk-partitioning utility or installation program.
	
	10. The FDISK Options menu should now be on your screen. If you have a partition
	  that was created with MS-DOS, press 3 to choose Delete Partition Or Logical
	  DOS Drive and press ENTER.
	
	  If you chose option 3 on the FDISK Options screen, the Delete DOS Partition
	  Or Logical DOS Drive screen appears.
	
	11. If you have a logical drive, press 3 to choose Delete Logical DOS Drive(s)
	  In The Extended DOS Partition and press ENTER. The Delete Logical DOS
	  Drive(s) In The Extended DOS Partition screen appears. If you don't have any
	  logical drives, skip to step 19.
	
	   -----------------------------------------------------------------
	      Delete Logical DOS Drive(s) in the Extended DOS Partition
	
	   Drv  Volume  Label  Mbytes  System   Usage
	   D:                    15     FAT12    65%
	   E:                     8     FAT12    35%
	
	   Total Extended DOS Partition size is 23 Mbytes (1 MByte=1048576
	   bytes)
	
	   WARNING! Data in a deleted Logical DOS Drive will be lost.
	   What drive do you want to delete.........................? [ ]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	12. Type the letter of the drive you want to delete and press ENTER.
	
	13. Type the volume label if there is one and press ENTER.
	
	14. To confirm the deletion, press Y and press ENTER.
	
	15. If there are other logical drives you want to delete, repeat steps 12 - 14
	  above.
	
	16. When all logical drives have been deleted, press ESC. An information screen
	  appears.
	
	17. Press ESC again to return to the FDISK Options screen.
	
	18. Press 3 to choose Delete Partition Or Logical DOS Drive and press ENTER. The
	  Delete DOS Partition Or Logical DOS Drive screen appears.
	
	19. Press 2 to choose Delete Extended DOS Partition and press ENTER. The Delete
	  Extended DOS Partition screen appears. If you don't have any extended DOS
	  partitions, skip to step 21.
	
	   -----------------------------------------------------------------
	                    Delete Extended DOS Partition
	
	   Current fixed disk drive: 1
	
	   Partition  Status    Type    Volume Label  Mbytes  System  Usage
	   C: 1          A     PRI DOS                  23     FAT16   33%
	      2                EXT DOS                  23             33%
	
	   Total disk space is 69 Mbytes (1 Mbyte=1048576 bytes)
	
	   WARNING! Data in the deleted Extended DOS Partition will be lost.
	   Do you wish to continue (Y/N)........................? [N]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	20. To confirm that you want to delete the extended DOS partition, press Y and
	  press ENTER.
	
	21. Press ESC to return to the FDISK Options screen.
	
	22. Press 3 to choose Delete Partition Or Logical DOS Drive and press ENTER. The
	  Delete DOS Partition Or Logical DOS Drive screen appears.
	
	23. Press 1 to choose Delete Primary DOS Partition and press ENTER. The Delete
	  Primary DOS Partition screen appears.
	
	   -----------------------------------------------------------------
	                    Delete Primary DOS Partition
	
	   Current fixed disk drive: 1
	
	   Partition  Status    Type    Volume Label  Mbytes  System  Usage
	   C: 1          A     PRI DOS                  23     FAT16   33%
	
	   Total disk space is 69 Mbytes (1 Mbyte=1048576 bytes)
	
	   WARNING! Data in the deleted Primary DOS Partition will be lost.
	   What primary partition do you want to delete..? [1]
	   Enter volume label...............................? [           ]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	24. Press ENTER to delete your primary partition.
	
	25. Type the volume label, if there is one, and press ENTER.
	
	26. To confirm the deletion, press Y and press ENTER.
	
	27. Press ESC to return to the FDISK Options screen.
	
	28. Press ENTER to choose Create A DOS Partition Or Logical DOS Drive. The
	  Create DOS Partition Or Logical DOS Drive screen appears.
	
	   -----------------------------------------------------------------
	              Create DOS Partition or Logical DOS Drive
	
	   Current fixed disk drive: 1
	
	   Choose one of the following:
	
	   1. Create Primary DOS Partition
	   2. Create Extended DOS Partition
	   3. Create Logical DOS Drive(s) in the Extended DOS Partition
	
	   Enter choice: [1]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	29. Press ENTER to choose Create Primary DOS Partition. The Create Primary DOS
	  Partition screen appears.
	
	   -----------------------------------------------------------------
	                    Create Primary DOS Partition
	
	   Current fixed disk drive: 1
	
	   Do you wish to use the maximum available size for a Primary DOS
	   Partition and make the partition active (Y/N)..............?[Y]
	
	   Press ESC to return to FDISK Options
	   -----------------------------------------------------------------
	
	30. Press ENTER to specify the maximum size for the partition and make the
	  partition active.
	
	31. Make sure your Startup disk is in drive A and press any key.
	
	Formatting Your Hard Disk:
	
	You cannot use your hard disk until you format it.
	
	To format your hard disk:
	
	1. Make sure you are running MS-DOS 6.0 or 6.2 from your Startup disk.
	
	2. Type the following at the MS-DOS command prompt and press ENTER
	
	  " format <drive>: /s" (without the quotation marks)
	
	  where <drive> is your hard disk drive. For example, if your hard disk
	  drive is drive C, type the following command:
	
	  " format c: /s" (without the quotation marks)
	
	3. Press Y and press ENTER to proceed with formatting.
	
	4. Once formatting is complete, type a volume label if you want one and press
	  ENTER.
	
	Restoring Your Files:
	
	Now you can restore the files you backed up previously. If you used a third-party
	program such as Fastback to back up your files, use the same program to restore
	your files. If you used the MS-DOS BACKUP command, use the MS-DOS RESTORE
	command to restore them.
	
	To restore your files using the MS-DOS RESTORE command:
	
	1. Insert the Startup disk in drive A.
	
	2. Type the following at the MS-DOS command prompt and press ENTER
	
	  " restore <drive1>: <drive2>:\*.* /s" (without the quotation
	  marks)
	
	  where< drive1> specifies the drive on which the backed-up files are
	  stored and <drive2> is your hard disk drive. For example, if you insert
	  your backup disk in drive A and your hard disk drive is drive C, type the
	  following command:
	
	  " restore a: c:\*.* /s" (without the quotation marks)
	
	  The /S switch restores every file in every subdirectory you backed up.
	
	3. Insert your Startup disk if you are prompted with the following message:
	
	  Insert disk with \COMMAND.COM in drive A
	
	4. Repeat steps 2 and 3 if you have other backup disks. For example, you might
	  have a set of backup disks for drive D.
	
	Upgrading to MS-DOS 6.0 or MS-DOS 6.2:
	
	Now you can upgrade your system to MS-DOS version 6.0 or 6.2. To upgrade:
	
	1. Insert Setup Disk 1 in drive A.
	
	2. At the MS-DOS command prompt, type "A:SETUP" (without the quotation marks)
	  and press ENTER.
	
	3. Continue following the instructions on the screen to install MS-DOS.
	
	  NOTE: Before you restart your system, make sure drive A is empty.
	
	Optionally Repartitioning Your Hard Disk:
	
	If you don't need to repartition your hard disk in order to install MS- DOS
	version 6.0 or 6.2, follow the steps outlined here. You have two choices when
	optionally repartitioning your hard disk:
	
	- Use your current version of the MS-DOS BACKUP and RESTORE commands to back up
	  your hard disk when preparing to partition.
	
	-or-
	
	- First install MS-DOS version 6.0 or 6.2 in order to use the Microsoft Backup
	  program (MSBACKUP) when preparing to partition.
	
	  While this option requires that you install MS-DOS twice (once before and once
	  after you partition), using the Microsoft Backup program provides you with
	  many more options when backing up your data.
	
	To partition your hard disk by using MS-DOS version 6.0 or 6.2:
	
	1. Insert Setup Disk 1 (the first of your installation disks) in drive A.
	
	2. At the MS-DOS command prompt, type "A:SETUP" (without the quotation marks),
	  press ENTER, and then follow the instructions in the first few screens. At
	  the screen that begins with "The following programs can be installed on your
	  computer," note the default setting for "Backup." This setting will be either
	  Windows Only or MS-DOS Only.
	
	3. If you have Microsoft Windows installed on your personal computer, change the
	  Backup setting to include MS-DOS. You can choose either the Backup: MS-DOS
	  Only option or the Backup: Windows And MS-DOS option.
	
	4. Continue following the instructions to install MS-DOS.
	
	5. Before you restart your system, make sure drive A is empty.
	
	6. Insert Setup Disk 1 (the first of your installation disks) in drive A.
	
	7. To create a startup floppy disk called Startup, type "A:SETUP /F" (without
	  the quotation marks) at the MS-DOS command prompt and press ENTER. Follow the
	  instructions on the screen.
	
	8. Run the Microsoft Backup program by typing MSBACKUP at the MS-DOS command
	  prompt and pressing ENTER. Create full backups of all the partitions on your
	  hard disk.
	
	9. At the MS-DOS command prompt, type "FDISK" (without the quotation marks) and
	  press ENTER. This initiates the procedure to partition your hard disk. Refer
	  to "Using Fdisk to Configure Your Hard Disk" in Chapter 8 of the Microsoft
	  MS-DOS 6 "User's Guide".
	
	10. Insert the Startup disk (which you created in step 7) in drive A and format
	  all of your partitions. When formatting your hard disk drive, use the /S
	  switch (this transfers system files to your hard disk drive, making it the
	  startup drive). For example, type the following at the MS-DOS command prompt
	  and press ENTER
	
	  " format <drive>: /s" (without the quotation marks)
	
	  where <drive> is your hard disk drive. For example, if your hard disk
	  drive is drive C, type the following command:
	
	  " format c: /s" (without the quotation marks)
	
	11. Install MS-DOS on your newly partitioned hard disk. Be sure to install the
	  MS-DOS version of the Microsoft Backup program.
	
	12. Run Microsoft Backup to restore your data by typing MSBACKUP at the MS-DOS
	  command prompt and pressing ENTER. If you used the MS-DOS Backup program to
	  back up your data, use the MS-DOS RESTORE command to restore it.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Pd0771.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : msdos kbgraphxlinkcritical 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : :6.0,6.2,6.21
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
