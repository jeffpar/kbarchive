---
layout: page
title: "Q112905: PC Adm: Err Msg: Notice 36 Error Reading Groups"
permalink: /kb/112/Q112905/
---

## Q112905: PC Adm: Err Msg: Notice 36 Error Reading Groups

	Article: Q112905
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1x, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, when
	you create or modify postoffice groups, the following error may occur:
	
	  Notice 36
	  Error Reading Groups
	
	CAUSE
	=====
	
	This error can be caused by a missing or corrupt GROUP.GLB file.
	
	The GROUP.GLB file contains a series of records; each contains a delete flag, a
	group name, and a pointer into the ADMIN.GRP file. This record in the ADMIN.GRP
	file contains the user's name and a pointer to the next member's record of this
	group. Basically, a group's members form a chain within the ADMIN.GRP file.
	
	RESOLUTION
	==========
	
	NOTE: To test for corruption in the GROUP.GLB file, subtract 4 from the file
	size and divide by 51; it should divide out to a whole number.
	
	To resolve the problem either restore from backup, or if a backup is not
	available, you need to reset the PO groups to the same state as a new
	installation of a postoffice:
	
	1. Delete all files in the MEM subdirectory (if any exist).
	
	2. Install a dummy PO.
	
	3. Copy the GROUP.GLB file (4 bytes) to GRPMEM.GLB. Copy ADMIN.GRP (8 bytes) to
	  ADMINSHD.GRP.
	
	  This will return the PO to the same state as a new installation, for example
	  no installed groups.
	
	  You can also use debug to reset the GROUP.GLB file and ADMIN.GRP files. If you
	  want to use this second method, see the example below:
	
	  debug group.glb
	  -f,100,103,0
	  -rcx
	  CX ????
	  :4
	  -w
	  writing 0004 bytes
	  -q
	
	4. To maintain the consistency of the Mail data files, you must reset the
	  GROUP.GLB file in the Microsoft Mail postoffice GLB subdirectory:
	
	  a. Run the MS-DOS DEBUG command as follows: debug group.glb
	
	  b. At the DEBUG hyphen prompt, type the following and press ENTER:
	
	  " f,100,103,00" (without the quotation marks)
	
	  c. At the DEBUG hyphen prompt, type the following and press ENTER:
	
	  " rcx" (without the quotation marks)
	
	  d. The following lines are displayed:
	
	  CX 0000
	     :
	
	     After the colon, type the following and press ENTER:
	
	  " 4" (without the quotation marks)
	
	  e. At the hyphen prompt, type the following and press ENTER:
	
	  " w" (without the quotation marks)
	
	     You will now see:
	
	  writing 00004 bytes
	
	  f. At the hyphen prompt, type the following and press ENTER:
	
	  " q" (without the quotation marks)
	
	     This returns you to the MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	The resetting of group files can be automated. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q129500 PC Adm: Automating the Resetting of Group Files with GIMPORT
	
	Additional query words: 2.10x 3.00 3.00a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
