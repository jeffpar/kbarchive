---
layout: page
title: "Q121798: PC Win: Err Msg: You Do Not Have the Proper Access..."
permalink: kb/121/Q121798/
---

## Q121798: PC Win: Err Msg: You Do Not Have the Proper Access...

	Article: Q121798
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when you log on to a Mail postoffice:
	
	  You do not have the proper access to the post office. Please contact your
	  system administrator.
	
	CAUSE
	=====
	
	This error can occur for a variety of reasons, most of which have to do with
	network functionality and network access rights.
	
	RESOLUTION
	==========
	
	If the postoffice is a new postoffice, make sure the rights on the postoffice
	database are correct. Check the rights in two places: share permissions and file
	permissions. Chapter 2 of the Mail 3.2 "Administrator's Guide" describes and
	explains specific rights for LAN Manager and Novell network operating system
	file and share rights.
	
	If the postoffice is an existing postoffice, you should double check the rights.
	
	To determine the reason for the error message
	---------------------------------------------
	
	1. Double check network rights on both shares and directories.
	
	2. Check for locked open files--in particular, check the Mail message files
	  (MMFs).
	
	3. Try copying files to and from the client to the Mail database
	  subdirectory/share on the postoffice. If a file copy works, there may be a
	  problem with the individual MMF, or the MMF or other files may be locked
	  open.
	
	4. If the problem is with one client and the MMFs are on the server, try moving
	  the MMF locally to see if this corrects the problem. If moving the MMF
	  locally does correct the problem, check the rights for that user.
	
	5. If the network operating system is Novell, check the postoffice database for
	  ownerless files--specifically, check the MMF, KEY, and MBG subdirectories.
	  Mail for Windows users must have RWCEM rights on these subdirectories;
	  version 2.1 of Mail for Windows users need RWCEMF rights.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
