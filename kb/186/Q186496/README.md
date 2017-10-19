---
layout: page
title: "Q186496: Securing a Common Folder"
permalink: /kb/186/Q186496/
---

## Q186496: Securing a Common Folder

	Article: Q186496
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some applications do not have the flexibility for users to specify their home
	directory or some other private directory for saving files. Also, an
	administrator may want to use a common directory for related files. In either of
	these cases, the administrator may want to secure the files in the common
	directory. For example, if you want to secure a common folder so that only the
	user who created a file or administrators can view the file, you can set the
	NTFS permissions on the common folder to:
	
	  Administrators   Full Control
	  Creator/Owner    Full Control
	
	Any files that are created in or copied into the common folder will inherit the
	default folder permissions, so that only admininstrators and the owner of a file
	can access that file.
	
	In a Terminal Server environment, if only Terminal Server Clients will access
	this common folder, only NTFS permissions need to be set. If the folder is
	shared for network access, then the share permissions can be set to:
	
	  Everyone   Full Control
	
	When both share-level permissions and NTFS permissions are specified for a
	folder, whichever set of permissions is most restrictive will apply. In this
	case, the NTFS permissions are more restrictive, and a file could only be
	accessed by administrators and the user who created and owns the file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
