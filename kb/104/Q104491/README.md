---
layout: page
title: "Q104491: Windows NT Does Not Support TAR or COMPRESS for FTP Transfers"
permalink: kb/104/Q104491/
---

## Q104491: Windows NT Does Not Support TAR or COMPRESS for FTP Transfers

	Article: Q104491
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	If you download files with FTP from a UNIX or Internet server, the files
	may be in tape archive (TAR) format, which is a storage method that saves
	disk space. These files will not be usable unless they are restored to
	their native format.
	
	Both TAR and COMPRESS are standard utilities for concatenating files and
	compressing files for storage on UNIX systems. They also provide the
	facilities to restore files to their native format.
	
	Windows NT does not include either the TAR or Compress utilities; however,
	they are available through several sources including several different
	anonymous FTP sites on the Internet.
	
	TAR files can be processed using the PAX command that ships with Windows
	NT.
	
	NOTE: You cannot use PKUNZIP to uncompress a file compressed by the UNIX
	COMPRESS utility.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
