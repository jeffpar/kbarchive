---
layout: page
title: "Q130120: Event Error 2000 Logged Repeatedly Due to Illegal Command"
permalink: /kb/130/Q130120/
---

## Q130120: Event Error 2000 Logged Repeatedly Due to Illegal Command

	Article: Q130120
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT file servers may log error 2000 in the event log with the following
	data:
	
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c000000d 00000000 00000000
	  0020: 00000000 00000000 00000bcd
	
	CAUSE
	=====
	
	If a user application request is submitted illegally by a client application,
	the server logs the failure. The server is failing a
	SrvQueryBasicAndStandardInformation() call, with an "Invalid Parameter" status.
	The following commands result in the same error:
	
	  dir \\servername\ipc$
	  dir \\servername\pipe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	SRV.SYS has been modified so that these messages are no longer logged and the
	smbs are discarded resulting in an application error.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
