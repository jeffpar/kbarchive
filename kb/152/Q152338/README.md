---
layout: page
title: "Q152338: PCMMac Error -39 in File Cpackage.cpp"
permalink: /kb/152/Q152338/
---

## Q152338: PCMMac Error -39 in File Cpackage.cpp

	Article: Q152338
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When you send a package to Macintosh clients, the package arrives on the client
	in the Package Command Manager window, but when you run it, the following error
	message appears:
	
	  Error -39 in File Cpackage.cpp, Line 570 eofErr.
	  End of File
	  Command Failed to Execute
	
	  Error -39 in FileCTable.cpp, Line 198 eofErr.
	  End of File.
	
	MORE INFORMATION
	================
	
	This error occurs if the source directory defined when the package was created
	was not on a Windows NT file system (NTFS) partition.
	
	When files are copied from an NTFS volume to an MS-DOS (FAT) volume, Windows NT
	changes the file format, even though the long file names are retained. When the
	package is copied back to an NTFS volume package share and distributed to the
	Macintosh clients, the Macintosh file format is lost, and the Macintosh cannot
	recognize the package.
	
	RESOLUTION
	==========
	
	The source directory for Macintosh clients must be located on an NTFS partition.
	
	Additional query words: 1.00 1.10 prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
