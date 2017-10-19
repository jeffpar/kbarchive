---
layout: page
title: "Q103747: Err Msg: &#92;&#92;&lt;Server&gt;&#92;&lt;Share&gt; Is an Invalid Port Name"
permalink: /kb/103/Q103747/
---

## Q103747: Err Msg: &#92;&#92;&lt;Server&gt;&#92;&lt;Share&gt; Is an Invalid Port Name

	Article: Q103747
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you log on as a user without the necessary privileges to create a printer on
	a particular share, instead of getting an "access denied" message, you receive a
	message that says the port name is invalid.
	
	CAUSE
	=====
	
	This behavior may be caused by an incorrectly mapped error message. The correct
	message should be "access denied."
	
	RESOLUTION
	==========
	
	Log on to an account with the proper privileges to create a printer from the
	given share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in Windows NT 3.5
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
