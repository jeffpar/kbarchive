---
layout: page
title: "Q104198: SFM: Macintosh Locked Folders Are Not Completely Secure"
permalink: kb/104/Q104198/
---

## Q104198: SFM: Macintosh Locked Folders Are Not Completely Secure

	Article: Q104198
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you either set the Read-Only file attribute or "lock" a folder from a
	Macintosh computer on a Services for Macintosh (SFM) shared subdirectory, you
	cannot drag files or folders from the same SFM volume to the locked folder.
	However, you can copy any other file from any other subdirectory (folder) on the
	SFM server, copy files from a different SFM server, or copy files from the local
	Macintosh hard drive to the locked folder.
	
	RESOLUTION
	==========
	
	To approximate a locked folder using SFM on a Windows NT Advanced Server
	computer, set the NTFS permissions for the desired subdirectory (folder) to
	Read-Only.
	
	For more information on setting permissions on SFM volumes, please refer to the
	Windows NT Advanced Server Services for Macintosh guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
