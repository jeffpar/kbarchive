---
layout: page
title: "Q214512: SFU: Showmount May Display Invalid List of NFS Exports"
permalink: /kb/214/Q214512/
---

## Q214512: SFU: Showmount May Display Invalid List of NFS Exports

{% raw %}

	Article: Q214512
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a directory that has been shared as an NFS mount from a Windows NT Services
	for Unix NFS server is moved (copied to another location on the server), it
	appears to be automatically unshared, because NFS clients can no longer mount
	the share. However, it is not unshared automatically. NFS clients can no longer
	mount the share but, until the server is rebooted, the share will continue to be
	displayed as an available NFS mount when a client views the exports list of the
	server.
	
	Also, because the directory is not actually unshared, if it is moved back to its
	original location, it again becomes available for clients to mount.
	
	
	CAUSE
	=====
	
	The exports list for the NFS server service is not updated when the directory is
	moved because the directory does not actually get unshared.
	
	NOTE: Sharing attributes on the directory are not actually removed. If the
	directory is returned to its original location, it again becomes accessible
	provided that the server was not restarted. If the server was restarted,
	returning the directory to its original location and restarting the server will
	again make the directory mountable.
	
	RESOLUTION
	==========
	
	Directories shared through NFS should not to be moved because of the
	parent/child sharing limitation within NFS.
	
	Unshare the directory before moving it, and then reshare it if you want.
	
	
	REFERENCES
	==========
	
	For more information, see Managing NFS and NIS, by Hal Stern, Copyright 1991
	O'Reilly and Associates.
	
	Additional query words: SFU Services for Unix
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWinNTServicesUnix
	Version           : winnt:4.0; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
