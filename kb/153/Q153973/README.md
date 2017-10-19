---
layout: page
title: "Q153973: Recovering NTFS Boot Sector on NTFS Partitions"
permalink: /kb/153/Q153973/
---

## Q153973: Recovering NTFS Boot Sector on NTFS Partitions

	Article: Q153973
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a volume on a server or workstation becomes inaccessible or Disk
	Administrator shows it as "unknown", you may have a corrupt or damaged boot
	sector. This article will tell you how to find the second copy that NTFS stores
	and restore to the correct position on the disk.
	
	Please keep in mind that two conditions must be met in order for this information
	to apply to your issue:
	
	1. File system must be NTFS. FAT currently does not keep a copy of the
	  bootsector.
	
	2. You must be able to boot your machine to NT.
	
	NOTE: If you cannot Boot into NT or move the drive to another NT machine then
	follow Knowledge Base Article:
	
	  Q121517: How to recover from a corrupt NTFS bootsector
	
	RESOLUTION
	==========
	
	In order to resolve the problem, we need to retrieve the copy of the backup
	bootsector and copy it back to the correct position on the Hard Disk.
	
	In NT 3.5x, the second copy is kept in the center of the logical volume (Volume
	middle).
	
	In NT 4.0 and Windows 2000, it has been moved to the end of the logical volume
	(Volume end), which requires a different retrieval technique. The example shown
	will be using Disk Probe (dskprobe.exe) for NT which ships on the NT V4.0
	Resource Kit but will also run under NT V3.5x with the proper .dll files
	installed.
	
	Note:
	
	To assure recovery during the following procedures, once you have verified the
	NTFS boot sector and the copy to be valid, save the sector to a file while
	viewing it by selecting "Save As" from the File menu and specify a path and
	filename.
	
	Recovering Bootsectors of Primary Partitions.
	---------------------------------------------
	
	1. Using Disk Probe choose DRIVES, Physical Drive. Select the PhysicalDriveX
	  where X = the ordinal of the disk. For example, Use Disk Administrator to
	  find what the ordinal is of the disk in question. For example, if I have
	  three SCSI disks in my system with SCSI ID's 1, 3, and 5, Disk Administrator
	  will show them in order of 0,1,2. Furthermore, if I remove disk with SCSI ID
	  #3, SCSI Disk with ID #5 will move up to disk 1 and so on.
	
	2. Double click on the PhysicalDriveX you wish to repair. In the box below,
	  uncheck Read Only and press the Set Active button. You will then notice that
	  the Active Handle has been set to PhysicalDriveX, then select OK.
	
	3. From the SECTORS Menu, select Read and insert 0 for STARTING SECTORS and 1
	  for Number of Sectors, Click Read.
	
	4. You are now at the Master Boot Record (MBR) of your Physical disk. You can
	  verify this by the ASCII text on the right hand side beginning at Offset 8B
	  which should read "Invalid Partition Table....". From the VIEW menu, select
	  "Partition Table". From the box labeled "partition table index", use the
	  scroll bar to select the partition in question and double click on that
	  Partition. The Box in the lower, left-hand corner shows the Relative Sectors,
	  note this value (on the line provided below), and Select the Tab "GO" next to
	  this box.
	
	  Record RELATIVE SECTOR __________ value.
	
	5. Now from the VIEW menu, select "Bytes" so you can verify your position.
	  Depending on how the Bootsector has been corrupted, you can try to identify
	  some ASCII strings such as NTFS in the upper Right hand corner or "A disk
	  Read error occurred...", beginning at offset 130. From the VIEW menu, select
	  "NTFS bootsector". In this view, select the button, "Volume End" for NT V4.0
	  or "Volume Middle" for NT V3.5x You should now be at your backup copy of the
	  bootsector. If you get an error stating "incomplete Data Read" or after
	  examining the bytes, determine this is not the backup copy of the bootsector,
	  your primary bootsector was corrupt so that the values we needed to Jump to
	  the backup copy were incorrect. Please go ahead to the next section showing
	  how to recover the bootsector when it is missing or heavily corrupted,
	  otherwise continue with step 6.
	
	6. From the VIEW menu, select Bytes and verify that this is the NTFS bootsector.
	  Once verified, From the SECTORS menu, select Write, make sure the dialog box
	  shows the correct Handle and PhysicalDrive. In box Starting Sector to write
	  Data, type in the number of Relative sectors you noted in step #4 and select
	  the Button Write it.
	
	7. Go to the SECTORS menu and type in the Relative sector from step #4 while
	  keeping Number of sectors to 1, select Read. Here, please verify that the
	  data was written.
	
	8. Close Disk Probe and reboot your system.
	
	Recovering Backup bootsector if original copy is missing, heavily
	corrupted, or does contain any usable data.
	-------------------------------------------------------------------------------------------------------------
	
	If the bootsector is missing or corrupted in such a manner that the information
	in the Primary Boot sector pointers were incorrect, usually the number of
	sectors are wrong, use the following steps to recover.
	
	1. Using Disk Probe choose DRIVES, Physical Drive. Select the PhysicalDriveX
	  where X = the ordinal of the disk. For example, Use Disk Administrator to
	  find what the ordinal is of the disk in question.
	
	2. Double click on the PhysicalDriveX you wish to view. In the box below,
	  uncheck Read Only and select the button Set Active. You will then notice that
	  the Active Handle has been set to PhysicalDriveX, then select OK.
	
	3. From the SECTORS Menu, select Read and insert 0 for STARTING SECTORS and 1
	  for Number of Sectors, Click Read.
	
	4. You are now at the MBR of your Physical disk. You can verify this by the
	  ASCII text on the right hand side beginning at Offset 8b which should read
	  "Invalid Partition Table....". From the VIEW menu, select view Partition
	  Table. Select the correct partition number which is in question.
	
	5. We will need two values; Total Sectors, Relative sectors. Please note the
	  Relative sectors value since this is where the bootsector should be located.
	  To find the backup copy of the bootsector, perform the following calcualtion:
	
	Record Total Sectors: _________
	Record Relative Sectors: _________
	
	EXAMPLE #1: FOR NT V4.0 WHERE THE BACKUP COPY IS AT THE END OF THE VOLUME:
	
	                  Total Sectors  -->  1062880
	              + relative Sectors -->       32 +
	                                     ---------
	                                      1062912
	              - Minus one sector -->        1 -
	                                     ---------
	               Backup bootsector -->  1062911
	
	EXAMPLE #2: FOR NT V3.5x WHERE THE BACKUP COPY IS IN THE MIDDLE OF THE VOLUME:
	
	                  Total Sectors  -->  1062880
	                   Divided by 2  -->   531440
	              + relative Sectors -->       32 +
	                                     ---------
	               Backup bootsector -->   531472
	
	6. Select SECTORS, Read and input Starting sector as the value calculated in
	  Step #5, Number of sectors to 1. Select Read and you should be at the
	  location of your backup bootsector.
	
	7. From the VIEW menu, select Bytes and verify that this is the NTFS bootsector.
	  Once verified, from the SECTORS menu, select Write, make sure the dialog box
	  shows the correct Handle and PhysicalDrive. In box Starting Sector to write
	  Data, type in the number of Relative sectors you noted in step #5 and select
	  the Buttion Write it.
	
	8. Go to the SECTORS menu and type in the Relative sector from step #5 while
	  keeping Number of sectors to 1, select Read. Here, please verify that the
	  data was written.
	
	9. Close Disk Probe and reboot your system.
	
	Recovering Bootsectors of extended partitions:
	----------------------------------------------
	
	1. Using Disk Probe choose DRIVES, Physical Drive. Select the PhysicalDriveX
	  where X = the ordinal of the disk. For example, Use Disk Administrator to
	  find what the ordinal is of the disk in question.
	
	2. Double click on the PhysicalDriveX you wish to view. In the box below,
	  uncheck Read Only and select the button Set Active. You will then notice that
	  the Active Handle has been set to PhysicalDriveX, then select OK.
	
	3. From the SECTORS Menu, select Read and insert 0 for STARTING SECTORS and 1
	  for Number of Sectors, Click Read.
	
	4. You are now at the MBR of your Physical disk. You can verify this by the
	  ASCII text on the right hand side beginning at Offset 8b which should read
	  "Invalid Partition Table....". From the VIEW menu, select view Partition
	  Table. Select VIEW , As Partition Table.
	
	5. In this view, in the Partition Table Index box, select your partition that
	  contains your Extended partition. Once done, the System ID box should read
	  "Extended". If the partition in question is the fourth logical drive in the
	  Extended partition, click the Next partition button 4 times. The System ID
	  box should now read "NTFS"
	
	6. At this point, in the Partition Table Index box, select (double-click) your
	  partition that contains your Extended partition. Once done, the System ID box
	  should read "Extended."
	
	  Now, navigate to the logical volume that needs repair within the extended
	  partition. If the damaged volume is the second volume in the partition, click
	  the "Next Partition" button twice. As you navigate through volumes in the
	  extended partition, the System ID field should indicate the file system of
	  each partition.
	
	  Once you have found the partition that needs repair, record the current sector
	  (from the title bar of Disk Probe), the relative sector, and total sectors of
	  this volume. This information will be used to calculate the location of the
	  backup copy of the boot sector.
	
	  Current Sector ________________________
	  Relative Sector _______________________
	  Total Sectors _________________________
	
	  Click the Go button to go to the boot sector of the damaged volume. Note the
	  location of this sector from the title bar.
	
	  Boot Sector ___________________________
	
	  To verify that you are looking at the correct sector, Select Bytes from the
	  View menu. If the sector has only minor damage, you should see ASCII error
	  text in the right hand column. (If the sector has been completely
	  overwritten, you won't have this assurance.)
	
	  Note this location so we know where to copy the backup bootsector.
	
	             Current sector    __________
	             Relative sectors  __________
	             Total Sectors     __________
	
	7. To find the backup copy, you will need three values, Relative Sectors, Total
	  Sectors, and Current sector which you noted in step #6. Perform the following
	  calculation using your values:
	
	EXAMPLE #1: FOR NT V4.0 WHERE THE BACKUP COPY IS AT THE END OF THE VOLUME:
	
	                        Current sector:   819200
	                        Total Sectors:    243680 +
	                                          ======
	                                         1062880
	                      Relative Sectors        32 +
	                                          ======
	                                         1062912
	                           Less one            1 -
	                                          ======
	                      Backup Bootsector  1062911
	
	EXAMPLE #2: FOR NT V3.5x WHERE THE BACKUP COPY IS IN THE MIDDLE OF THE VOLUME:
	
	                        Current sector:   819200
	 + Total Sectors: 243680 divided by 2 :   121840 +
	                                          ======
	                                          941040
	                    + Relative Sectors        32 +
	                                          ======
	                      Backup Bootsector   941072
	
	8. Select SECTORS, Read and input Starting sector as the value calculated in
	  Step #7, Number of sectors to 1. Select Read and you should be at the
	  location of your backup bootsector.
	
	9. From the VIEW menu, select Bytes and verify that this is the NTFS bootsector.
	  You should see ASCII error text in the right hand column. If this sector does
	  not appear to be a valid boot sector, do not continue. Start the process over
	  and find the correct sector that contains the backup copy o the bootsector.
	
	  Once you have verified that this is the backup copy of the bootsector, write
	  this sector to the location of the original boot sector you discovered in
	  step 6. From the Sectors menu, select Write. Make sure the dialog box shows
	  the correct Handle and PhysicalDrive. In the Starting Sector box, enter the
	  location of the original bootsector. Click "Write it" to write this
	  information to the disk.
	
	10. Go to the SECTORS menu and select Read. In the starting sector, type in the
	  Sector to which you wrote the backup copy, while keeping Number of sectors
	  to 1. Select Read, and verify that the data was written.
	
	11. Close Disk Probe and reboot your system.
	
	Norton Diskedit is manufactured by Symantec Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinAdvServSearch
	Version           : :2000,3.5,3.51,4.0
	
	=============================================================================
	
