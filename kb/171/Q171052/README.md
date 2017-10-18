---
layout: page
title: "Q171052: Software FT Sets Are Not Supported in Microsoft Cluster Server"
permalink: kb/171/Q171052/
---

## Q171052: Software FT Sets Are Not Supported in Microsoft Cluster Server

	Article: Q171052
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The software fault tolerance contained within Windows NT Server (FTDISK) will
	not be supported in Microsoft Cluster Server (MSCS) 1.0 for cluster disk
	resources on the cluster shared SCSI bus. This will include mirror sets, volume
	sets, and stripe sets with and without parity. FTDISK will continue to be
	supported for local disk resources.
	
	This includes local disk resources on Windows NT Server Enterprise Edition
	servers using MSCS 1.0. Examples of using FTDISK for local disk resources would
	include creating an FTDISK RAID 5 stripe set that is used for non- cluster
	purposes on a server. For example, a customer could choose an FTDISK volume for
	an application that was not used on a cluster. For MSCS disk resources on a
	shared SCSI bus, however, the only RAID supported by Microsoft is hardware level
	RAID.
	
	The two key facts about this situation are:
	
	- MSCS still supports RAID on all disks in a cluster, to protect your data in
	  the event of a disk failure. However, disks on a shared SCSI bus must be
	  protected by hardware RAID, while disks that are local to each server may be
	  protected by either hardware or software RAID.
	
	- Windows NT Server software RAID is still fully supported for all disks
	  connected to a non-clustered server. The technical reasons that prevent
	  Microsoft from supporting software RAID on shared SCSI disks in a cluster are
	  uniquely related to the way MSCS does server failover.
	
	MORE INFORMATION
	================
	
	There are two key technical reasons why FTDISK is not supported on the shared
	SCSI bus in Microsoft Cluster Server 1.0.
	
	The first reason is that RAID metadata cannot be reliably recovered by MSCS in
	all server failover scenarios. FTDISK stores metadata information about all disk
	members in the registry on the local machine. (The location of this information
	is HKEY_LOCAL_MACHINE\System\Disk.) Therefore, the only way to get to the disk
	metadata is to mount the file system on the disk members. This presents no
	difficulty with non-clustered servers because they, by default, always have
	access to local storage devices.
	
	However, within a cluster, based on specific failure and boot sequences, there
	are occasional states where a computer is unable to start with all of the
	volumes necessary for the FTDISK diskset. In such a case, a data set could be
	orphaned or rolled to a previous version, because the information needed to
	identify the disk ownership is contained on the disk that is to be mounted. In a
	cluster it would be theoretically possible for server failures to result in
	unknown states for disks managed by the current FTDISK. The inability to safely
	recover RAID disk state until the disks were already brought back online could
	also expose the disk members to the possibility of data corruption, data loss,
	stale data, and other problems for a given data volume.
	
	The other technical issue preventing support of the current FTDISK for shared
	SCSI disks in a cluster is the lack of a fully automated method of recovery from
	disk problems. For example, in the event of a failover, CHKDSK would need to be
	run on the FT volume to assess the integrity of the volume itself. At this time,
	there is no automatic means of doing this, leaving the responsibility of running
	CHKDSK to the user.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q160963 CHKNTFS.EXE: What You Can Use It For
	
	  Q158675 How to Cancel CHKDSK After It Has Been Scheduled
	
	The above information is only relevant to implementing software fault tolerance
	in Microsoft Cluster Server 1.0. The current FTDISK software RAID remains a
	supported, reliable, and excellent disk protection solution for Windows NT
	Server when running on a single server.
	
	Additional query words: MSCS fault tolerant
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
