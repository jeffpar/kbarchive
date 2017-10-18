---
layout: page
title: "Q112256: CONN: MACGATE Err Msg: Exiting...with Status 66"
permalink: kb/112/Q112256/
---

## Q112256: CONN: MACGATE Err Msg: Exiting...with Status 66

	Article: Q112256
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MACGATE.EXE closes and the following error message appears in the MSGATE.LOG
	file on the workstation running MACGATE:
	
	  exiting on <date> <time> with status 66 (118)
	
	CAUSE
	=====
	
	For versions 3.0 and 3.2 of Microsoft Mail for PC Networks, MS-DOS workstation,
	you have two options for signing into Mail: use the mailbox name or the full
	name given to the account. This error occurs if the MSGATE.INI file contains the
	account's full name.
	
	RESOLUTION
	==========
	
	In the MSGATE.INI file, change the USER= line to the mailbox name of the Mail
	account and verify the password to the mailbox account.
	
	
	Additional query words: 1.00b MacGate 118
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100b
	Version           : :1.0b
	
	=============================================================================
	
