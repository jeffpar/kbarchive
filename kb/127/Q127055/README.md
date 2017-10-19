---
layout: page
title: "Q127055: How to Cause ScanDisk for Windows to Retest Bad Clusters"
permalink: /kb/127/Q127055/
---

## Q127055: How to Cause ScanDisk for Windows to Retest Bad Clusters

	Article: Q127055
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 win98 kbDiskMemory
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	By default, ScanDisk for Windows (Scandskw.exe) does not test clusters that are
	marked as bad in the file allocation table (FAT). This behavior applies for both
	compressed and uncompressed drives and is consistent with the behavior of the
	MS-DOS ScanDisk utility (Scandisk.exe) included with MS-DOS version 6.x and
	Windows 95.
	
	You can configure ScanDisk for Windows to test clusters marked as bad in the FAT
	by editing the registry. This article describes this procedure and discusses why
	you might want to clear existing bad cluster marks in the FAT.
	
	WARNING: This procedure could possibly prevent certain applications from
	functioning properly, prevent certain applications from running at all, or, in
	rare cases, cause partial to complete data loss. Use the procedure described
	below only at your own risk.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	ScanDisk for Windows does not normally attempt to repair clusters marked as bad
	(FF7h for a 12-bit FAT and FFF7h for a 16-bit FAT) because there are many
	instances in which the clusters have been marked as bad for a valid reason. If a
	bad cluster mark is cleared in this situation, problems could arise. The
	following situations are examples of how clearing a bad cluster mark can cause
	problems:
	
	- Some encryption programs and programs that are copy protected mark one or
	  more clusters as bad to prevent other programs from accessing them. Removing
	  the bad cluster mark could cause problems with these types of applications.
	
	- Clusters marked as bad may indicate legitimate media defects on the physical
	  surface of the disk as identified by another surface scan utility. ScanDisk
	  for Windows may not detect anything wrong with a marginal cluster that was
	  marked as bad by another utility (such as the MS-DOS ScanDisk utility).
	
	  NOTE: Bad cluster markings due to physical media defects should appear only on
	  uncompressed drives. If ScanDisk is unable to read a cluster on a DriveSpace
	  compressed drive, it will erase the Microsoft DriveSpace FAT (MDFAT) entry
	  for that cluster and change the portion of the file that was using that
	  cluster to zero bytes in length. The physical sectors previously used by the
	  unreadable cluster are marked as free and can be used again.
	
	While many clusters are marked as bad for valid reasons, some disk utilities that
	are not designed to be run on DriveSpace compressed drives may incorrectly mark
	a FAT cluster as bad if they are unable to read the data for the compressed
	cluster. There may also be cases where a cluster is incorrectly marked as bad on
	an uncompressed drive.
	
	You can force ScanDisk for Windows to retest bad clusters by modifying the value
	for the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ 
	  Applets\Check Drive\Settings
	
	This registry key will exist only if ScanDisk for Windows has already been run.
	To have ScanDisk test clusters that have been marked as bad, modify the Settings
	value so that the last two digits are "04." For example, if the current value
	for Settings is
	
	  B1 03 40 00
	
	change it to read:
	
	  B1 03 40 04
	
	Once you modify the value for Settings, ScanDisk for Windows will retest any
	clusters marked as bad. If ScanDisk can correctly read a bad cluster, the
	following message will be displayed:
	
	  ScanDisk found an error on <volume label> (<drive>)
	
	  Cluster nnn is marked as bad, but ScanDisk cannot detect anything
	  wrong with it. Bad clusters are physical areas of your disk that a
	  program has identified as being unreliable for storing data.
	
	   - Leave the cluster marked bad and continue. (Default)
	     Ensures that the cluster will remain unavailable for storing data,
	     which is the safest option. Some encryption programs, or programs
	     that are copy protected, mark one or more clusters as bad to
	     prevent other programs from accessing them. If you are using one
	     of these programs, you should leave the bad cluster mark intact.
	
	   - Clear the bad cluster mark.
	     Marks the cluster available for storing data. Although ScanDisk
	     did not detect anything wrong with this cluster, you may encounter
	     errors if you use it.
	
	   - Test the cluster again.
	     Retests the bad cluster. If the test fails, ScanDisk will leave
	     the cluster marked as bad and will continue searching your disk
	     for other errors. If the test succeeds several times, it is
	     probably safe to store data in this cluster.
	
	It is important to remember that bad cluster marks on an uncompressed drive may
	indicate marginal media that cannot be read reliably. Letting ScanDisk for
	Windows clear a bad cluster mark made by another surface scan utility could
	result in partial or complete data loss if the cluster cannot be read reliably.
	Make sure to back up your hard disk before you let ScanDisk repair a bad cluster
	mark on an uncompressed drive.
	
	Additional query words:
	
	======================================================================
	Keywords          : diskmem win95 win98 kbDiskMemory 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
