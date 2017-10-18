---
layout: page
title: "Q96841: Mac LDF: Local Mail File Compression"
permalink: kb/096/Q96841/
---

## Q96841: Mac LDF: Local Mail File Compression

	Article: Q96841
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.1 of Microsoft Mail for AppleTalk Networks includes a feature that
	allows users to store mail in local folders. Mail stored in local folders is
	actually written to a local mail file which resides in the System
	Folder:Preferences:MS Mail Local Folders on the local hard disk. A local mail
	file is created for each user who logs into Mail from a particular machine and
	is named after the Mail user.
	
	MORE INFORMATION
	================
	
	When this file is not in use by Mail to save or read messages, the local mail
	file is in a state of compression. In Mail 3.1, the compression occurs whenever
	there is empty space in the local mail file. Version 3.1 of the workstation
	software checks the file approximately every 15 seconds for space to compress.
	This can result in problems for PowerBook users, because the consistent disk
	access does not allow the machine to "sleep." This problem was addressed through
	a new compression routine introduced in Mail 3.1a.
	
	Mail 3.1a only performs the compression routine when the local mail file is
	accessed to save or read a message. Therefore, with Mail 3.1a, compression is
	not occurring as a background process and will allow PowerBooks to "sleep."
	
	
	Additional query words: 3.10 disk accessing
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
