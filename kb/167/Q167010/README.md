---
layout: page
title: "Q167010: Access Violation in Cmd.exe When Processing Batch File Script"
permalink: /kb/167/Q167010/
---

## Q167010: Access Violation in Cmd.exe When Processing Batch File Script

	Article: Q167010
	Product(s): Microsoft Windows NT
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation may occur in Cmd.exe when processing a batch file script
	that contains a set statement that sets an environment variable surrounded by %
	(percent) characters.
	
	For example:
	
	  set %LOG%=c:\tmp\log.txt
	
	when LOG is not an existing environment variable.
	
	An access violation may also occur when processing a batch file in which a
	variable name is set that begins with an equal sign.
	
	CAUSE
	=====
	
	The error condition was not handled correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.00
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
