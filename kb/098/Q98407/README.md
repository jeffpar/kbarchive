---
layout: page
title: "Q98407: How DoubleSpace Uses Sector Allocation"
permalink: /kb/098/Q98407/
---

## Q98407: How DoubleSpace Uses Sector Allocation

{% raw %}

	Article: Q98407
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.00 and 6.20, use DBLSPACE in place of DRVSPACE
	for commands and filenames.
	
	SUMMARY
	=======
	
	DriveSpace uses sector allocation granularity even though you cannot see
	evidence of this in the Bytes Available On Disk value reported by CHKDSK.
	
	MORE INFORMATION
	================
	
	Since the file allocation table (FAT) system is cluster based, DriveSpace uses
	its own FAT (which is called the MDFAT [Microsoft DriveSpace FAT]) to achieve
	sector allocation. Each entry in the FAT corresponds to an entry in the MDFAT,
	as well as a logical cluster of 8 kilobytes (K) for MS-DOS and Windows 95
	DriveSpace, or 32 K for Plus! DriveSpace 3. Each MDFAT entry also corresponds to
	a sequence of sectors less than or equal to 8K (MS-DOS and Windows 95
	DriveSpace) or 32 K (Plus! DriveSpace 3).
	
	NOTE: Plus! DriveSpace 3 supports fragmented MDFAT clusters, so a 32 K DriveSpace
	3 MDFAT cluster need not necessarily be contiguous.
	
	Since disk size reporting is accomplished by adding up the total number of
	clusters and then multiplying by the cluster size, there is no way to get a
	non-cluster size value for Total Disk Space or Bytes Available On Disk values
	from CHKDSK.
	
	Estimated Compression Ratio (ECR)
	---------------------------------
	
	When you run CHKDSK on a DriveSpace drive, it lists the number of used clusters
	in terms of uncompressed data. When it lists the number of unused clusters, it
	must specify some multiple of clusters based on how many compressed clusters it
	thinks can fit inside the actual free space. It does this by taking the ECR and
	multiplying it by the actual free space on the drive (in sectors) and then
	dividing that by the number of sectors in a cluster (16).
	
	As a result, free disk space can only be specified as a integral number of
	clusters.
	
	Additional query words: 6.00 6.20 Granular double space dblspace
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
