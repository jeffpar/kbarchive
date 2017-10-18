---
layout: page
title: "Q241432: NFS Server Performance Tuning Parameters for Services for UNIX"
permalink: kb/241/Q241432/
---

## Q241432: NFS Server Performance Tuning Parameters for Services for UNIX

	Article: Q241432
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can tune the NFS Server component of Services for UNIX (SFU) to some degree
	for improved performance, especially when a large number of files or folders is
	being shared.
	
	MORE INFORMATION
	================
	
	The performance of large Windows NT NFS file shares (exports) is related to the
	following factors:
	
	- Inode entries must be generated for all possible file names. For MS-DOS
	  compatibility, the NTFS file system always generates another file name for
	  any name that does not conform to the normal MS-DOS 8.3 file name
	  specification. However, it takes some time to verify that these automatically
	  generated file names are unique within the folder. If you can reasonably
	  restrict file naming to the 8.3 convention, you should do so.
	
	- The size of the inode file directly relates to the speed at which it can be
	  parsed. It is important to keep this file entirely in memory. For each drive
	  on the Windows NT NFS server, you should set the Inode Cache Size setting to
	  adequately hold the number of inode entries required for all of the files
	  shared by NFS for all NFS shares on that particular drive. Typically, the
	  minimum inode file requirement is:
	
	  ((the number of files shared + the total number of folders within all of the
	  shares) * 2)
	
	Keep the number of folder levels to a minimum to reduce the size of this cache.
	
	- Increase the number of directory cache pages to provide storage in memory for
	  all of the folder information on all NFS shares on the server. The number of
	  directory cache pages required is also proportional to the number of folder
	  levels for each NFS share. The fewer the levels, the smaller the number of
	  cache pages required. These are 4-kilobyte (KB) pages, so the maximum amount
	  of folder information that can be stored in memory is 4 megabytes (MB). If
	  you need more storage, the folder information is not cached, but is read
	  directly from disk (which slows performance). It is important, for fast
	  performance, that all directory information be read from cache.
	
	- Disable all symbolic link support. Symbolic link support degrades performance
	  and should be disabled if not needed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
