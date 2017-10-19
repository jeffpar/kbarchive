---
layout: page
title: "Q167045: Windows NT Does Not Boot From a Shadow Mirror Drive"
permalink: /kb/167/Q167045/
---

## Q167045: Windows NT Does Not Boot From a Shadow Mirror Drive

	Article: Q167045
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0,4.0a
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft BackOffice Small Business Server version 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT supports Disk Mirroring and Disk Duplexing of the operating
	system partition. This article is intended to help clarify why the shadow drive
	does not always boot and how to ensure that it will boot in the case of a
	primary disk failure. The most common symptom when trying to boot from the
	shadow drive is that the system will hang after POST with a blinking cursor and
	no boot menu options are displayed.
	
	MORE INFORMATION
	================
	
	Microsoft does NOT guarantee the ability to start from a mirrored drive without
	the use of a Windows NT Fault tolerant boot disk. This is because Windows NT
	mirrors partitions and information contained in the Bios parameter block in the
	master boot sector of the partition on the primary drive may not be valid for
	the partition we are mirroring to on the shadow drive. The bios parameter block
	contains vital information required for starting and is partition specific.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q119467 Creating a Boot Disk for an NTFS or FAT Partition
	
	In many cases, booting from the shadow drive works, but this is dependent on the
	following requirements:
	
	1. Both the primary drive and shadow drive MUST be identical in make, model, and
	  in many cases firmware revision. This is to ensure that the drive geometry is
	  identical and is being translated identically.
	
	2. Both the primary and shadow drive must be attached to identical controllers
	  with the same BIOS and Firmware revisions. Both controllers must have
	  translation options set identically - either both enabled or both disabled.
	
	3. Both the primary and shadow drive must be identically partitioned for the
	  location of the operating system partition and partitions before the
	  operating system partition must also be identical. If an EISA partition
	  exists on the primary drive, an identical partition must exist on the shadow
	  drive.
	
	4. The shadow drive must contain a primary partition that is marked active and
	  contains a valid Boot.ini file along with NTLDR and Ntdetect.com.
	
	5. The primary drive must be inaccessible or disconnected while you start
	  Windows NT again using the shadow drive or a STOP 0x1E occurs.
	
	6. The shadow drive must contain valid boot code in the Master Boot Record
	  (MBR).
	
	Failing to meet ANY of the above requirements may prevent booting into Windows NT
	from the shadow drive.
	
	Possible Problems and Solutions
	-------------------------------
	
	Problem::
	
	The primary and shadow drives are not identical. Geometry or firmware revision
	differences cause the drive to be translated differently.
	
	Solution::
	
	Ensure drives are identical. To check firmware revision of the same manufacturer
	and model disk drive, perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Registry Editor (Regedt32.exe) and go to the following subkey:
	  HKEY_LOCAL_MACHINE\Hardware\Devicemap\Scsi\ScsiPortx\ScsiBusx\TargetIdx\LogicalUnitIdx
	
	  where x varies according to device number.
	
	2. Look at the REG_SZ identifier value to see the model number and firmware
	  revision values. For example, if you see:
	
	  SEAGATE ST32430N 0510
	
	  then 0510 is the firmware revision value.
	
	Problem::
	
	The controller that contains the shadow drive had it's BIOS disabled and the
	translation being performed is now different from the original Primary drive.
	
	Solution::
	
	Many SCSI Bioses disable translation mode if the bios is disabled. This prevents
	the drives attached to the SCSI controller from being translated and effects the
	boot process. Ensure BOTH SCSI controllers have their BIOS and translation
	options set the same.
	
	
	Problem::
	
	The primary drive had an EISA partition in front of the system partition and you
	mirrored to a drive that did not contain an EISA partition.
	
	Solution::
	
	Prior to mirroring to the shadow drive, make an identically sized EISA partition.
	It may be possible to move the shadow drive to another Windows NT computer to
	modify the MBS Hidden Sector value by using the Windows NT 4.0 resource kit
	utility Dskprobe.exe to make it bootable.
	
	  Q165181 EISA Configuration Boot Code Is Replaced on Mirror Drives
	
	Problem::
	
	The Primary partition on the shadow drive is not marked active.
	
	Solution::
	
	Use one of the following methods to mark the a partition active.
	
	- Run the MS-DOS FDISK utility and make sure you have an active partition.
	
	- Use Disk Administrator/Management to mark the partition active.
	
	Problem::
	
	When you boot from the shadow - you get a STOP 0X0000001E
	
	Solution::
	
	The primary drive is still accessible - this causes a stop 0x0000001E while
	entering kernel mode. Disable the primary drive by either unplugging the power
	or SCSI connector.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q141242 STOP Msg: 0x0000001E Testing New Fault Tolerance Boot Disk
	
	Problem::
	
	After you make the previously shadowed partition of a mirrored system partition
	into the primary partition; when you restart your computer, it stops responding.
	Only the initial system and peripheral BIOS startup text is displayed on the
	monitor.
	
	Solution::
	
	The shadow drive was mirrored to as a raw drive so the Intel boot code was never
	initialized on sector 0. Prior to mirroring, Use Disk Administrator to make and
	format a primary partition. Then delete the new partition to make free space.
	This procedure ensures the Intel boot code is placed on sector 0.
	
	
	
	How To Guarantee Booting from the Shadowed Drive
	------------------------------------------------
	
	In case of a primary drive failure, using the fault tolerant boot floppy disk
	always enables you to boot to the shadow drive because you are relying on the
	floppy disk drive to act as the boot device. This works because the computer is
	not relying on the shadow drive's boot partitions BIOS parameter block in the
	master boot sector to locate and load the NTLDR and Boot.ini files. If you then
	maintained a small bootable FAT partition at the beginning of the shadow drive
	to act as the boot partition, it would, in effect, take the place of the fault
	tolerant boot floppy (by loading the NTLDR and boot.ini files and displaying the
	boot menu). This small FAT partition can be made prior to establishing the
	mirror on the shadow drive and take the place of the EISA partition if one is
	located on the primary drive.
	
	Because the shadow drive must contain enough free space to contain the operating
	system partition you are mirroring, you need to plan this scenario ahead of time
	and, if necessary, make the same size small FAT bootable partition on the
	primary drive prior to installing Windows NT. This will ensure you can always
	boot from the primary or shadow drive. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q138364 Windows NT Partitioning Rules During Setup
	
	It may be necessary to pre-partition the drive prior to installing Windows NT in
	order to get 2 primary partitions created. This can be accomplished by moving
	the drive to another computer running Windows NT and use Disk Administrator to
	create 2 primary partitions. This is because MS-DOS FDISK will not allow you to
	create a second primary partition.
	
	If the primary partition fails to boot, you can run MS-DOS FDISK and mark the
	small FAT partition as the active partition so you have 100 percent boot backup
	without the need of a Windows NT boot floppy disk.
	
	|---------------------- EXAMPLE NUMBER 1 ----------------------|
	
	           |--------------------------------------------------|
	DISK-0     | FAT  PRIMARY | * NT OS on 2nd PRIMARY Partition  |
	PRIMARY    | (backup boot)|   SET ACTIVE                      |
	           |--------------------------------------------------|
	
	           |--------------------------------------------------|
	DISK-1     |* FAT PRIMARY |     SHADOW DRIVE                  |
	SHADOW     |  SET ACTIVE  |       of NT OS                    |
	           |--------------------------------------------------|
	
	|---------------------- EXAMPLE NUMBER 2 ----------------------|
	
	           |--------------------------------------------------|
	DISK-0     |     EISA     | * NT OS on PRIMARY Partition      |
	PRIMARY    |  PARTITION   |       SET ACTIVE                  |
	           |--------------------------------------------------|
	
	           |--------------------------------------------------|
	DISK-1     |* FAT PRIMARY |     SHADOW DRIVE                  |
	SHADOW     |  SET ACTIVE  |       of NT OS                    |
	           |--------------------------------------------------|
	
	NOTE: Make sure the ARC path is set correctly in the Boot.ini files located on
	the FAT partitions.
	
	Additional query words: boot mirror shadow smallbiz sbs sbs45
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbSBServSearch kbWinAdvServSearch kbSBServ400a
	Version           : :2000,3.1,3.5,3.51,4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	
