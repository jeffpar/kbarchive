---
layout: page
title: "Q101421: Sharing Files with Windows for Workgroups Clients"
permalink: /kb/101/Q101421/
---

## Q101421: Sharing Files with Windows for Workgroups Clients

{% raw %}

	Article: Q101421
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbprogramming kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Multiple applications, each running in Windows for Workgroups version 3.1 on
	different workstations, can share a file residing on a server with full
	read-write access while simultaneously keeping the file open. File region
	locking ensures that data integrity of the file is not lost. The Windows for
	Workgroups network redirector caches file I/O operations unless file locking is
	used. It will seem that Windows for Workgroups clients are failing to write data
	unless the applications lock file regions.
	
	MORE INFORMATION
	================
	
	Opening a file with READ_WRITE access and using the OF_SHARE_DENY_NONE file
	sharing flag is possible from more than one application each running from a
	different workstation. Applications sharing a file from a server must use the
	same file sharing flags. Keeping the file open may be a necessary specification
	for networked database management systems because it is more efficient to keep
	the file open than to open and close the file for each file-access operation.
	However, not all applications should be designed to keep the file open during
	the use of a file.
	
	To better understand file sharing, consider an application running on Workstation
	A opening a file that resides on the disk of Server S. An application running on
	Workstation B can also open the same file so that each application is aware of
	the updates made to the file on Server S if the file is opened with READ_WRITE
	access and the OF_SHARE_DENY_NONE sharing flag.
	
	To ensure that two or more applications do not access the shared file in the same
	region at the same time, locking is used to create exclusive access to a region
	of the file. File region locking by one application causes failure of file I/O
	operations performed by other applications sharing the file. The sharing
	component of Windows for Workgroups, VSHARE.386, keeps track of the region that
	is locked and fails the file I/O operation attempting to access the shared file,
	including any portion of the locked region. This is very critical to file
	sharing; if one application is writing information into a location of a shared
	file at the same instance another application is reading from the same location
	of the shared file, there is a loss of data integrity.
	
	In Windows for Workgroups, file I/O operations are redirected to the server drive
	via the network redirector component, VREDIR.386 (in enhanced mode) or
	WORKGRP.SYS (in standard mode). The network redirector of Windows for Workgroups
	caches file I/O operations. The redirector will disable the cache if file
	locking is enabled, and therefore even if two applications are sharing files and
	are being careful so that there is no file access concurrency, Windows for
	Workgroups will still fail to perform the file I/O unless file locking is used.
	One application reading from the file will not be reading the latest updates
	from the application writing to the file or data will not seem to be written to
	disk.
	
	The following summarizes key points when implementing applications to share files
	residing on a server for full read-write access.
	
	- Open the file with READ_WRITE access and OF_SHARE_DENY_NONE sharing flag.
	
	- Before reading or writing, lock the region of the file about to be accessed.
	  Use _locking() from the Microsoft C Run-time library or MS-DOS Interrupt 21h
	  function 5Ch to lock the file region.
	
	- Immediately following a read or a write, unlock the region. Use _locking() or
	  Interrupt 21h function 5Ch to unlock the file region. For courtesy to other
	  applications using the file, do not exclude the use of a file region for a
	  long period of time. Lock the file region only during accessing (reading or
	  writing).
	
	- If the lock fails, this means that some portion of the region of the file is
	  locked by another application. The application is not allowed access to this
	  region until the other application releases it by unlocking the region.
	
	Additional query words: remote locking
	
	======================================================================
	Keywords          : kbprogramming kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWFWSearch kbWFW310 kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
