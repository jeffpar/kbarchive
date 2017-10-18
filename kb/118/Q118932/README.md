---
layout: page
title: "Q118932: PC Adm: Err Msg: Notice 2 Error Updating MASTER.GLB"
permalink: kb/118/Q118932/
---

## Q118932: PC Adm: Err Msg: Notice 2 Error Updating MASTER.GLB

	Article: Q118932
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Mail administrator tries to change the network and/or
	postoffice name by choosing Config, Password from the Mail Administrator program
	(ADMIN.EXE), the following error may be displayed:
	
	  Error updating MASTER.GLB
	
	CAUSE
	=====
	
	This error occurs if the MASTER.GLB file in the GLB subdirectory of the Mail
	database is marked read-only or is locked open.
	
	RESOLUTION
	==========
	
	Check the attributes of the MASTER.GLB file in the GLB subdirectory, and remove
	the read-only attribute if it has been set. Use the MS-DOS ATTRIB command to set
	the attribute to read-write, as follows:
	
	  attrib -r master.glb
	
	If the file is locked open, close the file. On a Novell server, you can determine
	the status of locked files by starting the MONITOR program. Choose the file
	open/lock activity, and choose volume/dir/subdir/master.glb. This will yield a
	connection number and from connection activity, you can find out who has the
	file open.
	
	On a LAN Manager server, you can check for locked files by running the NET ADMIN
	command and choosing Opened Files from the Status menu.
	
	For other file servers, consult the administrator's guide for that server to
	determine if a file is locked open and by whom.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
