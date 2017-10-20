---
layout: page
title: "Q77821: Repartitioning Your Hard Disk After MS-DOS 5 Upgrade"
permalink: /kb/077/Q77821/
---

## Q77821: Repartitioning Your Hard Disk After MS-DOS 5 Upgrade

{% raw %}

	Article: Q77821
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you have upgraded your system to MS-DOS version 5.0, you can repartition
	your hard disk at any time. Before you begin the procedure, you need the
	following:
	
	- Enough floppy disks to back up your hard disk
	
	- A floppy disk onto which you'll copy your system files
	
	The repartition procedure described in this article involves the following
	steps:
	
	- Creating a system disk
	
	- Backing up your hard disk
	
	- Repartitioning your hard disk by using the Fdisk program
	
	- Formatting your hard disk
	
	- Restoring your backed-up files
	
	Each step is discussed in a separate subsection, below.
	
	MORE INFORMATION
	================
	
	Step 1: Creating a System Disk
	------------------------------
	
	The first step is to create a system disk. You will use this disk to start MS-DOS
	after reformatting your hard drive.
	
	To create a system disk:
	
	1. Insert a formatted disk into drive A and type the following:
	
	  " sys a: " (without the quotation marks)
	
	  To use an unformatted disk, insert the disk in drive A, and type the
	  following:
	
	  " format a: /s " (without the quotation marks)
	
	2. Copy the RESTORE.EXE and FORMAT.COM files to your system disk. You will need
	  these files after you partition your hard disk. To copy the files, type the
	  following:
	
	  " copy c:\dos\restore.exe a:
	  copy c:\dos\format.com a: " (without the quotation marks)
	
	  Typically, these files are located in your DOS subdirectory. If your MS-DOS
	  files are in a different directory, use its name instead.
	
	Step 2: Backing Up Up Your Files
	--------------------------------
	
	The next step is to back up your files.
	
	WARNING: Make sure you back up your files before using the Fdisk program. When
	you delete or modify a partition, all files on that partition are deleted.
	
	To back up your files, use the BACKUP command to back up files on your hard disk.
	For example, to back up every file in every directory on drive C onto disks in
	drive A, you would type the following:
	
	  " backup c:\ a: /s " (without the quotation marks)
	
	The /S switch specifies that every file in every directory will be backed up.
	
	NOTE: Use the BACKUP command to back up files on every partition and each logical
	drive on your hard disk.
	
	You can also use a backup program such as FASTBACK.
	
	Step 3: Repartitioning Your Hard Disk
	-------------------------------------
	
	After you back up your hard disk, the next step is to repartition it.
	Repartitioning your hard disk involves:
	
	- Deleting any non-DOS partitions.
	
	- Deleting the logical drives in the extended DOS partition, if your system has
	  any.
	
	- Deleting the extended DOS partition, if your system has one.
	
	- Deleting the primary DOS partition.
	
	- Creating a new primary DOS partition.
	
	- Specifying the maximum disk size for the partition, and making the partition
	  active.
	
	To repartition your hard disk:
	
	1. Type the following at the MS-DOS command prompt and then press ENTER:
	
	  " fdisk " (without the quotation marks)
	
	  The FDISK Options screen appears.
	
	2. Press 3 to choose Delete Partition or Logical DOS Drive, and then press
	  ENTER. The Delete DOS Partition or Logical DOS Drive screen appears.
	
	3. If one of your partitions was not created by using DOS, press 4 to choose
	  Delete Non-DOS Partition, and then press ENTER. If your partitions were
	  created by using DOS, skip to step 9 of this procedure.
	
	  If you chose option 4, the Delete Non-DOS Partition screen appears.
	
	4. Type the number of the partition you want to delete, and then press ENTER.
	
	5. To confirm the deletion, press Y, and then press ENTER.
	
	6. Press ESC to return to the FDISK Options screen.
	
	7. Repeat steps 3 through 6 if you have any other partitions that weren't
	  created by using DOS.
	
	8. The FDISK Options menu should be on your screen. If you have a partition that
	  was created by using DOS, press 3 to choose Delete Partition or Logical DOS
	  Drive, and then press ENTER. If you have just one non-DOS partition, skip to
	  step 20 in this procedure.
	
	  If you chose option 3 on the FDISK Options screen, the Delete DOS Partition or
	  Logical DOS Drive screen appears.
	
	9. If you have a logical drive, press 3 to choose Delete Logical DOS Drive(s) in
	  the Extended DOS Partition, and then press ENTER. If you don't have a logical
	  drive, skip to step 17 in this procedure.
	
	  If you chose option 3, the Delete Logical DOS Drive(s) in the Extended DOS
	  Partition screen appears.
	
	10. Type the letter of the drive you want to delete, and then press ENTER.
	
	11. Type the volume label if there is one, and then press ENTER.
	
	12. To confirm the deletion, press Y, and then press ENTER.
	
	13. If there are other logical drives you want to delete, repeat steps 10-12.
	
	14. When all logical drives have been deleted, press ESC. An information screen
	  appears.
	
	15. Press ESC again to return to the FDISK Options screen.
	
	16. Press 3 to choose Delete Partition or Logical DOS Drive, and then press
	  ENTER. The Delete DOS Partition or Logical DOS Drive screen appears.
	
	17. Press 2 to choose Delete Extended DOS Partition, and then press ENTER. The
	  Delete Extended DOS Partition screen appears.
	
	18. To confirm that you want to delete the extended DOS partition, press Y, and
	  then press ENTER.
	
	19. Press ESC to return to the FDISK Options screen.
	
	20. Press 3 to choose Delete Partition or Logical DOS Drive, and then press
	  ENTER. The Delete DOS Partition or Logical DOS Drive screen appears.
	
	21. Press 1 to choose Delete Primary DOS Partition, and then press ENTER. The
	  Delete Primary DOS Partition screen appears.
	
	22. Press ENTER to delete your primary partition.
	
	23. Type the volume label if there is one, and then press ENTER.
	
	24. To confirm the deletion, press Y, and then press ENTER.
	
	25. Press ESC to return to the FDISK Options screen.
	
	26. Press ENTER to choose Create a DOS Partition or Logical DOS Drive. The
	  Create DOS Partition or Logical DOS Drive screen appears.
	
	27. Press ENTER to choose Create Primary DOS Partition. The Create Primary DOS
	  Partition screen appears.
	
	28. Press ENTER to specify the maximum size for the partition, and make the
	  partition active.
	
	29. Insert your system disk in drive A and press any key.
	
	Step 4: Reformatting Your Hard Disk
	-----------------------------------
	
	You cannot use your hard disk until you format it.
	
	To format your hard disk:
	
	1. Make sure you are running MS-DOS 5.0 from the system disk in drive A.
	
	2. At the command prompt, type the following:
	
	  " format c: /s " (without the quotation marks)
	
	  The /S switch copies system files to your hard disk.
	
	3. Press Y, and then press ENTER, to proceed with formatting.
	
	4. Once formatting is complete, type a volume label if you want one, and then
	  press ENTER.
	
	Step 5: Restoring Your Files
	----------------------------
	
	The last step is to restore your files, as follows:
	
	1. Make sure you are running MS-DOS 5.0 from the system disk in drive A.
	
	2. At the command prompt, type the following:
	
	  " restore <drive1:> c:\*.* /s " (without the quotation marks)
	
	  The parameter <drive1:> specifies the drive on which the backed-up files
	  are stored. For example, if you insert your backup disk in drive A, you would
	  type the following:
	
	  " restore a: c:\*.* /s " (without the quotation marks)
	
	  The /S switch restores every file in every subdirectory you backed up. You can
	  also restore your files with the backup program (such as FASTBACK) you used
	  to back up your files.
	
	3. Repeat steps 1 and 2 if you have other backup disks.
	
	4. When you are finished restoring your files, remove your system disk and
	  restart your computer by pressing CTRL+ALT+DEL.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
