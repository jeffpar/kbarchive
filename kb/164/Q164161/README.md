---
layout: page
title: "Q164161: NTBACKUP Fails to Back up Microsoft Exchange Server Data"
permalink: kb/164/Q164161/
---

## Q164161: NTBACKUP Fails to Back up Microsoft Exchange Server Data

	Article: Q164161
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NTBACKUP on a computer running Microsoft Exchange Server, NTBACKUP
	may fail and display the following error:
	
	  Microsoft Exchange service returned (the API call) "BackupRead[]" "additional
	  data".
	
	CAUSE
	=====
	
	NTBACKUP failed to retrieve a message from Edbbcli.dll for the "additional
	data."
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: NT Backup
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
