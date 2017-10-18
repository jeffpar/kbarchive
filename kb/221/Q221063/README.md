---
layout: page
title: "Q221063: Network Drives Created with Substitute Command Cannot Copy"
permalink: kb/221/Q221063/
---

## Q221063: Network Drives Created with Substitute Command Cannot Copy

	Article: Q221063
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a mapping is made to a network drive using the Substitute command, clients
	might not be able to copy files from that drive mapping to My Briefcase. The
	copy operation fails, but there is no error message.
	
	
	CAUSE
	=====
	
	Symptoms only occur when the Substitute command is used to map a network
	resource.
	
	RESOLUTION
	==========
	
	To work around this problem, move or copy the file to a local drive first, and
	then copy the file to My Briefcase.
	
	Do not use the Substitute command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	MORE INFORMATION
	================
	
	Dr. Watson errors have also been observed when using My Briefcase in conjunction
	with substitute drives.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
