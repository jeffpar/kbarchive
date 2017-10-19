---
layout: page
title: "Q100828: PC Ext: Normal Purge on P1 Subdirectory for NetWare"
permalink: /kb/100/Q100828/
---

## Q100828: PC Ext: Normal Purge on P1 Subdirectory for NetWare

	Article: Q100828
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail MS-DOS Message Transfer Agent (MTA) and version
	3.2 of Microsoft Mail Multitasking MTA employ a new file- locking mechanism to
	increase the robustness of mail transmission.
	
	This file locking mechanism creates and deletes temporary files when the MTA
	polls the postoffices for mail to be delivered. The number of files created and
	deleted depends on how often the MTA polls the postoffice and on the number of
	MTAs servicing the postoffice. When running Mail with NetWare 3.x and later, the
	number of deleted files and the frequency at which they are deleted can affect
	disk storage on the file server. Because of this, Microsoft recommends that the
	P1 subdirectory for each postoffice serviced by an MTA be flagged as Normal
	Purge.
	
	To flag the P1 subdirectory as Normal Purge, Microsoft recommends that you
	perform this procedure on each file server where a postoffice is installed and
	is being serviced by a version 3.2 MTA.
	
	1. Log in to the file server as Supervisor, Supervisor Equivalent, or a user who
	  has Access control and Modify rights to the P1 subdirectory.
	
	2. Change directories to the subdirectory where the mail database resides.
	
	3. Type the following to set the P1 directory for Normal Purge:
	
	  " flagdir P1 NP" (without the quotation marks)
	
	Deleted files in the P1 subdirectory will immediately purge from the file system
	and the disk space used by these files will be available.
	
	Additional query words: 3.20 0LK extension directory full novell
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
