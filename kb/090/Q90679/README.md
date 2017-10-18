---
layout: page
title: "Q90679: PC Gen: Differences Among Mail Versions 3.0, 3.0a, and 3.0b"
permalink: kb/090/Q90679/
---

## Q90679: PC Gen: Differences Among Mail Versions 3.0, 3.0a, and 3.0b

	Article: Q90679
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.0 of Microsoft Mail for PC Networks was released on July 15, 1992.
	Version 3.0a was released on September 9, 1992, and version 3.0b was released on
	October 7, 1992. The following is a description of the changes made in versions
	3.0a and 3.0b.
	
	MORE INFORMATION
	================
	
	Mail 3.0a
	---------
	
	- Modified EXTERNAL.EXE so that it correctly transfers mail to postoffices when
	  using dynamic drives.
	
	- Modified IMPORT.EXE so that it correctly imports SNADS and PROFS addresses
	  into the postoffice address list when the -A parameter is used.
	
	Mail 3.0b
	---------
	
	MS-DOS Client:
	
	- Modified the MS-DOS client to work correctly with the MS-DOS 5.0 Task
	  Swapper.
	
	- Resolved some international issues.
	
	Windows/PM Client:
	
	- Added the ability to Import/Export folders. This was done through the use of
	  a custom command.
	
	- Added auto detection/correction of a damaged mail message file (MMF).
	
	- Added the ability to read, write, and delete messages in group folders.
	
	- Resolved problems with displaying the template information of gateway users.
	
	- SHARE is no longer required when the MMF is stored on the server. If the MMF
	  is local, then SHARE is still required.
	
	- Resolved some problems with SETUP.EXE.
	
	- Resolved problems with Windows hanging when trying to exit Windows. If
	  Windows was closed with Mail still loaded, the system could hang.
	
	- Resolved the problem with not being able to access an attachment in a message
	  that comes from a shared folder, when the originator is using the Macintosh
	  client.
	
	Additional query words: 3.00 3.00a 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
