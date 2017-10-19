---
layout: page
title: "Q142372: Windows NT Support For Long File Names Under CDFS File System"
permalink: /kb/142/Q142372/
---

## Q142372: Windows NT Support For Long File Names Under CDFS File System

	Article: Q142372
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT supports the ISO 9660 level-two naming convention for long file names
	on a CD-ROM CDFS file system.
	
	MORE INFORMATION
	================
	
	You may want to use long file names when creating a Window NT CD-ROM CDFS file
	system on your CD-ROMs. Windows NT supports long file names as listed in the ISO
	9660 level two standards.
	
	When creating a CD-ROM to be used under Windows NT, the following standards must
	be followed:
	
	- All directories and file names must be less than 32 characters.
	
	- All directories and file names must be in capital letters.
	
	- The directory tree cannot exceed 8 levels from the root.
	
	- File extensions are not mandatory.
	
	Joliet and ISO9660
	
	Joliet is an extension of the ISO9660 standard, developed by Microsoft for
	Windows 95, to allow CDs to be recorded using long filenames. For files recorded
	to CD, Joliet allows you to use filenames up to 64 characters in length,
	including spaces. Joliet also records the associated DOS-standard name for each
	file so that the disc may be read on DOS systems or earlier version of Windows.
	
	Versions of Windows NT up to 3.51 build 1057 do not read Joliet discs. Windows NT
	4.0 can read Joliet discs by design.
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q123067
	  TITLE : CDFS Does Not Support Lowercase Filenames
	
	  ARTICLE-ID: Q93604
	  TITLE : ISO 9660 Support for CD-ROM
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
