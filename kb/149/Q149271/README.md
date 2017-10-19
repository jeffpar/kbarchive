---
layout: page
title: "Q149271: PC DirSync: Explanation of DSSERVER.LOG Codes 167, 171 and 105"
permalink: /kb/149/Q149271/
---

## Q149271: PC DirSync: Explanation of DSSERVER.LOG Codes 167, 171 and 105

	Article: Q149271
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The codes 167, 171 and 105 that can be seen in the DSSERVER.LOG are
	informational and do not indicate that errors have occurred.
	
	CAUSE
	=====
	
	The status codes appear by design.
	
	MORE INFORMATION
	================
	
	You may see the following in the DSSERVER.LOG at the requestor and in the
	CENTRAL.LOG on the Directory Server:
	
	03/13/96 15:26:49 | 1  -1 Microsoft (R) Mail DirSync Requestor V3.5.12
	03/13/96 15:27:04 | 1 167 PCM,SNADS,X400,SMTP
	03/13/96 15:27:08 | 1 171
	03/13/96 15:32:37 | 1  -1 Microsoft (R) Mail DirSync Requestor V3.5.12
	03/13/96 15:32:50 | 1 105 0
	03/13/96 15:33:01 | 1  -1 Microsoft (R) Mail Import V3.5
	03/13/96 15:33:03 | 1  -1 Import is finished.
	03/13/96 15:33:09 | 1  -1 Microsoft (R) Mail GAL Rebuild Utility Version
	3.5
	03/13/96 15:34:15 | 1  -1 Number of entries in GAL:      136
	03/13/96 15:34:17 | 1  -1
	
	The codes 167, 171 and 105 are informational and do not indicate that errors have
	occurred. They correspond directly to entries in the DIRSYNC.LOG file:
	
	03/13/96 15:27:04 | Status       Server updates requested for address
	types: PCM,SNADS,X400,SMTP
	03/13/96 15:27:08 | Status       No requestor updates to send
	03/13/96 15:32:50 | Status       Requestor updates received: 0
	
	Additional query words: 3.20 3.50 dirsync dsserver
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
