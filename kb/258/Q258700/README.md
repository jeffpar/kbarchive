---
layout: page
title: "Q258700: Error Message Attempting to Mount SFU 2.0 NFS Shared File System"
permalink: /kb/258/Q258700/
---

## Q258700: Error Message Attempting to Mount SFU 2.0 NFS Shared File System

{% raw %}

	Article: Q258700
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to use the mount command from a UNIX client to mount a shared
	folder, the UNIX client may receive the following error message:
	
	  Permission Denied
	
	MORE INFORMATION
	================
	
	When you use the mount command, it is important to note that it is case
	sensitive. If you use the wrong case, Windows Services for UNIX (SFU) version
	2.0 returns "NFS3ERR_ACCES" for an invalid mount name request. When the UNIX
	client receives this return, it generates the "Permission Denied" error
	message.
	
	For example, assume that the computer that is running SFU 2.0 is named SFUSERVER
	and has a shared folder named Public. Using the following command does not work
	because the folder name is "Public," not "public":
	
	  mount -F nfs SFUSERVER:/public /mnt
	
	The proper command to mount the share is
	
	  mount -F nfs SFUSERVER:/Public /mnt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
