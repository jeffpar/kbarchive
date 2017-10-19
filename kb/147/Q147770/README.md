---
layout: page
title: "Q147770: Administrator Of Another Windows NT Has Access to NTFS Files"
permalink: /kb/147/Q147770/
---

## Q147770: Administrator Of Another Windows NT Has Access to NTFS Files

	Article: Q147770
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	The NTFS file system stores permissions for files and directories as
	attributes in the file system. Any installation of Windows NT on the local
	computer has access to these files. Although each copy of Windows NT that
	is running recognizes the permissions assigned in the file system, any user
	who is a member of the local Administrators group in a Windows NT
	installation can take ownership of files and access the data.
	
	Although the NTFS file system offers more security features than FAT, a new
	installation of Windows NT can be used to boot the system, if the primary
	boot partition is NTFS. This allows the members of the Administrators group
	full rights to all files in the NTFS partition.
	
	Additional query words: prodnt sys
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
