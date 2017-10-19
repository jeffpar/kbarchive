---
layout: page
title: "Q112904: PC Adm: Err Msg: Notice 53 Error Creating User Address"
permalink: /kb/112/Q112904/
---

## Q112904: PC Adm: Err Msg: Notice 53 Error Creating User Address

	Article: Q112904
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add users to or modify a personal address list from the MS-DOS Mail
	client, the following error may occur:
	
	  Notice 53:
	  Error Creating User Address in Personal Address List
	
	CAUSE
	=====
	
	This error can be caused by insufficient network rights, a corrupted or missing
	address list file (<xxxxxxx>.NME file, where <xxxxxxxx> is the
	user's hexadecimal ID), or a missing .NME file.
	
	The error can also be caused by an ownerless .NME file for an user (on Novell) or
	an ownerless .NME directory (on Novell). The client is looking for the user's
	HEXID.NME and cannot get the information if the directory is ownerless.
	
	RESOLUTION
	==========
	
	To resolve this problem, ensure that the user has sufficient network rights to
	the database. If the file is missing or corrupted and no backup exists, create a
	test user. Copy the test user's .NME file to the .NME file of the user
	experiencing the problem. Add names as required.
	
	A second option (see the note below before you attempt this resolution) is to
	copy the ADMIN.NME file to <xxxxxxx>.NME. This makes the complete
	postoffice address list (POL) the user's personal address list (PAL), and any
	unnecessary names can be deleted.
	
	NOTE: If the ADMIN.NME file has a user "Foreign Admin" who is the administrator
	of another postoffice (added by using the Address, Create command in the Mail
	Administrator program) and a user deletes "Foreign Admin" from the PAL, the
	MS-DOS Mail client goes to the NETPO.GLB file and marks the "Foreign Admin"
	record there as deleted. The name remains in the PAL, however, and if the user
	tries to send mail to "Foreign Admin" from the PAL, the following error
	results:
	
	  Address is no longer valid
	
	If neither of these methods works, you may have to reset the NETPO.GLB file by
	using the MS-DOS DEBUG program with the following commands:
	
	(NOTE: Make a backup copy of the NETPO.GLB file before you proceed with the steps
	below.)
	
	  debug netpo.glb
	  -f100,103,0
	  -w
	  -q
	
	This will reset the first 4 bytes of the file.
	
	Additional query words: 2.10x 3.00 3.00a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
