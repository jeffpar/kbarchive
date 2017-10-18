---
layout: page
title: "Q135930: PC Adm: Err Msg: Failure to Update Part or All of RDI System"
permalink: kb/135/Q135930/
---

## Q135930: PC Adm: Err Msg: Failure to Update Part or All of RDI System

	Article: Q135930
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a Microsoft Mail Remote user's data disk, after regenerating the
	default views, you may get the following error message:
	
	  Failure to regenerate part or all of RDI system
	
	CAUSE
	=====
	
	The data disk was not in the disk drive to be updated; instead, a blank or
	incorrect disk was inserted.
	
	
	RESOLUTION
	==========
	
	Before you try to update a user's data disk, make sure the original data disk is
	available. If the original data disk is not available, run regenerate and create
	a new init-disk for the user.
	
	MORE INFORMATION
	================
	
	The ADMIN.EXE Admin, Remote, Update-Disk option requires a data disk to be in
	the disk drive to update. If a data disk is not available, or the Admin does not
	have access to the disk, a new disk will need to be created.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
