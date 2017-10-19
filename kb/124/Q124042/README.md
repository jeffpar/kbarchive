---
layout: page
title: "Q124042: PC Adm: Notice 40 During Config, DirSync, Requestor, Import"
permalink: /kb/124/Q124042/
---

## Q124042: PC Adm: Notice 40 During Config, DirSync, Requestor, Import

	Article: Q124042
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select Config, DirSync, Requestor, Import from versions 3.00, 3.00b,
	and 3.20 of Microsoft Mail for PC Networks Mail Administrator, the following
	error message appears:
	
	  Notice 40
	  Error in sending updated users and groups.
	  Press Enter to continue
	
	CAUSE
	=====
	
	This error message has several causes:
	
	1. Missing P1 subdirectory.
	
	2. Missing MAI subdirectory(s).
	
	3. Missing CONTROL.GLB.
	
	4. Corrupt CONTROL.GLB with file size less than 8 bytes.
	
	5. Missing INQUEUE.MBG.
	
	6. Missing INQUEUE.KEY.
	
	7. Corrupt INQUEUE.KEY with file size less than 560 bytes.
	
	RESOLUTION
	==========
	
	The resolutions to the possible causes of this error are as follows:
	
	1. Create a P1 subdirectory in the root of the database.
	
	2. Create missing MAI subdirectory(s) in appropriate locations.
	
	3. Restore the CONTROL.GLB from a recent backup. Both of the values stored in
	  the CONTROL.GLB will have to be incremented to suitably larger values.
	
	4. Same solution as #3.
	
	5. The INQUEUE.KEY and INQUEUE.MBG both need to be reset. As follows:
	
	  M:\MBG>type nul > inqueue.mbg
	  M:\KEY>debug inqueue.key
	  -f100,32f,0
	  -w
	  -q
	
	6. Same solution as #5.
	
	7. Same solution as #5.
	
	MORE INFORMATION
	================
	
	A Config, DirSync, Requestor, Import (CDRI) can only be performed on a
	requestor. Therefore, this error message will never be generated on the
	Directory Synchronization Server (DSS). The actual error message text may also
	appear as follows:
	
	  Notice 40
	  Error file not accessible
	  Check server connection
	  Press Enter to continue
	
	This message text is displayed if the user did not install the Administration
	utilities off of the Setup disk. The "Notice 40" still implies the same error as
	described above. However, the message text displayed is different due to the
	fact that the database did not have the appropriate Admin error message file in
	the database (ERRORADM.GLB).
	
	Additional query words: CDRI
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
