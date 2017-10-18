---
layout: page
title: "Q233492: The Major Differences Between NFS Versions 2 and 3"
permalink: kb/233/Q233492/
---

## Q233492: The Major Differences Between NFS Versions 2 and 3

	Article: Q233492
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, used with:
	   - Microsoft Windows Services for UNIX, version 2.0 
	- Microsoft Windows 2000 Professional, used with:
	   - Microsoft Windows Services for UNIX, version 2.0 
	- Microsoft Windows 2000 Server, used with:
	   - Microsoft Windows Services for UNIX, version 2.0 
	- Microsoft Windows 2000 Advanced Server, used with:
	   - Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles discusses some major differences between Network File System (NFS)
	version 2 and version 3.
	
	NFS Version 2 is documented in RFC 1094 and was published in March 1989. NFS
	Version 3 is documented in RFC 1813 and was published in June 1995.
	
	MORE INFORMATION
	================
	
	NOTE: Services for Unix 2.0 supports both NFS versions 2 and 3.
	
	The major differences between the NFS versions 2 and 3 are:
	
	- Version 2 of the NFS protocol limited file offsets to a 32-bit quantity,
	  which limited the size of files accessible by clients to 4.2 GB. For users
	  who regularly gain access to larger files, this was a severe limitation. NFS
	  version 3 extended the file offsets and a number of other fields to 64-bits.
	
	- NFS Version 2 limited the data transfer size to 8 KB. No single read or write
	  request could exceed 8 KB. This limits performance on high-bandwidth networks
	  because it artificially increases the number of NFS requests to transfer a
	  given amount of data. NFS version 3 removed that limitation and allows the
	  client and server to negotiate a maximum transfer size.
	
	- Version 2 NFS servers must commit data written by a client to stable storage
	  (a disk or NVRAM) before responding affirmatively to the client.
	
	- NFS version 3 provides a new COMMIT operation that allows a client to perform
	  unstable writes to a server followed by a COMMIT request. The server is
	  required to verify that client data is on stable storage only when it
	  receives the COMMIT operation. A mechanism is provided that allows the client
	  to detect server loss of uncommitted data and recover.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : WINDOWS:2000; winnt:4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
