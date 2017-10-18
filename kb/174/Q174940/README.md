---
layout: page
title: "Q174940: Clients May Receive Access Denied Error"
permalink: kb/174/Q174940/
---

## Q174940: Clients May Receive Access Denied Error

	Article: Q174940
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a File Share resource within a group using Microsoft Cluster
	Server, it is important to establish a dependency with a physical disk resource.
	If the physical disk resource is on the shared SCSI bus and a failure occurs
	without the dependency, clients may receive the following error:
	
	  Access Denied
	
	MORE INFORMATION
	================
	
	The File Share resource type requires a dependency on a network name so the
	share may be registered on the network. The resource does not place a mandatory
	requirement on a physical disk resource that corresponds to a device on the
	shared SCSI bus. This allows the use of other forms of storage under special
	circumstances. This may include local storage for nonvolatile data in which the
	same data exists on both nodes. Third-party data solutions may also fall into
	this category.
	
	If you use a device on the shared SCSI bus for a share's data storage and do not
	establish a dependency between the File Share resource and the Physical Disk,
	clients may receive access denied errors or other errors caused by a brief
	failure of the device. This condition may be temporarily resolved by manually
	taking the File Share resource offline and then returning it to online status.
	If you establish the dependency first, this manual step is not necessary and the
	condition does not occur. For best results when storing data on a device managed
	by a Physical Disk resource, establish a dependency for the resources that rely
	on the data source.
	
	Additional query words: cluster client denied MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
