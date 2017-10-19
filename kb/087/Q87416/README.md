---
layout: page
title: "Q87416: PC DB: More MBG Files Than Local Postoffice Users"
permalink: /kb/087/Q87416/
---

## Q87416: PC DB: More MBG Files Than Local Postoffice Users

	Article: Q87416
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An MBG file is used to store all incoming or outgoing mail.
	
	There are two types of incoming mailbag files. All local postoffice users will
	have a unique mailbag that are of the form 0nnnnnnn.MBG. Mail destined for the
	postoffice that arrives from outside the postoffice is stored temporarily in a
	file called INQUEUE3.MBG.
	
	Mail that arrives in the INQUEUE3.MBG file will either be distributed to a local
	user mailbag or forwarded to another outgoing mailbag via the Mailer process.
	
	Outgoing mailbags are one of the following type: external postoffice, FFAPI
	postoffice, or gateway. The contents of these mailbags can be manipulated by
	using the Admin program's Queue function.
	
	The version 3.0 Mail postoffice contains a special mailbag, the SYSTEM.MBG
	mailbag. Mail addressed to network/postoffice/$system will be put here. It is
	currently used for directory synchronization (Dir-Sync) mail; however, in future
	versions may also be used for other system mail functions
	
	
	Additional query words: 2.10e 3.00 3.20 dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
