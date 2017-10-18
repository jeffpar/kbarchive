---
layout: page
title: "Q124804: VOLINFO Utility from Novell Server Reports Incorrect Values"
permalink: kb/124/Q124804/
---

## Q124804: VOLINFO Utility from Novell Server Reports Incorrect Values

	Article: Q124804
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the VOLINFO utility from a Novell NetWare 3.12 server to view
	information on a Windows 95 system configured with file and printer sharing for
	NetWare Networks, the Free Directories entry is incorrect. VOLINFO states that
	32,767 directory entries are allocated to the volume. It also states that the
	number of free directory entries is 32,767.
	
	MORE INFORMATION
	================
	
	Available Directory Entries and Total Directory Entries are fields that have
	meaning on actual Novell NetWare servers (the space for directory names is
	preallocated when the volume is formatted), but they do not have meaning on
	Windows 95 (VFAT or CDFS) volumes. To provide compatibility with applications
	that check to see if space is available to create new directories, Windows 95
	returns the maximum allowable value for these fields, 32,767.
	
	Additional query words: 3rdparty
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
