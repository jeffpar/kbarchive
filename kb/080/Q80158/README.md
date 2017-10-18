---
layout: page
title: "Q80158: PC Adm: Storage Status in ADMIN.EXE Reports 0 Bytes Used"
permalink: kb/080/Q80158/
---

## Q80158: PC Adm: Storage Status in ADMIN.EXE Reports 0 Bytes Used

	Article: Q80158
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail Administrator program (ADMIN.EXE) may display improper storage status
	(0 mailbags, 0 files, and 0 bytes used) if the Admin mail logon does not have
	proper directory search rights. Under Novell, the Admin logon must have filescan
	rights in order to determine the file sizes of the .MAI or .MBG files and create
	a status on the files in those subdirectories.
	
	The status display will show 0 bytes when you choose Local-Admin, Storage,
	Status, Post Office or choose Local-Admin, Storage, Specific Users.
	
	The search rights for Novell can be viewed or changed by using the NetWare rights
	command.
	
	Additional query words: 2.10 3.00 admin novell
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
