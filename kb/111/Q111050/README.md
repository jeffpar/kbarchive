---
layout: page
title: "Q111050: ScanDisk Does Not Correct Clusters Marked as Bad"
permalink: /kb/111/Q111050/
---

## Q111050: ScanDisk Does Not Correct Clusters Marked as Bad

	Article: Q111050
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If ScanDisk finds clusters that are marked as "bad" in the file allocation table
	(FAT) while performing a surface scan, it designates them with a "B" in the
	surface-scan map. However, it does not correct or repair the bad clusters. This
	is by design and applies when you scan both compressed and uncompressed drives.
	Additionally, ScanDisk never marks a cluster as bad on a DoubleSpace-compressed
	drive.
	
	MORE INFORMATION
	================
	
	By design, ScanDisk does not attempt to repair clusters marked as bad because
	there are instances in which these clusters are marked bad for a valid reason.
	In these situations, removing the bad cluster marking (FFF7h or FF7h in the FAT)
	could cause problems.
	
	NOTE: FF7h is used to mark bad clusters on drives with a 12-bit FAT, while a
	16-bit FAT uses FFF7h. MS-DOS determines the FAT size based on the number of
	clusters (allocation units) on the host drive. If there are 4085 or fewer
	clusters, a 12-bit FAT is used. If there are 4086 or more clusters, a 16-bit FAT
	is used.
	
	Below are some examples of how repairing a cluster marked as bad could cause
	problems:
	
	- Some applications (such as copy-protected software) mark a cluster as bad and
	  store data in this cluster. Removing the bad cluster marking could cause
	  problems with these applications.
	
	- Clusters marked as bad in the FAT may indicate media defects on the physical
	  disk surface. In this situation, the bad cluster markings in the FAT were
	  probably put there by a surface-scan utility. Bad cluster markings due to
	  physical media defects should only appear on uncompressed drives.
	
	  A cluster that is unreadable on a DoubleSpace-compressed drive most likely
	  does not indicate a media defect on the disk's surface. ScanDisk never marks
	  a cluster on a compressed drive as bad. If ScanDisk finds an unreadable
	  cluster on a compressed drive, it will erase the Microsoft DoubleSpace FAT
	  (MDFAT) entry for that cluster, and the portion of the file that was using
	  that cluster is changed to zero bytes in length. The sectors previously being
	  used by the unreadable cluster are marked as free and can be used again.
	
	  ScanDisk marks bad clusters only on the host drive. These bad clusters
	  correspond to physical defects on the disk's surface.
	
	- A disk utility program that is not DoubleSpace-aware may mark a cluster as
	  bad on a DoubleSpace drive if it is unable to read data from the compressed
	  cluster. Contact the manufacturer of that disk utility program for
	  information on why the cluster is marked as bad and how to resolve this
	  issue.
	
	  NOTE: Microsoft does not support running third-party disk utilities on
	  DoubleSpace-compressed drives. Use only those utilities included with MS-DOS
	  6.2 (ScanDisk, Defrag, and so forth) on compressed drives, or contact the
	  manufacturer of your disk utility software for information on DoubleSpace
	  compatibility.
	
	
	REFERENCES
	==========
	
	"The MS-DOS Encyclopedia," published by Microsoft Press
	
	Additional query words: 6.20 6.2 Scanfix fix bad sector
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
