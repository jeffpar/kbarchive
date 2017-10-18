---
layout: page
title: "Q99163: Mac Bkup: Retrospect Remote Backup May Corrupt Local Data File"
permalink: kb/099/Q99163/
---

## Q99163: Mac Bkup: Retrospect Remote Backup May Corrupt Local Data File

	Article: Q99163
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Retrospect Remote is backing up version 3.1 or later of a remote Microsoft
	Mail for AppleTalk Networks workstation, the backup may cause Mail to close the
	local data file. Mail may return the following error message:
	
	  Your local mail file has been closed due to an unknown error.
	
	Moreover, the data file may become corrupted due to this process.
	
	RESOLUTION
	==========
	
	To prevent this problem, do the following:
	
	1. Have the administrator configure Retrospect Remote not to back up the "MS
	  Mail Local Folders" folder.
	
	2. The user must be sure to sign out of Mail before the backup is run. To ensure
	  sign-out, the user should choose Close & Sign Out from the Mail Menu.
	
	MORE INFORMATION
	================
	
	The local mail data file can be considered similar to the server data file, in
	the sense that it is a file that is kept open to read from and write to while
	Mail is running.
	
	In the case of the local data file, the Mail workstation software manages when
	information is read, written, and deleted. If another process attempts to access
	the local data file at the same time Microsoft Mail is accessing the file, the
	workstation will respond with the above message.
	
	For details on configuring Retrospect Remote, call Dantz Development at (510)
	849-0293.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 3.10 3.1a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.1,3.1a
	
	=============================================================================
	
