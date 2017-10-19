---
layout: page
title: "Q165244: NTbackup on Spanish NT 4.0 Will Not Use Command-line Switches"
permalink: /kb/165/Q165244/
---

## Q165244: NTbackup on Spanish NT 4.0 Will Not Use Command-line Switches

	Article: Q165244
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Ntbackup.exe from the Spanish-language version of Windows NT 4.0
	with command-line parameters specified in the Backup.hlp file, you will receive
	an "Invalid Parameter" (translated) error message.
	
	CAUSE
	=====
	
	In the Backup.hlp file, the operation parameters (BACKUP or EJECT) are shown in
	English. However, Ntbackup.exe was localized to accept the Spanish-language
	equivalent of the words BACKUP and EJECT.
	
	RESOLUTION
	==========
	
	Ntbackup.exe in Spanish Windows NT 4.0 Service Pack 2 or later corrects this
	problem. NTBACKUP now accepts the documented English-language command-line
	parameters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Spanish Windows NT version 4.0.
	This problem was corrected in the latest Windows NT 4.0 Spanish Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: spanish sp2
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
