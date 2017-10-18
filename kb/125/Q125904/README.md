---
layout: page
title: "Q125904: Client Data is Corrupted When Written to an NTFS Server"
permalink: kb/125/Q125904/
---

## Q125904: Client Data is Corrupted When Written to an NTFS Server

	Article: Q125904
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files created on an NTFS server volume by a network client may contain zeros
	(NULs) in place of the data the client software intended to write. The client
	software may not immediately detect that the data has been corrupted if the
	client is using caching. Looking at the file from the server or from another
	client will show that the file contains zeros.
	
	This problem occurs very infrequently and requires extensive file creation to
	reproduce. Only one corrupted file was encountered in one a test machine when
	30,000 files were created during heavy disk activity.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use a File Allocation Table (FAT) or a High
	Performance File System (HPFS) partition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
