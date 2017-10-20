---
layout: page
title: "Q147690: Recovering From Boot Failure Affecting Mirrored Drives"
permalink: /kb/147/Q147690/
---

## Q147690: Recovering From Boot Failure Affecting Mirrored Drives

{% raw %}

	Article: Q147690
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a boot failure on a system with a mirrored boot drive occurs, and the
	failure is caused by a problem that has affected both the primary and a mirror,
	such as bad or corrupt device drivers or other changes to the system, using a
	Fault Tolerance boot floppy does not allow you to boot (since both drives have
	the same problem). In this case, the normal procedure is to boot to an
	alternative operating system, such as MS-DOS or another installation of Windows
	NT, and use it for possible recovery. However, if your boot drive is mirrored,
	this procedure is not possible, unless you manually break the mirror.
	
	MORE INFORMATION
	================
	
	To manually break the mirror, use a disk editor to change the partition table
	and the byte that indicates the partition type. Norton's Diskedit or another
	comparable utility can be used for this purpose. The partition table is in the
	first physical sector on a hard drive.
	
	The partition entries start at an offset. On a mirrored drive, this byte is
	either 0x86 (for FAT partition) or 0x87 (for NTFS partition). The byte needs to
	be changed to 0x06 (for FAT partition) or 0x07 (for NTFS partition). To do this
	(using Norton Diskedit version 5.0 or later), use the following procedure:
	
	CAUTION: Using a disk editor to directly change the information on your drive is
	dangerous and can result in furthur drive corruption if it is not done properly.
	Use this procedure as a last resort.
	
	1. Boot from an MS-DOS bootable floppy disk that contains a copy of Norton
	  Diskedit. Make sure that the floppy disk includes the NLIB200.RTL file.
	
	2. Run Diskedit.
	
	3. From the Object menu, select Drive.
	
	4. From the Drive dialog box, select Physical drive. The default is Logical
	  drive.
	
	5. Select the physical hard drive that is the primary from the mirror set (this
	  is normally Drive 1).
	
	6. From the Object menu, select Partition Table. From the View menu, select "as
	  Partition table" to view the following table:
	
	---------------------------------------------------------------------------
	|       |    |  Starting Location |  Ending Location   |Relative|Number of|
	|System |Boot|Side Cylinder Sector|Side Cylinder Sector|Sectors |Sectors  |
	|  ?    |Yes | 1       0       1  |  63   509      32  |      32|  1044448|
	| unused|No  | 0       0       0  |   0     0       0  |       0|        0|
	| unused|No  | 0       0       0  |   0     0       0  |       0|        0|
	| unused|No  | 0       0       0  |   0     0       0  |       0|        0|
	---------------------------------------------------------------------------
	
	  Each entry in this table is a partition. The row that has a Boot value
	  of "Yes" is generally your mirror partition. The example above only has
	  the one partition, but the other entries may have values if the disk has
	  partitions other than the mirror. The system value is based upon
	  Diskedit's interpretation of the partition type byte. In the table
	  above, it lists a "?", as it does not understand type 0x86 and 0x87.
	
	1. Use the arrow keys to move to the "?" entry in the System column.
	
	2. Press the space bar to change the value from "?" to "BIGDOS" for FAT
	  partitions or "HPFS" for NTFS partitions (both HPFS and NTFS use the same
	  partition type ID - 0x7. Diskedit does not differentiate between the two
	  types).
	
	3. From the Edit menu, select Write Changes.
	
	4. Exit Diskedit.
	
	5. Reboot the system with either an MS-DOS floppy disk or from the Windows NT
	  Setup disks. Your boot drive should be accessible from MS-DOS (if it is FAT)
	  or to Windows NT Setup (if it is NTFS).
	
	After the problem has been repaired, use Disk Administrator in Windows NT to
	break and re-establish the mirror.
	
	Additional query words: filesys ntfaqset
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
