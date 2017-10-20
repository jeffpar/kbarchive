---
layout: page
title: "Q252386: SFU: Network Path Not Found When Trying to Mount Unix NFS Volume"
permalink: /kb/252/Q252386/
---

## Q252386: SFU: Network Path Not Found When Trying to Mount Unix NFS Volume

{% raw %}

	Article: Q252386
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to mount a Unix NFS volume on a computer running Windows NT 4.0
	Server or Workstation and you are running the Microsoft Windows NT Services for
	Unix NFS Client, you may not be able to connect and you may receive the
	following error message:
	
	  The network path was not found.
	
	NOTE: You may receive this error message if you attempt to map a drive to a Unix
	NFS host using the Map Network Drive graphical interface or the NET USE command
	from a command prompt.
	
	CAUSE
	=====
	
	This issue can occur when the default NFS access permissions are not in effect,
	and the Windows NT client host has not been given explicit permission to mount
	the NFS share on the computer running Unix.
	
	RESOLUTION
	==========
	
	To resolve this issue, give the Windows NT host explicit permission to gain
	access to the share or allow all clients to gain access.
	
	MORE INFORMATION
	================
	
	In most versions of Unix, the /etc/exports file (/etc/dfs/dfstab in Solaris
	Unix) controls the accessibility of local file systems to network clients. By
	default, Unix NFS shares are exported with Read/Write permissions for all hosts.
	However, if an NFS file system is shared with explicit permissions given to one
	or more hosts, the default permissions are superceded, and only specified hosts
	can gain access.
	
	For example, if you export the file system /reports in /etc/exports as
	
	  /reports
	
	then /reports is shared with the default permissions of Read/Write for all
	hosts.
	
	However, if you export /reports as
	
	  /reports host1 host2
	
	then /reports can only be mounted by host1 or host2. No other remote hosts can
	gain access to the share.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:4.0; :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
