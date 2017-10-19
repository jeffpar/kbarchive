---
layout: page
title: "Q112886: PC Adm: Err Msg: Notice 63 Error Creating Group in PO Address"
permalink: /kb/112/Q112886/
---

## Q112886: PC Adm: Err Msg: Notice 63 Error Creating Group in PO Address

	Article: Q112886
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a new postoffice group from within the Mail Administrator
	program (ADMIN.EXE), the following error may occur:
	
	  Notice 63 Error
	  Creating Group in PO Address List
	
	CAUSE
	=====
	
	The warning can be generated as a result of insufficient network rights or file
	corruption with the GROUP.GLB file.
	
	RESOLUTION
	==========
	
	To resolve, either ensure you have adequate rights to the database (in
	particular the GROUP.GLB file) or check for corruption by subtracting 4 from the
	GROUP.GLB file size and then dividing by 51. The final figure should be a whole
	number.
	
	If corruption exists, either restore from a backup or, if a backup is not
	available, reset the PO groups to the same state as per a brand new installation
	(for example, No Groups defined):
	
	Delete all files in the MEM subdirectory (if any exist). Install a dummy PO and
	copy the GROUP.GLB file (4 bytes) and ADMIN.GRP (8 bytes, also copy this to
	ADMINSHD.GRP). This will return the PO to the same state as per a new
	installation as far as groups are concerned.
	
	NOTE: The resetting of group files can be automated. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q129500 Automating the Resetting of Group Files using GIMPORT
	
	You can also use debug to reset the GROUP.GLB file and ADMIN.GRP files using
	debug.
	
	  debug group.glb
	  -f,100,103,0
	  -rcx
	  CX ????
	  :4
	  -w
	  writing 0004 bytes
	  -q
	
	  debug admin.grp
	  -f,100,107,0
	  -rcx
	  CX ????
	  :8
	  -w
	  writing 0008 bytes
	  -q
	
	Copy ADMIN.GRP to ADMINSHD.GRP.
	
	Additional query words: 2.1x 3.00 3.00a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	
