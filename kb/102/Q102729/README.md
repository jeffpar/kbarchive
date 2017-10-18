---
layout: page
title: "Q102729: CD-ROM and Services for Macintosh"
permalink: kb/102/Q102729/
---

## Q102729: CD-ROM and Services for Macintosh

	Article: Q102729
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Customers may want to use Windows NT Services for Macintosh to share
	information on CD-ROM with Macintosh clients. This is not possible with
	Microsoft LAN Manager Services for Macintosh.
	
	Windows NT Server and Advanced Server use the Windows NT file system (NTFS)
	to store a file's resource fork and permissions in the space dedicated to
	the extended attributes.
	
	However, the CD file system (CDFS) volumes are read-only medium; therefore,
	the permissions are defaulted to Read access.
	
	Services for Macintosh allows Macintoshes to utilize PC-compatible CDs in
	drives attached to the server. It does NOT allow Macintosh-compatible CDs
	to be read or shared by a Windows NT Server or Advanced Server.
	
	To create a Macintosh volume on CD-ROM, do the following:
	
	1. From the File Manager, select the directory on the CD that you want to
	  designate as a Macintosh-accessible volume.
	
	2. From the MacFile menu, choose Create Volume.
	
	3. In the Volume Name box, type a volume name that Macintosh users will see when
	  they log on.
	
	4. Specify a new path and password, if necessary. The security defaults to
	  read-only because of the nature of CDFS.
	
	5. Choose the OK button.
	
	Additional query words: prodnt compact disc
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 4.0
	
	=============================================================================
	
