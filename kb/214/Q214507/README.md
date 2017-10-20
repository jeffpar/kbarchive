---
layout: page
title: "Q214507: Multiple NFS Shares Can Be Mounted as a Single Drive Mapping"
permalink: /kb/214/Q214507/
---

## Q214507: Multiple NFS Shares Can Be Mounted as a Single Drive Mapping

{% raw %}

	Article: Q214507
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you share multiple folders on a single NTFS partition as NFS mounts, they may
	all be mounted by the Windows NT NFS client as a single drive mapping. This is
	not a feature; mapping to multiple NFS shares in this manner can cause
	unpredictable results.
	
	CAUSE
	=====
	
	This is a side effect of the parent/child limitation on NFS shares as
	implemented in the Services for UNIX NFS server.
	
	RESOLUTION
	==========
	
	Do not mount an NFS share without specifying the full share name or without
	specifying the full alias name.
	
	MORE INFORMATION
	================
	
	You cannot export a parent folder of an exported file system unless the parent
	is on a different physical device.
	
	
	Additional query words: SFU Services for Unix
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
