---
layout: page
title: "Q125917: PC DirSync: Err Msg: Error 156 Invalid Dirsync Password"
permalink: /kb/125/Q125917/
---

## Q125917: PC DirSync: Err Msg: Error 156 Invalid Dirsync Password

	Article: Q125917
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T2 phase of directory synchronization (Dir-Sync), when SRVMAIN -r
	runs, the error
	
	  Error 156 Invalid Dirsync password from PCM:Network/Postoffice
	
	may be displayed even though the password for that postoffice is correct. If you
	change the Dir-Sync requester password for this postoffice to NULL using the
	ADMIN.EXE program, it does not correct the problem.
	
	In ADMIN.EXE, changing the requester password to NULL through Config, Dir-Sync,
	Server, Requester, Modify updates the SRVCONF.GLB on the Dir-Sync server. This
	is supposed to bypass the password check.
	
	CAUSE
	=====
	
	The error occurs because the password received from the requestor is compared
	incorrectly against another postoffice (PO) record in SRVCONF.GLB under two
	conditions.
	
	1. When the postoffice name in SRVCONF.GLB is similar to or a part of the one
	  from the requestor.
	
	2. When the order of registration in the SRVCONF.GLB is such that the record for
	  the PO with the shorter name is after the record for the postoffice that is
	  sending the T1 message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SRVMAIN.EXE version 3.2a,
	included with Microsoft Mail for PC Networks. This problem was corrected in
	SRVMAIN.EXE version 3.2.12.
	
	
	Additional query words: 3.20 fatal
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
