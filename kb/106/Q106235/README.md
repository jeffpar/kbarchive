---
layout: page
title: "Q106235: File Manager GP Fault on BW-NFS Network"
permalink: kb/106/Q106235/
---

## Q106235: File Manager GP Fault on BW-NFS Network

	Article: Q106235
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience a general protection (GP) fault in Microsoft Windows for
	Workgroups File Manager when you access files on a Beame & Whiteside Network
	File System (BW-NFS) network drive.
	
	CAUSE
	=====
	
	BW-NFS is capable of storing files with names longer than the MS-DOS limit of 8
	characters plus a 3 character extension. You may receive the GP fault if this
	long file name support feature is enabled on the BW-NFS server where BW-NFS is
	installed as a primary or secondary network for Windows for Workgroups 3.11.
	
	Note that the name of the file being manipulated does not have to exceed the
	MS-DOS file name limits to cause this error.
	
	WORKAROUND
	==========
	
	Disable the long file name support on the BW-NFS network server.
	
	Additional query words: LFN parse longname 3.11 filename
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
