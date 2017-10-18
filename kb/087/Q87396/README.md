---
layout: page
title: "Q87396: PC DB: Which Programs Access the GROUP.GLB File"
permalink: kb/087/Q87396/
---

## Q87396: PC DB: Which Programs Access the GROUP.GLB File

	Article: Q87396
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Administrator (ADMIN.EXE) and External (EXTERNAL.EXE)
	programs require the GROUP.GLB file to determine the members of a group.
	
	The Microsoft Mail clients do not use the GROUP.GLB file. The ADMIN.NME and
	ADMIN.GRP files are used for group resolution.
	
	MORE INFORMATION
	================
	
	NOTE: The External program does not use the GROUP.GLB file in the conventional
	way to determine group members.
	
	There is also a limitation to the group members an external postoffice user can
	send mail to. When a postoffice group is created by the Admin program, a MEM
	file is generated solely for the use of the External program.
	
	This MEM file contains the MBG filenames of only the group members that are local
	members of the postoffice. There are no external postoffice or gateway address
	references in the MEM file. The result is that when a piece of mail is sent from
	an external postoffice addressed to that group, only the local members of the
	group will receive the message.
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
