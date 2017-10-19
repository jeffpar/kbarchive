---
layout: page
title: "Q114276: PC Adm: Notice 102 Failure to Generate...RDI System"
permalink: /kb/114/Q114276/
---

## Q114276: PC Adm: Notice 102 Failure to Generate...RDI System

	Article: Q114276
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Remote, Init-Disk option from the Microsoft Mail
	Administrator program (ADMIN.EXE), the following error message may appear:
	
	  Notice 102 Failure to generate part or all of RDI system
	
	CAUSE
	=====
	
	This message may be caused by an out-of-date RNETWORK.GLB file. If either your
	local user and group lists or your list of networks, postoffices, and associated
	user lists has recently changed, the RNETWORK.GLB file may be out of date.
	
	WORKAROUND
	==========
	
	You can re-create the RNETWORK.GLB file by selecting Remote, Regenerate from the
	Mail Administrator program.
	
	MORE INFORMATION
	================
	
	This error may also be generated if a corrupt floppy is used for the Init- Disk
	files. To ensure that you are using a clean floppy, format the disk before
	generating the Init-Disk.
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
