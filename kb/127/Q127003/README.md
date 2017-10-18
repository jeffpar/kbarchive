---
layout: page
title: "Q127003: PC Ext: Mailbox Name Truncated in CALLIN.LOG"
permalink: kb/127/Q127003/
---

## Q127003: PC Ext: Mailbox Name Truncated in CALLIN.LOG

	Article: Q127003
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a remote mail user calls in, the External program records only the first
	nine characters of the mailbox ID in the Connection field of the CALLIN.LOG. If
	a company uses a ten character mailbox naming convention, and the first nine
	characters are not unique, it makes it difficult for the Administrator to
	identify the remote user who called in.
	
	RESOLUTION
	==========
	
	Do not use ten character mailbox names. If you must use ten character mailbox
	names and must identify the remote user uniquely, enable logging on External,
	and check the SESSION.LOG. The SESSION.LOG contains all ten characters of the
	mailbox name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in EXTERNAL.EXE version 3.2.16,
	included with version 3.2 of Mail for PC Networks. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
